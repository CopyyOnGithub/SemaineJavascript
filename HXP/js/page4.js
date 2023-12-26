"use strict"

const menu = document.querySelector(".menu")
        const interactive = document.querySelector(".participer")

        menu.addEventListener('click',()=>{
        interactive.classList.toggle('mobile-menu')
        })

document.getElementById('bouton').addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the default form submission behavior
        Messagebienvenue();
});

function Messagebienvenue() {
        // Get values from input fields
        let firstName = document.getElementById('prenom').value.trim();
        let lastName = document.getElementById('nom').value.trim();
        let email = document.getElementById('Email').value.trim();
        let password = document.getElementById('mdp').value.trim();

        // Check if all required fields are filled
        if (firstName !== '' && lastName !== '' && email !== '' && password.length>=7) {
            // Display welcome message
                let message = document.getElementById('message');
                message.textContent = 'Inscription effectuée, bienvenue ' + firstName + ' ' + lastName;
                message.style.color = 'black';
        }
        else if (firstName !== '' && lastName !== '' && email !== '' && password.length<7){
                let message = document.getElementById('message')
                message.textContent = 'Entrez un mot de passe avec 7 caractères ou plus.';
                message.style.color = '#990000';
        }else{
                let message = document.getElementById('message');
                message.textContent = 'Veuillez remplir tous les champs.';
                message.style.color = '#990000';
        }
}

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