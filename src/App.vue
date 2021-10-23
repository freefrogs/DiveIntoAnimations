<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/css">CSS</router-link>
    <router-link to="/animate">Animate</router-link>
    <router-link to="/svg">SVG</router-link>
    <router-link to="/canvas">Canvas</router-link>
    <router-link to="/libraries">Libraries</router-link>
    <router-link to="/vue-animations">Vue Animations</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Sora:400,600&display=swap');

$primary_dark: #151318; // #1E0233
$dark: #433b66;
$primary_light: #E7D3CC;
$details: #895575;
$font: 'Sora', Verdana, sans-serif;

body {
  background: $primary_dark;
  color: $primary_light;
}

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  a {
    font-weight: bold;
    color: $details;
  }
}

#nav {
  padding: 2%;
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  font-size: 1.2em;
  a {
    color: $dark;
    transition: .3s ease-in-out;
    &:hover {
      color: $details;
    }
    &.router-link-exact-active {
      color: $primary_light;
    }
  }
}

// route transition
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all .4s ease-out;
}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all .4s ease-in;
}
</style>
