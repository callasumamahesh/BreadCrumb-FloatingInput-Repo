// import React, { useEffect, useState } from "react";
// import { CiCirclePlus } from "react-icons/ci";
// import { CiEdit } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";
// import "./style/table.css";
// function App() {
//   const [usersInfo, setUsersInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("users"));
//     if (storedUsers.length) {
//       setUsers(storedUsers);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(users));
//   }, [users]);

//   const openModal = (index = null) => {
//     if (index === null) {
//       setUsersInfo({
//         firstName: "",
//         lastName: "",
//         email: "",
//       });
//     } else {
//       setUsersInfo(users[index]);
//       setEditingIndex(index);
//     }
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingIndex(null);
//   };

//   const createOrUpdateUser = () => {
//     if (editingIndex !== null) {
//       setUsers((prevUsers) =>
//         prevUsers.map((user, index) =>
//           index === editingIndex ? usersInfo : user
//         )
//       );
//       closeModal();
//     } else {
//       if (
//         usersInfo.email === "" ||
//         usersInfo.firstName === "" ||
//         usersInfo.lastName === ""
//       ) {
//         alert("Please Fill All Fields");
//       } else {
//         setUsers((prevUsers) => [...prevUsers, usersInfo]);
//         closeModal();
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUsersInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
//   };

//   const handleEdit = (index) => {
//     openModal(index);
//   };

//   const handleDelete = (index) => {
//     setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="app-container">
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>{editingIndex === null ? "Add New User" : "Edit User"}</h2>
//             <input
//               type="text"
//               placeholder="Enter First Name"
//               name="firstName"
//               value={usersInfo.firstName}
//               onChange={handleChange}
//             />
//             <input
//               type="text"
//               placeholder="Enter Last Name"
//               name="lastName"
//               value={usersInfo.lastName}
//               onChange={handleChange}
//             />
//             <input
//               type="text"
//               placeholder="Enter Email"
//               name="email"
//               value={usersInfo.email}
//               onChange={handleChange}
//             />
//             <button onClick={createOrUpdateUser}>
//               {editingIndex === null ? "Add User" : "Update User"}
//             </button>
//             <button onClick={closeModal} className="modal-close-button">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       <section className="tablesection">
//         <table>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th className="addNewUser">
//                 User
//                 <CiCirclePlus
//                   onClick={() => openModal()}
//                   className="plusicon"
//                 />
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, i) => (
//               <tr key={i}>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                 <td className="editDeleteIcons">
//                   <CiEdit onClick={() => handleEdit(i)} className="icon" />
//                   <MdDeleteOutline
//                     onClick={() => handleDelete(i)}
//                     className="icon"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react'

// function App() {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch('https://fakestoreapi.com/products/1')
//       .then(data => data.json())
//       .then(json => setData(json))
//     }
//     fetchData()
//   },[])
//   return (
//     <div>
//       {console.log(data)}
//       <img src={data.image} width={200} />
//       <h1>From React</h1>
//       <h1>Hello world</h1>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/loginPage'
import HomePage from './components/homePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/homepage' element={<HomePage/>}></Route>
    </Routes>
  )
}

export default App
