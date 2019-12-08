import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {UserService} from '../../user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentaireService} from '../commentaire.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: any = {};
  info: any;
  _user = [];
  _id_annonce: number;
  _after_add_commentaire = '';
  constructor(private token: TokenStorageService , private _userService: UserService , private route: ActivatedRoute ,
              private _commentaitreService: CommentaireService , private router: Router) { }

  ngOnInit() {

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
  onSubmit() {
    this._id_annonce = this.route.snapshot.params['id'];
    const commentaire = {
      'contenu': this.form.contenu,
      'annonce' : {
        'id': this._id_annonce,
      },
      'user': {
        'id': this._user['id'],
      }
    };
console.log(commentaire);

    this._commentaitreService.addCommentaire(commentaire).subscribe(
      data => {
        console.log(data);
        const myDate = new Date();
        this._after_add_commentaire = this._after_add_commentaire + `<div class="media p-3">
                    <img src="/assets/images/annonce/img_avatar2_2.png" alt="Jane Doe" class="mr-3 mt-3 rounded-circle" style="width:45px;">
                    <div class="media-body">
                      <h4>${this._user['username']} <small><i>Poster on ${myDate.getMonth()}, ${myDate.getDate()}, ${myDate.getFullYear()},
                        ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getMilliseconds()} </i></small></h4>
                      <p> ${commentaire.contenu}.</p>
                    </div>
                  </div>`;
        // @ts-ignore
       // window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }
}
