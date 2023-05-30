import React, { useState } from "react";
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["YES", "Probaly Not"];

  const buttonClickHandler = () => {
    setIsActive((prev) => !prev);
  };

  const optionHandler = (e) => {
    const items = e.target.textContent;
    props.setSelected(items);
    setIsActive(false)
  };
  return (
    <div className="dropdown">
      <h1>Should you use a dropdown?</h1>
      <div className="select">{props.selected}</div>
      <div
        onClick={buttonClickHandler}
        className="dropdown-btn"
        value={props.selected}
        onMouseEnter={(e) => {
          setIsActive(true)
        }}>
        Select <FontAwesomeIcon icon={faAngleRight} />
      </div>

      {isActive && (
        <div onClick={optionHandler} className="dropdown-content">
          {options.map((option, index) => {
            return <div className="dropdown-item" key={index}>{option}</div>
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
