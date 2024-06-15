<template>
	<button @click="open()"><slot>Open Modal</slot></button>
</template>

<script>
import { modalService } from '@/services/modal';

export default {
	props: {
		modalId: {
			type: String,
			required: true
		}
	},
	methods: {
		open() {
			modalService.openModal(this.modalId);
		}
	}
};
</script>

<style scoped>
button {
	padding: 10px 15px;
	font-size: 1rem;
	font-weight: 600;
}
</style>
