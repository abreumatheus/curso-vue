<template>
    <div class="counter">
        <h1>Counter: {{ counterStatus }}</h1>
        <button @click="addToCounter()">Add 1</button>
        <button @click="subFromCounter()">Sub 1</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data() {
            return {
                counterStatus: 0
            }
        },
        methods: {
            addToCounter() {
                this.counterStatus++
            },
            subFromCounter() {
                this.counterStatus--
            }
        }
    }
</script>

<style scoped>

</style>