// console.log(data);
const dice = document.getElementById("dice");
const advice = document.getElementById("advice");
const quotes = document.getElementById("quotes");
function fetchQuotes() {
  fetch("https://api.adviceslip.com/advice", {
    headers: { Accept: "aplication/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.slip.id);
      advice.innerHTML = `Advice # ${data.slip.id}`;
      console.log(data.slip.advice);
      quotes.innerHTML = `<p>" ${data.slip.advice} " </p>`;
    })
    .catch((error) => {
      console.error("Error fetching data", error);
    });
}
fetchQuotes();

dice.addEventListener("click", function () {
  fetchQuotes();
  //   alert("hdkshfkjdsaf");
});
