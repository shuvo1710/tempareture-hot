const apiKey = `e23962d6de13494bd4ad9cfcf4553134`;
const loadTemperature = city =>{
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
// console.log(url)
fetch(url)
.then(res => res.json())
.then(data => displayTemperature(data));
};

const displayTemperature = data =>{
    // const temperatuure = document.getElementById('temperature')
    // temperatuure.innerText = data.main.temp;
    setTemperaturreById('temperature', data.main.temp)
    setTemperaturreById('condition', data.weather[0].main)
    // console.log(data.weather[0].main)
};
const setTemperaturreById = (id, text) =>{
    const temperatuure = document.getElementById(id)
    temperatuure.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    searchField.value = '';
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');