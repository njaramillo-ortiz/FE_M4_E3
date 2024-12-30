import { useContext } from "react";
import { NavLink } from "react-router";
import { Menu, MenuItem, Segment } from "semantic-ui-react";
import { UserContext } from "../App";

export function Navbar(props)
{
    const user = useContext(UserContext);

    return(
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%"
            }}
        >
            <Segment
                inverted
                attached="top"
            >
                <Menu
                    inverted
                    secondary
                >
                    <MenuItem>
                        <NavLink
                            to='/'
                        >
                            Hospital de las Estrellas
                        </NavLink>
                    </MenuItem>

                    <MenuItem>
                        <NavLink
                            to='/doctors'
                        >
                            Doctores
                        </NavLink>
                    </MenuItem>

                    <MenuItem>
                        <NavLink
                            to='/reserve'
                        >
                            Reservar
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        position="right"
                    >
                        {user.firstName+" "+user.lastName}
                    </MenuItem>
                </Menu>
            </Segment>
        </div>
    );
}