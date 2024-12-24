

$(document).ready(function () {

	const HEADER = $('header');
	const NAV_LINKS = $('.nav-links');
	const HAMBURGER_BTN = $('.hamburger-button');
	const PROJECTS_CONTAINER = $('.projects-container');

	const MIN_LAPTOP_SCREEN = 769;


	$(".hamburger-button").click(function () {
		$(this).toggleClass('crossed')
		NAV_LINKS.toggleClass('active')
	})

	$(window).resize(function () {
		if (window.innerWidth >= MIN_LAPTOP_SCREEN) {
			NAV_LINKS.removeClass('active');
			HAMBURGER_BTN.removeClass('crossed');
		}
	})

	$(window).click(function (event) {
		if (event.target.className.includes('nav-link')) {
			NAV_LINKS.removeClass('active');
			HAMBURGER_BTN.removeClass('crossed');
		}
	})

	$(window).on('scroll', function () {
		const scrollTop = $(window).scrollTop();
		if (scrollTop <= 40 && HEADER.attr('class') !== 'blured') {
			HEADER.addClass('blured');
			HEADER.removeClass('dark');

		} else if (scrollTop > 40 && HEADER.hasClass('blured')) {
			HEADER.removeClass('blured');
			HEADER.addClass('dark');
		}
	});

	fetch(`https://api.github.com/users/dihcoder/repos`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Erro ao buscar usuários.');
			}
			return response.json();
		})
		.then(data => {
			if (data.length === 0) {
				PROJECTS_CONTAINER.html("<p>Nenhum projeto encontrado.</p>");
				return;
			}

			let projectHTML = '';
			data.forEach(repo => {
				console.log(repo.name);
				PROJECTS_CONTAINER.html(repo.name)
				projectHTML += `
                    <div class="project-card">
                        <img src="${repo.owner.avatar_url}" alt="Avatar">
						<div>
							<h4>${repo.name}</h4>
							<p><a href="https://api.github.com/users/${repo.full_name}" target="_blank">Ver projeto no GitHub</a></p>
						</div>
                    </div>
                `;
			});

			PROJECTS_CONTAINER.html(projectHTML);
		})
		.catch(error => {
			PROJECTS_CONTAINER.html(`<p>Erro: ${error.message}</p>`);
		});

})