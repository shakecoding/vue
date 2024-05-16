<!-- vbase-css -->
<!-- vue vscode snippets -->

<template>
    <input type="checkbox" :checked='checked'> 체크박스 테스트
    <br>
</template>

<script>
    export default {
        name : 'Checkbox',
        props : ['name', 'checked']
    };
</script>

<style scoped>

</style>