<script>
// import MyComponent from "./components/MyComponent.vue";

import CharactersList from './CharactersList.vue'

export default {
    data() {
        return {
        }
    },

    components: {
        //   MyComponent,
        CharactersList
    },
};
</script>

<template>
    <main>
        <div class="container-fluid bg-orange">
            <CharactersList />
        </div>
    </main>
</template>

<style lang="scss" scoped></style>