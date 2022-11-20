<script setup lang="ts">
const { toggleDrawer } = useDrawer();
</script>

<template>
	<nav class="header flex app-bg-tertiary">
		<div class="mr-auto ml-5 my-auto">
			<IlButton ghost class="w-1/12 ml-auto app-text" @click="toggleDrawer">
				<Menu2Icon />
			</IlButton>
		</div>

		<div class="flex flex-row mr-5 ml-auto my-auto">
			<span>Feito com: &nbsp;&nbsp;</span>
			<IlLink href="https://nuxt.com/v3" target="_blank">
				<BrandNuxtIcon />
			</IlLink>
		</div>

		<LayoutHeaderDrawer />
	</nav>
</template>

<style lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 62px;
	z-index: 3 !important;
}
</style>
