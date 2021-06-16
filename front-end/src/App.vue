<template>
  <div id="app">
    <header id="header">
      <h1>Runners Connect</h1>
      <nav>
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/dashboard"><i class="fas fa-user"></i></router-link>
        <router-link to="/Graphs"><i class="fas fa-globe-americas"></i></router-link>
      </nav>
    </header>
    <router-view />
    <div class='footer'>
      <p><a href="https://github.com/KiocLeader/creativeProject">Github repository</a></p>
    </div>
  </div>
</template>

<style>
/* Color scheme: https://paletton.com/#uid=7040u0knHs+edG7jrvYscpiuCk2 */
/* red: #e74c3c
 * blue: #277EAE
 */
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;
  background-color: #ffe;
}

#header {
  /* Semi-circle */
  margin: 0 1em 1em 0;
  height: 100px;
  width: 200px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  /* Fixed position */
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);
  /* Color and alignment */
  background: #277EAE;
  text-align: center;
  box-shadow: 0 0 0 1em #ffe;
}

nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 18px;
}

h2 {
  font-size: 12px;
}

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.pure-button-primary {
  background-color: #277EAE;
}
.footer {
  text-align: center;
  background-color: #277EAE;  /* Blue */
  padding: 2px 0;
}
</style>
