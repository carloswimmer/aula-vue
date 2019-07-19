<template>
  <div class="container">
    <h1>Lista de Contatos</h1>
    <form>
      <div class="input-group mb-3">
        <input type="text" v-model="nomeBuscado" class="form-control" placeholder="Digite um nome a ser buscado" aria-label="Digite um nome a ser buscado">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="filtra(nomeBuscado)">
            Buscar
          </button>
        </div>
      </div>
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contato in contatosFiltrados" :key="contato.nome">
          <td>{{ contato.nome }}</td>
          <td>{{ contato.telefone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contatos: [],
      resultadoDaBusca: [],
      nomeBuscado: ''
    }
  },
  computed: {
    contatosFiltrados () {
      return this.nomeBuscado ? this.resultadoDaBusca : this.contatos
    }
  },
  methods: {
    filtra (termo) {
      this.resultadoDaBusca = this.contatos.filter(item => {
        return item.nome === termo
      })
    }
  },
  created() {
    this.contatos = [
      {
        nome: 'Carlos',
        telefone: '9147-4649'
      },
      {
        nome: 'Renata',
        telefone: '9158-9915'
      },
      {
        nome: 'Cuca',
        telefone: '9789-6544'
      }
    ]
  }
}
</script>


<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
