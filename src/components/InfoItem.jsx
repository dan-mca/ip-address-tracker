import React from "react";

const InfoItem = (props) => {
  const { title, value } = props;

  return (
    <div>
      <h5>{title.toUpperCase()}</h5>
      <h3>{value}</h3>
    </div>
  );
};

export default InfoItem;
