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
    <div className="flex flex-wrap justify-evenly pt-20">
      {usersData.map((user) => (
        <div key={user.id} className="shadow-lg max-w-80 mx-4 my-4">
          <h2 className="font-bold">{user.userName}</h2>
          <p>Email: {user.email}</p>
          <p>Age: {user.Age}</p>
          <p>Location: {user.location}</p>
          <p>Budget: ${user.budget}</p>
          <p>Date: {user.date}</p>
          <p>Occupation: {user.Occupation}</p>
          <p>Food Choices: {user.FoodChoices}</p>
          <p>Gender: {user.gender}</p>
          <p>Looking For: {user.looking}</p>
          <p>Habits: {user.habits && user.habits.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayUserInfo;
