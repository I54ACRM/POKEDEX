const input = document.getElementById("search-input");
let container = document.getElementById("caracteristicas");
let contImg = document.getElementById("image")

let json = JSON.parse(poke_file);
let pokemones = json.result;

function search() {
    console.log(input.value)
    let pokemon = search_pokemon(input.value)
    if (pokemon == undefined)
    pokemon = search_byNumber(input.value)

    container.innerHTML = `
    <span>
      Nombre: ${pokemon.name}<br/>
      ID: ${pokemon.number}<br/>
      Tamaño: ${pokemon.height}<br/>
      Peso: ${pokemon.weight}<br/>
      Tipo: ${pokemon.type}<br/>
    </span>
    `
    contImg.innerHTML = `
    <span>
      <img src="${pokemon.ThumbnailImage}" alt="...">
    </span>
    `
}

function search_pokemon(pokemon_name) {
    for(let i = 0; i<pokemones.length; i++) {

      if(pokemones[i].slug == pokemon_name.toLowerCase()) {
        return pokemones[i];
      }
      else {  
      container.innerHTML = `
      <span>
      ¡ERROR 404!<br/>
      ESTE POKEMON NO ESXISTE<br/>
      ESCRIBA BIEN EL NOMBRE<br/>
      </span>
      `
      contImg.innerHTML = `
      <span>
        <img id="image404" src="./Error 404.png" alt="...">
      </span>
      `
      }
    }
}

function search_byNumber(pokemon_id) {
  for(let i = 0; i<pokemones.length; i++) {

    if(pokemones[i].number == pokemon_id) {
      return pokemones[i];
    }
  }
}

console.log(pokemones);
