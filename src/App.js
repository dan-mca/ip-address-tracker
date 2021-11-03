import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import { getIpInfo } from './services/ip.service';
import { ipData } from './ipdata';

function App() {

  // useEffect(() => {
  //   getIpInfo('161.185.160.93')
  //   .then(data => console.log(data))
  //   .catch(reason => console.log(reason.message))
  // }, [])
  console.log(ipData);
  
  return (
    <div>
      <Header />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
