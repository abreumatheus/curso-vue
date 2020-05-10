<template>
    <div id="app">
        <counters></counters>
    </div>
</template>

<script>
    import Counters from "./components/Counters";

    export default {
        name: 'App',
        components: {
            'counters': Counters
        }
    }
</script>

<style>

</style>
