<template>
	<MainView><RouterView /></MainView>
</template>

<script>
import MainView from '@/views/MainView.vue';
import { RouterView } from 'vue-router';
export default {
	components: { MainView, RouterView }
};
</script>
