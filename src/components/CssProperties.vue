<template>
  <div class="cssProperties">
    <div class="boxesContainer">
      <Box
        v-for="box in boxes"
        :key="box.id"
        :title="box.title"
        :docs="box.docs"
        :example="box.example"
      />
    </div>
    <div class="links">
      <p
        class="fake__a"
        @click="$emit('hide')"
      >BACK</p>
      <a href="https://caniuse.com/">Can I use</a>
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box"

export default {
  name: 'CssProperties',
  components: { Box },
  data() {
    return {
      boxes: [
        {
          id: 1,
          title: 'perspective',
          docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/perspective',
          example: 'https://freefrogs.github.io/Animations/#/9'
        },
        {
          id: 2,
          title: 'clip-path',
          docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path',
          example: 'https://freefrogs.github.io/Animations/#/8'
        },
        {
          id: 3,
          title: 'filter',
          docs: 'developer.mozilla.org/en-US/docs/Web/CSS/filter',
          example: 'https://codepen.io/stoumann/pen/MWeNmyb'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.cssProperties .links {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    padding: 0 20px;
  }
}
</style>