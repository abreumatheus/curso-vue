<template>
    <v-app>
        <nav-drawer></nav-drawer>

        <toolbar></toolbar>

        <v-content>
            <carousel></carousel>
        </v-content>

        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import NavDrawer from "./components/template/NavDrawer";
    import Toolbar from "./components/template/Toolbar";
    import Carousel from "./components/widgets/Carousel";
    import Footer from "./components/template/Footer";

    export default {
        components: {
            'nav-drawer': NavDrawer,
            'toolbar': Toolbar,
            'carousel': Carousel,
            'app-footer': Footer
        }
    }
</script>
