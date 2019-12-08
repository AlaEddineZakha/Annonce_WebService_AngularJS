import { Component, OnInit } from '@angular/core';
import {CommentaireService} from '../commentaire.service';
import {AnnonceService} from '../../annonce/annonce.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-annonce',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  _commentaire = [];
  _annonce: any = {};
  id_annonce: number;

  constructor( private _commentaireService: CommentaireService , private _annonceService: AnnonceService ,
               private route: ActivatedRoute) { }

  ngOnInit() {

    this.id_annonce = this.route.snapshot.params['id'];
console.log(this.id_annonce);
    this._annonceService.getAnnonce(this.id_annonce)
      .subscribe( data => {
        this._annonce = data;
      });
console.log(this._annonce);
    this._commentaireService.getCommentaireWithAnnonce(this.id_annonce)
      .subscribe(data => {
        this._commentaire = data;
      });
    console.log(this._commentaire);
  }

}
