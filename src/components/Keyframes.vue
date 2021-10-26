<template>
  <div class="keyframes">
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
  name: 'Keyframes',
  components: { Box },
  data() {
    return {
      boxes: [
        {
          id: 3,
          title: 'MDN Web Docs',
          other: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes'
        },
        {
          id: 4,
          title: 'Keyframe Generator',
          other: 'https://animista.net'
        },
        {
          id: 5,
          title: 'Cubic-bezier Generator',
          other: 'https://cubic-bezier.com'
        },
        {
          id: 6,
          title: 'Example',
          other: 'https://freefrogs.github.io/Animations/#/3'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.keyframes {
  .entry {
    &:first-child {
      animation: var(--slide_l);
      animation-delay: 0.6s !important;
    }
    &:nth-child(2) {
      animation: var(--title);
      animation-delay: 0.8s !important;
    }
    &:nth-child(3) {
      animation: var(--title);
      animation-delay: 0.7s !important;
    }
    &:last-child {
      animation: var(--slide_r);
      animation-delay: 0.9s !important;
    }
  }
  .boxContainer {
    .box::before {
      box-shadow: 0 0 20px var(--details), inset 0 0 20px var(--details2);
      animation: rainbow 6s linear infinite;
    }
    &:nth-child(2) .box::before {
      animation-delay: -1s !important;
    }
    &:nth-child(3) .box::before {
      animation-delay: -3s !important;
    }
    &:nth-child(3) .box::before {
      animation-delay: -2s !important;
    }
    .links {
      margin: 20px auto;
    }
  }
}

@keyframes rainbow {
 0% { box-shadow: 0 0 20px var(--details), inset 0 0 20px var(--details); filter:hue-rotate(0deg) }
 20% { box-shadow: 0 0 15px var(--details), inset 0 0 15px var(--details); }
 40% { box-shadow: 0 0 20px var(--details), inset 0 0 20px var(--details); }
 60% { box-shadow: 0 0 17px var(--details), inset 0 0 17px var(--details); }
 8% { box-shadow: 0 0 15px var(--details), inset 0 0 15px var(--details); }
 10% { box-shadow: 0 0 20px var(--details), inset 0 0 20px var(--details); filter:hue-rotate(360deg) }
}
</style>
