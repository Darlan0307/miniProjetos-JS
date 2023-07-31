const changebtn = document.getElementById('change-theme')

const toggleTheme = () =>{
    document.body.classList.toggle('dark')
}

function loadTheme (){
    const response = localStorage.getItem('dark');

    if(response){
        toggleTheme();
    }
}

loadTheme();

changebtn.addEventListener("change",() =>{
    toggleTheme();

    localStorage.removeItem('dark');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark',1);
    }
})