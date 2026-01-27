const scriptURL = "https://script.google.com/macros/s/AKfycbwbo_dcpgvo0bMiL-TuanOBPhNGVdFGZv91iNkE5-1CXYovFTwKoJpKqVZabKOVpKnwZw/exec"
let form = document.getElementById("form_contact");

form.addEventListener("submit" , (e) => {
    e.preventDefault()

    fetch(scriptURL , {
        method:"POST",
        body: new FormData(form),      
    })
    .then((response) => {
        setTimeout(() =>{
            window.location.reload()
        },3000 )
    })
    
    .catch((error) => console.error("eroor!" , error.message))
})