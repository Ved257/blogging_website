import React from "react";
import "./Sidebar.css";
import FeatherIcons from "feather-icons-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="plus">
          <FeatherIcons icon="plus-circle" size="30" />
        </div>
        <div className="square">
          <FeatherIcons icon="plus-square" size="30" />
        </div>
        <div className="file-add">
          <FeatherIcons icon="file-plus" size="30" />
        </div>
        <div className="file-text">
          <FeatherIcons icon="file-text" size="30" />
        </div>
        <div className="image">
          <FeatherIcons icon="image" size="30" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
