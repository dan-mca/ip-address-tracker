import React from "react";
import InfoItem from "./InfoItem";

const InfoContainer = () => {
  return (
    <div>
      <InfoItem title="ip address" value="82.7.168.13" />
      <InfoItem title="location" value="Manor park, England, E12" />
      <InfoItem title="timezone" value="UTC +0" />
      <InfoItem title="isp" value="Virgin Media Limited" />
    </div>
  );
};

export default InfoContainer;
