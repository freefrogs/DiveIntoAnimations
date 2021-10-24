<template>
  <div class="agenda">
    <h2 class="agenda__title">What will you find out?</h2>
    <ul class="agenda__list">
      <li class="agenda__item agenda__item--1">CSS is not as boring as you think</li>
      <!-- <li class="agenda__item agenda__item--2">What is the Element.animate()</li> -->
      <li class="agenda__item agenda__item--3">SVG - is it really that hard?</li>
      <li class="agenda__item agenda__item--4">Canvas - mysterious HTML5 tag</li>
      <li class="agenda__item agenda__item--5">Try with the library</li>
      <!-- <li class="agenda__item agenda__item--6">How to animate with Vue</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Agenda',
}
</script>

<style lang="scss">
.agenda {
  margin-top: 40px;
  &__title {
    text-decoration: underline;
    text-decoration-color: var(--details);
    animation: var(--title);
  }
  &__list {
    padding: 0;
    list-style: none;
    margin: 0 auto;
  }
  &__item {
    padding: 10px 0;
    &:nth-child(even) {
      animation: var(--slide_l)
    }
    &:nth-child(odd) {
      animation: var(--slide_r)
    }
    &--1 {
      animation-delay: .6s !important;
    }
    &--2 {
      animation-delay: .8s !important;
    }
    &--3 {
      animation-delay: 1.0s !important;
    }
    &--4 {
      animation-delay: 1.2s !important;
    }
    &--5 {
      animation-delay: 1.4s !important;
    }
    &--6 {
      animation-delay: 1.6s !important;
    }
  }
}
</style>
