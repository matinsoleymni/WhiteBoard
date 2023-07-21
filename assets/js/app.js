const $ = document;
const header = $.querySelector('header');
const color = $.querySelector('#brushColor');
const width = $.querySelector('#brushWidth');
const changeToggle = $.querySelector('#changeToggle');
const whiteBoard = $.querySelector('.whiteBoard');

changeToggle.addEventListener('click' , ()=> {
    console.log(color.value);
    header.style.backgroundColor = color.value
})

whiteBoard.addEventListener('mousemove' , (e)=> {
    console.log(width.value);
    let brush = $.createElement('div');
    brush.setAttribute('class' , 'brush');
    brush.style.top = `${e.y-75}px`;
    brush.style.left =`${e.x}px`;
    brush.style.width = `${width.value}px`;
    brush.style.height = `${width.value}px`;
    brush.style.backgroundColor = color.value;
    whiteBoard.append(brush)
})
