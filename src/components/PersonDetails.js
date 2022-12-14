import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PersonDetails = () => {

    const API_URL = "http://localhost:8080/api/v1/person";

    const navigate = useNavigate();

    let params = useParams();
    const [id, setId] = useState(params.id);

    const [person, setPerson] = useState({ id: 0, firstName: '', lastName: '', email: '', title: '' });

    useEffect(() => {

        getPersonByID();

    }, []);


    const getPersonByID = async () => {
        await axios.get(`${API_URL}/${id}`).then(
            (response) => {

                if (response.status === 200) {
                    console.log(`API: (ByID) Request was executed Successfully!`);

                    setPerson(response.data);
                    console.log(response.data);
                } else {
                    console.error(`API: Request was executed with status code ${response.status}`);
                }

            }
        ).catch((error) => {
            console.warn(`API: Request Encounter an Error ${error}`);
        })
    }

    return (
        <div className="card">
            <div className="card-header bg-dark text-white">
                {`${person.firstName} ${person.lastName}`}
            </div>
            <div className="card-body">

                <div className='row mb-5 align-items-center'>
                    <div className='col-3'>
                        <h1 className='lead'># {person.id}</h1>
                    </div>
                    <div className='col-6 text-center'>
                        <h1 className='display-6'>{person.title}</h1>
                    </div>
                </div>




                <div className="row justify-content-center text-center">
                    <div className='col-4'>
                        <h1 className='display-6'>Name:</h1>
                        <p className='lead'>{person.firstName} {person.lastName}</p>
                    </div>
                    <div className='col-4'>
                        <h1 className='display-6'>Email:</h1>
                        <p className='lead'>{person.email}</p>
                    </div>
                </div>


            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-danger" onClick={() => navigate("/crud")}>Close</button>
            </div>
        </div>
    );
};

export default PersonDetails;