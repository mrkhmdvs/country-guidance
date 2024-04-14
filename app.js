let searchB=document.querySelector('#btn'),
input=document.querySelector('#input');

searchB.addEventListener('click', ()=>{
    let countryN=input.value;
    let apiUrl=`https://restcountries.com/v3.1/name/${countryN}?fullText=true`
    console.log(apiUrl)
    fetch(apiUrl)
    .then((Response)=> Response.json())
    .then((data)=>{
    console.log(data[0])
    console.log(data[0].capital[0])
    console.log(data[0].flags.svg)
    console.log(data[0].name.common)
    console.log(data[0].continents[0])
    console.log(Object.keys(data[0].currencies)[0])
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
    console.log(Object.values(data[0].languages).toString().split(",").join(",")
    )
    result.innerHTML=`
    <img src='${data[0].flags.svg}' class='flags'>
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
    <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
    </div>
</div>
    <div class="wrapper">
    <div class="data-wrapper">
         <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
    </div>
</div>
    <div class="wrapper">
    <div class="data-wrapper">
         <h4>Population:</h4>
        <span>${data[0].population}</span>
    </div>
</div>
    <div class="wrapper">
    <div class="data-wrapper">
         <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
    </div>
</div>
    <div class="wrapper">
    <div class="data-wrapper">
         <h4>Most used Languages:</h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
    </div>
</div>
    `;
    })
    .catch(()=>{
        if(countryN.length==0){
            result.innerHTML-`<h3>Input field empty</h3>`;
        }else{
            result.innerHTML=`<h3>Not found</h3>`
        }
    })
}

)