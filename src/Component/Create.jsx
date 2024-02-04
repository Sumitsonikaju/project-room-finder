import React, { useState } from "react";

const Create = () => {
  const [formData, setFormData] = useState({
    location: "",
    budget: "",
    name: "",
    email: "",
    lookingFor: "For myself",
    gender: "Female",
    age: "",
    moveDate: "",
    occupation: "",
    children: "noChild",
    choice: false,
    photo: "",
  });

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server, update state, etc.)
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen !min-h-dvh">
      <div className="container py-6">
        <div className="max-w-lg mx-auto py-8 mb-6 ">
          <h1 className="text-blue-500 font-bold">Roommate Information Form</h1>
          <p>Create your roommate profile for a room.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div className="max-w-xl mx-auto border flex-col pl-10 pr-10 py-6 rounded-md shadow-md">
              <label className="font-semibold">
                Search location:
                <input
                  type="text"
                  name="location"
                  className="block create-input"
                  placeholder="Enter the location..."
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="font-semibold">
                Budget:
                <input
                  type="number"
                  name="budget"
                  className="block create-input"
                  placeholder="$"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="font-semibold">
                Name:
                <input
                  type="text"
                  name="name"
                  className="block create-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="font-semibold">
                Email:
                <input
                  type="email"
                  name="email"
                  className="block create-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="font-semibold">
                Looking for:
                <select
                  name="lookingFor"
                  className="block create-input"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  required
                >
                  <option value="For myself">For myself</option>
                  <option value="As a couple">As a couple</option>
                  <option value="As a group of friends">As a group of Friends</option>
                </select>
              </label>
              <br />

              <label className="font-semibold">
                Gender:
                <select
                  name="gender"
                  className="block create-input"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <br />

              <label className="font-semibold">
                Age:
                <input
                  type="number"
                  name="age"
                  className="block create-input"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="font-semibold">
                Preferred Move Date:
                <input
                  type="date"
                  name="moveDate"
                  className="block create-input"
                  value={formData.moveDate}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="font-semibold">
                Occupation:
                <input
                  type="text"
                  name="occupation"
                  className="block create-input"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </label>
              <br />

              <label className="font-semibold">
                Children:
                <select
                  name="children"
                  className="block create-input"
                  value={formData.children}
                  onChange={handleChange}
                  required
                >
                  <option value="noChild">No Children</option>
                  <option value="chVisit">Children that will Visit</option>
                  <option value="chWithMe">Children that will live with me</option>
                </select>
              </label>
              <br />

              <label className="font-semibold">
                Choice:
                <input
                  type="checkbox"
                  name="choice"
                  className="block create-input"
                  checked={formData.choice}
                  onChange={handleChange}
                />
                Non-Smoker
              </label>
              <br />

              <label className="font-semibold">
                Photo (URL):
                <input
                  type="text"
                  name="photo"
                  className="block create-input"
                  value={formData.photo}
                  onChange={handleChange}
                />
              </label>
              <br />

              <button type="submit" className="px-44 border rounded-md py-1.5 bg-blue-500 text-white font-bold cursor-pointer">
                Create Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
