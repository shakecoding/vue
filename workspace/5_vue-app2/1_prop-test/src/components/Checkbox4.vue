<!-- vbase-css -->
<!-- vue vscode snippets -->

<template>
    <input type="checkbox" :checked='idol.checked'>{{ idol.id }} - {{ idol.name }}
    <br>
</template>

<script>
// 경고를 띄워주는 걸 보고, 개발자들은 코드를 조기에 수정할 수 있다!
    import Idol from '../idol.js'
    export default {
        name : 'Checkbox',
        props : {
            idol : Idol
        }
    };
</script>

<style scoped>

</style>