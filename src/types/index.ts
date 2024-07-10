export type CategoryItemType = {
  title: string;
  bgColor: string;
  imageUrl: Object;
  borderColor?: string;
};

export type ServiceItemType = {
  title: string;
  rating: number;
  reviewNumber: number;
  price: number;
  urlImage: string;
  id: string;
};

export type OfferType = {
  id: number;
  title: string;
  bgColor: string;
  offerPercentage: number;
};

export type NewsType = {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string | null;
};
