import React from "react";
import { ImCheckmark2, ImCross } from "react-icons/im";
import "./TodosLoading.css";

const TodosLoading = (props) => {
  return (
    <>
      <li>
        <span>
          <ImCheckmark2 />
        </span>
        <p>Cargando...</p>
        <span>
          <ImCross className="eliminateItem" />
        </span>
      </li>
      <li>
        <span>
          <ImCheckmark2 />
        </span>
        <p>Cargando...</p>
        <span>
          <ImCross className="eliminateItem" />
        </span>
      </li>
    </>
  );
};

export { TodosLoading };
