import React from "react";

const CardInput = (props) => {
  const {box, item} = props;
  const {name, field} = item;
  console.log("box",box);
  const { classOne,classTwo, classThree, classFour, label } = box;
  return (
    <div className={`${classOne} form-group`}>
      <label className={`${classTwo} control-label`} htmlFor={`${label}_${field}`}>
        {name}
      </label>
      <span className="required">*</span>
      <div className={`controls ${classThree}`}>
        {field === "note" ? (
          <textarea
            rows={6}
            name={`${label}[${field}]`}
            id={`${label}_${field}`}
            defaultValue={""}
          />
        ) : (
          <input
            className={`form-control ${classFour}`}
            style={{ width: "100%" }}
            placeholder={`Vui lòng nhập ${name}`}
            name={`${label}[${field}]`}
            id={`${label}_${field}`}
            type="text"
            // maxLength={2}
          />
        )}
        <div
          className="errorMessage"
          id={`${label}_${field}_em_`}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default CardInput;
