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
			document.querySelector('.block__main').style.background = `url(../img/main-background${index}.png)`
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
	}
});
