<template>
  <div class="boxContainer">
    <div class="center boxTexts">
      <p>{{title}}</p>
      <p v-if="docs"><a :href="docs" target="_blank">MDN Web Docs</a></p>
      <p v-if="other"><a :href="other" target="_blank">try it</a></p>
      <p v-if="example"><a :href="example" target="_blank">Example</a></p>
    </div>
    <div class="box"></div>
    <svg v-if="svg">
      <filter id="wavy">
        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
          <animate attributeName="baseFrequency" dur="30s" values="0.02;0.005;0.02" repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    title: {
      type: String,
      required: true
    },
    docs: {
      required: false
    },
    example: {
      required: false
    },
    other: {
      required: false
    },
    svg: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="scss">
.boxContainer {
  position: relative;
  .boxTexts {
    top: 45%;
    z-index: 10;
  }
  .box {
    position: relative;
    width: 200px;
    height: 200px;
    // filter: url(#wavy) blur(1px);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid var(--primary_light);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--details), inset 0 0 10px var(--details);
    }
  }
  svg {
    width: 0;
    height: 0;
  }
}
</style>