import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { PostComponent } from './post/post.component';
import { StatComponent } from './stat/stat.component';





const routes: Routes = [
  {
    path: '',
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      {path:'publication',component: PostComponent},
      {path:'stat',component: StatComponent},

      { path: '', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
