<template>
  <div class="svg section">
    <h1>SVG - is it really that hard?</h1>
    <q>
      Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. 
      The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999. 
      SVG images and their behaviors are defined in XML text files. This means that they can be searched, indexed, scripted, and compressed, and can be scaled in size without loss of quality. 
      As XML files, SVG images can be created and edited with any text editor, as well as with drawing software.
    </q>
    <p class="author">Source: <a href="https://en.wikipedia.org/wiki/Scalable_Vector_Graphics" target="_blank">Wikipedia</a></p>
    <div class="boxesContainer">
      <Box
        v-for="box in boxes"
        :key="box.id"
        :title="box.title"
        :other="box.other"
        :svg="true"
      />
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box"
export default {
  name: 'Svg',
  components: { Box },
  data() {
    return {
      boxes: [
        {
          id: 10,
          title: 'MDN SVG Tutorial',
          other: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial'
        },
        {
          id: 11,
          title: 'Example - morphing',
          other: 'https://www.cssscript.com/demo/svg-morphing-shape-shifter/'
        },
        {
          id: 12,
          title: 'Example - drawing',
          other: 'https://freefrogs.github.io/Animations/#/4'
        },
        {
          id: 13,
          title: 'Example - gradient',
          other: 'https://freefrogs.github.io/Animations/#/6'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.svg {
  .boxContainer .box {
    filter: url(#wavy) blur(1px);
  }
}
</style>
