import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue'
import './custom.css'
import { useRoute } from 'vitepress';
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom';

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  }
}