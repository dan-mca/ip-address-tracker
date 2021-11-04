import React from "react";
import './InfoContainer.scss';
import InfoItem from "../InfoItem/InfoItem";

const InfoContainer = (props) => {
  const { data } = props;

  return (
    <div className='container'>
      <InfoItem title="ip address" value={data.ip} />
      <hr />
      <InfoItem title="location" 
      value={!data.city && !data.region && !data.postal ? '-' :
        `${data.city}, ${data.region}, ${data.postal}`} />
      <hr />
      <InfoItem title="timezone" value={data.timezone ? data.timezone.replace('/', '/ ') : '-'} />
      <hr />
      <InfoItem title="isp" value={data.org} />
    </div>
  );
};

export default InfoContainer;
