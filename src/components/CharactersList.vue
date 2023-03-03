
<!------------------------------
    LISTA CARDS DEI PERSONAGGI
 ------------------------------->



<script>
// import MyComponent from "./components/MyComponent.vue";

// IMPORTIAMO AXIOS
import axios from 'axios'

// importiamo charactercard
import CharacterCard from './CharacterCard.vue';


export default {
    data() {
        return {
            // array dei personaggi da riempire succ..
            characters: []
        }
    },

    components: {
        //   MyComponent,
        CharacterCard,
    },

    created() {
        // console.log(axios)

        // get() esegue la richiesta
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0")
            // then() per quando riceve la risposta esegue
            .then((response) => {
                console.log(response);
                this.characters = response.data.data//collegamento per arrivare all'array dei personaggi
            })
    }
};
</script>

<template>
    <div class="container-lg bg-light p-4">
        <h2 class="bg-dark text-white m-0">Found n° cards</h2>
        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-s-2">
            <!-- ciclo per prendere i personaggi ...metodo props (passaggio di info di padre in figlio(CharacterCard))  -->
            <CharacterCard v-for="character in characters" :key="character.id" :pic="character.card_images[0].image_url"
                :name="character.name" :type="character.archetype" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>