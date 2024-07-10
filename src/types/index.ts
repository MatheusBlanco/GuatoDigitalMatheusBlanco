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
