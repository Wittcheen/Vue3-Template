<template>
	<Teleport to="#modals">
		<div v-if="isOpen" class="modal-wrapper">
			<div class="modal-container" ref="target">
				<header class="modal-header">
					<h3><slot name="header">Modal Header</slot></h3>
					<button class="close-button" @click="close()">&#215;</button>
				</header>
				<div class="modal-body">
					<slot name="content"></slot>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { modalService } from '@/services/modal';

export default {
	props: {
		id: {
			type: String,
			required: true
		}
	},
	setup(props) {
		const isOpen = computed(() => modalService.isModalOpen(props.id));

		const close = () => {
			modalService.closeModal(props.id);
		};
		onMounted(() => { modalService.registerModal(props.id); });
		onUnmounted(() => { modalService.closeModal(props.id); });

		const target = ref(null);
		onClickOutside(target, () => close());
		
		return {
			isOpen, close, target
		};
	}
};
</script>

<style scoped>
div.modal-wrapper {
	width: auto;
	margin: 0.5rem;
}

@media screen and (min-width: 576px) {
	div.modal-wrapper {
		max-width: 500px;
		margin: 1.75rem auto;
	}
}

div.modal-container {
	width: 100%;
	padding: 20px 30px;
	background-color: var(--c-black-soft);
	border-radius: 0.15rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
	user-select: text;
}

header.modal-header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	border-bottom: 1px solid var(--c-gray);
	padding-bottom: 0.5rem;
}

header.modal-header h3 {
	line-height: 1.5;
	font-size: 1.25rem;
}

button.close-button {
	font-size: 1.5rem;
	font-weight: 700;
	opacity: 0.75;
	background-color: transparent;
	padding: 1rem;
	margin: -0.9rem -1rem -1rem auto;
}

button.close-button:hover {
	opacity: 0.9;
}
</style>
