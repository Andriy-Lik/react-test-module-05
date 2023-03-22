const { useParams } = require('react-router-dom');

export const Subcollection = () => {
    const { colId } = useParams();
    return <div>Subcollection: {colId}</div>
};