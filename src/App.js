import { useEffect, useState } from "react";
import './App.scss';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LocationMap from "./components/LocationMap/LocationMap";
import { getIpInfo } from './services/ip.service';
// import { ipData } from "./ipdata";

function App() {
  const [ ipInput, setIpInput ] = useState('');
  const [ ipData, setIpData ] = useState([]);

  const getClientIp = async () => {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    const clientIp = await data.ip;
    setIpInput(clientIp);
  }

  useEffect(() => {
    getClientIp();
    getIpInfo(ipInput)
    .then(data => setIpData(data))
    .catch(reason => console.log(reason.message))
  }, [])

  useEffect(() => {
    getIpInfo(ipInput)
    .then(data => setIpData(data))
    .catch(reason => console.log(reason.message))
  }, [ipInput])
  
  const getIp = (ipAddress) => {
    setIpInput(ipAddress)
  }

  
  return (
    <div>
      <Header submittedSearch={getIp} data={ipData}/>
      <LocationMap center={ipData.loc}/>
      <Footer />
    </div>
  );
}

export default App;
