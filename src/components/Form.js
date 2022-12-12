import React from 'react';
import { useForm } from 'react-hook-form';

const Form = (props) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleSave = props.handleSave;


    return (
        <div className="container col-10">


            <form className="form-control my-4" onSubmit={handleSubmit(handleSave)} >

                <h1 className='display-6 my-3'> Add a Person</h1>
                <div className="form-floating my-3" >
                    <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        placeholder="Enter FirstName"
                        {...register("firstName", { required: true })} />
                    <label htmlFor="firstname">Enter FirstName</label>
                    {errors.firstName && <span className='text-danger'>This is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder="Enter LastName"
                        {...register("lastName", { required: true })} />
                    <label htmlFor="lastname">Enter LastName</label>
                    {errors.lastName && <span className='text-danger'>This is required</span>}
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        {...register("email", { required: true })} />
                    <label htmlFor="email">Enter Email</label>
                    {errors.email && <span className='text-danger'>This is required</span>}
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter Title" />
                    <label htmlFor="title">Enter Title</label>
                </div>

                <div className="card-footer row justify-content-center mb-3">
                    <button type="submit" className="btn btn-primary col-3 ">Submit</button>
                    <div className='col-4'></div>
                    <button type="button" className="btn btn-outline-warning col-3" onClick={() => reset()}>Reset</button>
                </div>

            </form>

        </div>
    );
};

export default Form;