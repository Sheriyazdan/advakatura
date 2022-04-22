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
	}
});

