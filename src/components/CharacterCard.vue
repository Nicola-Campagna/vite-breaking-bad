
<!-------------------------------------
    LISTA SINGOLA CARD DEL PERSONAGGIO
 -------------------------------------->

<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
    data() {
        return {

        }
    },

    // components: {
    //   MyComponent,
    // },


    // info props ricevuti dal padre (CharacterList)
    props: {
        pic: String,
        name: String,
        type: String

    }
};
</script>

<template>
    <div class="col text-center my-2">
        <!-- utilizzo dei props -->

        <!-- img personaggi -->
        <img :src="pic" alt="" class="img-fluid">
        <!-- nomi dei personaggi -->
        <h3 class="text-white bg-orange m-0 p-0">{{ name }}</h3>
        <!-- tipo di personaggi -->
        <p class="bg-orange m-0 p-0">{{ type }}</p>
    </div>
</template>

<style lang="scss" scoped></style>