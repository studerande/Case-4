let url = "https://images-api.nasa.gov/search?q=";

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
        
        // console.log(item.data[0].description)
      console.log(item);
      // content.innerHTML += item.links[0].href

      // document.body.innerHTML += item.href

      if (Array.isArray(item.links)){

        let img = new Image();
        img.src = item.links[0].href;
        // console.log(item.data[0].description)

        let des =  document.createElement("p")
        des.textContent = item.data[0].description

        document.body.appendChild(img);
        document.body.appendChild(des)
      }
     
      });
      //   document.body.innerHTML = data.collection.items.join()
     

      // content.innerHTML = data.collection.items[0].links[0].href;
      // content.innerHTML = data.collection.items[0].data[0].description;



    });
});



// göra en filtering tex datum, samt desribtion

// console.log(item.links[0].href);

