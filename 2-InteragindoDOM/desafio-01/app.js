new Vue({
    el: '#desafio',
    data: {
        name: 'Matheus Abreu',
        age: 21,
        vueLogo: 'https://i0.wp.com/blog.hariken.co/wp-content/uploads/2019/03/logo-vue-js.png'
    },
    methods: {
        randomNumber: function () {
            return Math.random()
        }
    }
})