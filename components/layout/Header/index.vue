<script setup lang="ts">
const { toggleDrawer } = useDrawer();
</script>

<template>
	<nav class="header flex">
		<div class="mr-auto ml-5 mt-5">
			<IlButton ghost class="w-1/12 ml-auto" @click="toggleDrawer">
				<Menu2Icon />
			</IlButton>
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
