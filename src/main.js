import { createApp } from 'vue'

// IMPORTIAMO BOOSTRAP
import "bootstrap/dist/css/bootstrap.min.css"

// IMPORTIAMO FONTAWESOME

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add()



// VUE.JS
import App from './App.vue'

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
