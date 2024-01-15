import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { proxy } from 'ajax-hook'

proxy({

    onError:(err, handler) => {
        console.warn('ajax error')
        console.log(err.type);
        
        handler.next(err);
    }

})

createApp(App).mount('#app')
