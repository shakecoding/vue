<template>
<<<<<<< HEAD
    <div>
        <InputName @nameChanged="nameChangedHandler" />
        <br />
        <h3>App 데이터 : {{parentName}}</h3>
    </div>
</template>

<script>
    import InputName from './components/InputName2.vue'
    export default {
        name: "App",
        components : { InputName },
        data() {
            return { parentName: "" }
        },
        methods: {
            nameChangedHandler(e) {
                this.parentName = e.name;
            }
        }
    }
=======
  <div>
    <InputName @nameChanged="nameChangedHandler" />
    <br />
    <h3>App 데이터 : {{parentName}}</h3>
  </div>
</template>

<script>
import InputName from './components/InputName2.vue'
export default {
  name: "App",
  components : { InputName },
  data() {
    return { parentName: "" }
  },
  methods: {
    nameChangedHandler(e) {
      this.parentName = e.name;
    }
  }
}
>>>>>>> origin/main
</script>
