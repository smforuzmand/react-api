import React, { useEffect, useState } from 'react';

const CrudDemo = () => {


    const API_URL = "http://localhost:8080/api/v1/person";
    const [person, setPersons] = useState([]);
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {

        getAllData();



    }, [loadData]);

    const getAllData = async () => {

        await axios.get(API_URL).then(
            (response) => {

                if (response.status === 200) {
                    console.log(`API :(All) request was accomplished`);

                    setPersons(response.data);
                    console.table(response.data)
                } else {
                    console.error(`API: Request was executed with status code ${response.status}`)
                }

            }


        ).catch((error) => {
            console.warn(`API: Request Encounter an Error ${error}`)
        })

    }



    return (
        <div>

        </div>
    );
};

export default CrudDemo;





