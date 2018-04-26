        /*********************************
        ********SLIDER @INDEX.HTML********
        **********************************/
var size = 0;
var pos = 0;
if (window.document.location === 'index.html' || 'anyOtherPage.html'){
    window.onload = function(){/*On load Highlight current*/ 
        spin('-', 'galeriafotos-slides', 'galeriafotos-bar', 'galeriafotos-current');
    };
}


var spin = function(incdec, items, bar, current){
    //recebe classes via parâmetros no corpo HTML
    var i = 0;
    var slides = document.getElementsByClassName(items);//fotos de cada li
    var bar = document.getElementsByClassName(bar)[0];//elemento barra
    var current = document.getElementsByClassName(current);
    //imagem position 0
    
    for (i = 0; i < slides.length; i++) {
        var arrElmnts = slides[i];//armazena todos os elementos
    }

    var style = window.getComputedStyle ? getComputedStyle(arrElmnts, null) : arrElmnts.currentStyle;//recebe informações do elemento pré-carregamento

    //indentifica tamanho do elemento automaticamente
    var marginLeft = parseInt(style.marginLeft) || 0;
    var marginRight = parseInt(style.marginRight) || 0;
    var borderLeft = parseInt(style.borderLeftWidth) || 0;
    var width = arrElmnts.offsetWidth || 0;//with padding
    var height = arrElmnts.offsetHeight || 0;//with padding
    var wide = (width+marginLeft+marginRight+borderLeft);

    var qtd = slides.length-1;
    var limit = (qtd/2)*(wide);//largura de 4 slides por tela

    var calcHeight = (218 - height) / 2;

    if (incdec == '-'){
        prev();
    } else {
        next();
    }

    function prev() {
        if (size < 0) {//avança espaço em pixel
            size += wide;
        }
        bar.style.left = size + "px";
        if(pos > 0){
            pos--;//posição de itens na lista
        }
    }

    function next() {
        if (size > -limit) {//recua espaço em pixels
            size -= wide;
        }
        bar.style.left = size + "px";
        if (pos < qtd) {
            pos++;//posição de itens na lista
        }
    }
        
    //highlight(slides, bar);//roda ao carregar

    //Current recebe o slide selecionado
    if (!((bar.className).match(/slider-bar/))) {
        var barUl = bar.getElementsByTagName("UL")[0].children; //childrens para ul> li
        for (var i = 0; i < barUl.length; i++) {
            (function (index) {
                barUl[i].onclick = function () {
                    //recebe o index clicado e repassa ao HTMLcollection
                    pos = index; //onclick index position
                    highlight(slides, bar);
                };
            })(i);
        }
    }

}