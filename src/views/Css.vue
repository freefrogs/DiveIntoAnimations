<template>
  <div class="css section">
    <h1>CSS is not as boring as you think</h1>
    <p>Cascading Style Sheet (CSS) is the language that describes how HTML elements should be displayed. Layout, colors, fonts, accessibility - you name it, everything this and much more can be done via CSS. A good website is an eye-catching website with tailor made transitions and animations. Many of them can be done using pure CSS. Further you dip into its possibilities, the more you realize how much you were underestimating it.</p>
    <transition name="show" mode="out-in">
      <div
        v-if="!showProperties && !showKeyframes && !showGradients"
        class="cards__box"
      >
        <div
          v-for="card in cards"
          :key="card.id"
          class="card"
        >
          <h3>{{ card.title }}</h3>
          <a :href="card.docs" target="_blank">MDN Web Docs</a>
          <button
            class="button"
            @click="card.show"
          >Try it</button>
        </div>
      </div>
    </transition>
    <CssProperties v-if="showProperties" @hide="changePropertiesStatus" />
    <Keyframes v-if="showKeyframes" @hide="changeKeyframesStatus" />
    <Gradients v-if="showGradients" @hide="changeGradientsStatus" />
  </div>
</template>

<script>
import CssProperties from "@/components/CssProperties"
import Keyframes from "@/components/Keyframes"
import Gradients from "@/components/Gradients"

export default {
  name: 'Css',
  components: {
    CssProperties,
    Keyframes,
    Gradients
  },
  data() {
    return {
      showProperties: false,
      showKeyframes: false,
      showGradients: false,
      cards: [
        {
          id: 'css_properties',
          title: 'CSS properties',
          docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
          show: this.changePropertiesStatus
        },
        {
          id: 'keyframes',
          title: 'Keyframes',
          docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes',
          show: this.changeKeyframesStatus
        },
        {
          id: 'gradients',
          title: 'Gradients',
          docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients',
          show: this.changeGradientsStatus
        },
      ]
    }
  },
  methods: {
    changePropertiesStatus() {
      this.showProperties = !this.showProperties
    },
    changeKeyframesStatus() {
      this.showKeyframes = !this.showKeyframes
    },
    changeGradientsStatus() {
      this.showGradients = !this.showGradients
    }
  }
}
</script>

<style lang="scss">
.css {
  .cards__box {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card {
    border-radius: 100px 10px 100px 10px / 10px 100px 10px 100px;
    border: 1px solid var(--primary_light);
    padding: 30px 20px;
    min-width: 180px;
    -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, var(--primary_dark));
    &:first-child {
      animation: var(--slide_l);
      animation-delay: 0.6s !important;
    }
    &:nth-child(2) {
      animation: var(--title);
      animation-delay: 0.8s !important;
    }
    &:last-child {
      animation: var(--slide_r);
      animation-delay: 0.4s !important;
    }
  }
}
</style>
