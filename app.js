// Making a map and titles.
const mymap = L.map('issMap').setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Creating a marker with a custom icon.
const issIcon = L.icon({
  iconUrl: 'ISS.svg.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
async function getISS() {
  // await response of the fetch call
  const response = await fetch(api_url);
  // only proceed once its resolved
  const data = await response.json();
  const { latitude, longitude } = data;

  // L.marker([latitude, longitude]).addTo(mymap);
  marker.setLatLng([latitude, longitude]);

  document.getElementById("lat").textContent = latitude;
  document.getElementById("long").textContent = longitude;
}

getISS();
