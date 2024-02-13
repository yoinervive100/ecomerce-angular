import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch:'full'
    }
];
