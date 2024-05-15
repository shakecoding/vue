<!-- vbase-css -->
<!-- vue vscode snippets -->

<template>
    <input type="checkbox" v-model="checked"> 체크박스 테스트
    <br>
</template>

<script>
    export default {
        name : 'Checkbox',
        data() {
            return {
                checked : false
            }
        },
    };
</script>

<style scoped>

</style>