import React, { useState, useEffect } from "react";
import { firestore } from "../utils/firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import ShowDetails from "./ShowDetails";
import profileImg from "../image/profilePlaceHolder.png";

const DisplayUserInfo = () => {
  const [usersData, setUsersData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        const userDataArray = [];

        querySnapshot.forEach((doc) => {
          userDataArray.push({ id: doc.id, ...doc.data() });
        });

        setUsersData(userDataArray);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMoreDetailsClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const isDisplayUserInfo = location.pathname === "/displayUser";
    const isMainPage = location.pathname === "/mainPage";


  return (
    <div className=" min-h-40">
        <div >
      {isDisplayUserInfo && (
        <h1 className="pt-28 text-center pb-10 font-bold">
          Available Roommates
        </h1>
      )}
       {isMainPage && (
        <h1 className="text-center pb-10 font-bold text-orange-500 pt-5">
          Featured Roommates
        </h1>
      )}
      </div>
      <div className="flex flex-wrap justify-evenly">
        {usersData.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg  border-2 rounded-md p-4 mb-4 flex flex-col min-w-96 max-w-[16rem] mx-5 hover:shadow-blue-500/30 transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="flex items-center">
              <img
                src={profileImg}
                alt="profile"
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-500 hover:border-blue-60"
              />
              <span className="font-bold ml-6 text-2xl bg-slate-200 shadow-lg rounded-2xl px-4">
                {user.userName}
              </span>
            </div>
            <div className=" text-justify flex justify-center">
              <table className="">
                <tr>
                  <th>Location</th>
                  <td>:</td>
                  <td>{user.location}</td>
                </tr>
                <tr>
                  <th>Budget</th>
                  <td>:</td>
                  <td>{user.budget}</td>
                </tr>
                <tr>
                  <th>Occupation</th>
                  <td>:</td>
                  <td>{user.Occupation}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>:</td>
                  <td>{user.gender}</td>
                </tr>
                <tr>
                  <th>Looking For</th>
                  <td>:</td>
                  <td>{user.looking}</td>
                </tr>
                <tr>
                  <th>Habits</th>
                  <td>:</td>
                  <td>{user.habits && user.habits.join(", ")}</td>
                </tr>
                <tr>
                  <td colSpan={3} className=" text-center">
                  
                    <button className="font-bold cursor-pointer border px-3  bg-blue-500 mt-2 text-white rounded-md shadow-lg hover: border-blue-500 hover:bg-white hover:text-blue-500" onClick={() => handleMoreDetailsClick(user)} id = {user.uid} >
                      More Details
                    </button>
                    
                  </td>
                </tr>
              </table>
            </div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <ShowDetails
          user={selectedUser}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default DisplayUserInfo;
