//write here your js

document.addEventListener("DOMContentLoaded", function() {
    // используй эту функцию, для элементов которые должны быть выполнены после загрузки HTML
    // Это как Document ready, только для vanila js
});


// курсор

let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor (e){
    let x = e.clientX;
    let y = e.clientY;

    // console.log(x,y);
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll ("a"));

console.log(links);

links.forEach((link) => {
    link.addEventListener("mouseover", () =>{
        innerCursor.classList.add("grow");
    });

    link.addEventListener("mouseleave", () =>{
        innerCursor.classList.remove("grow");
    });
    
});

// бургер
document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('open');
})

