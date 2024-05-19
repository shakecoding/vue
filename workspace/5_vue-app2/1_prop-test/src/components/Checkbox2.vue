<!-- vbase-css -->
<!-- vue vscode snippets -->

<template>
    <input type="checkbox" :checked='idol.checked'> {{ idol.name }}
    <br>
</template>

<script>
    export default {
        name : 'Checkbox',
        props : ['idol']
    };
</script>

<style scoped>

</style>