import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CrudDemo from './CrudDemo';
import Header from './navigations/Header';

const DemoRouter = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Welcome />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/person' element={<Person />} />
                    <Route exact path='/crud' element={<CrudDemo />} />
                    <Route exact path='/details/:id' element={<PersonDetails />} />
                    <Route exact path='/error' element={<NotFound />} />
                    <Route exact path='/*' element={<Navigate to={'/error'} />} />{{/* All other paths will show Error page */ }}

                </Routes>







            </Router>
        </div>
    );
};

<Header />

export default DemoRouter;