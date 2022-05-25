window.onload = function () {
    let cores = ['White', 'Beige', 'Yellow', 'Orange', 'Red', 'Pink', 'Purple', 'Blue', 'Green', 'Brown', 'Grey', 'Black']

    let tipoDeTexto = ['Arial', 'Times New Roman', 'Helvética', 'Times', 'Courier New', 'Verdana', 'Courier', 'Arial Narrow', 'Candara', 'Geneva', 'Calibri', 'Optima', 'Cambria', 'Garamond', 'Perpetua', 'Monaco', 'Didot', 'Brush Script MT', 'Lucida Bright', 'Copperplate']

    let tagCorDeFundo = document.getElementById('corDeFundo');
    let tagCorDoTexto = document.getElementById('corDoTexto');
    let tagTipoFonte = document.getElementById('tipoFonte');
    let tagTamanhoFonte = document.getElementById('tamanhoFonte');
    let tagEspacoLinha = document.getElementById('espacoLinha');
    let tagBotao = document.getElementById('btnCadastrar');
    let taguserCad = document.getElementById('userCad');


    populabox(cores, tagCorDeFundo);
    populabox(tipoDeTexto, tagTipoFonte);
    populabox(cores, tagCorDoTexto);
    populaTamanhos(12, 30, tagTamanhoFonte);
    populaTamanhos(2, 7, tagEspacoLinha);

    tagBotao.addEventListener('click', function () {
        if (typeof (Storage) != "undefined") {
            
            if (taguserCad.value === '') {
                alert('Insura um usuario valido')
            } else {
                localStorage
            }
            
            
            
            if (localStorage.count) {
                let count = parseInt(localStorage.count);
                count += 1;
                localStorage.count = count;
                document.getElementById("count").innerHTML = count;
            } else {
                localStorage.count = 1;
                document.getElementById("count").innerHTML = 1;
            }
        } else {
            document.write("Sem suporte para Web Storage"); // s
        }


        
    });


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
        for (let n = inicio; n < fim; n += 1) {
            let tag = criaTeg('option');
            tag.innerText = n;
            tag.value = n;
            local.appendChild(tag);
        };
    };


}