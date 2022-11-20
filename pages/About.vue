<template>
	<div class="main app-bg pl-4 pr-4">
		<IlContainer class="app-bg-secondary pb-10 w-full">
			<div class="animate__animated animate__fadeIn">
				<h1 class="text-2xl md:text-3xl ml-3 flex flex-row items-center mt-5 mb-5">
					<TildeIcon />&nbsp;&nbsp;Sobre mim
				</h1>

				<div class="grid grid-flow-row-dense grid-cols-1 gap-4 mt-auto mb-auto md:grid-cols-2">
					<div class="w-10/12 rounded overflow-hidden shadow-lg ml-auto mr-auto">
						<NuxtImg class="w-full" src="images/redes.png" alt="Sunset in the mountains" />

						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 border-b">
								<h2>
									Formado em Redes de Computadores pelo
									<IlLink
										style="display: inline"
										href="https://ctd.ifsp.edu.br/"
										target="_blank"
										underline
										color="#41f0d1"
										external
										>Instituto Federal de São Paulo Câmpus Catanduva</IlLink
									>
								</h2>
							</div>
							<p class="text-justify">
								Em 2019 iniciei meus estudos na área da tecnologia, e foi neste curso juntamente com o
								ensino médio que tive meu primeiro contado com o desenvolvmento web.
							</p>
						</div>
					</div>

					<div class="w-10/12 rounded overflow-hidden shadow-lg ml-auto mr-auto">
						<NuxtImg class="w-full" src="images/ads.png" alt="Sunset in the mountains" />

						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 border-b">
								<h2>
									Cursando Análise e Desenvolvimento de Sistemas pelo
									<IlLink
										style="display: inline"
										href="https://ctd.ifsp.edu.br/"
										target="_blank"
										underline
										color="#41f0d1"
										external
										>Instituto Federal de São Paulo Câmpus Catanduva</IlLink
									>
								</h2>
							</div>
							<p class="text-justify">
								Iniciei a graduação em 2022 com previsão de término em 2024, e neste curso estou
								melhorando meus conhecimentos na construção de sistemas web e mobile.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="animate__animated animate__fadeIn mt-16">
				<h1 class="text-2xl md:text-3xl ml-3 mt-3 flex flex-row items-center mb-5">
					<BookmarksIcon />&nbsp;&nbsp;Marcos
				</h1>

				<div class="grid grid-flow-row-dense grid-cols-1 gap-4 mt-auto mb-auto md:grid-cols-2">
					<div class="flex flex-col w-10/12 rounded overflow-hidden shadow-lg ml-auto mr-auto">
						<NuxtImg class="w-full" src="images/empreendedorismo.png" alt="Sunset in the mountains" />

						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 border-b">
								<h2>
									Vencedor na competição de desafios da semana global de empreendedorismo de
									Catanduva.
								</h2>
								<h3 class="text-base">
									Em parceria com
									<IlLink href="https://www.linkedin.com/in/luiz-af-gomes/" target="_blank" underline
										>Luiz A. F. Gomes</IlLink
									>
								</h3>
							</div>
							<p class="text-justify">
								Neste evento, empresas de catanduva propuseram desafios para que equipes criacem
								soluções eficientes para resolução de problemas.
							</p>
							<p class="text-justify">
								Nosso desafio foi criar algo que facilitasse a contagem de peças geradas por um torno
								CNC analógico.
							</p>
							<p class="text-justify">
								Nossa solução foi a implantação de uma inteligência artificial que a partir de visão
								computacional detectasse a fabricação de peças e criasse a contagem de modo que fosse
								facilmente acessível pela empresa.
							</p>
						</div>
						<div class="flex flex-row justify-between items-center mt-auto ml-5 mr-5 pb-5">
							<IlLink
								href="https://www.linkedin.com/posts/lucasgardini_vencedores-em-primeiro-lugar-na-competi%C3%A7%C3%A3o-activity-6865318510134878208-pTQ7?utm_source=share&utm_medium=member_desktop"
								target="_blank"
								underline
								color="#41f0d1"
								external
								>Publicação LinkedIn</IlLink
							>

							<IlLink
								href="https://www.facebook.com/prefeituradecatanduva/posts/pfbid0BgpY42B2w9pJGqJMN9NSTau4zQHZJB4a9st381dcHR9tw9RBLoBHVqqA9hSfmewhl"
								target="_blank"
								underline
								color="#41f0d1"
								external
								>Publicação Facebook</IlLink
							>
						</div>
					</div>

					<div class="flex flex-col w-10/12 rounded overflow-hidden shadow-lg ml-auto mr-auto">
						<NuxtImg class="w-full" src="images/VInterif.png" alt="Sunset in the mountains" />

						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 border-b">
								<h2>Integrante de equipe competidora na V Maratona de Programação InterIF 2022</h2>
								<h3 class="text-base">
									Em parceria com
									<IlLink href="https://www.linkedin.com/in/luiz-af-gomes/" target="_blank" underline
										>Luiz A. F. Gomes</IlLink
									>
									e
									<IlLink href="https://www.linkedin.com/in/luiz-af-gomes/" target="_blank" underline
										>Gabriel Luiz de Oliveira</IlLink
									>
								</h3>
							</div>
							<p class="text-justify">
								Neste evento, diversas equipes de IFs de todo o estado de São Paulo competiram para
								resolverem problemas lógico-matemáticos utilizando linguagens de programação.
							</p>
							<p class="text-justify">
								Nossa equipe se classificou em 10º lugar entre 24 equipes participantes.
							</p>
						</div>
						<div class="flex flex-row justify-between items-center mt-auto ml-5 mr-5 pb-5">
							<IlLink
								href="https://www.linkedin.com/feed/update/urn:li:activity:6990332517601972224?utm_source=share&utm_medium=member_desktop"
								target="_blank"
								underline
								color="#41f0d1"
								external
								>Publicação LinkedIn</IlLink
							>

							<IlLink
								href="https://www.facebook.com/cia.integrativa/posts/pfbid02XwvJ8GakvBkU58XvCYrdbJFdTxxESXSD39NHo5ZsLzLUQCBj7M43CUPKFFcHPiUCl"
								target="_blank"
								underline
								color="#41f0d1"
								external
								>Publicação Facebook</IlLink
							>
						</div>
					</div>
				</div>
			</div>
		</IlContainer>
	</div>
</template>
