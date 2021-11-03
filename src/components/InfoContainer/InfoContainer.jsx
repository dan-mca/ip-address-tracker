import React from "react";
import './InfoContainer.scss';
import InfoItem from "../InfoItem/InfoItem";
import { ipData } from "../../ipdata";

const InfoContainer = () => {
  return (
    <div className='container'>
      <InfoItem title="ip address" value={ipData.ip} />
      <hr />
      <InfoItem title="location" value={`${ipData.city}, ${ipData.region}, ${ipData.postal}`} />
      <hr />
      <InfoItem title="timezone" value={ipData.timezone} />
      <hr />
      <InfoItem title="isp" value={ipData.org} />
    </div>
  );
};

export default InfoContainer;
