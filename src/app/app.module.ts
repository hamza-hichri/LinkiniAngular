import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
// import { NavComponent } from './nav/nav.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ProfileComponent } from './profile/profile.component';
import { BannerNavigationComponent } from './apps/shared/banner-navigation/banner-navigation.component';
import { InvitationfilsComponent } from './invitationfils/invitationfils.component';
import { UserComponent } from './user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SendemailComponent } from './sendemail/sendemail.component';






@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SingUpComponent,
    //BannerNavigationComponent,
    InvitationComponent,
    ProfileComponent,
    InvitationfilsComponent,
    UserComponent,
    SendemailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
