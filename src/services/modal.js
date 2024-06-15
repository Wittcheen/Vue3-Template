import { reactive } from 'vue';
import { addClass, removeClass } from '@/utils/dom';
import { setScrollbar, resetScrollbar } from '@/utils/scrollbar';

export const modalService = reactive({
	modals: {},

	registerModal(id) {
		if (!this.modals[id]) {
			this.modals[id] = { isOpen: false };
		}
	},

	openModal(id) {
		if (this.modals[id]) {
			this.modals[id].isOpen = true;
			setScrollbar();
			addClass(document.body, "modal-open");
		}
	},

	closeModal(id) {
		if (this.modals[id]) {
			this.modals[id].isOpen = false;
			resetScrollbar();
			removeClass(document.body, "modal-open");
		}
	},

	isModalOpen(id) {
		return this.modals[id]?.isOpen || false;
	}
});
