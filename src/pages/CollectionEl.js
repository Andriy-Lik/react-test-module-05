import { Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

const CollectionEl = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/cols');
    const { colId } = useParams();
    console.log(location);
    console.log(backLinkLocationRef);

    return (
        <>
            <h1>CollectionEl: {colId}</h1>
            <Link to={backLinkLocationRef.current} >Назад до сторінки колекції</Link>
            <ul>
                <li>
                    <Link to="subcollection">Підколекції</Link>
                </li>
                <li>
                    <Link to="gallery">Галерея</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading subPage...</div>} >
                <Outlet />
            </Suspense>
        </>
    );
};

export default CollectionEl;