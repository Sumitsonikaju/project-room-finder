import React from "react";

const Footer = () => {
  return (
    <footer className="bg-violet-600  ">
      <div className="flex justify-between px-12 py-4">
        <div className=" text-white text-xl">
          {" "}
          Free to list, search & communicate
        </div>
        <div className=" justify-center text-white text-xl space-y-4">
          <div className="  flex justify-end text-white text-xl">
            <a href="" className="">
              how to find a room
            </a>
            <a href="" className="ml-5">
              how to rent your room
            </a>
            <a href="" className="ml-5">
              ID checks
            </a>
            <a href="" className="ml-5">
              Free roommate agreement
            </a>
            <br />
            </div>
            <div className="  flex justify-end text-white text-xl">
            <a href="" className="ml-5">
              Safety & Security
            </a>
            <a href="" className="ml-5">
              inspections
            </a>
            <a href="" className="ml-5">
              Community standards
            </a>
          </div>
          <div className=" mb-10 flex justify-end gap-x-5 text-xl">
            <a href="" className="underline-orange-500">
              Help
            </a>
            <a href="" className="underline-orange-500">
              Team
            </a>
            <a href="" className="underline-orange-500">
              Blog
            </a>
            <a href="" className="underline-orange-500">
              Terms
            </a>
            <a href="" className="underline-orange-500">
              Privacy
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
