<template>
	<nav class="top">
		<h1>Vue 3 Template</h1>
		<a href="https://github.com/Wittcheen/Vue3-Template" target="_blank">GitHub</a>
	</nav>

	<slot></slot>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
	components: { RouterLink }
};
</script>

<style scoped>
nav.top {
	width: 100%;
	position: sticky;
	top: 0;
	left: 0;
	padding: 0.5rem 1.5rem;
	background-color: var(--c-black-soft);
	z-index: 100;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.5);
	font-size: 1.15em;
}

nav.top h1 {
	display: inline-block;
	font-weight: 600;
}

nav.top a {
	display: inline-block;
	font-weight: 400;
	cursor: pointer;
}

@media (min-width: 1028px) {
	nav.top {
		font-size: 1.25em;
	}
}
</style>
