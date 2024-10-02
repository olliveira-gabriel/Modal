const modal = document.getElementById('modal');

function abrir_modal(){
    modal.style.display = "block";
}

function fechar_modal(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        fechar_modal();
    }
}