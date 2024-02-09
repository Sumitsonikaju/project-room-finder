import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ profile, age, profession, hobbies, state, gender }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-4">
      <div className="text-xl font-bold mb-2">{profile}</div>
      <div className="text-gray-600 mb-2">Age: {age}</div>
      <div className="text-gray-600 mb-2">Profession: {profession}</div>
      <div className="text-gray-600 mb-2">Hobbies: {hobbies}</div>
      <div className="text-gray-600 mb-2">State: {state}</div>
      <div className="text-gray-600">Gender: {gender}</div>
    </div>
  );
};

const Main = () => {


  return (
    <>
    <div className="flex justify-center items-center h-[80vh]">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-blue-500">
          Welcome to Room Buddy
        </h1>
        <p className="text-gray-600 ">
          Discover the ideal living experience with Room Buddy. Connect with the
          perfect roommates for a harmonious shared living space.
        </p>
        <p className="text-gray-600 ">
          Simplifying the roommate search process, we help you find
          like-minded individuals effortlessly.
        </p>
        <p className="text-gray-600 ">
          Join Room Buddy today and embark on a journey to find the best
          roommates for a stress-free and enjoyable living experience.
        </p>

        <Link to={"/Create"}>
            <button className="font-bold cursor-pointer border px-3 py-2 bg-blue-500  text-white mt-5 rounded-md shadow-lg">Complete Your Profile</button> 
          </Link>
      </section>
    </div>
    <section className="mb-12 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Featured Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <UserCard
            profile="John Doe"
            age={25}
            profession="Software Engineer"
            hobbies="Reading, Coding"
            state="California"
            gender="Male"
          />
          <UserCard
            profile="John Doe"
            age={25}
            profession="Software Engineer"
            hobbies="Reading, Coding"
            state="California"
            gender="Male"
          />
          <UserCard
            profile="John Doe"
            age={25}
            profession="Software Engineer"
            hobbies="Reading, Coding"
            state="California"
            gender="Male"
          />
          <UserCard
            profile="Jane Smith"
            age={28}
            profession="Graphic Designer"
            hobbies="Painting, Photography"
            state="New York"
            gender="Female"
          />
          <UserCard
            profile="Jane Smith"
            age={28}
            profession="Graphic Designer"
            hobbies="Painting, Photography"
            state="New York"
            gender="Female"
          />
          <UserCard
            profile="Jane Smith"
            age={28}
            profession="Graphic Designer"
            hobbies="Painting, Photography"
            state="New York"
            gender="Female"
          />
          {/* Add more user cards as needed */}
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">User Comments</h2>
        {/* Add user comments component here */}
      </section>
    </>
  );
};

export default Main;
