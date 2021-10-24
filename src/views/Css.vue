<template>
  <div class="css">
    <h1>CSS is not as boring as you think</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quos earum, dignissimos ipsam quam quas exercitationem quibusdam quod, veritatis sequi non, sint porro suscipit. Vitae consequatur pariatur repellendus. Iste, magni.</p>
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
          >Check out</button>
        </div>
      </div>
    </transition>
    <transition name="show" mode="out-in">
      <CssProperties v-if="showProperties" @hide="changePropertiesStatus" />
    </transition>
    <transition name="show" mode="out-in">
      <Keyframes v-if="showKeyframes" @hide="changeKeyframesStatus" />
    </transition>
    <transition name="show" mode="out-in">
    </transition>
  </div>
</template>

<script>
import CssProperties from "@/components/CssProperties"
import Keyframes from "@/components/Keyframes"

export default {
  name: 'Css',
  components: {
    CssProperties,
    Keyframes
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
  width: 70%;
  margin: 0 auto;
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
