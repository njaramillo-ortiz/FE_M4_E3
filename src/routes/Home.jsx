import React, { useEffect, useRef, useState } from "react";
import { ServicesList } from "../components/ServicesList";
import { Image, Segment } from "semantic-ui-react";

export function Home()
{
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    const welcomeRef = useRef(null);
    const servicesRef = useRef(null);

    useEffect(() => {
        getServices()
    }, [])

    function showServices()
    {
        servicesRef.current.focus();
    }

    async function getServices()
    {
        setLoading(true);
        await fetch('/src/data/services.json')
            .then(result => result.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }

    return(
        <div style ={{top: 200, position: 'relative'}}>
            <Segment>
                <div ref={welcomeRef}>
                    <h1>¡Bienvenidos al Hospital de las Estrellas!</h1>
                    <Image src="/src/images/doctors.jpg" />
                    <h4>
                        Nuestro principal objetivo es atender a nuestros pacientes de la mejor forma posible, con rostros conocidos para todos. 
                    </h4>
                    <h4>
                        Creemos que la fama es garantía de calidad, y por lo mismo buscamos proveer esta experiencia a los pacientes a un precio prohibitivo.
                    </h4>
                    <button onClick={() => showServices()}>
                        Ver Servicios
                    </button>
                </div>
            </Segment>

            <Segment loading={loading}>
                <div ref={servicesRef} tabIndex={-1}>
                    <h1>Nuestros Servicios</h1>
                    <ServicesList services={services} />
                </div>
            </Segment>
        </div>
    );
}