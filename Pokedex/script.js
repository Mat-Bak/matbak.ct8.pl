const pokeName = document.querySelector('#name');
const pokeImg = document.querySelector('#sprite');
const pokeNames = document.querySelectorAll('.pokeNames');
const pokeHeight = document.getElementById('height');
const pokeWeight = document.getElementById('weight');
const pokeHp = document.querySelector('.hp');
const pokeAttack = document.querySelector('.attack');
const pokeDef = document.querySelector('.def');
const pokeSp = document.querySelector('.sp');
const pokeSd = document.querySelector('.sd');
const pokeSpeed = document.querySelector('.speed');
const leftButton = document.querySelector('.prev');
const rightButton = document.querySelector('.next');
const pokeTypeOne  = document.querySelector('.type-one');
const pokeTypeTwo  = document.querySelector('.type-two');
const pokeTypeTwoHide = document.querySelector('.type-two-hide');
const pokeTypeOneHide = document.querySelector('.type-one-hide');

pokeImg.src = 'pokeball.png';

const capitalize = (str) => str[0].toUpperCase() + str.substr(1);
let prevUrl = null;
let nextUrl = null;

let types = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
     'electric', 'psychic', 'ice',
     'dragon', 'dark', 'fairy'
]

const fetchPokeList = apiUrl =>{
    fetch(apiUrl)
        .then((data) => data.json())
        .then((pokemon) =>{
            const {results, previous, next} = pokemon;
            prevUrl = previous;
            nextUrl = next;

            for(let i = 0; i < pokeNames.length; i++){
                const pokeListItem = pokeNames[i];
                const resultData = results[i]                

                if(resultData){
                    const {name, url} = resultData;
                    const urlArray = url.split('/');
                    const id = urlArray[urlArray.length - 2];
                    pokeListItem.textContent = id + '. ' + capitalize(name);
                } else {
                    pokeListItem.textContent = '';
                }
            }
        });
};

const resetClass = () => {
    for( const type of types){
        pokeTypeOneHide.classList.remove(type);
        pokeTypeTwoHide.classList.remove(type);
    }
}

const fetchPokeData = id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            resetClass();
            const dataTypes = data['types'];
            const dataFirstType = dataTypes[0];
            const dataSecondType = dataTypes[1];
            pokeTypeOneHide.classList.add(dataFirstType['type']['name']);;
            pokeTypeOne.textContent=capitalize(dataFirstType['type']['name']);
            if(dataSecondType){
                pokeTypeTwoHide.classList.add(dataSecondType['type']['name']);
                pokeTypeTwoHide.classList.remove('hide');
                pokeTypeTwo.textContent=capitalize(dataSecondType['type']['name']);
            }else{
                pokeTypeTwoHide.classList.add('hide');
                pokeTypeTwo.textContent = '';
            }

            pokeName.textContent = capitalize(data['name']) + `  #${data['id'].toString().padStart(3,'0')}`
            pokeImg.src = data['sprites']['front_default' || 'pokeball.png']
            pokeHeight.textContent = `Height: ${data['height']}`
            pokeWeight.textContent = `Weight: ${data['weight']}`
            pokeHp.textContent = `HP: ${data['stats'][0]['base_stat']}`
            pokeAttack.textContent = `Attack: ${data['stats'][1]['base_stat']}`
            pokeDef.textContent = `Def: ${data['stats'][2]['base_stat']}`
            pokeSp.textContent = `Sp: ${data['stats'][3]['base_stat']}`
            pokeSd.textContent = `Sd: ${data['stats'][4]['base_stat']}`
            pokeSpeed.textContent = `Speed: ${data['stats'][5]['base_stat']}`
        })
}


const listItemClick = (e) => {
    if(!e.target) return;

    const listItem = e.target;
    if(!listItem.textContent) return;
    for( let i = 0; i<pokeNames.length; i++){
        pokeNames[i].style.backgroundColor =  'rgba(255, 255, 255, 0.527)';
    }
    listItem.style.backgroundColor ="rgba(115, 204, 255, 0.527)";
    const id = listItem.textContent.split('.')[0];
    fetchPokeData(id);
}

const prevButtonClick = () => {
    if(prevUrl){
        fetchPokeList(prevUrl);
        for( let i = 0; i<pokeNames.length; i++){
            pokeNames[i].style.backgroundColor =  'rgba(255, 255, 255, 0.527)';
        }
    }
}

const nextButtonClick = () => {
    if(nextUrl){
        fetchPokeList(nextUrl);
        for( let i = 0; i<pokeNames.length; i++){
            pokeNames[i].style.backgroundColor =  'rgba(255, 255, 255, 0.527)';
        }
    }
}
leftButton.addEventListener('click', prevButtonClick);
rightButton.addEventListener('click', nextButtonClick);
for (const pokeListName of pokeNames){
    pokeListName.addEventListener('click', listItemClick);
}

fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');