<template>
  <div id="app">
    <header id="header">
      <div class="title"><h1>Runner's Connect</h1></div>
      <div class="subtitle"><h1>Become "Your" Best</h1></div>
      <nav>
        <router-link to="/"><i class="fas fa-user"></i></router-link>
        <router-link to="/runs"><i class="fas fa-running"></i></router-link>
        <router-link to="/Graphs"><i class="fas fa-crown"></i></router-link>
        <router-link to="/resources"><i class="fas fa-book-open"></i></router-link>
        <button type="button" a @click="logout" class="fas fa-sign-out-alt"><router-link to="/"></router-link></button>
      </nav>
    </header>
    <router-view />
    <div class='footer'>
      <p><a href="https://github.com/KiocLeader/creativeProject">Github repository</a></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  methods: {
    async logout() {
    debugger
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style>

body {
  font-family: 'Helvetica', sans-serif;
  font-weight: 300;
  font-size: 14pt;
  margin: 0px 200px;
  background-color: #ffe;
}

.subtitle {
  font-size: 1pt;
}

#header {
  margin: 0 1em 1em 0;
  height: 120px;
  width: 1200px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /* Fixed position */
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);
  /* Color and alignment */
  background: #277EAE;
  text-align: center;

}

nav {
  display: flex;
  justify-content: center;
}

.title {
  color: #fff;
  font-size: 11px;
}

.subtitle {
  color: #fff;
  font-size: 9px;
}


h2 {
  font-size: 12px;
}

#header .fas  {
  font-size: 25px;
  color: #fff;
  width: 50px;
  background-color: #277EAE;
  border: none;
}


.pure-button-primary {
  background-color: #277EAE;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.footer {
  text-align: center;
  background-color: #277EAE;  /* Blue */
  padding: 2px 0;
  width: 1200px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
</style>
