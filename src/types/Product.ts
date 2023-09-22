interface Product {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[]; // Array of image URLs
    price: number;
    rating: number;
    stock: number;
    thumbnail: string; // Thumbnail image URL
    title: string;
}