import { IS_BROWSER } from '@/utils/index';
import { isString, isUndefined, isUndefinedOrNull } from '@/utils/inspect';
import { addClass, setStyle, getBCR } from '@/utils/dom';

export default {
	beforeMount(el, binding, vnode) {
		const position = Object.keys(binding.modifiers)[0] || "top";
		let tooltip = null;
		let title = undefined;

		if (isString(binding.value)) {
			title = binding.value;
		} else if (isUndefined(binding.value)) {
			const attrs = vnode.props;
			title = attrs && !isUndefinedOrNull(attrs.tooltip) ? attrs.tooltip : undefined;
		}

		const createTooltip = () => {
			tooltip = document.createElement("div");
			tooltip.className = "tooltip";
			tooltip.innerText = title;
			document.body.appendChild(tooltip);
		};

		const setPosition = () => {
			const rect = getBCR(el);
			const tooltipRect = getBCR(tooltip);

			if (position === "top") {
				addClass(tooltip, "top");
				setStyle(tooltip, "top", `${rect.top - tooltipRect.height - 5}px`);
				setStyle(tooltip, "left", `${rect.left + (rect.width - tooltipRect.width) / 2}px`);
			} else if (position === "bottom") {
				addClass(tooltip, "bottom");
				setStyle(tooltip, "top", `${rect.bottom + 5}px`);
				setStyle(tooltip, "left", `${rect.left + (rect.width - tooltipRect.width) / 2}px`);
			} else if (position === "right") {
				addClass(tooltip, "right");
				setStyle(tooltip, "top", `${rect.top + (rect.height - tooltipRect.height) / 2}px`);
				setStyle(tooltip, "left", `${rect.right + 10}px`);
			} else if (position === "left") {
				addClass(tooltip, "left");
				setStyle(tooltip, "top", `${rect.top + (rect.height - tooltipRect.height) / 2}px`);
				setStyle(tooltip, "left", `${rect.left - tooltipRect.width - 10}px`);
			}
		};

		const showTooltip = (event) => {
			if (IS_BROWSER && !tooltip) {
				createTooltip();
				setPosition(event);
				requestAnimationFrame(() => {
					setStyle(tooltip, "opacity", "1");
				});
			}
		};

		const hideTooltip = () => {
			if (tooltip) {
				setStyle(tooltip, "opacity", "0");
				setTimeout(() => {
					if (tooltip && tooltip.parentNode) {
						tooltip.parentNode.removeChild(tooltip);
						tooltip = null;
					}
				}, 200);
			}
		};

		el.addEventListener("mouseenter", showTooltip);
		el.addEventListener("mouseleave", hideTooltip);

		el.cleanupTooltip = () => {
			el.removeEventListener("mouseenter", showTooltip);
			el.removeEventListener("mouseleave", hideTooltip);
			if (tooltip && tooltip.parentNode) {
				tooltip.parentNode.removeChild(tooltip);
			}
		};
	},
	unmounted(el) {
		el.cleanupTooltip();
	}
};
