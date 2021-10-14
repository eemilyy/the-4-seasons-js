const season = document.getElementById('season-name')

var data = new Date()

var mes = 3
var dia = 21


//season.classList.add('spring-class')
document.body.classList.add('winter-class')

season.innerText = ("Helloooo")

console.log(dia)
console.log(mes+1)

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

if((mes) >= 3 && (mes) < 6){ //march, april, may, june
    if((mes) == 3){
        if(dia >= 21){
            season.innerText = ('Autumn')
        }
        else{
            season.innerText = ('Summer')
        }
    }
    else{
        season.innerText = ('Autumn')
    }
}
else if((mes) >= 6 && (mes) < 9){ //june, august, september
    if((mes) == 6){
        if(dia >= 21){
            season.innerText = ('Winter')
        }
        else{
            season.innerText = ('Autumn')
        }
    }
    else{
        season.innerText = ('Winter')
    }
}
else if((mes) >= 9 && (mes) < 12){ //september, october, november, december
    if((mes) == 9){
        if(dia >= 23){
            season.innerText = ('Spring')
        }
        else{
            season.innerText = ('Winter')
        }
    }
    else{
        season.innerText = ('Spring')
    }
}
else{ //december, january, february, march
    if((mes) == 12){
        if(dia >= 21){
            season.innerText = ('Summer')
        }
        else{
            season.innerText = ('Spring')
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