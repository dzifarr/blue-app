function handleClick(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let weatherCityElement = document.querySelector("#weather-city");

  weatherCityElement.innerHTML = searchInputElement.value;
}

let blueSearchElement = document.querySelector("#blue-search");
blueSearchElement.addEventListener("submit", handleClick);
