<template>
    <div class="counters">
        <counter-tag></counter-tag>
        <counter-tag></counter-tag>
        <counter-tag></counter-tag>
    </div>
</template>

<script>
    import Counter from "./Counter";

    export default {
        name: "Counters",
        components: {
            'counter-tag': Counter
        }
    }
</script>

<style scoped>

</style>