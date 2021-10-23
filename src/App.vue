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
  <Footer />
</template>

<script>
import Footer from "@/components/Footer"

export default {
  components: { Footer }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Sora:400,600&display=swap');

:root {
  --primary_dark: #151318; // 
  --dark: #433b66;
  --primary_light: #E7D3CC;
  --details: #895575;
  --details2: rgba(147, 10, 252, 0.8);
  --font: 'Sora', Verdana, sans-serif;
  --title: show_title 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  --slide_l: slide_left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  --slide_r: slide_right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


body {
  background: var(--primary_dark);
  color: var(--primary_light);
  overflow: hidden;
  position: relative;
  min-height: 100vh;
}

#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 40px;
  max-width: 1400px;
  a {
    color: var(--details);
    transition: .3s ease-in-out;
    &:hover {
      color: var(--primary_light)
    }
  }
  .button {
    display: block;
    border: none;
    padding: 5px;
    margin: 20px auto;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9em;
    text-transform: uppercase;
    border-radius: 5px;
    background: var(--primary_light);
    color: var(--primary_dark);
    transition: .3s ease-in-out;
    &:hover {
      color: var(--primary_light);
      background: var(--primary_dark);
    }
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
    font-weight: bold;
    color: var(--dark);
    &:hover {
      color: var(--details);
    }
    &.router-link-exact-active {
      color: var(--primary_light);
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

// v-for transition
.show-enter-from {
  opacity: 0;
}
.show-enter-active {
  transition: all .4s ease-out;
}
.show-leave-to {
  opacity: 0;
}
.show-leave-active {
  transition: all .4s ease-in;
}

// keyframes
@keyframes show_title {
  0% { transform: scale(3); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes slide_left {
  0% { transform: translateX(-100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes slide_right {
  0% { transform: translateX(100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
</style>
