import React, { useEffect, useState } from 'react';

const CrudDemo = () => {


    const API_URL = "http://localhost:8080/api/v1/person";
    const [person, setPerson] = useState([]);
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {

        getAllData();



    }, [loadData]);



    return (
        <div>

        </div>
    );
};

export default CrudDemo;





