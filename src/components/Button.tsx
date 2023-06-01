import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    className="bg-green-400 w-full font-bold py-2 px-4 rounded"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
