let moreBtn = document.querySelectorAll('.more');

for(var i = 0; i < moreBtn.length; i++) {
    moreBtn[i].addEventListener('click', e => {
        if(e.target.nextElementSibling) {
            e.target.nextElementSibling.classList.add('active');
        }
    });
}

let modalWindow = document.querySelectorAll('.modalWindow');
let modalWindowOpacity = document.querySelectorAll('.modalWindow .opacity');
let modalWindowClose = document.querySelectorAll('.modalWindow .close');

const closeModal = () => {
    for(var i = 0; i < modalWindow.length; i++) {
        modalWindow[i].classList.remove('active');
    }
}

for(var i = 0; i < modalWindow.length; i++) {
    modalWindowOpacity[i].addEventListener('click', e => closeModal());
    modalWindowClose[i].addEventListener('click', e => closeModal());
}