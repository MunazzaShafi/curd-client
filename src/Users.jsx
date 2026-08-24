import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://curd-9w28.onrender.com/getUsers")
      .then((result) => {
        // console.log(result.data);
        setUsers(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://curd-9w28.onrender.com/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex bg-primary justify-content-center align-items-center vh-100">
      <div className="w-50 bg-white p-3 rounded">
        <Link to="/create" className="btn btn-success mb-2">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => {
              return (
                <tr key={users._id}>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.age}</td>
                  <td>
                    <Link
                      to={`/update/${users._id}`}
                      className="btn btn-success mb-2"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={(e) => handleDelete(users._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
