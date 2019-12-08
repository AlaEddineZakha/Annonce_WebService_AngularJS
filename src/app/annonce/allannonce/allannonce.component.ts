import { Component, OnInit } from '@angular/core';

import { AnnonceService} from '../annonce.service';
import { AnnonceRequest} from '../annonce-request';
import {AnnonceResponse} from '../annonce-response';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../user/user.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-allannonce',
  templateUrl: '../allannonce/allannonce.component.html',
  styleUrls: ['../annonce.component.css']
})
export class AllAnnonceComponent implements OnInit {
  form: any = {};
  annonceRequest: AnnonceRequest;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  allAnnonce = [];
  info: any;
  public _user = [];
  public limit = 10;

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  constructor(private annonceService: AnnonceService , private modalService: NgbModal , private _userService: UserService
              , private token: TokenStorageService  , private router: Router ,
              private _modalService: NgbModal ,
             ) { }

  ngOnInit() {
    this.annonceService.getAllAnnonce()
      .subscribe(data => this.allAnnonce = data);
    console.log(this.allAnnonce);
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this._userService.getUser(this.info.username)
      .subscribe(data => {
        this._user = data;
      });
    // tslint:disable-next-line:label-position no-unused-expression
  }
  onSubmit() {
    console.log(this.form);

    // @ts-ignore
    this.annonceRequest = new AnnonceRequest(
      this.form.titre,
      this.form.description,
      this.form.emplacement,
      this.form.prix,
      this.form.image,
      this.form.categorie.id,
      this.form.user.id);

    this.annonceService.ajouterAnnonce(this.annonceRequest).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  Delete( id) {
    this.annonceService.delete(id)
      .subscribe(data => {
        console.log(data);
        window.location.reload();
        //this.router.navigate(['/annonce/all']);
      });
  }
  open(content) {
    this.modalService.open(content);
  }
}
