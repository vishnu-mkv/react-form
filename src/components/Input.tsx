import React from "react";
import Label from "./Label";
import Error from "./Error";

const Input = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}) => (
  <div className="mb-4">
    <Label label={label} name={name} />
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        error ? "border-red-500" : ""
      }`}
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
    <Error error={error} />
  </div>
);

export default Input;
