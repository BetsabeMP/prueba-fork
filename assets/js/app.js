window.onload
    function oneButton(button) {
        var usuario = document.getElementById("userName").value;
        var texto = document.getElementById("welcome");
        texto.innerHTML= "Bienvenid@ " + usuario;
    }