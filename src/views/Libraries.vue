<template>
<div class="libraries section">
    <h1>Try with the library</h1>
    <p>Yes, I know - it is nice to make something from scratch just by yourself. Unfortunately the day has only 24 hours and sometimes you also need to go to sleep. So be wise - use libraries where it is reasonable. At the end of the day it all comes down to usage of the right tool for your job. Libraries can be handy, but remember - they are not a substitute for the knowledge of programming language itself.</p>
    <div class="card__container boxesContainer">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        @click="showDesc"
      >
        <div class="card__name center">
          <a :href="card.link" target="_blank">{{card.name}}</a>
        </div>
        <div class="card__desc center">
          <div>
            <div class="close" @click.stop='closeDesc'>+</div>
            <div>
              <q>{{card.desc}}</q>
              <p v-if="card.author" class="author"><em>{{card.author}}</em></p>
            </div>
            <p v-if="card.example" class="card__links"><a :href="card.example" target="_blank">Example</a></p>
            <p v-if="card.showreel" class="card__links"><a :href="card.showreel" target="_blank">Showreel</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Libraries',
  data() {
    return {
      cards: [
        {
          name: 'threejs',
          link: 'https://threejs.org/',
          desc: 'Three.js is a JavaScript library and API used to create animated 3D computer graphics using WebGL.',
          author: 'Gianmarco Ebeling',
          example: 'https://bruno-simon.com/'
        },
        {
          name: 'GSAP',
          link: 'https://greensock.com/',
          desc: 'GSAP is a solid animation library from GreenSock that lets you create advanced animations to impress your users. The animations will look great on every device and perform well on all major browsers.',
          author: 'Gianmarco Ebeling',
          showreel: 'https://www.youtube.com/watch?v=pFqBqgOv9E8',
          example: 'https://codepen.io/chrisgannon/pen/bVwLdg'
        },
        {
          name: 'Typed.js',
          link: 'https://mattboldt.com/demos/typed-js/',
          desc: 'Typed.js is a JavaScript typing animation library. It is very easy to use and highly customizable.',
          author: 'Gianmarco Ebeling',
        },
        {
          name: 'Anime.js',
          link: 'https://animejs.com/',
          desc: 'Anime.js is a lightweight JavaScript animation library. With a single unified API, Anime.js works with CSS, SVG, DOM attributes, and JavaScript objects.',
          author: 'Gianmarco Ebeling',
        },
        {
          name: 'AOS',
          link: 'https://michalsnik.github.io/aos/',
          desc: 'AOS is a library that allows you to apply different animations (triggered as you scroll down) to any element of your webpage.',
          author: 'Gianmarco Ebeling',
        },
        {
          name: 'KUTE.js',
          link: 'https://thednp.github.io/kute.js/',
          desc: 'KUTE.js is a JavaScript animation engine mainly for modern browsers but with support for older browsers as well, with its legacy components, tools, and polyfills.',
          author: 'Gianmarco Ebeling',
        },
        {
          name: 'AniJS',
          link: 'http://anijs.github.io/',
          desc: 'AniJS is a JS animation library that allows you to add animations to elements in a very simple way using a “sentence-like” structure.',
          author: 'Gianmarco Ebeling',
          example: 'http://anicollection.github.io/#/'
        },
        {
          name: 'Popmotion',
          link: 'https://popmotion.io/',
          desc: 'Popmotion is a lightweight but very powerful JavaScript animation library, as it supports keyframe and spring animations for numbers, colors, and complex strings.',
          author: 'Gianmarco Ebeling'
        },
        {
          name: 'particles.js',
          link: 'https://vincentgarreau.com/particles.js/',
          desc: 'A lightweight JavaScript library for creating particles.',
          author: 'Vincent Garreau',
        },
        {
          name: 'Vivus',
          link: 'https://maxwellito.github.io/vivus/',
          desc: 'Vivus is a lightweight JavaScript class (with no dependencies) that allows you to animate SVGs, giving them the appearence of being drawn. There are a variety of different animations available, as well as the option to create a custom script to draw your SVG in whatever way you like.',
          author: 'maxwellito',
        },
        {
          name: 'mo.js',
          link: 'https://mojs.github.io/',
          desc: 'Motion graphics has a big part to play in animations, and Mo.js is one option with which you can make an impact. With a number of tutorials and demos to help out, beginners may not find it hard to create geometrical shapes and time animations to the dot. The APIs may appear simple, but there’s a lot you can do with them.',
          author: 'Priya'
        },
        {
          name: 'Lottie',
          link: 'http://airbnb.io/lottie/#/',
          desc: 'Lottie is a lightweight animated graphics format that balances high quality graphics against the cost of rendering them. It makes applications smaller and includes dynamic features. It can be used for web, Android, iOS and IoTs, without the need for additional software.',
          author: 'Priya'
        },
        {
          name: 'Velocity.js',
          link: 'http://velocityjs.org/',
          desc: 'Created by Julian Shapiro to solve the problem of JQuery’s slowness when animating complex or extensive animations. (...)  improves the website interface and provides a simple experience to the user. Velocity.js helps you animate, fade and slide animations, color animations, SVG animations, transforms, scrolling, and loops.',
          author: 'Judy Nduati'
        },
      ]
    }
  },
  methods: {
    showDesc(e) {
      const cards = [...document.querySelectorAll('.libraries .card')]
      cards.forEach(card => card.classList.remove('show'))
      e.currentTarget.classList.add('show')
    },
    closeDesc(e) {
      const currentCard = e.target.parentElement.parentElement.parentElement
      currentCard.classList.remove('show')
    }
  }
}
</script>

<style lang="scss">
.libraries {
  .card {
    font-size: 0.8em;
    position: relative;
    height: 120px;
    width: 120px;
    margin: 10px;
    transition: .4s;
    /* &:nth-child(2n+1) {
      animation: var(--slide_l);
      animation-delay: 0.6s !important;
    }
    &:nth-child(2n+2) {
      animation: var(--title);
      animation-delay: 0.8s !important;
    }
    &:nth-child(3n+1)  {
      animation: var(--slide_r);
      animation-delay: 0.4s !important;
    } */
    &:hover .card__name {
      opacity: 1;
    }
    &__name {
      opacity: 0.4;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--primary_dark);
      border: 1px solid var(--primary_light);
      border-radius: 10px;
      z-index: 1;
      box-shadow: 0 0 10px var(--details2);
      transition: .4s;
    }
    &__desc {
      color: var(--primary_dark);
      overflow: hidden;
      background: var(--primary_light);
      border: 1px solid var(--primary_dark);
      box-shadow: 0 0 10px var(--details2);
      width: 50px;
      height: 50px;
      opacity: 0;
      transition: .5s;
    }
    &__links {
      display: inline-block;
      margin: 0 10px;
    }
    .author {
      margin: 5px 0 10px;
    }
    &.show {
      .card__desc {
        padding: 15px;
        width: 300px;
        height: 200px;
        opacity: 1;
        z-index: 4;
        display: flex;
        justify-content: center;
        align-items: center;
        .close {
          cursor: pointer;
          position: absolute;
          bottom: 10px;
          left: 10px;
          width: 25px;
          height: 25px;
          font-size: 18px;
          line-height: 25px;
          transition: .3s;
          border-radius: 50%;
          background: var(--primary_dark);
          color: var(--primary_light);
          transform: rotate(45deg);
        }
        a:hover {
          color: var(--primary_dark) !important;
        }
      }
    }
  }
}
</style>
