import '../css/app.css';

import './bootstrap';


// Importa AdminLTE
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
// Importar AdminLTE y sus dependencias
 // Los scripts de AdminLTE
import $ from 'jquery';
import Popper from 'popper.js';

// Configurar jQuery globalmente
window.$ = window.jQuery = $;
window.Popper = Popper;

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
