<template>
  <div class="container">
    <h1>Controle suas tarefas</h1>
    <notificacao mensagem="Parabéns, tarefa incluída com sucesso!"></notificacao>
    <h2>Adicionar tarefa</h2>
    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="novaTarefa.descricao" placeholder="Tarefa a ser adicionada" aria-label="Tarefa a ser adicionada">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="insereTarefa(novaTarefa)">
            Adicionar
          </button>
        </div>
      </div>
    </form>
    <h2>Tarefas a fazer</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Concluída</th>
          <th>Título</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in tarefas">
          <td>
            <input type="checkbox" v-model="t.pronta">
          </td>
          <td>
            <span :class="t.pronta ? 'tarefa-pronta' : ''">
              {{ t.descricao }}
            </span>
          </td>
          <td>
            <button class="btn btn-outline-danger btn-sm" type="button" @click="removeTarefa(t)">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Notificacao from '@/components/Notificacao'
export default {
  name: 'tarefas',
  data () {
    return {
      tarefas: [
        {
          pronta: false,
          descricao: 'Sair cedo do trabalho'
        },
        {
          pronta: false,
          descricao: 'Surfar em Maresias'
        },
        {
          pronta: false,
          descricao: 'Jantar fora de casa'
        }
      ],
      novaTarefa: {
        pronta: false,
        descricao: ''
      }
    }
  },
  methods: {
    insereTarefa (tarefaNova) {
      this.tarefas.push(tarefaNova)
      this.novaTarefa = {}
    },
    removeTarefa (tarefaARemover) {
      const index = this.tarefas.indexOf(tarefaARemover)
      this.tarefas.splice(index, 1)
    },
  },
  components: {
    Notificacao
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
form {
  border-bottom: 1px solid #cccccc;
}
h2 {
  margin-top: 30px;
}
.tarefa-pronta {
  text-decoration: line-through;
}
</style>

