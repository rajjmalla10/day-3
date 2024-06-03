let btn1 = document.querySelector(".btn")
let current = "light";
let p1 = document.querySelector("#p1")

btn1.addEventListener("click",()=>{
    if(current=="light"){
        current = "dark"
        document.body.classList.add("dark-mode")
        p1.style.color = "white";
    }else{
        current = "light"
        document.body.classList.remove("dark-mode")
        p1.style.color = "black";
    }
    console.log(current)
})
