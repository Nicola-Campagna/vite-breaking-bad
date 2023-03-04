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
    emits: ["change-page"]

};
</script>
<!-- fetchCharacters(store.pages.prev)" -->
<!-- fetchCharacters(store.pages.next)" -->
<template>
    <!-- spostare navbar qui  -->
    <nav class="d-flex justify-content-center py-5" aria-label="Page navigation example">
        <ul class="pagination">
            <li>ok</li>
            <!-- BTN PREV -->
            <li v-if="showPrev" @click="$emit('change-page', 'prev')">
                <a href="#">Preius</a>
            </li>

            <!-- BTN NEXT -->
            <li v-if="showNext" @click="$emit('change-page', 'next')"><a href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>