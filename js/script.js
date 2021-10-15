const season = document.getElementById('season-name')
var image = document.getElementById('img')

var data = new Date()

var mes = 9
var dia = 23

/*if(((mes + 1) >= 3 && dia >= 21) && ((mes + 1) <= 6 && dia < 21)){
    season.innerText = ('Autumn')
}
else if(((mes + 1) >= 6 && dia >= 21) && ((mes + 1) <= 9 && dia < 23)){
    season.innerText = ('Winter')
}
else if(((mes + 1) >= 9 && dia >= 23) && ((mes + 1) <= 12 && dia < 21)){
    season.innerText = ('Spring')
}
else if(((mes + 1) >= 12 && dia >= 21) && ((mes + 1) <= 3 && dia < 21)){
    season.innerText = ('Summer')
}*/

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

if((mes) >= 3 && (mes) < 6){ //march, april, may, june
    if((mes) == 3){
        if(dia < 21){
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
else if((mes) >= 6 && (mes) < 9){ //june, august, september
    if((mes) == 6){
        if(dia < 21){
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
else if((mes) >= 9 && (mes) < 12){ //september, october, november, december
    if((mes) == 9){
        if(dia >= 23){
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
    if((mes) == 12){
        if(dia < 21){
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



//const season_names = ["Autumn", "Summer", "Spring", "Winter"];

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