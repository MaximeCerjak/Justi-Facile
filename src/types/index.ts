export interface LegalTopic {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
}

export interface LegalDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  content: {
    droits: string[];
    conseils: string[];
    textes_loi: string[];
  };
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
}

export type Category = 'logement' | 'travail' | 'famille' | 'consommation' | 'justice'; 