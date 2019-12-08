import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AnnonceRequest} from './annonce-request';
import {AnnonceResponse} from './annonce-response';
import {Observable} from 'rxjs';
import {CategorieResponse} from '../categorie/categorie-response';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private  addAnnonce = 'http://localhost:8080/annonce/create';
  private  allAnnonce = 'http://localhost:8080/annonce/all';
  private  getOneAnnonce = 'http://localhost:8080/annonce/';
  private  deleteAnnonce = 'http://localhost:8080/annonce/';
  private  editAnnonce = 'http://localhost:8080/annonce/';

  constructor(private http: HttpClient) {
  }
    ajouterAnnonce(info: AnnonceRequest): Observable<string> {
      return this.http.post<string>(this.addAnnonce , info, httpOptions);
  }
  getAllAnnonce(): Observable<AnnonceService[]> {
    return this.http.get<AnnonceService[]>(this.allAnnonce);
  }

  EditAnnonce ( annonce: AnnonceRequest , id: number ): Observable<AnnonceRequest> {
    // @ts-ignore
    return this.http.put(`${this.editAnnonce}${id}/edit`, annonce , httpOptions);
  }

  getAnnonce( id: number ): Observable<AnnonceService[]> {
    return this.http.get<AnnonceService[]>(`${this.getOneAnnonce}${id}/view`);
  }

  delete( id: number ): Observable<AnnonceService[]> {
    // @ts-ignore
    return this.http.delete(`${this.deleteAnnonce}${id}/delete`);
  }
}
