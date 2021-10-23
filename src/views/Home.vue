<template>
  <div
    class="home"
    @click="showAgenda = !showAgenda"
  >
    <h1>Dive Into Animation</h1>
    <p>
      This application was created to show that animations can be obtained not only by using libraries.<br>
      However, it does not change the fact that by using libraries you can easily create amazing animations.<br>
      Interesting effects can be also obtained by using mechanisms built into the browser.<br>
      Of course, we are talking about browsers other than IE ;-).
    </p>
    <Agenda v-if="showAgenda" />
  </div>
</template>

<script>
import Agenda from '@/components/Agenda'

export default {
  name: 'Home',
  components: {
    Agenda
  },
  data() {
    return {
      showAgenda: false
    }
  }
}
</script>

<style lang="scss">

</style>
