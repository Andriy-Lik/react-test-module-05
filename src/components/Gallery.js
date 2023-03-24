const { useParams } = require('react-router-dom');

const Gallery = () => {
    const { colId } = useParams();
    return <div>Image gallery: {colId}</div>;
};

export default Gallery;