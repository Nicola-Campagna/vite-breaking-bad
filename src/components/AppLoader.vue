<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
    data() {
        return {
            props: {
                text: String,
            }
        }
    }

    // components: {
    //   MyComponent,
    // },
};
</script>

<template>
    <div class="overlay">
        <slot></slot>
        STA CARICANDO
    </div>
</template>

<style lang="scss">
@use "../scss/partials/style.scss" as *;

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: orange;
}
</style>