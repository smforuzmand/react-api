import React from "react";

import { useNavigate } from "react-router-dom";

const Table = (props) => {
  const navigate = useNavigate();

  //Function From CrudDemo Component
  const handleDelete = props.handleDelete;

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">ACTION</th>
        </tr>
      </thead>
    );
  };

  const TableRow = () => {
    return (
      <tbody>
        {props.data.map((person) => {
          return (
            <tr key={person.id}>
              <th scope="row">{person.id}</th>
              <td>{`${person.firstName} ${person.lastName}`}</td>
              <td>{person.email}</td>
              <td>
                <TableAction id={person.id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const TableAction = (props) => {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate(`/details/${props.id}`)}
        >
          Details
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          onClick={() => handleDelete(props.id)}
        >
          Delete
        </button>
        <button type="button" className="btn btn-warning disabled">
          Edit
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <table className="table table-striped">
        <TableHeader />
        <TableRow />
      </table>
    </div>
  );
};

export default Table;
