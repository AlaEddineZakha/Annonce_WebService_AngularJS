import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import {CategorieService} from '../categorie/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  public categorie = [];
  constructor(private token: TokenStorageService , private _categorieService: CategorieService ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this._categorieService.getAllCategorie()
      .subscribe(data => this.categorie = data);
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
