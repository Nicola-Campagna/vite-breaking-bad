<script>
// importiamo i file di altri componenti
import AppHeader from "./components/AppHeader.vue"

export default {
  data() {
    return {
    }
  },

  components: {
    // dichiarare i componenti che importiamo
    AppHeader,

  },
};
</script>

<template>
  <!-- stampiamo i componenti importati -->

  <!-- HEADER -->

  <header>
    <div class="container-fluid bg-light border py-4">
      <AppHeader />

    </div>
  </header>

  <!-- MAIN -->
  <main>
    <div class="container-fluid bg-orange">
    </div>

  </main>
</template>

<style lang="scss">
// use per usare le rgole del file style.scss con le variabili
@use "./scss/partials/style.scss" as *;
</style>