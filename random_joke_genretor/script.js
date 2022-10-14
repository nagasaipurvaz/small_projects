const jokebox=document.getElementById("joke");

const but=document.getElementById("but");

const url="https://v2.jokeapi.dev/joke/Any";


function getjoke(){


    jokebox.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {jokebox.textContent= item.joke ;
     jokebox.classList.add("fade") })
    
};

but.addEventListener("click",getjoke);



