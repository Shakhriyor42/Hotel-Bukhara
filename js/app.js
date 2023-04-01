//gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// появление элементов при скролле
function onEntry(entry) {
  
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll("#svg1");

for (let elm of elements) {
  observer.observe(elm);
};



if (ScrollTrigger.isTouch !== 1) {

  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos >= currentScrollPos) {
        document.getElementById('header').style.top = '0';
    } else {
        document.getElementById('header').style.top = '-80px';
    }
    prevScrollPos = currentScrollPos;
  }

  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;

  // Клонируем меню, чтобы задать свои стили для мобильной версии
  const menu = document.querySelector("#menu").cloneNode(1);

  // При клике на иконку hamb вызываем ф-ию hambHandler
  hamb.addEventListener("click", hambHandler);

  // Выполняем действия при клике ..
  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  // Здесь мы рендерим элементы в наш попап
  function renderPopup() {
    popup.appendChild(menu);
  }

  // Код для закрытия меню при нажатии на ссылку
  const links = Array.from(menu.children);

  // Для каждого элемента меню при клике вызываем ф-ию
  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  // Закрытие попапа при клике на меню
  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  };

	// ScrollSmoother.create({
	// 	wrapper: '.wrapper',
	// 	content: '.content',
	// 	smooth: 1.5,
	// 	effects: true
	// })

  // gsap.fromTo('.nearUs__line', { strokeDashoffset: 1000 }, {
	// 	strokeDashoffset: 0,
	// 	scrollTrigger: {
	// 		trigger: '.nearUs__link',
  //           duration: 3
	// 	}
	// })


  

}


