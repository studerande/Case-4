let url = "https://images-api.nasa.gov/search?q=";

const button = document.querySelector("button");

const search = document.querySelector("#search");

button.addEventListener("click", () => {
  url = `https://images-api.nasa.gov/search?q=${search.value}`;

  document.getElementById("content").innerHTML = "Laddar";

  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      document.getElementById("content").innerHTML = "";
      let items = data.collection.items;

      async function getData() {
        let response = await fetch("https://images-api.nasa.gov/search?q=nasa");
        // awit betyder typ ta det lungt så länge datan är påväg
        let data = await response.json();
        // let data = awit response.json() skapar en variabel som omvandlar, spåket från json till javascript

        console.log(data.collection.items);

        let filteredArray = data.collection.items.filter(
          (item) =>
            new Date(item.data[0].date_created) >
            new Date("2010-05-14T00:00:00Z")
          // raden ovanför bestämer när den ska starta tex 2010 då tar den bara efter det datumet,
        );

        // console.log("filteredArray", filteredArray);

        if (
          prompt(
            "Vill du logga ut alla items efter 2010? Skriv ja eller nej"
          ) === "ja"
        ) {
          console.log(data.collection.items);
        } else {
          console.log(filteredArray);
        }
      }

      getData();

      items.forEach((item) => {
        console.log(item);

        if (Array.isArray(item.links)) {
          let img = new Image();
          let des = document.createElement("p");

          img.src = item.links[0].href;
          des.textContent = item.data[0].description;

          document.body.appendChild(img);
          document.body.appendChild(des);

        }
      });
    });
});
