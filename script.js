document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})
document.querySelectorAll('.story-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		console.log('Clicked')
		btn.classList.toggle('change')
		btn.nextElementSibling.classList.toggle('change')
	})
})