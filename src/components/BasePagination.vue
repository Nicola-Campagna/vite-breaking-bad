<!------------------------------------------------------------------------- 

NEXT/PREV (sarà con logia neutra e un componente principalmente UI)

dirà al genitore che hanno cliccato next o prev e il genitore di conseguenza dirà cosa mostrare

--------------------------------------------------------------------------->

 
<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
    data() {
        return {
            title: "Hello world"
        }
    },
    props: {
        showPrev: Boolean,
        showNext: Boolean,
    },
    emits: ["click-prev", "click-next"]

};
</script>
<!-- fetchCharacters(store.pages.prev)" -->
<!-- fetchCharacters(store.pages.next)" -->
<template>
    <!-- spostare navbar qui  -->
    <nav class="d-flex justify-content-center py-5 bg-dark" aria-label="Page navigation example">
        <ul class="pagination">

            <!-- BTN PREV -->
            <li class="page-item" v-if="showPrev" @click="$emit('click-prev')">
                <a class="page-link" href="#">Preius</a>
            </li>

            <!-- BTN NEXT -->
            <li class="page-item" v-if="showNext" @click="$emit('click-next')"><a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>