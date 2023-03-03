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
        <CharactersList />
    </main>
</template>

<style lang="scss" scoped></style>