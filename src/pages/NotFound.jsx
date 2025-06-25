import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen bg-slate-950 text-4xl text-white w-full font-bold flex items-center justify-center">
      404 not found
      <Link className="mt-4 underline  text-xl" to={"/"}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
