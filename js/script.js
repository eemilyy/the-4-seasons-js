const season = document.getElementById('season-name')
var image = document.getElementById('img')

var data = new Date()

function summer_season(){
    document.body.classList.add('summer-class')
    image.src = "images/summer.jpg"
    season.innerText = ('Summer')
}

function autumn_season(){
    document.body.classList.add('autumn-class')
    image.src = "images/autumn.jpg"
    season.innerText = ('Autumn')
}

function winter_season(){
    document.body.classList.add('winter-class')
    image.src = "images/winter.jpg"
    season.innerText = ('Winter')
}

function spring_season(){
    document.body.classList.add('spring-class')
    image.src = "images/spring.jpg"
    season.innerText = ('Spring')
}

if((data.getMonth() + 1) >= 3 && (data.getMonth() + 1) < 6){ //march, april, may, june
    if((data.getMonth() + 1) == 3){
        if(data.getDate() < 21){
            summer_season()          
        }
        else{
            autumn_season()
        }
    }
    else{
        autumn_season()
    }
}
else if((data.getMonth() + 1) >= 6 && (data.getMonth() + 1) < 9){ //june, august, september
    if((data.getMonth() + 1) == 6){
        if(data.getDate() < 21){
            autumn_season()
        }
        else{
            winter_season()
        }    
    }
    else{
        winter_season()
    }
}
else if((data.getMonth() + 1) >= 9 && (data.getMonth() + 1) < 12){ //september, october, november, december
    if((data.getMonth() + 1) == 9){
        if(data.getDate() >= 23){
            spring_season()
        }
        else{
            winter_season()
        }
    }
    else{
        spring_season()
    }
}
else{ //december, january, february, march
    if((data.getMonth() + 1) == 12){
        if(data.getDate() < 21){
            spring_season()            
        }
        else{
            summer_season()
        }
    }
    else{
        summer_season()
    }
}



//const season_nadata.getMonth() + 1 = ["Autumn", "Summer", "Spring", "Winter"];

const month = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}