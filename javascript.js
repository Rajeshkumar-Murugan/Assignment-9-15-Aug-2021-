//XHTML
const getCountries = () =>{
    const xhr=new XMLHttpRequest()
  //data - endpoint (URL which contains the json data)
  xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
  xhr.responeType = 'json';
  xhr.onload = () => {
    const data = xhr.response;
   // console.log(data);
   // console.log(JSON.parse(data))

    let bigCountry = (JSON.parse(data))
    .filter((Country) => Country.population > 10_00_00_000)
    .map((Country) => Country.name + ':' +Country.population);
    
     console.log(bigCountry);

    
  }
  xhr.send()
}

getCountries()




