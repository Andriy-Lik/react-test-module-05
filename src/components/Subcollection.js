const { useParams } = require('react-router-dom');

const Subcollection = () => {
    const { colId } = useParams();
    return <div>Subcollection: {colId}</div>
};

export default Subcollection;