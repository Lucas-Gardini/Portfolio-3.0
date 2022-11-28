<template>
	<main>
		<ClientOnly>
			<LayoutHeader />
			<slot />
			<LayoutFooter />
		</ClientOnly>
	</main>
</template>
