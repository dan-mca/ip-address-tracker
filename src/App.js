import { useEffect, useState } from "react";
import './App.scss';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LocationMap from "./components/LocationMap/LocationMap";
import { getIpInfo } from './services/ip.service';


function App() {
  const [ ipInput, setIpInput ] = useState('');
  const [ ipData, setIpData ] = useState([]);

  const getClientIp = async () => {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    const clientIp = await data.ip;
    setIpInput(clientIp);
  }
  console.log(ipData)

  useEffect(() => {
    getClientIp();
    getIpInfo(ipInput)
    .then(data => setIpData(data))
    .catch(reason => console.log(reason.message))
  }, [])

  useEffect(() => {
    getIpInfo(ipInput)
    .then(data => {
      if(data.status === 404) {
        alert("A valid IP address doesn't appear to have been entered. Please check and try again.")
      } else {setIpData(data)}
    })
    .catch(reason => console.log(reason.message))
  }, [ipInput])
  
  const getIp = (ipAddress) => ipAddress ? setIpInput(ipAddress) : getClientIp();
  
  return (
    <section className="app">
      <Header submittedSearch={getIp} data={ipData}/>
      <LocationMap center={ipData ? ipData.loc : ''}/>
      <Footer />
    </section>
  );
}

export default App;
