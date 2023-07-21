const $ = document;
const header = $.querySelector('header');
const color = $.querySelector('#brushColor');
const changeToggle = $.querySelector('#changeToggle');
const whiteBoard = $.querySelector('.whiteBoard');

changeToggle.addEventListener('click' , ()=> {
    console.log(color.value);
    header.style.backgroundColor = color.value
})

whiteBoard.addEventListener('mousemove' , (e)=> {
    let brush = $.createElement('div');
    brush.setAttribute('class' , 'brush');
    brush.style.top = `${e.y}px`;
    brush.style.left =`${e.x}px`;
    brush.style.backgroundColor = color.value;
    whiteBoard.append(brush)
})
