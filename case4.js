let url = "https://images-api.nasa.gov/search?q=apollo";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const search = document.querySelector("#search");
  console.log(search.value);

  url = `https://images-api.nasa.gov/search?q=${search.value}`;
  console.log(url);
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      console.log("data", data);
    });

  const li = document.createElement("img");
});

