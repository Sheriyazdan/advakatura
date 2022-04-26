$(document).ready(function () {
	$('.slider').slick({
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 800,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});
});

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.block-tabs span').forEach(el => {
		el.addEventListener('click', () => {
			el.parentElement.querySelectorAll('.block-tabs span').forEach(elem => elem.classList.remove('active'))
			el.classList.add('active')
		})
	})
	document.querySelectorAll('.block__main--items').forEach((elem, index) => {
		elem.addEventListener('mouseenter', () => {
			document.querySelectorAll('.block__main--items').forEach(el => {
				el.classList.remove('top')
			})
			ArrText = ['Предложения РКА в рамках подготовки проекта ежегодного послания «О состоянии конституционной законности в Республике Казахстан»', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laboriosam distinctio modi eaque aliquid nemo necessitatibus similique nostrum. At assumenda velit recusandae, praesentium cum id odio aut iure magni dolor?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit']
			document.querySelector('.block__main h2').innerText = ArrText[index]
			document.querySelector('.block__main').style.backgroundImage = `url(../img/main-background${index}.png)`
			elem.classList.add('top')
		})
	})
	document.querySelector('.lang_block').addEventListener('click', (e) => {
		document.querySelector('.other_lang').classList.toggle('active')
		e.stopPropagation()
	})
	window.addEventListener('click', () => {
		document.querySelector('.other_lang').classList.remove('active')
	})
	openMenu = (val) => {
		val.classList.toggle('active')
		document.querySelector('.header__bottom.header-bottom').classList.toggle('active')
		document.querySelector('header').classList.toggle('active')
		document.body.classList.toggle('hidden');
	}
});

let todayDate = new Date 
	const toDay = document.querySelectorAll('.section__calendar--date') 
	toDay.forEach(el => {
		el.innerText = `${todayDate.getDate()}.${("0" + (todayDate.getMonth() + 1)).slice(-2)}.${todayDate.getFullYear()}`
	})
	const selectContent = document.querySelector('.section__conference--content--items.main')
	const selectContentScroll = document.querySelector('.scroll')
	const selectContainer = document.querySelector('.main__tabs--content')
	const tabSelectMain = (val) => {
		selectContainer.innerHTML = selectContent.querySelector(`[data-attibute="${val}"]`).innerHTML
	}
	const tabSelectScroll = (val) => {
	document.querySelector('.section__block--content').innerHTML = selectContentScroll.querySelector(`[data-scroll="${val}"]`).innerHTML
}





const tabsBtn = document.querySelectorAll('.tabs-btn');
const tabItems = document.querySelectorAll('.tabs__row');
tabsBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {

			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabItems.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		} else {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabItems.forEach(function (item) {
				item.classList.remove('active');
			});
		}
	});
});


const menuLink = document.querySelectorAll('.menu__list');
menuLink.forEach((elem) => {
	elem.addEventListener('mouseenter', function () {
		elem.classList.add("active");
	})
	elem.addEventListener('mouseleave', function () {
		elem.classList.toggle("active");
	})
});

const mainBlock = document.querySelectorAll('.block__main--items');
const mainText = document.querySelectorAll('.main-block__text');

mainBlock.forEach((elem) => {
	elem.addEventListener('mouseenter', function () {
		console.log(elem)
		let linkBtn = elem;
		let tabLink = linkBtn.getAttribute('data-link');
		let currentTab = document.querySelector(tabLink);
		console.log(currentTab)
		if (!currentTab.classList.contains('active')) {
			mainBlock.forEach(function (elem) {
				elem.classList.remove('active');
			});
			mainText.forEach(function (elem) {
				elem.classList.remove('active');
			});
			linkBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
})

// mainBlock.forEach(function (item) {
// 	item.addEventListener('mouseover', function () {
// 		let currentBtn = item;
// 		let tabLink = currentBtn.getAttribute('data-link');
// 		let currentTab = document.querySelector(tabLink);

// 		if (!currentBtn.classList.contains('active')) {

// 			mainBlock.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 			mainText.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 			currentBtn.classList.add('active');
// 			currentTab.classList.add('active');
// 		} else {
// 			mainBlock.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 			mainText.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 		}
// 	});
// });

