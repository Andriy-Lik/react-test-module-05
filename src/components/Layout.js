import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';

const Styledlink = styled(NavLink)`
color: #212121;

&.active {
    color: orangered;
}
`;

export const Layout = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Styledlink to="/">Домашня</Styledlink>
                    </li>
                    <li>
                        <Styledlink to="/colections">Колекція</Styledlink>
                    </li>
                </ul>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>} >
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};