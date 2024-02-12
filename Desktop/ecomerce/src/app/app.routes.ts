import { Routes,RouterModule } from '@angular/router';
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
        path: '',
        redirectTo: '/home',
        pathMatch:'full'
    }
];
