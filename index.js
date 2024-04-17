

//  const url = "https://dog.ceo/api/breeds/image/random"
//  const root = document.querySelector(".root")




// fetch(url).then(res=>res.json()).then(data=>{

// const source = data.message
// console.log(source)
 
// root.innerHTML = `
//     <img src=${source} alt="hhh"/>

// `

// }).catch(err=>console.log(err))





const root = document.querySelector(".root");
const url = `https://rickandmortyapi.com/api`;
const btn = document.querySelector("button");
const search = document.querySelector("input");

fetch(url)
  .then(response => response.json())
  .then(data => {
    const urlChar = data.characters;

    fetch(urlChar)
      .then(res => res.json())
      .then(data => {
        const characters = data.results;

        characters.forEach(element => {
          const display = document.createElement("div");
          display.innerHTML = `
            <img src=${element.image} alt=${element.name}>
            <h1>${element.name}</h1>
            <h2>${element.status}</h2>
            <h3>${element.gender}</h3>
          `;
          root.append(display);
        });

        btn.addEventListener("click", function() {
          const nameFiltered = characters.filter(item => item.name.includes(search.value));
          console.log(nameFiltered);
          root.innerHTML = ''; 
          nameFiltered.forEach(character => {
            const display = document.createElement("div");
            display.innerHTML = `
              <img src=${character.image} alt=${character.name}>
              <h1>${character.name}</h1>
              <h2>${character.status}</h2>
              <h3>${character.gender}</h3>
            `;
            root.append(display);
          });
        });
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));















