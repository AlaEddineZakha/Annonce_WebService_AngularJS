import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
// @ts-ignore
import { AddAnnonceComponent } from './annonce/addannonce/addannonce.component';
import {AllAnnonceComponent} from './annonce/allannonce/allannonce.component';
import { CategorieComponent } from './categorie/categorie.component';
import { EditannonceComponent } from './annonce/editannonce/editannonce.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AddComponent } from './commentaire/add/add.component';
import {ContactComponent} from './commentaire/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    AddAnnonceComponent,
    AllAnnonceComponent,
    CategorieComponent,
    EditannonceComponent,
    CommentaireComponent,
    AddComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],

  providers: [httpInterceptorProviders],
  bootstrap: [
    AppComponent,
    ],
  entryComponents: [],
})
export class AppModule { }
