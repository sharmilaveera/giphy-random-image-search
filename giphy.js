let APIKEY="y7FCJOf1BeZ4IaD4kuPEqiPKBenbspb7";
document.addEventListener("DOMContentLoaded", init);
function init()
{
    document.getElementById("btnSearch").addEventListener("click", event => {
        event.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
        let str = document.getElementById("search").value.trim(); //input feild search
        url=url.concat(str);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(content => {
              
              console.log(content.data);//data
              console.log("META", content.meta);//meta data
              let figu = document.createElement("figure");
              let image = document.createElement("img");
              let fc = document.createElement("figcaption");
              image.src = content.data[0].images.downsized.url;
              image.alt = content.data[0].title;
              fc.textContent = content.data[0].title;
              figu.appendChild(image);
              figu.appendChild(fc);
             let output = document.querySelector(".output");
             output.insertAdjacentElement("afterbegin", figu);
             document.querySelector("#search").value = "";
            })
            .catch(err => {
                console.error(err);
              });
          });
}