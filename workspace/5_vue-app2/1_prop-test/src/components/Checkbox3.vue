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
        },
        // 라이프 사이클 훅
        // created, mounted 등등
        mounted() {
          if (typeof this.checked !== "boolean"){
            alert('checked 옵션을 확인하세요!');
          }
        }
    };
</script>

<style scoped>

</style>