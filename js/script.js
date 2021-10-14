const season = document.getElementById('season-name')
var image = document.getElementById('img')

var data = new Date()

var mes = 12
var dia = 25

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
    image.src = "images/summer.jpg"
    document.body.classList.add('summer-class')
    season.innerText = ('Summer')
}

function autumn_season(){
    image.src = "images/autumn.jpg"
    document.body.classList.add('autumn-class')
    season.innerText = ('Autumn')
}

function winter_season(){
    image.src = "images/winter.jpg"
    document.body.classList.add('winter-class')
    season.innerText = ('Winter')
}

function spring_season(){
    image.src = "images/spring.jpg"
    document.body.classList.add('spring-class')
    season.innerText = ('Spring')
}

if((mes) >= 3 && (mes) < 6){ //march, april, may, june
    autumn_season()
    if((mes) == 3){
        if(dia >= 21){
            season.innerText = ('Autumn')
        }
        else{
            summer_season()
        }
    }
    else{
        season.innerText = ('Autumn')
    }
}
else if((mes) >= 6 && (mes) < 9){ //june, august, september
    winter_season()
    if((mes) == 6){
        if(dia >= 21){
            season.innerText = ('Winter')
        }
        else{
            autumn_season()
        }
    }
    else{
        season.innerText = ('Winter')
    }
}
else if((mes) >= 9 && (mes) < 12){ //september, october, november, december
    spring_season()
    if((mes) == 9){
        if(dia >= 23){
            season.innerText = ('Spring')
        }
        else{
            winter_season()
        }
    }
    else{
        season.innerText = ('Spring')
    }
}
else{ //december, january, february, march
    summer_season()
    if((mes) == 12){
        if(dia >= 21){
            season.innerText = ('Summer')
        }
        else{
            spring_season()
        }
    }
    else{
        season.innerText = ('Summer')
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