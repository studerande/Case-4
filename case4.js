let url = "https://images-api.nasa.gov/search?q=";
const button = document.querySelector("button");
const search = document.querySelector("#search");
const content = document.querySelector("#content");
const year = document.querySelector("#year");

button.addEventListener("click", () => {
url = `https://images-api.nasa.gov/search?q=${search.value}`;

  document.getElementById("content").innerHTML = "Laddar";

  fetch(url + "&year_end=" + year.value)
    .then((Response) => Response.json())
    .then((data) => {

      document.getElementById("content").innerHTML = "";
      // detta gör att det står bara ladda när den laddar, raden 

      let items = data.collection.items;

     
      items.forEach((item) => {
        console.log(item);
        if (Array.isArray(item.links)) {

          let img = new Image();
          let des = document.createElement("p");
          // här skapar jag variablerna

          img.src = item.links[0].href;
          des.textContent = item.data[0].description;
          // här så blir variablen lika med api i dokumentet 


          document.getElementById("content").appendChild(img);
          document.getElementById("content").appendChild(des);
          // här bestämer man vart det ska i dokumentet
        }
      });
    });
});