<template>
	<main>
		<div>
			<toggle-switch v-model:checked="showcaseSwitch" label="Switch for true/false" />
		</div>
		<div class="divide">
			<toggle-switch v-model:checked="showcaseSwitch" disabled label="Disabled switch" />
		</div>

		<div class="divide tooltip-showcase">
			<p v-tooltip.top="'This is a top tooltip!'">Top tooltip (hover me)</p>
			<p v-tooltip.bottom="'This is a bottom tooltip!'">Bottom tooltip (hover me)</p>
			<p v-tooltip.right="'This is a right tooltip!'" style="margin-right: 1rem;">Right tooltip (hover me)</p>
			<p v-tooltip.left="'This is a left tooltip!'">Left tooltip (hover me)</p>
		</div>

		<showcase />
	</main>
</template>

<script>
import toggleSwitch from '@/components/base/toggle-switch.vue';
import showcase from '@/components/showcase.vue';
export default {
	components: { toggleSwitch, showcase },
	data() {
		return {
			showcaseSwitch: false
		};
	},
	watch: {
		showcaseSwitch(newValue) {
			console.log("Showcase Switch: " + newValue);
		}
	}
};
</script>

<style scoped>
main {
	padding-top: 2rem;
	padding-left: 3rem;
}

div.tooltip-showcase {
	line-height: 2;
}

div.tooltip-showcase p:nth-of-type(3),
div.tooltip-showcase p:nth-of-type(4) {
	display: inline-block;
}
</style>
