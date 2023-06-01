import React from "react";
import Header from "./Header";
import Button from "./Button";

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-slate-900 bg-opacity-50 z-10 grid items-center"
      onClick={onClose}
    >
      <div className="z-20 bg-slate-800 w-fit min-w-[400px] p-2 rounded-md mx-auto">
        <Header>Success!</Header>
        <p className="text-center text-slate-300 -mt-5 mb-7">{message}</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Popup;
