<template>
  <div class="container">
    <h1>Lista de Contatos</h1>
    <notificacao v-show="notificacaoVisivel" mensagem="Parabéns, contato incluído com sucesso!"></notificacao>
    <form>
      <div class="input-group mb-3" v-if="campoAdicionarVisivel">
        <div class="col-md-5">
          <input type="text" v-model="objetoContato.nome" class="form-control" placeholder="Nome" aria-label="Nome">
        </div>
        <div class="col-md-5">
          <input type="text" v-model="objetoContato.telefone" class="form-control" placeholder="Telefone" aria-label="Telefone">
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary" type="button" @click="adicionaContato(objetoContato)">
            Adicionar
          </button>
        </div>
      </div>
      <div class="input-group mb-3" v-else>
        <div class="col-md-10">
          <input type="text" @input="filtra(nomeBuscado)" v-model="nomeBuscado" class="form-control" placeholder="Digite um nome a ser buscado" aria-label="Digite um nome a ser buscado">
        </div>
        <div class="col-md-2">
          <button :disabled="desabilitaBotao" class="btn btn-outline-primary"
           type="button" @click="mostraCampoAdicionar()">
            Novo
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
import Notificacao from '@/components/Notificacao'

export default {
  data() {
    return {
      contatos: [],
      resultadoDaBusca: [],
      nomeBuscado: '',
      objetoContato: {
        nome: '',
        telefone: ''
      },
      campoAdicionarVisivel: false,
      desabilitaBotao: true,
      notificacaoVisivel: false
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
        return item.nome.includes(termo)
      })
      if (this.resultadoDaBusca.length === 0) {
        this.desabilitaBotao = false
      }
    },
    adicionaContato (objeto) {
      this.contatos.push(objeto)
      this.objetoContato = {}
      this.notificacaoVisivel = true
      setTimeout(() => {
        this.notificacaoVisivel = false
      }, 3000);
    },
    mostraCampoAdicionar () {
      this.campoAdicionarVisivel = true
      this.objetoContato.nome = JSON.parse(JSON.stringify(this.nomeBuscado))
      this.nomeBuscado = ''
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
  },
  components: {
    Notificacao
  }
}
</script>


<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
