// Q. Solving problems using array functions on rest countries data.


//setting up a http request object
let xhr = new XMLHttpRequest();

//create and send a GET request
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

//setting up listener
xhr.onload = function(){
    // console.log(this.responseText);
    if (xhr.status >= 200 || xhr.status < 300) {
        
        let data = JSON.parse(this.responseText);
  
        // Get all the countries from Asia continent /region using Filter function
        const asiaCont = data.filter(cont => 
            cont.region === "Asia"
        )
        console.log("Countries under Asia region")
        console.log(asiaCont);

        //Get all the countries with a population of less than 2 lakhs using Filter function
        const population = data.filter(pop => 
            pop.population < 200000
        )
        console.log("Countries having population less than 2 lakhs")
        console.log(population);

        //Print the following details name, capital, flag using forEach function
        data.forEach(element => {
            console.log(`Name: ${element.name} Capital: ${element.capital} Flag: ${element.flag}`);
        });

        //Print the total population of countries using reduce function
        const totalPop = data.reduce((total, pop) => {
            return total += total + pop.population
        }, 0)
        console.log(`Total population ${totalPop}`);
        
    }else {
        console.log("Request Failed");
    }
};

xhr.send();