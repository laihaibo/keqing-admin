import { createApp } from 'vue'
import ECharts from "vue-echarts";
import "echarts";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

createApp(App).use(ElementPlus).component("v-chart", ECharts).mount('#app')
