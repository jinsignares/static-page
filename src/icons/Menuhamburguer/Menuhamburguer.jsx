/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Menuhamburguer = ({ className }) => {
  return (
    <svg
      className={`menuhamburguer ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 12H21"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M3 20H21"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M3 4H21"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
