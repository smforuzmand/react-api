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

    const deletePersonByID = async (id) => {
        await axios.delete(`${API_URL}/${id}`).then(

            (response) => {
                if (response.status === 204) {
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

    const savePerson = async (data) => {
        await axios.post(API_URL, data).then(
            (response) => {
                console.log(response)
                if (response.status === 201) {
                    console.log(`API :(save) request was accomplished`);

                    setLoadData(!loadData)
                } else if (response.status === 400) {

                } else {
                    console.error(`API: Request was executed with status code ${response.status}`)
                }

            }


        ).catch((error) => {
            console.warn(`API: Request Encounter an Error ${error}`)
        })



    }
















        )
    }



return (
    <div>

    </div>
);
};

export default CrudDemo;





