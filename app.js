const btn = document.querySelector(".btn");
const h1 = document.querySelector(".h1");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const val = document.querySelector("#vaInput");
  let valUser = val.value;
  const API = `https://covid-193.p.rapidapi.com/statistics?country=${valUser}`;

  valUser.innerHTML = "";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "acd38d2ed5msh672fda39f987a4fp1404c9jsn945f0c46f1c5",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  async function app() {
    const res = await fetch(API, options);
    const data = await res.json();
    console.log(data);
    // console.log(data.parameters.country);

    h1.innerHTML = `Континент: ${data.response[0].continent}`;
    p1.innerHTML = `Страна: ${data.parameters.country}`;
    p2.innerHTML = `Восстановлено: ${data.response[0].cases.recovered}`;
    p3.innerHTML = `Итого: ${data.response[0].cases.total}`;
  }
  app();
});
