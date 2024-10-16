export interface CardData {
  id: number;
  name: string;
  community_name: string;
  title: string;
  desc: string;
  hands: number;
  comments: number;
  picture_url: string;
  date: string;
}

export interface DataStructure {
  foryou: CardData[];
  python: CardData[];
  javascript: CardData[];
  typescript: CardData[];
  following: CardData[];
}
