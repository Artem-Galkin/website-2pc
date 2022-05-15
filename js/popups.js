//
// 1."Вешаем" события - проверку на ссылки.при клике на любой объект с классом Link*/
const popupLinks = document.querySelectorAll('popup-link');
//Мы получаем в переменную body сам тег body, применяется для того, чтобы его блоеировать*/
const body = document.querySelector('body');
//Полячаем все объекты с классом Lock-padding*/
const lockPadding = document.querySelectorAll(".lock-padding");
//переменная unlok, которая по умолчанию - true, нужна для того, чтобы небыло двойных нажатий */
let unlock = true;
//переменная, которая равна 800мл.сек, которая указана в html в свойстве tranzition". Эти значения должны быть одинаковы  */
const timeout = 800;

//1. Делаем проверку - существуютли такие ссылки на страници, включая цикл и бекая по странице, получая в каждую переменную POPUP link и на неё "вешаю события" при клике. Я беру значение "href" и убираю тз него значение "#", получая "чистое имя, как в примере - "POPUP"   */
if (popupLinks.length > 0){
    for (let index = 0; index < popupLinks.length; index++){
     const popuLink = popupLinks[index];
     popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');    
        const curentPopup = document.getElementById(popupName);   
        popupOpen(curentPopup);
        e.preventDefault();
    });   
    }
}

//Функция открытия POPUP. Сюда мы передаем объект по имени, по идентификатору в данном случае. Далее мы проверяем есть ли такой объект. И открыта ли у нас */
function popupOpen(curentPopup){
    if (curentPopup && unlock ){
        const popupActive = document.querySelector('.popup.open');
        if (popupActive){
            popupClose(popupActive,false);  
        } else {
                bodylock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
                    if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                    }    
                });
    } 
}     


//
// Объекты, которые закрывают POPUP*/
function popupClose(popuActive, doUnlock = true){
    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if(popupCloseIcon.length>0){
        for(let index = 0; index < popupCloseIcon.length; index++){
            const el = popupCloseIcon[index];
            el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });   
    };
}

function bodyLock(){
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetwidth + 'px';
    if(lockPadding.length>0){
        for (let index = 0; index < lockPadding.length; index++){
       const el = lockPadding[index];
       el.style.paddingRight = lockPaddingValue; 
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}


function bodyUnlock(){
    setTimeout(function(){
        if(lockPadding.length>0){
            for(let index = 0; index < lockPadding.length; index++){
            const el = LockPadding[index];
            el.style.paddingRight = '0px';
            }
    }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e){
    if(e.which === 27){
        const popuActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function(){
    // проверяем поддержку
        if (!Element.prototype.closest){
            // реализуем
            Element.prototype.closest = function (css){
                var node = this;
                while (node){
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
         };
    }

})();
(function(){
    // проверяем поддержку
    if (!Element.prototype.matches){
        //определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector||
        Element.prototype.webkitMatchesSelector||
        Element.prototype.mozMatchesSelector||
        Element.prototype.msMatchesSelector;
    }
})()
