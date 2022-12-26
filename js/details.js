const container = document.querySelector('.my-container');
//to extract the id of superhero from link
function getId(id) {
    const url = new URLSearchParams(window.location.search);
    return url.get(id);
  }
  //to get all the details
function getDetails(id)
{
const url="https://www.superheroapi.com/api.php/891370368026086";
$.get(`${url}/${id}`,function(data)
{
    $('#my-container').append(`
   
    <div id="details">
    <h1 id="more-details">More about the superhero</h1>
    <div style="display:flex;flex-direction:row;">
      <div>
        <img src="${data.image.url}">
      </div>
      <div class="super-hero-details">
        <p>Name :${data.name}</p>
        <p>Biography :${data.biography['full-name']}</p>
        <p> Intelligence : ${data.powerstats.intelligence}</span>
        <p> Strength : ${data.powerstats.strength}</p>
        <p>Speed : </span> <span> ${data.powerstats.speed}</p>
        <p> Durability: </span> <span> ${data.powerstats.durability}</p>
        <p>Power :</span> <span>${data.powerstats.power}</p>
        <p> Combat :</span> <span>${data.powerstats.combat}</p>
      </div>
    </div>
   </div>`
        
    );

});  
}
const heroId = getId('id');
getDetails(heroId);                          
         