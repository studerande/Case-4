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
      console.log("data", data.collection.items[0]);
      let items = data.collection.items;
      items.forEach((item) => {
        console.log(item);
      });

      document.body.innerHTML = data.collection.items[0].links[0].href;

      let img = new Image();
      img.src = data.collection.items[0].links[0].href;
      document.body.appendChild(img);
    });
});
