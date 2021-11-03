import React from "react";
import InfoItem from "./InfoItem";
import { ipData } from "../ipdata";

const InfoContainer = () => {
  return (
    <div>
      <InfoItem title="ip address" value={ipData.ip} />
      <InfoItem title="location" value={`${ipData.city}, ${ipData.region}, ${ipData.postal}`} />
      <InfoItem title="timezone" value={ipData.timezone} />
      <InfoItem title="isp" value={ipData.org} />
    </div>
  );
};

export default InfoContainer;
