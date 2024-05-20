<template>
    <div style="border:solid 1px rgb(128,128,128); padding:5px;">
        이름 : <input type="text" v-model="name" />
        <button @click="emitNameChanged">이벤트 발신</button>
    </div>
</template>

<script>
export default {
    name: "InputName",
    emits: ['nameChanged'],
    data() {
        return {
            name: ""
        };
    },
    methods: {
        emitNameChanged() {
            const isValid = this.name && typeof this.name === "string" && this.name.trim().length >= 3;
            if (isValid) {
                this.$emit('nameChanged', { name: this.name });
                this.name = '';
            } else {
                alert('이름은 최소 3자 이상이어야 합니다.');
            }
        }
    }
}
</script>

<style scoped>
</style>
