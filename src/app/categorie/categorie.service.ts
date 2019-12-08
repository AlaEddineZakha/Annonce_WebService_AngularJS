import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private  _urlcategorie = 'http://localhost:8080/categorie/all';
  constructor( private http: HttpClient) {
  }

  getAllCategorie(): Observable<CategorieService[]> {
    return this.http.get<CategorieService[]>(this._urlcategorie);
  }

}
