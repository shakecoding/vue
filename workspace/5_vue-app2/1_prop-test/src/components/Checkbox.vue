<!-- vbase-css -->
<!-- vue vscode snippets -->

<template>
    <input type="checkbox" :checked='checked'> {{ name }}
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