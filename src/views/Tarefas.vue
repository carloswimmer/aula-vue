<template>
  <div class="container">
    <h1>Controle suas tarefas</h1>
    <h2>Adicionar tarefa</h2>
    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Tarefa a ser adicionada" aria-label="Tarefa a ser adicionada">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
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
        <input type="checkbox">
      </td>
      <td>{{ t.descricao }}</td>
      <td>
        <button class="btn btn-outline-danger btn-sm" type="button">
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
        },
        {
          pronta: false,
          descricao: 'Happy hour'
        }
      ]
    }
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
</style>

