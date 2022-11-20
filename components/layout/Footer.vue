<script setup lang="ts">
import { DateTime } from "luxon";
import { BrandGithubIcon } from "vue-tabler-icons";

const colorMode = useColorMode();
const color = computed(() => colorMode.value);
</script>

<template>
	<footer class="relative border-t w-full h-[70px] flex items-center" data-v-b35d5156="">
		<div class="absolute inset-x-0 flex items-center justify-center -top-3" data-v-b35d5156="">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					:fill="color === 'dark' ? '#fff' : '#000'"
					d="M19.913 14.529a31.977 31.977 0 0 0-.675-1.886l-.91-2.246c0-.026.012-.468.012-.696C18.34 5.86 16.507 2 12 2 7.493 2 5.66 5.86 5.66 9.7c0 .229.011.671.012.697l-.91 2.246c-.248.643-.495 1.312-.675 1.886-.86 2.737-.581 3.87-.369 3.895.455.054 1.771-2.06 1.771-2.06 0 1.224.637 2.822 2.016 3.976-.515.157-1.147.399-1.554.695-.365.267-.319.54-.253.65.289.481 4.955.307 6.303.157 1.347.15 6.014.324 6.302-.158.066-.11.112-.382-.253-.649-.407-.296-1.039-.538-1.555-.696 1.379-1.153 2.016-2.751 2.016-3.976 0 0 1.316 2.115 1.771 2.06.212-.025.49-1.157-.37-3.894"
				/>
			</svg>
		</div>
		<div class="mt-2 md:mt-0 mx-auto sm:px-6 lg:px-8 px-4 w-full" data-v-b35d5156="">
			<div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-between" data-v-b35d5156="">
				<div class="flex flex-col-reverse items-center gap-3 sm:flex-row" data-v-b35d5156="">
					<span class="text-sm" data-v-b35d5156="">© {{ DateTime.now().year }} Lucas Gardini Dias</span>
				</div>
				<ul class="hidden items-center justify-end gap-3 md:flex" data-v-b35d5156="">
					<li data-v-b35d5156="">
						<IlLink href="https://github.com/Lucas-Gardini" target="_blank">
							<BrandGithubIcon class="github-icon" />
						</IlLink>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.github-icon {
	width: 18px;
	height: 18px;
	// fill: currentColor;

	&:hover {
		fill: #000;
		cursor: pointer;
	}

	html[class="dark-mode"] &:hover {
		fill: #fff;
	}
}
</style>
