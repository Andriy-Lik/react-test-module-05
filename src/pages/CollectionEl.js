import { Link, Outlet, useParams } from "react-router-dom";

const CollectionEl = () => {
    const { colId } = useParams();
    // useEffect(() => {
    //     HTTP запрос, если нужно
    // }, [])
    return (
        <>
            <h1>CollectionEl: {colId}</h1>
            <ul>
                <li>
                    <Link to="subcollection">Підколекції</Link>
                </li>
                <li>
                    <Link to="gallery">Галерея</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default CollectionEl;