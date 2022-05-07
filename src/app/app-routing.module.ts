import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from 'src/core/services/user.service';
import { AppUserRoutingModule } from './app-user/app-user-routing.module';
import { TravelComponent } from './travel/travel.component';



const routes: Routes = [
  {
    path: '',
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AppUserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
