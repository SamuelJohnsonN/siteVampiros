let label_carrocel = document.getElementsByName('label-fotos')


label_carrocel[0].addEventListener('click', function() {
    label_carrocel[0].style.backgroundColor = "pink";
    label_carrocel[1].style.backgroundColor = "white";
});


label_carrocel[1].addEventListener('click',function() {
    label_carrocel[1].style.backgroundColor = "pink";
    label_carrocel[0].style.backgroundColor = "white";
});

