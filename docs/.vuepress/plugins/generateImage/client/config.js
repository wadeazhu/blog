import { defineClientConfig } from '@vuepress/client';
import GenerateImage from './components/index.vue';
export default defineClientConfig({
    rootComponents: [GenerateImage],
});
