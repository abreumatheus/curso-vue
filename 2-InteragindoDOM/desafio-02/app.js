new Vue({
    el: '#desafio',
    data: {
        value: '',
        value2: ''
    },
    methods: {
        showAlert(msg) {
            alert(msg)
        },
        realtimeInput(e) {
            this.value = e.target.value
        },
        realtimeInput2(e) {
            this.value2 = e.target.value
        }
    }
})