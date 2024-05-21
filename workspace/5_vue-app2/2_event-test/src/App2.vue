<template>
    <div>
        <Sender />
        <hr />
        <Receiver />
    </div>
</template>

<script>
    import Receiver from './components/Receiver.vue'
    import Sender from './components/Sender.vue'
    export default {
        name : "App2",
        components : { Sender, Receiver }
    }
</script>