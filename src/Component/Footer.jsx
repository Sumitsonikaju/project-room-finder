import React from "react";

const Footer = () => {
  return (
    <footer className="bg-violet-600 bottom-0 w-full">
      <div className="flex justify-between px-12 py-5">
        <div className=" text-white text-xl">
          {" "}
          Free to list, search & communicate
        </div>
        <div className=" justify-center text-white text-xl space-y-4">
          <div className="  flex justify-end text-white text-xl">
            <a href="" className=" hover:underline">
              How to find a room
            </a>
            <a href="" className="ml-5 hover:underline">
              How to rent your room
            </a>
            <a href="" className="ml-5 hover:underline">
              Free roommate agreement
            </a>
            <br />
            </div>
            <div className="  flex justify-end text-white text-xl">
            <a href="" className="ml-5 hover:underline">
              Safety & Security
            </a>
            
            <a href="" className="ml-5 hover:underline">
              Community standards
            </a>
          </div>
          <div className=" mb-10 flex justify-end gap-x-5 text-xl">
            <a href="" className="hover:underline">
              Help
            </a>
            <a href="" className="hover:underline">
              Team
            </a>
            <a href="" className="hover:underline">
              Blog
            </a>
            <a href="" className="hover:underline">
              Terms
            </a>
            <a href="" className="hover:underline">
              Privacy
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
