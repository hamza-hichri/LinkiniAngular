import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { FullComponent } from './layout/full/full.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { SingInComponent } from '../sing-in/sing-in.component';
import { SingUpComponent } from '../sing-up/sing-up.component';
import { UserComponent } from '../user/user.component';
import { SendemailComponent } from '../sendemail/sendemail.component';
import { LoginComponent } from '../login/login.component';
import { LogComponent } from '../amané/log/log.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {path:'user' , component:UserComponent},
      {path:'send' , component:SendemailComponent},
      {path:'login' , component:LoginComponent},
      {path:'log' , component:LogComponent},

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
