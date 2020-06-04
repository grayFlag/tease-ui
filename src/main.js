import Vue from 'vue'
import App from './App.vue'
import teaseUi from '../packages/index';

Vue.use(teaseUi);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
