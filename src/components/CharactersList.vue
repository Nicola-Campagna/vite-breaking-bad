
<!------------------------------
    LISTA CARDS DEI PERSONAGGI
 ------------------------------->

<script>

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