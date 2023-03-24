// import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Collections = () => {
    const [cols, ] = useState(['col-1', 'col-2', 'col-3', 'col-4', 'col-5',]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const colId = searchParams.get('colId') ?? '';
    const visibleCols = cols.filter(col => col.includes(colId));
    const updateQueryString = e => {
        if (e.target.value === '') {
            return setSearchParams({});
        }
        setSearchParams({ colId: e.target.value });
    };

    return (
    <div>
        <input type="text" value={colId} onChange={updateQueryString} />
        <ul>
        {visibleCols.map(col => {
            return (
                <li key={col}>
                    <Link to={`${col}`} state={{ from: location }} >{col}</Link>
                </li>
            );
        })}
        </ul>
    </div>);
};

export default Collections;