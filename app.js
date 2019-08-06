var mymap = L.map('issMap').setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS() {
  // await response of the fetch call
  const response = await fetch(api_url);
  // only proceed once its resolved
  const data = await response.json();
  const { latitude, longitude } = data;

  document.getElementById("lat").textContent = latitude;
  document.getElementById("long").textContent = longitude;
}

getISS();
