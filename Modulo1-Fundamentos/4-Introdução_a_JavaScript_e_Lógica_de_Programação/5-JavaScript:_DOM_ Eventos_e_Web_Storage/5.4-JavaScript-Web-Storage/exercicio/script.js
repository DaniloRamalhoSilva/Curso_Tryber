window.onload = function () {
    let cores = ['White', 'Beige', 'Yellow', 'Orange', 'Red', 'Pink', 'Purple', 'Blue', 'Green', 'Brown', 'Grey', 'Black']

    let tipoDeTexto = ['Arial', 'Times New Roman', 'Helvética', 'Times', 'Courier New', 'Verdana', 'Courier', 'Arial Narrow', 'Candara', 'Geneva', 'Calibri', 'Optima', 'Cambria', 'Garamond', 'Perpetua', 'Monaco', 'Didot', 'Brush Script MT', 'Lucida Bright', 'Copperplate']

    let tagCorDeFundo = document.getElementById('corDeFundo');
    let tagCorDoTexto = document.getElementById('corDoTexto');
    let tagTipoFonte = document.getElementById('tipoFonte');

    let tagTamanhoFonte = document.getElementById('tamanhoFonte');
    let tagEspacoLinha = document.getElementById('espacoLinha');


    populabox(cores, tagCorDeFundo);
    populabox(tipoDeTexto, tagTipoFonte);
    populabox(cores, tagCorDoTexto);
    populaTamanhos(12, 30, tagTamanhoFonte);
    populaTamanhos(2, 7, tagEspacoLinha);

    function criaTeg(tag) {
        return document.createElement(tag);
    };

    function populabox(arrey, local) {
        for (let string of arrey) {
            let tag = criaTeg('option');
            tag.innerText = string;
            tag.value = string;
            local.appendChild(tag);
        };
    };

    function populaTamanhos(inicio, fim, local) {        
        for (let n = inicio; n < fim; n += 1 ) {
            let tag = criaTeg('option');
            tag.innerText = n;
            tag.value = n;
            local.appendChild(tag);
        };
    };


}