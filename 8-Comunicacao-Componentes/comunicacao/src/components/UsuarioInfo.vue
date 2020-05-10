<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome: {{ nome }}</p>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            default: 'Sem Nome'
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
