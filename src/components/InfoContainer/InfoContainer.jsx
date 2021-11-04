import React from "react";
import './InfoContainer.scss';
import InfoItem from "../InfoItem/InfoItem";
import { ipData } from "../../ipdata";

const InfoContainer = (props) => {
  const { data } = props;

  return (
    <div className='container'>
      <InfoItem title="ip address" value={data.ip} />
      <hr />
      <InfoItem title="location" value={`${data.city}, ${data.region}, ${data.postal}`} />
      <hr />
      <InfoItem title="timezone" value={data.timezone} />
      <hr />
      <InfoItem title="isp" value={data.org} />
    </div>
  );
};

export default InfoContainer;
