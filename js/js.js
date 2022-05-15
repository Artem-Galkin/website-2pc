// Обеспечить запуск скрипта, который подключен до кода (после загрузки страницы). За это отвечает функция window.onload
window.onload = function(){   
	// Определяет прокрутку скрола до х и у по нажатию кнопки
	window.scrollTo(x,y)  

	var scrolled;
	var time;
	document.getElementById('top').onclick = function(){
		scrolled = window.pageYOffset;
		window.scrollTo(0,0);
	}

}