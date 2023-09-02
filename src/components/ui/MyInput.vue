<template>
    <input
        type="text"
        class="input"
        :value="modelValue"
        @input="updateInput"
    >
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid coral;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>