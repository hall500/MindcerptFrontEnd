import { Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
export default appRoutes;