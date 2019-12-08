import { Component, OnInit } from '@angular/core';

import { AnnonceService} from '../annonce.service';
import { CategorieService } from '../../categorie/categorie.service';
import { UserService } from '../../user/user.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import { UserResopnse } from '../../user/user-resopnse';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addannonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['../annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  form: any = {};
  info: any;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  public _user = [];
  // tslint:disable-next-line:max-line-length
  constructor(private annonceService: AnnonceService , private _categorieService: CategorieService , private token: TokenStorageService , private _userService: UserService , private router: Router) { }

  public categorie = [];
  public _option_categorie = {};
  ngOnInit() {
    this._categorieService.getAllCategorie()
      .subscribe(data => this.categorie = data);
    console.log(this.categorie);
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    // @ts-ignore
    this._userService.getUser(this.info.username)
      .subscribe(data => {
        this._user = data;
      });
  }
  onChange( value: any) {
    this._option_categorie = { 'id' : value};
    console.log(this.form);
  }
  onSubmit() {

    const array = {
      'description' : this.form.description ,
      'emplacement' : this.form.emplacement ,
      'image' : 'Image1' ,
      'titre' : this.form.titre ,
      'prix' : this.form.prix,
      'categorie' : {
        'id' : this.form.categorie
      },
      'user' : {
        'id' : this._user['id'],
      }
    };
    console.log(array);
    // @ts-ignore
    this.annonceService.ajouterAnnonce(array).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        // @ts-ignore
        this.router.navigate(['/annonce/all']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
