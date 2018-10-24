export class Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

// ?pour faire comprendre que la propriété peut être présente mais c'est pas automatique
// Si il est présent, il sera présent mais sinon il va pas gueuler si il est pas là
// Exemple : dans une vue de détail et sinon dans une vue beaucoup plus complète, on crée un seul modèle pour les deux trucs
