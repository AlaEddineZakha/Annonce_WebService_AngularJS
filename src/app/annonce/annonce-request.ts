export class AnnonceRequest {
  id: number;
  titre: string;
  description: string;
  emplacement: string;
  prix: number;
  image: string;
  categorie: {
    id: number;
  };
  user: {
    id: number;
  };
  constructor(titre: string , description: string , emplacement: string , prix: number , image: string , categorie: number , user: number) {
   this.titre = titre;
   this.description = description;
   this.emplacement = emplacement;
   this.prix = prix;
   this.image = image;
   this.categorie = {id: categorie};
   this.user = {id: user};
  }
}
