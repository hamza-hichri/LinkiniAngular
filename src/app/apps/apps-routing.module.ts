import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { FullComponent } from './layout/full/full.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { SingInComponent } from '../sing-in/sing-in.component';
import { SingUpComponent } from '../sing-up/sing-up.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {path:'singin' , component:SingInComponent},
      {path:'singup' , component:SingUpComponent},
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'invitation', component: InvitationComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
