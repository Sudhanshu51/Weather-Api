let cityname=document.getElementById('cityname');
let citydetails=document.getElementById('citydetails');
let tempreature=document.getElementById('tempreature');
let icons=document.getElementById('icon')
let takedate=document.getElementById('date')
let temps=document.getElementById('temp')
let humids=document.getElementById('humid')
let winds=document.getElementById('wind')


let fetchdetails =async()=>{
    if(cityname.value.length == 0)
    {
    alert("Enter valid city name")
    }

    else{
        //api fetch
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let responce= await fetch(url)
        let data =await responce.json()
        console.log(data);
        citydetails.innerText=`${data.name},${data.sys.country}`
        tempreature.innerText=`${data.main.temp}`
        tempreature.innerHTML=`${data.main.temp}<sup>o</sup>C`
        if(Math.round(data.main.temp)>30)
        {
         tempreature.innerHTML=`${data.main.temp}<sup>o</sup>🌞`
         icons.innerText=`Sunny🌞`  
         
        }
        else if(Math.round(data.main.temp)>20&&Math.round(data.main.temp)<30)
        {
            tempreature.innerHTML=`${data.main.temp}<sup>o</sup>🌥️` 
           
        }
        else if(Math.round(data.main.temp)>20)
        {
            tempreature.innerHTML=`${data.main.temp}<sup>o</sup>☁️`    
        }
        else{
            tempreature.innerHTML=`${data.main.temp}<sup>o</sup>☃️`    
        }

        humids.innerText=`Humidity :${data.main.humidity}`
        temps.innerText=`Feel like :${data.main.feels_like}`
        winds.innerText=`wind:${data.wind.speed}`
        let date=new Date()
        takedate.innerText=`🗓️${date.toDateString()}`

    }
}