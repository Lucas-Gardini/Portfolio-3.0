<script setup lang="ts">
import { DateTime } from "luxon";
import { BrandGithubIcon } from "vue-tabler-icons";
</script>

<template>
	<footer class="relative border-t w-full h-[70px] flex items-center" data-v-b35d5156="">
		<div class="absolute inset-x-0 flex items-center justify-center -top-3" data-v-b35d5156="">
			<EyeglassIcon />
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
