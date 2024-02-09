import React, { useState, useEffect } from "react";
import { firestore } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const DisplayUserInfo = () => {
  const [usersData, setUsersData] = useState([]);

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

  return (
    <div className="min-h-[100vh]">
    <div className="grid grid-cols-4 w-[60%] pt-[100px]  max-md:grid-cols-2 max-md:w-full justify-items-center mx-auto">
      {usersData.map((user) => (
        <div key={user.id} className="shadow-lg max-w-80 mx- my-4 px-5 py-5 ">
            
          <h2 className="font-bold">{user.userName}</h2>
          <p>Location: {user.location}</p>
          <p>Budget: ${user.budget}</p>
          <p>Occupation: {user.Occupation}</p>
          <p>Gender: {user.gender}</p>
          <p>Looking For: {user.looking}</p>
          <p>Habits: {user.habits && user.habits.join(", ")}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DisplayUserInfo;
