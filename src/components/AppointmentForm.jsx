import { useEffect, useRef, useState } from "react";
import { Form, FormButton, FormField, FormSelect, Segment } from "semantic-ui-react";
import PortalModal from "./PortalModal";
import { TextInput } from "./TextInput";
import { DropdownInput } from "./DropdownInput";

export function AppointmentForm(props)
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [doctor, setDoctor] = useState("");
    const [doctors, setDoctors] = useState([]);

    const [area, setArea] = useState("");
    const [areas, setAreas] = useState([]);

    const [loading, setLoading] = useState(false);

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        firstNameRef.current.focus();
        getServices();
    }, [])

    async function getDoctors(area)
    {
        setLoading(true);
        setDoctor("");
        await fetch('/src/data/doctors.json')
            .then(result => result.json())
            .then(data => {
                if(area == null || area == "")
                {
                    setDoctors(data)
                }
                else
                {
                    let filteredData = [];
                    data.forEach(d =>
                    {
                        if(d.area === area)
                        {
                            filteredData.push(d);
                        }
                    })
                    setDoctors(filteredData)
                }
                setLoading(false);
            });
    }

    async function getServices()
    {
        setLoading(true);
        await fetch('/src/data/services.json')
            .then(result => result.json())
            .then(data => {
                setAreas(data);
                setLoading(false);
            })
    }

    function areaSelected(area)
    {
        setArea(area);
        getDoctors(area);
    }

    return(
        <Segment loading={loading}>
            <PortalModal open = {modalOpen} onConfirm={ReserveConfirmed} firstName={firstName} lastName={lastName} doctor={doctor} />

            <Form>
                <h1>Formulario de Reserva</h1>
                <TextInput label="Nombre" placeholder="Juanito" onChange={setFirstName} useRef={firstNameRef}/>
                <TextInput label="Apellido" placeholder="Perez" onChange={setLastName} useRef={lastNameRef} />
                <DropdownInput label="Especialidad" placeholder="Kinesiología" options={areas} onChange={areaSelected} />
                <DropdownInput label="Doctor" placeholder="Doctor..." options={doctors} onChange={setDoctor} />
                <FormButton onClick={() => ConfirmReserve()}>Reservar Hora</FormButton>
            </Form>
        </Segment>
    );

    function ConfirmReserve()
    {
        setModalOpen(true);
    }

    function ReserveConfirmed()
    {
        setModalOpen(false);
        firstNameRef.current.value = null;
        lastNameRef.current.value = null;
    }
}