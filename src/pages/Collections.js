// import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Collections = () => {
    // useEffect(() => {
    //     HTTP запрос, если нужно
    // }, [])

    return (
    <div>
        {['col-1', 'col-2', 'col-3', 'col-4', 'col-5'].map(col => {
            return (
                <Link key={col} to={`${col}`}>
                    {col}
                </Link>
            );
        })}
    </div>);
};

export default Collections;