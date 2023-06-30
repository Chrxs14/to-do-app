import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./CreateTodoButton.css";

const CreateTodoButton = ({ openModal, setOpenModal }) => {
  return (
    <div className="buttonCreate">
      <button
        onClick={(event) => {
          setOpenModal(!openModal);
        }}
        className={openModal ? "buttonOpen" : "buttonClose"}
      >
        <AiOutlinePlus
          className={openModal ? "iconCreate-Open" : "iconCreate-Close"}
        />
      </button>
    </div>
  );
};

export { CreateTodoButton };
