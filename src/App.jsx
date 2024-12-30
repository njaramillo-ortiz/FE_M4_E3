import { createContext, useEffect, useState } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { AppointmentForm } from './components/AppointmentForm'
import { Container } from 'semantic-ui-react'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router'
import { Home } from './routes/Home'
import { Doctors } from './routes/Doctors'

export const UserContext = createContext();

function App() 
{
    const [user, setUser] = useState({});

    useEffect(() => 
    {
        setUser({
            firstName: "Nicolás",
            lastName: "Jaramillo"
        });
    }, []);

    return (
        <UserContext.Provider value = {user}>
            <Navbar />
            <Container>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='doctors'
                        element={<Doctors />} 
                    />
                    <Route
                        path='reserve'
                        element={<AppointmentForm />} 
                    />
                </Routes>
            </Container>
        </UserContext.Provider>
    )
}

export default App
