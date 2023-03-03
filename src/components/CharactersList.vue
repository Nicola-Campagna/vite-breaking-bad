
<!------------------------------
    LISTA CARDS DEI PERSONAGGI
 ------------------------------->



<script>
// import MyComponent from "./components/MyComponent.vue";

// IMPORTIAMO AXIOS
// import axios from 'axios'

// importiamo charactercard
import CharacterCard from './CharacterCard.vue';

// store.js
import { store } from "../data/store"

// importiamo Apploader
import AppLoader from './AppLoader.vue';


export default {
    data() {
        return {
            // array dei personaggi da riempire succ..
            characters: [],
            store,
        }
    },

    components: {
        //   MyComponent,
        CharacterCard,
        AppLoader,
    },

    // SPOSTATO IN APP.VUE

    // created() {
    //     // console.log(axios)

    //     // get() esegue la richiesta
    //     axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0")
    //         // then() per quando riceve la risposta esegue
    //         .then((response) => {
    //             console.log(response);
    //             this.characters = response.data.data//collegamento per arrivare all'array dei personaggi
    //         })
    // }
};
</script>


<!-- chiamata da spostare in App.vue -->
<template>
    <div class="container-lg bg-light p-4">
        <h2 class="bg-dark text-white m-0">Found n° cards</h2>

        <div v-if="!store.isLoading" class="row row-cols-lg-5 row-cols-md-3 row-cols-s-2">

            <!-- ciclo per prendere i personaggi ...metodo props (passaggio di info di padre in figlio(CharacterCard))  -->
            <CharacterCard v-for="character in store.characters" :key="character.id"
                :pic="character.card_images[0].image_url" :name="character.name" :type="character.archetype" />
        </div>
        <AppLoader text="Characters List" v-else class="text-center">
            <p>
                <font-awesome-icon icon="fa-solid fa-bolt" class="fa-3x fa-beat my-4" />
            </p>
        </AppLoader>
    </div>
</template>

<style lang="scss" scoped></style>