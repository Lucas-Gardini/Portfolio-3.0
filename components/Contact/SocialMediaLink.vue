<script setup lang="ts">
interface IProps {
	tooltip: string;
}

const props = defineProps<IProps>();
</script>

<template>
	<IlTooltip class="cursor-pointer">
		<slot name="icon" />

		<template #tooltip>
			<span class="text-gray-300">{{ tooltip }}</span>
		</template>
	</IlTooltip>
</template>
