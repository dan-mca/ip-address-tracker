import React from "react";
import './InfoItem.scss';

const InfoItem = (props) => {
  const { title, value } = props;

  return (
    <div className="infoItem">
      <h5>{title.toUpperCase()}</h5>
      <h3>{value}</h3>
    </div>
  );
};

export default InfoItem;
