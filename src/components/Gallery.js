const { useParams } = require('react-router-dom');

export const Gallery = () => {
    const { colId } = useParams();
    return <div>Image gallery: {colId}</div>;
};