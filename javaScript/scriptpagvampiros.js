let label_carrossel = document.getElementsByClassName('label-fotos')

let img_carrocel = document.getElementsByName('img-carrossel')



label_carrossel[0].addEventListener('click', function () {
    limparCor_label()
    label_carrossel[0].style.backgroundColor = "purple";
});


label_carrossel[1].addEventListener('click', function () {
    limparCor_label()
    label_carrossel[1].style.backgroundColor = "purple";
});

label_carrossel[2].addEventListener('click', function () {
    limparCor_label()
    label_carrossel[2].style.backgroundColor = "purple";
});


function limparCor_label(){
    for (var cont = 0;cont<=label_carrossel.length-1;cont++) {
        label_carrossel[cont].style.backgroundColor = "white"; 
    }  
}