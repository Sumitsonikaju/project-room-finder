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
    choice: [],
    food: "Veg",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
              {[
                { label: "Search location:", type: "text", name: "location" },
                { label: "Budget:", type: "number", name: "budget", placeholder: "$" },
                { label: "Name:", type: "text", name: "name" },
                { label: "Email:", type: "email", name: "email" },
              ].map((input) => (
                <label key={input.name} className="font-semibold">
                  {input.label}
                  <input
                    type={input.type}
                    name={input.name}
                    className="block create-input"
                    placeholder={input.placeholder}
                    value={formData[input.name]}
                    onChange={handleChange}
                    required
                  />
                </label>
              ))}
            </div>

            <div className="max-w-xl mx-auto border flex-col pl-10 pr-10 py-6 rounded-md shadow-md">
              {[
                {
                  label: "Looking for:",
                  type: "select",
                  name: "lookingFor",
                  options: ["For myself", "As a couple", "As a group of friends"],
                },
                {
                  label: "Gender:",
                  type: "select",
                  name: "gender",
                  options: ["Female", "Male", "Other"],
                },
                { label: "Age:", type: "number", name: "age" },
                { label: "Preferred Move Date:", type: "date", name: "moveDate" },
                { label: "Occupation:", type: "text", name: "occupation" },
                {
                  label: "Children:",
                  type: "select",
                  name: "children",
                  options: ["No Children", "Children that will Visit", "Children that will live with me"],
                },
                {
                  label: "Choice:",
                  type: "checkboxGroup",
                  name: "choice",
                  options: [
                    "🚭Non-smoker",
                    "🐱I have a cat",
                    "🐶I have a dog",
                    "🎓I'm a student",
                    "🏳️‍🌈LGBT+ friendly",
                  ],
                },
                {
                  label: "Food:",
                  type: "select",
                  name: "food",
                  options: ["Veg", "Non-Veg", "Omnivore"],
                },
              ].map((input) => (
                <label key={input.name} className="font-semibold">
                  {input.label}
                  {input.type === "select" ? (
                    <select
                      name={input.name}
                      className="block create-input"
                      value={formData[input.name]}
                      onChange={handleChange}
                      required
                    >
                      {input.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : input.type === "checkboxGroup" ? (
                    <>
                      <br />
                      {input.options.map((option) => (
                        <label key={option}>
                          <input
                            type="checkbox"
                            name={input.name}
                            value={option}
                            checked={formData[input.name].includes(option)}
                            onChange={handleChange}
                          />
                          <span className="pl-4">{option}</span>
                          <br />
                        </label>
                      ))}
                    </>
                  ) : (
                    <input
                      type={input.type}
                      name={input.name}
                      className="block create-input"
                      value={formData[input.name]}
                      onChange={handleChange}
                      required
                    />
                  )}
                </label>
              ))}

              <br />
              <br />
              <button
                type="submit"
                className="px-[12.2rem] border rounded-md py-2 bg-blue-500 text-white font-bold cursor-pointer"
              >
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
