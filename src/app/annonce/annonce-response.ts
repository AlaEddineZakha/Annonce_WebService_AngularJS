export class AnnonceResponse {
  id: number;
  titre: string;
  description: string;
  emplacement: string;
  prix: number;
  image: string;
  categorie: {
    id: number;
    nom: string;
  };
  user: {
    id: number;
    name: string;
    username: string;
  };
}
