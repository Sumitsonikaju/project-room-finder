import React, { useState, useEffect, useRef } from "react";
// import Autosuggest from "react-autosuggest";

const Create = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [location_search, setLocationSearch] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const budget = useRef(null);
  const age = useRef(null);
  const date = useRef(null);
  const occupation = useRef(null);

  const apiKey = "81c244c254ba4bfe82ea4f10f5100beb";
  const geoapifyAutocompleteEndpoint = `https://api.geoapify.com/v1/geocode/autocomplete?apiKey=${apiKey}`;


  // prevent the form for refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  };
   
  // calling data api 
  const handletoggle = async (e) => {
    try {
      setLocationSearch(e.currentTarget.value);

      const response = await fetch(
        `${geoapifyAutocompleteEndpoint}&text=${location_search}`
      );

      const result = await response.json();

      // Ensure result.features is an array before setting suggestions
      if (Array.isArray(result?.features)) {
        setSuggestions(result.features);
      } else {
        setSuggestions([]); // Set empty array if features is not an array
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]); // Set empty array in case of an error
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen ">
      <div className="container py-6">
        <div className="max-w-lg mx-auto py-8 mb-6">
          <h1 className="text-blue-500 font-bold">Roommate Information Form</h1>
          <p>Create your roommate profile for a room.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-8">
            <div className="max-w-xl mx-auto border relative flex-col pl-10 pr-10 py-6 rounded-md shadow-md">
              <label className="font-semibold ">Search location:</label>
              <input
                value={location_search}
                onChange={(e) => handletoggle(e)}
                type="text"
                className="block create-input "
                placeholder="enter the location"
              />
           {suggestions.length > 0 ? <div className="absolute top-25 bg-orange-400 overflow-y-scroll w-[85%] rounded-md h-[20vh]">
                  {suggestions.map((items) => {
                    return (
                      <>
                        <h1>{items.properties.formatted}</h1>
                      </>
                    );
                  })}
                </div> : ""}
              <br />

              <label className="font-semibold">
                Budget:
                <input
                  type="number"
                  name="budget"
                  className="block create-input"
                  placeholder="$"
                  ref={budget}
                  required
                />
              </label>
              <br />
            </div>
            <div className="max-w-xl mx-auto border flex-col pl-10 pr-10 py-6 rounded-md shadow-md">
              <label className="font-semibold">
                Name:
                <input
                  type="text"
                  name="name"
                  className="block create-input"
                  ref={name}
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
                  ref={email}
                  required
                />
              </label>
              <br />
            </div>
            <div className="max-w-xl mx-auto border flex-col pl-10 pr-10 py-6 rounded-md shadow-md">
              <label className="font-semibold">
                Looking for:
                <select
                  name="lookingFor"
                  className="block create-input"
                  required
                >
                  <option value="For myself">For myself</option>
                  <option value="As a couple">As a couple</option>
                  <option value="As a group of friends">
                    As a group of Friends
                  </option>
                </select>
              </label>
              <br />

              <label className="font-semibold">
                Gender:
                <select
                  name="gender"
                  className="block create-input"
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
                  ref={age}
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
                 ref={date}
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
                  ref={occupation}
                />
              </label>
              <br />

              <label className="font-semibold">
                Children:
                <select
                  name="children"
                  className="block create-input"
                  required
                >
                  <option value="noChild">No Children</option>
                  <option value="chVisit">Children that will Visit</option>
                  <option value="chWithMe">
                    Children that will live with me
                  </option>
                </select>
              </label>
              <br />
            </div>
            <div className="max-w-xl mx-auto border flex-col pl-10 pr-10 py-6 rounded-md shadow-md">
              <label className="font-semibold">
                Choice:
                <label>
                  <input
                    type="checkbox"
                    name="choice1"
                    value="nonSmoker"
                  />
                  <span className="pl-4">Non-smoker 🚭</span>
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="choice2"
                    value="catOwner"
                  />
                  <span className="pl-4">I have a cat 🐱</span>
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="choice3"
                    value="dogOwner"
                  />
                  <span className="pl-4">I have a dog 🐶</span>
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="choice4"
                    value="student"
                  />
                  <span className="pl-4">I'm a student 🎓</span>
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="choice5"
                    value="lgbtFriendly"
                  />
                  <span className="pl-4">LGBT+ friendly 🏳️‍🌈</span>
                </label>
              </label>
              <br />
              <br />
              <label className="font-semibold">
                Food:
                <select
                  name="gender"
                  className="block create-input"
                  required
                >
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                  <option value="omnivore">omnivore</option>
                </select>
              </label>
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

// <Autosuggest
// {...autosuggestProps}
// inputProps={{
//   type: "text",
//   name: "location",
//   className: "block create-input",
//   placeholder: "Enter the location...",
//   value: formData.location,
//   onChange: handleChange,
//   required: true,
// }}
// />
