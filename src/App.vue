<script>
// importiamo i file di altri componenti:

import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

// axios
import axios from 'axios'

// store.js
import { store } from "./data/store"



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
    }
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
    <!-- da mettere in un componente a se -->
    <nav class="d-flex justify-content-center py-5 bg-dark" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-if="store.pages.prev" @click="fetchCharacters(store.pages.prev)"><a class="page-link"
            href="#">Previous</a></li>
        <li class="page-item" v-if="store.pages.next" @click="fetchCharacters(store.pages.next)"><a class="page-link"
            href="#">Next</a></li>
      </ul>
    </nav>


    <AppMain />

  </main>
</template>

<style lang="scss">
// use per usare le rgole del file style.scss con le variabili
@use "./scss/partials/style.scss" as *;
</style>