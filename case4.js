let url = "https://images-api.nasa.gov/search?q=";

const button = document.querySelector("button");

const search = document.querySelector("#search");


     button.addEventListener("click", () => {
     url = `https://images-api.nasa.gov/search?q=${search.value}`;


  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
     let items = data.collection.items;
    
        items.forEach((item) => {
      
        console.log(item);
      
        if (Array.isArray(item.links)){
      
        let img = new Image();
        let des =  document.createElement("p")

    
        img.src = item.links[0].href;
        des.textContent = item.data[0].description

        document.body.appendChild(img);
        document.body.appendChild(des)
      }
      });
     


    });
});