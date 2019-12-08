import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../annonce.service';

import { ActivatedRoute, Router } from '@angular/router';
import {CategorieService} from '../../categorie/categorie.service';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
  selector: 'app-editannonce',
  templateUrl: './editannonce.component.html',
  styleUrls: ['./editannonce.component.css']
})
export class EditannonceComponent implements OnInit {

  form: any = {};
  id: number;
  _annonce: any;
  // tslint:disable-next-line:max-line-length
  constructor( private _anonceService: AnnonceService , private route: ActivatedRoute  ,
               private _categorieService: CategorieService , private token: TokenStorageService ,
               private router: Router) { }

  public categorie = [];
  public _option_categorie = {};

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this._categorieService.getAllCategorie()
      .subscribe(data => this.categorie = data);
    console.log(this.categorie);

    this._anonceService.getAnnonce(this.id)
      .subscribe(data => {
        this._annonce = data;
        console.log(data); });
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
      }
    };
    console.log(array);
    // @ts-ignore
    this._anonceService.EditAnnonce(array , this.id)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/annonce/all']);
      });
  }
  onChange( value: any) {
    this._option_categorie = { 'id' : value};
    console.log(this.form);
  }
}
