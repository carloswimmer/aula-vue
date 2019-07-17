<template>
  <div id="app">
    <nav class="navbar">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/">Tarefas</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/about">Agenda</router-link>
          </a>
        </li>
      </ul>
    </nav>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin-top: 90px;
}
a {
  color: aliceblue;
  text-decoration: none;
  font-weight: 900;
}
a:hover {
  color: silver;
  text-decoration: none;
}
.nav {
  display: inline;
}
.nav-item {
  float: left;
  /* padding: 20px 30px; */
}
.navbar {
  width: 100vw;
  height: 60px;
  background-color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
}
</style>
