import React, { useEffect, useState } from "react";
import { ServicesList } from "../components/ServicesList";
import { Segment } from "semantic-ui-react";

export function Home()
{
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getServices()
    }, [])

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
        <>
            <Segment loading={loading}>
                <h1>Listado de Servicios</h1>
                <ServicesList services={services} />
            </Segment>
        </>
    );
}