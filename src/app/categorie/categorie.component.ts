import { Component, OnInit } from '@angular/core';
import {CategorieService} from './categorie.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public categorie = [];
  constructor(private _categorieService: CategorieService) { }

  ngOnInit() {
    this._categorieService.getAllCategorie()
      .subscribe(data => this.categorie = data);
    console.log(this.categorie);
  }

}
