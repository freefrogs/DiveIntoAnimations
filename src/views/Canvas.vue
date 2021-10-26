<template>
  <div class="canvas section">
    <h1>Canvas - mysterious HTML5 tag</h1>
    <q>
      The HTML &lt;canvas&gt; element is used to draw graphics, on the fly, via scripting (usually JavaScript). 
      The &lt;canvas&gt; element is only a container for graphics. You must use a script to actually draw the graphics. 
      Canvas has several methods for drawing paths, boxes, circles, text, and adding images. 
      It can respond to JavaScript events (...) and any user action (key clicks, mouse clicks, button clicks, finger movement).
    </q>
    <p class="author">Source: <a href="https://www.w3schools.com/default.asp" target="_blank">W3Schools</a></p>
    <div class="boxesContainer canvas--entry">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="square__container"
      >
        <div
          class="square__card"
          @click="flippedCard"
        >
          <figure class="square front">
            <div class="square__content">
              <h3>{{card.title}}</h3>
            </div>
          </figure>
          <figure class="square back">
            <div class="square__content">
              <a :href="card.link" target="_blank">try me</a>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  data() {
    return {
      cards: [
        {
          title: 'Canvas W3School Tutorial',
          link: 'https://www.w3schools.com/graphics/canvas_intro.asp'
        },
        {
          title: 'Canvas MDN Tutorial',
          link: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial'
        },
        {
          title: 'Example coloring book',
          link: 'https://freefrogs.github.io/EX_Canvas/'
        },
        {
          title: 'Example game',
          link: 'https://arlbiern.github.io/Trusiaczek-rush-game/'
        }
      ]
    }
  },
  methods: {
    flippedCard(e) {
      e.currentTarget.classList.toggle('flipped')
    }
  }
}
</script>

<style lang="scss">
.canvas {
  &--entry {
    animation: var(--title);
  }
  .square {
    margin: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--primary_dark);
    border: 2px solid var(--primary_light);
    backface-visibility: hidden;
    box-shadow: 0 0 5px var(--primary_light);
    transition: .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(var(--primary_dark) 70%, var(--dark));
    box-shadow: inset 0 0 20px var(--details2);
    &.back{
      transform: rotateY( 180deg );
      z-index: 2;
    }
    &__container {
      position: relative;
      perspective: 1000;
      margin: 10px;
      width: 180px;
      height: 180px;
    }
    &__card {
      position: absolute;
      width: 180px;
      height: 180px;
      transform-style: preserve-3d;
      transition: .3s;
      &.flipped {
        transform: rotateY(180deg);
        .square.front {
          z-index:2
        }
        .square.back{
          z-index:3
        }
      }
    }
    &__content {
      padding: 20px;
    }
  }
}
</style>
