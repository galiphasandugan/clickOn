const colorsArray =["red","green","yellow","pink","purple"];

        const btn = document.getElementById("btn");
        const color = document.querySelector(".color");

    btn.addEventListener("click",function(){
            const randomNumber = Math.floor(Math.random()*colorsArray.length)
            document.body.style.backgroundColor = colorsArray[randomNumber];
            color.innerHTML =colorsArray[randomNumber];
        });