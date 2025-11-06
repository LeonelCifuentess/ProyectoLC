import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { Registro} from './pages/registro/registro';
import { Aluminio } from './pages/aluminio/aluminio';
import { Vidrio } from './pages/vidrio/vidrio';
import { Metal } from './pages/metal/metal';

export const routes: Routes = [
    {
        /*definimos ruta general o raiz ene especifico que
        nos lleve a la ruta home -> principal*/
        path:"", component: Home
    },
    {
        path: "home", component: Home
    },
    {
        path: "about", component: About
    },
    {
        path:"product", component: Product
    },
    {
        path:"contact", component:Contact
    },
    {
        path:"registro",component:Registro
    },
    {
        path:"aluminio",component:Aluminio
    },
    {
        path:"vidrio",component:Vidrio
    },
    {
        path:"metal",component:Metal
    }
];
