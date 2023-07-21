const $ = document;
const header = $.querySelector('header');
const color = $.querySelector('#brushColor');
const width = $.querySelector('#brushWidth');
const undo = $.querySelector('#undoBtn');
const deleteBtn = $.querySelector('#deleteBtn');
const whiteBoard = $.querySelector('.whiteBoard');

whiteBoard.addEventListener('mousemove' , (e)=> {
    if(e.altKey){

    }else {
        let brush = $.createElement('div');
        brush.setAttribute('class' , 'brush');
        brush.style.top = `${e.y-75}px`;
        brush.style.left =`${e.x}px`;
        brush.style.width = `${width.value}px`;
        brush.style.height = `${width.value}px`;
        brush.style.backgroundColor = color.value;
        whiteBoard.append(brush)
    }
})

undo.addEventListener('click' , ()=> {
    if(whiteBoard.childElementCount > 0){
        whiteBoard.lastChild.remove()
    }
})

deleteBtn.addEventListener('click' , ()=> {
    let all = Array.from(whiteBoard.childNodes)
    all.forEach((item)=> {
        item.remove();
    })
})