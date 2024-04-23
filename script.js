//function to create elements
function element(tag,classname,id,text){
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
}
let container = element("div","container","","");
const h1 = element("h1","text-center","title","Countries Weather");
const row = element("div","row","","");

container.append(h1,row);
let latitude;
let longitude;
const response = fetch("https://restcountries.com/v3.1/all");
response
.then((data)=>data.json())
.then((ele)=>{
    //console.log(ele);
    for(let i=0;i<ele.length;i++){
        const col = document.createElement("div");
        col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5";
        latitude = ele[i].latlng[0];
        longitude= ele[i].latlng[1];
        
        col.innerHTML=`
        <div class="card h-100">
        <div class="card-header">
        <h5 class="card-title text-center">${ele[i].name.common}</h5>
        </div>
        
        <div class="card-body text-center pt-3 pb-3">
        <img src=${ele[i].flags.png} class="card-img-top w-75 h-50 align-center"alt=""/>
        <div class="card-text">Capital:&nbsp;${ele[i].capital}</br>
         Region:&nbsp;${ele[i].region}</br>
         Country Code:&nbsp;${ele[i].car.signs}</div>
        <button class="btn btn-primary" onclick=fetchWeather(${latitude},${longitude})>Click for Weather</button>
        </div>
        </div>`
     row.append(col);
     }


     
})
/*
document.querySelector(".card").addEventListener("click",function(){
    const weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7a27d125a5477384e9e42d1270735c06`);
    weather
    .then((data1)=>data1.json())
    .then((e)=>{
        //console.log(e);
       
        //console.log(e.main.temp);
        window.alert(`Weather ${e.main.temp}`);
    });
});*/
function fetchWeather(lat,lng){
    console.log(lat,lng);
    const weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7a27d125a5477384e9e42d1270735c06`);
        weather
        .then((data1)=>data1.json())
        .then((e)=>{
            //console.log(e);
           
            //console.log(e.main.temp);
            window.alert(`Temperature ${e.main.temp} Feels_like ${e.main.feels_like} Temperature minimum ${e.main.temp_min} Temperature maximum ${e.main.temp_max} Pressure ${e.main.pressure} Humidity ${e.main.humidity} Weather: ${e.weather[0].main} ${e.weather[0].description}`);

        });

}
document.body.append(container);