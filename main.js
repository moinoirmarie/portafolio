function createGrid(size) {
    let ratioW = Math.floor($(window).width()/size),
        ratioH = Math.floor($(window).height()/size);
    
    let parent = $('<div />', {
        class: 'grid', 
        width: ratioW  * size, 
        height: ratioH  * size
    }).addClass('grid').appendTo('footer');

    for (let i = 0; i < ratioH; i++) {
        for(let p = 0; p < ratioW; p++){
            $('<div />', {
                width: size - 1, 
                height: size - 1
            }).appendTo(parent);
        }
    }
}

createGrid(50);
