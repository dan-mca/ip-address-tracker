// "https://ipinfo.io/161.185.160.93/geo"
// "https://ipinfo.io/82.7.168.13\?token=b3433d99aacf4a"

export const getIpInfo = async (ipAddress) => {
  const API_URL = "https://ipinfo.io/";
  const API_TOKEN = "\?token=b3433d99aacf4a"
  try {
    let response = await fetch(API_URL + ipAddress + API_TOKEN)
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}