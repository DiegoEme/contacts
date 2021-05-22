import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="ui secondary  menu">
        <a className="item">Home</a>
        <a className="item">Crear contacto</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input"></div>
          </div>
          <a className="ui item">Logout</a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
