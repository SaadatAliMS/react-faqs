"use client";
import { FC } from "react";
import { useState } from "react";

const FaqCard = () => {
  const [isOpen, setisOpen] = useState(false);
  const isOpenHandle = () => {
    setisOpen(!isOpen);
    {
      /*this gives toggle effect by clicking.isopen set to false initially and setisOpen in set opposite of isopen. reference Lecture:https://www.youtube.com/watch?v=HleX3csbYFw */
    }
  };
  return (
    <div>
      <div className="bg-blue-600 text-white px-4 py-5" onClick={isOpenHandle}>
        <h2 className="text-xl"> What is the use of React FC in React?</h2>
      </div>
      {isOpen && (
        <div
          className={`bg-blue-300 text-white px-4 py-5 overflow-hidden duration-1000 ${
            isOpen ? "max-h-[100]" : "max-h-0"
          }`}
        >
          <p>
            In addition to the function signature, React. FC provides type
            checking for some static properties. propTypes and defaultProps
            define the prop types based on the generic type P . These provide
            type validation for props you pass to the component and default prop
            values you can define with Component.
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
