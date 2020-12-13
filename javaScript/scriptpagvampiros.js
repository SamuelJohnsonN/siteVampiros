let label_carrossel = document.getElementsByClassName('label-fotos')

let img_carrocel = document.getElementsByName('img-carrossel')

window.onload = function() {
    label_carrossel[0].style.backgroundColor = "#7b5fe2";
}


label_carrossel[0].addEventListener('click', function () {
    limparCor_label()
    label_carrossel[0].style.backgroundColor = "#7b5fe2";
});


label_carrossel[1].addEventListener('click', function () {
    limparCor_label()
    label_carrossel[1].style.backgroundColor = "#7b5fe2";
});

label_carrossel[2].addEventListener('click', function () {
    limparCor_label()
    label_carrossel[2].style.backgroundColor = "#7b5fe2";
});


function limparCor_label(){
    for (var cont = 0;cont<=label_carrossel.length-1;cont++) {
        label_carrossel[cont].style.backgroundColor = "white"; 
    }  
}