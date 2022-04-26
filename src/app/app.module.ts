import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { NavComponent } from './nav/nav.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ProfileComponent } from './profile/profile.component';
import { BannerNavigationComponent } from './apps/shared/banner-navigation/banner-navigation.component';
import { InvitationfilsComponent } from './invitationfils/invitationfils.component';






@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SingUpComponent,
    NavComponent,
    InvitationComponent,
    ProfileComponent,
    InvitationfilsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
