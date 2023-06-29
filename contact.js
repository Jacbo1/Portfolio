const form = document.getElementById('contactform')
const success = document.getElementById('submitsuccess')
const fail = document.getElementById('submitfail')

function show(element) {
	element.style = "display: inline-block;"
	if (element.classList.contains('appear'))
	{
		element.classList.remove('appear')
		setTimeout(() => {
			element.classList.add('appear')
		}, 10)
	}
	else element.classList.add('appear')
}

function hide(element) {
	element.style = "display: none;"
}

hide(success)
hide(fail)

form.addEventListener('submit', function(e) {
	e.preventDefault()

	emailjs.sendForm(
		'service_yv2gdqo',
		'template_xpubxz1',
		this
	).then(() => {
		hide(fail)
		show(success)
		form.reset()
	}, (error) => {
		hide(success)
		show(fail)
	})
})