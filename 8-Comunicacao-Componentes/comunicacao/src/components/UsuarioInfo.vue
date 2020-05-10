<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome: {{ nome }}</p>
        <button @click="reiniciarNome()">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true,
            default: 'Matheus'
        }
    },
    methods: {
        reiniciarNome() {
            this.nome = 'Matheus'
            this.$emit('nomeAlterado', {
                nome: this.nome
            })
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
