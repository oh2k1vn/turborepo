export interface DataProps {
  products: Product[]
  categories: Category[]
  loveProducts: LoveProducts
  productDetail: ProductDetail
}

export interface Product {
  id: string
  name: string
  tags: string[]
  brand: string
  price: number
  imgUrl: string
}

export interface Category {
  id: string
  name: string
  iconUrl: string
}

export interface LoveProducts {
  product4: boolean
  product8: boolean
}

export interface ProductDetail {
  id: string
  name: string
  tags: string[]
  brand: string
  price: number
  colors: Color[]
  imageUrls: string[]
  description: string
  availability: Availability
  deliveryInfo: DeliveryInfo
  specifications: Specification[]
  storageOptions: StorageOption[]
  discountedPrice: number
  shortDescription: string
}

export interface Color {
  name: string
  hexCode: string
}

export interface Availability {
  addToCart: boolean
  addToWishlist: boolean
}

export interface DeliveryInfo {
  inStock: string
  guaranteed: string
  freeDelivery: string
}

export interface Specification {
  icon: string
  name: string
  value: string
}

export interface StorageOption {
  capacity: string
  isSelected: boolean
}

export interface reviewProduct {
  totalRating: TotalRating
  detailReview: DetailReview[]
}

export interface TotalRating {
  rating: number
  totalReviews: number
  ratings: Rating[]
}

export interface Rating {
  label: string
  value: number
  width: number
}

export interface DetailReview {
  name: string
  avatar: string
  date: string
  reviewText: string
  imageFeedBack?: string[]
  starRating: number

}
