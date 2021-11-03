import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import { getIpInfo } from './services/ip.service';

function App() {
  const [ ipInput, setIpInput ] = useState('');
  // const [ ipData, setIpData ] = useState([]);

  const getIp = (ipAddress) => {
    setIpInput(ipAddress)
  }

  console.log(`ipInput: ${ipInput}`);

  // useEffect(() => {
  //   getIpInfo('161.185.160.93')
  //   .then(data => console.log(data))
  //   .then(data => setIpData(data))
  //   .catch(reason => console.log(reason.message))
  // }, [])
  
  return (
    <div>
      <Header submittedSearch={getIp}/>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
