const url = "https://type.fit/api/quotes/";

 fetch(url)
.then(response =>{
     return response.json();
})
.then(data=>{
this.data=data;
console.log(data);

let Button=document.querySelector(".button")
Button.addEventListener("click",function(){
    let randomquotes = Math.floor(Math.random()*(data.length));
    let quotes= data[randomquotes].text;
    document.querySelector(".text").innerHTML=quotes;

    
})
})