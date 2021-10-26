<template>
  <div class="gradients">
    <div class="boxesContainer">
      <Box
        v-for="box in boxes"
        :key="box.id"
        :title="box.title"
        :other="box.other"
        class="entry"
      />
    </div>
    <div class="links">
      <p
        class="fake__a"
        @click="$emit('hide')"
      >BACK</p>
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box"

export default {
  name: 'Gradients',
  components: { Box },
  data() {
    return {
      boxes: [
        {
          id: 7,
          title: 'MDN Web Docs',
          other: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients'
        },
        {
          id: 8,
          title: 'Gradients Playground',
          other: 'https://css-playground.com/view/45/css-gradient-playground'
        },
        {
          id: 9,
          title: 'Example',
          other: 'https://freefrogs.github.io/Animations/#/11'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.gradients {
  .entry {
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
  .boxContainer {
    .box::before {
      box-shadow: 0 0 10px var(--dark), inset 0 0 10px var(--dark);
    }
    &:first-child .box::before {
      background: linear-gradient(var(--dark) 1px, transparent 2px), linear-gradient(90deg, var(--dark) 1px, transparent 2px);
      background-size: 20px 20px;
    }
    &:nth-child(2) .box::before {
      background: conic-gradient(from 180deg, var(--dark), transparent, var(--details2), transparent, var(--dark));
    }
    &:nth-child(3) .box::before {
      background: repeating-linear-gradient(190deg, transparent 25%, var(--dark) 50%, transparent 75%, var(--dark)),
        repeating-linear-gradient(-210deg, transparent 25%, var(--details2) 50%, transparent 75%, var(--dark))
    }
    .links {
      margin: 20px auto;
    }
  }
}
</style>
