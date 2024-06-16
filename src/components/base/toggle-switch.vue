<template>
	<label class="switch-container">
		<input v-bind="$attrs" :id="id" type="checkbox" :checked="checked"
			@change="$emit('update:checked', $event.target.checked)" />
		<span class="switch"></span>
		<span class="label">{{ label }}</span>
	</label>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		id: {
			type: String,
			required: true
		},
		checked: {
			type: Boolean,
			required: true
		},
		label: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped>
label.switch-container {
	display: flex;
	align-items: center;
	width: fit-content;
	max-width: 50%;
}

/* Visually hide the checkbox */
label.switch-container input {
	position: absolute;
	width: 0px;
	height: 0px;
	padding: 0;
	overflow: hidden;
}

span.label {
	padding-left: 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: default;
	user-select: none;
}

span.switch {
	--switch-container-width: 50px;
	--switch-size: calc(var(--switch-container-width) / 2);

	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;
	height: var(--switch-size);
	width: var(--switch-container-width);
	flex-basis: var(--switch-container-width);
	border-radius: var(--switch-size);
	background-color: var(--c-white-muted);
	transition: background-color 0.25s ease-in-out;
	flex-shrink: 0;
}

span.switch::before {
	content: "";
	position: absolute;
	left: 2px;
	height: calc(var(--switch-size) - 5px);
	width: calc(var(--switch-size) - 5px);
	border-radius: 100%;
	background-color: var(--c-white);
	border: 2px solid var(--c-white-muted);
	transition: transform 0.375s ease-in-out;
}

label.switch-container input:checked + span.switch {
	background-color: var(--c-blue-muted);
}

label.switch-container input:checked + span.switch::before {
	border-color: var(--c-blue-muted);
	transform: translateX(calc(var(--switch-container-width) - var(--switch-size)));
}

label.switch-container input:focus + span.switch::before {
	border-color: var(--c-white-soft);
}

label.switch-container input:focus:checked + span.switch::before {
	border-color: var(--c-blue-muted);
}

/* DISABLED */

label.switch-container input:disabled + span.switch {
	background-color: var(--c-gray-muted);
	cursor: auto;
}

label.switch-container input:disabled + span.switch::before {
	background-color: var(--c-gray);
	border-color: var(--c-gray-muted);
}
</style>
