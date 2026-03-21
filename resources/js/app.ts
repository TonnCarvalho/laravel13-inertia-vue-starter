import '../css/app.css';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import {ZiggyVue} from '../../vendor/tightenco/ziggy'
import Main from "./layouts/main.vue";

createInertiaApp({
     title: (title) => `My App ${title}`,
     resolve: name => {
        const pages = import.meta.glob<DefineComponent>('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
          page.default.layout = page.default.layout || Main
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
        showSpinner: true,
    },
});
