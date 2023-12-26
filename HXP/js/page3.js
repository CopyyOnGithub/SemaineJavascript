"use strict"

const menu = document.querySelector(".menu")
        const interactive = document.querySelector(".participer")

        menu.addEventListener('click',()=>{
        interactive.classList.toggle('mobile-menu')
        })

function switchDarkMode() {
        const darkModeActif = document.body.classList.contains("dark-mode");
        if (darkModeActif){
                document.body.classList.remove("dark-mode");
        }else{
                document.body.classList.add("dark-mode");
        }
}

document.addEventListener("DOMContentLoaded", ()=>{
        const boutonDarkMode = document.getElementById("DarkMode");
        boutonDarkMode.addEventListener("click", switchDarkMode);
});