const urlIpApi = "https://api.ipify.org?format=json";
const addressEl = document.getElementById("address");

fetch(urlIpApi)
    .then(response => response.json())
    .then(json => addressEl.innerHTML= json.ip);
