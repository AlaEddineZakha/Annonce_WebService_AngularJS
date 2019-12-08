import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _urlUser = 'http://localhost:8080/user/view';
  constructor( private http: HttpClient) { }
  getUser( username: string ): Observable<any> {
    // @ts-ignore
    return this.http.get<any>(`${this._urlUser}/${username}`);
  }
}
