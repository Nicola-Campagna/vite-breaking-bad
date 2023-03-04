<script>
// importiamo i file di altri componenti:

import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

// axios
import axios from 'axios'

// store.js
import { store } from "./data/store"
// basepagination
import BasePagination from "./components/BasePagination.vue"


export default {
  data() {
    return {
      store,
    }
  },

  components: {
    // registriamo i componenti che importiamo
    AppHeader,
    AppMain,
    BasePagination

  },

  methods: {
    // fetch utilizzado per sfogliare o richiedere delle richieste 
    fetchCharacters(url) {
      // console.log(axios)

      store.isLoading = true;
      axios
        // get() esegue la richiesta
        .get(url)

        // then()  mostra solo se corretta
        .then((response) => {
          console.log(response);
          store.characters = response.data.data;//collegamento per arrivare all'array dei personaggi
          const { next, prev } = response.data.meta.next_page //da rivedere il percorso
          // console.log(next, prev);
          store.pages = { next, prev }

        })

        // catch ci mostrasolo che c'è un errore
        .catch((error) => {
          store.characters = [];
          console.log(error)
        })

        // finally in ogni caso mostra qualcosa
        .finally(() => {
          store.isLoading = false;
        })

    },

    fetchPage(direction) {
      if (direction == 'next') {
        this.fetchCharacters(store.pages.next)
      }
      if (direction == 'prev') {
        this.fetchCharacters(store.pages.prev)
      }

    },


  },

  created() {
    this.fetchCharacters(store.endpoint)
  }
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


    <!-- includere BasePagination -->
    <BasePagination :showNext="store.pages.next > 0" :showPrev="store.pages.prev > 0" @click-prev="fetchPage"
      @change-page="fetchPage" />
    <AppMain />


  </main>
</template>

<style lang="scss">
// use per usare le rgole del file style.scss con le variabili
@use "./scss/partials/style.scss" as *;
</style>