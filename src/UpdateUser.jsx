// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// function UpdateUser() {
//   const { id } = useParams();
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [age, setAge] = useState();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:3001/getUsers/${id}`)
//         .then(result => {
//             console.log(result.data);
//         })
//         .catch(err => console.log(err));
// }, [id]);

//   return (
//     <div className="d-flex bg-primary justify-content-center align-items-center vh-100">
//       <div className="w-50 bg-white p-3 rounded">
//         <form>
//           <h2>Update User</h2>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               placeholder="Enter name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="age">Age</label>
//             <input
//               type="number"
//               className="form-control"
//               id="age"
//               placeholder="Enter age"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateUser;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Get existing user
  useEffect(() => {
    axios
      .get("https://curd-9w28.onrender.com/getUsers" + id)
      .then((result) => {
        console.log(result.data);

        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Update user
  const Update = (e) => {
    e.preventDefault();

    axios
      .put("https://curd-9w28.onrender.com/updateUser/" + id, {
        name,
        email,
        age,
      })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex bg-primary justify-content-center align-items-center vh-100">
      <div className="w-50 bg-white p-3 rounded">
        <form onSubmit={Update}>
          <h2>Update User</h2>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
