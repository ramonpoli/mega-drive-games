<template>
  <div id="app" class="fit">
    <div id="nav">
      <router-link to="/">Games</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <footer>
      Powered by <a href="https://rawg.io/" target="blank">Rawg.io</a>
    </footer>
  </div>
</template>

<style lang="scss">
  @import "./styles/main.scss";
</style>
