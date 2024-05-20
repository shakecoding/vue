<template>
    <div style="border:solid 1px rgb(128,128,128); padding:5px;">
        이름 : <input type="text" v-model="name" />
        <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
    </div>
</template>

<script>
export default {
    name: "InputName",

  // 이걸 주석 하고 안하고를 따라서 유효성 검사를 할 수 잇다!
    // emits: {
    //     nameChanged: (e) => {
    //       return e.name && typeof (e.name) === "string" && e.name.trim().length >= 3;
    //     }
    // },
    data() {
        return {
            name: ""
        };
    },
}
</script>