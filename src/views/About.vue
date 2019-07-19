<template>
  <div class="container">
    <form>
      <div v-if="campoInserirVisivel">
        <input type="text" name="nome" id="nome" v-model="novaPessoa.nome">
        <input type="text" name="telefone" id="telefone" v-model="novaPessoa.telefone">
        <button type="button" class="btn btn-primary" @click="insere(novaPessoa)">Inserir</button>
      </div>
      <div v-else>
        <input type="text" v-model="nomeBuscado" placeholder="Digite para buscar um nome" @input="filtra(nomeBuscado)">
        <button type="button" class="btn btn-primary" @click="mostraInserir(true)">Novo</button>
      </div>
    </form> 
    <table>
      <thead>
        <th>Nome</th>
        <th>telefone</th>
      </thead>
      <tbody v-for="pessoa in pessoasFiltradas" :key="pessoa.nome">
        <td>{{ pessoa.nome }}</td>
        <td>{{ pessoa.telefone }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pessoas: [
        {
          nome: 'Carlos',
          telefone: '2324-4324'
        },
        {
          nome: 'Renata',
          telefone: '4985-6636'
        },
        {
          nome: 'Cuca',
          telefone: '1876-6366'
        }
      ],
      novaPessoa: {},
      nomeBuscado: '',
      campoInserirVisivel: false,
      pessoasBuscadas: []
    }
  },
  computed: {
    pessoasFiltradas () {
      return this.nomeBuscado ? this.pessoasBuscadas : this.pessoas
    }
  },
  methods: {
    filtra (termo) {
      this.pessoasBuscadas = this.pessoas.filter(pessoa => pessoa.nome.includes(termo))
    },
    mostraInserir (boolean) {
      this.campoInserirVisivel = boolean
    },
    insere (pessoa) {
      this.pessoas.push(pessoa)
      this.campoInserirVisivel = false
      this.novaPessoa = {}
      this.nomeBuscado = ''
    }
  }
}
</script>


<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
table {
  width: 100%;
  margin: 30px;

}
td {
  border: 1px solid #666666;
  padding: 10px;
}
input, button {
  padding: 10px;
  border-radius: 6px;
  margin: 15px;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s
}
.fade-enter, .fade-leave-to {
	opacity: 0
}

</style>
