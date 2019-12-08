import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import {AddAnnonceComponent} from './annonce/addannonce/addannonce.component';
import {AllAnnonceComponent} from './annonce/allannonce/allannonce.component';
import {CategorieComponent} from './categorie/categorie.component';
import {EditannonceComponent} from './annonce/editannonce/editannonce.component';
import {ContactComponent} from './commentaire/contact/contact.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
      path: 'annonce/all',
      component: AllAnnonceComponent
    },
    {
      path: 'annonce/add',
      component: AddAnnonceComponent
    },
    {
      path: 'categorie',
      component: CategorieComponent
    },
    {
      path: 'annonce/:id/edit',
      component: EditannonceComponent
    },
    {
      path: 'annonce/:id/contact',
      component: ContactComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
