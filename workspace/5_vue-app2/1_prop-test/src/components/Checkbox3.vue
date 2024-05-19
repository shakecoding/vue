<!-- vbase-css -->
<!-- vue vscode snippets -->

<template>
    <input type="checkbox" :checked='checked'>{{ id }} - {{ name }}
    <br>
</template>

<script>
// 경고를 띄워주는 걸 보고, 개발자들은 코드를 조기에 수정할 수 있다!
    export default {
        name : 'Checkbox',
        props : {
            id : [String, Number],
            name : [String, Number],
            checked : {
                type : Boolean,
                required : true
                // default : true
            }
        }
    };
</script>

<style scoped>

</style>