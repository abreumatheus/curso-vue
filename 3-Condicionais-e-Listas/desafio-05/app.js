new Vue({
	el: '#desafio',
	data: {
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkien',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		paragraph: 0
	},
	methods: {
		changeParagraph() {
			if (this.paragraph === 4) {
				this.paragraph = 1
			} else {
				this.paragraph++
			}
		}
	}
});
