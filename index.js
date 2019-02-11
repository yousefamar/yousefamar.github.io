let listing = Vue.component('listing', {
	props: [ 'title', 'subtitle', 'subsubtitle', 'description', 'image', 'link' ],
	template: '#listing'
});

new Vue({
	el: '#header',
	methods: {
		toggleMenu(event) {
			event.target.classList.toggle('active');
			let elem = document.getElementsByTagName('nav')[0];
			elem.style.maxWidth = elem.style.maxWidth ? null : window.innerWidth + 'px';
		},
		closeMenu(event) {
			let navbar = document.getElementsByTagName('nav')[0];
			if (navbar.style.maxWidth) {
				document.getElementById('menu').classList.toggle('active');
				navbar.style.maxWidth = null;
			}
		}
	}
});

new Vue({
	el: '#content',
	components: {
		listing: listing
	},
	data: {
		input: '#hello',
		publications: publications,
		awards: awards,
		experience: experience,
		education: education,
		volunteering: volunteering,
		projects: projects,
		skills: skills
	},
	created: function () {
		// Fix annoying navbar stuck width bug
		let navbar = document.getElementsByTagName('nav')[0];
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 992)
				navbar.style.maxWidth = '100%';
			else {
				navbar.style.maxWidth = null;
				document.getElementById('menu').classList.remove('active');
			}
		});
		window.addEventListener('scroll', () => {
			if (window.innerWidth <= 768)
				return;
			let navLock = document.getElementById('navLockPosition');
			if (window.scrollY >= navLock.offsetTop) {
				navbar.parentElement.classList.add('fixed');
				navbar.parentElement.parentElement.style.paddingBottom = '3em';
			}
			else {
				navbar.parentElement.classList.remove('fixed');
				navbar.parentElement.parentElement.style.paddingBottom = 0;
			}
		});
	},
	methods: {
		toggleSection(event) {
			event.target.classList.toggle('active');
			let elem = event.target.parentElement.parentElement.lastElementChild;
			elem.style.maxHeight = elem.style.maxHeight ? null : elem.scrollHeight + 'px';
		}
	}
});
