<!-- vbase-css -->
<!-- vue vscode snippets -->

<template>
    <input type="checkbox" v-model="checked"> 체크박스 테스트
    <br>
</template>

<script>
// 기본 내보내기를 정의할 수 있다.
// 컴포넌트 등을 다른 파일에서 쉽게 가져와 사용할 수 있다.
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