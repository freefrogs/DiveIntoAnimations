<template>
  <footer class="footer">
    <p className="footer_p">Copyright {{ year }} Justyna Biernacka</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      const today = new Date()
      return today.getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
  font-size: 0.9em;
  position: absolute;
  left: 50%;
  bottom: 1%;
  transform: translateX(-50%);
}
</style>