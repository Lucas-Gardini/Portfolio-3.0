<script setup lang="ts">
import { CodeIcon, IdIcon, LinkIcon, NewsIcon, UserIcon } from "vue-tabler-icons";

const { drawer, toggleDrawer } = useDrawer();
const colorMode = useColorMode();

const route = useRoute();
const name = computed(() => route.name);

watch(name, () => {
	if (drawer) {
		toggleDrawer();
	}
});
</script>

<template>
	<IlDrawer v-model="drawer" class="drawer">
		<template #header>
			<div class="flex flex-row border-b p-4 text-lg font-semibold app-bg">
				<p class="mt-auto mb-auto">Lucas Gardini Dias</p>
				<IlButton ghost class="w-1/12 ml-auto app-text" @click="toggleDrawer">
					<XIcon />
				</IlButton>
			</div>
		</template>
		<ul class="mt-5">
			<li
				class="drawer-link flex flex-row w-full p-4"
				:class="name === 'index' && 'active'"
				@click="$router.push('/')"
			>
				<HomeIcon class="mr-2" />
				<p class="mt-auto mb-auto">Início</p>
			</li>
			<li
				class="drawer-link flex flex-row w-full p-4"
				:class="name === 'About' && 'active'"
				@click="$router.push('/about')"
			>
				<UserIcon class="mr-2" />
				<p class="mt-auto mb-auto">Sobre</p>
			</li>
			<li
				class="drawer-link flex flex-row w-full p-4"
				:class="name === 'Projects' && 'active'"
				@click="$router.push('/projects')"
			>
				<CodeIcon class="mr-2" />
				<p class="mt-auto mb-auto">Projetos</p>
			</li>
			<li
				class="drawer-link flex flex-row w-full p-4"
				:class="name === 'Resume' && 'active'"
				@click="$router.push('/resume')"
			>
				<NewsIcon class="mr-2" />
				<p class="mt-auto mb-auto">Currículo</p>
			</li>
			<li
				class="drawer-link flex flex-row w-full p-4"
				:class="name === 'Contact' && 'active'"
				@click="$router.push('/contact')"
			>
				<LinkIcon class="mr-2" />
				<p class="mt-auto mb-auto">Contato</p>
			</li>
		</ul>
		<template #footer>
			<div class="border-t p-4 app-bg">
				<IlButton
					class="app-color-change"
					block
					light
					@click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
				>
					Modo {{ colorMode.value === "dark" ? "escuro" : "claro" }}
				</IlButton>
			</div>
		</template>
	</IlDrawer>
</template>

<style lang="scss">
.drawer {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100vh;
}
</style>
