import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private _url_commentaire = 'http://localhost:8080/commentaire/annonce';
  private _url_add = 'http://localhost:8080/commentaire/create';

  constructor(private http: HttpClient) {
  }

  getCommentaireWithAnnonce(idannonce: number): Observable<any> {
    // @ts-ignore
    return this.http.get<any>(`${this._url_commentaire}/${idannonce}/`);
  }

  addCommentaire( Commentaire: any): Observable<any> {
    // @ts-ignore
    return this.http.post<any>( this._url_add , Commentaire);
  }
}
