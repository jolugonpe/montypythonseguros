//Nav
(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();


//Carousel
(function(){
    
    const sliders = [...document.querySelectorAll('.carousel__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentCarousel = document.querySelector('.carousel__body--show').dataset.id;
        value = Number(currentCarousel);
        value+= add;


        sliders[Number(currentCarousel)-1].classList.remove('carousel__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('carousel__body--show');

    }

})();


//Seguros
(function(){
    const titleSeguros = [...document.querySelectorAll('.seguros__title')];
    console.log(titleSeguros)

    titleSeguros.forEach(seguros =>{
        seguros.addEventListener('click', ()=>{
            let height = 0;
            let answer = seguros.nextElementSibling;
            let addPadding = seguros.parentElement.parentElement;

            addPadding.classList.toggle('seguros__padding--add');
            seguros.children[0].classList.toggle('seguros__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();


