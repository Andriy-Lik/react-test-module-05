import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <NavLink to="/">Домашня</NavLink>
                    </li>
                    <li>
                        <NavLink to="/colections">Колекція</NavLink>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            
        </div>
    );
};