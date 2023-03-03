
<!------------------------------
    LISTA CARDS DEI PERSONAGGI
 ------------------------------->



<script>
// import MyComponent from "./components/MyComponent.vue";

// IMPORTIAMO AXIOS
import axios from 'axios'


export default {
    data() {
        return {
            // array dei personaggi da riempire succ..
            characters: []
        }
    },

    components: {
        //   MyComponent,
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
    <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2">
        <!-- ciclo per prendere i personaggi  -->
        <div class="col" v-for="character in characters">
            <!-- nomi dei personaggi -->
            <h3>{{ character.name }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>