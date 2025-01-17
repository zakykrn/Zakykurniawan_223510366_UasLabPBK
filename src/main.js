import { createApp } from 'vue';
import { Quasar } from 'quasar';
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(Quasar, {
  config: {
    brand: {
      primary: '#1976D2',
    },
  },
});
app.use(router);
app.mount('#app');
