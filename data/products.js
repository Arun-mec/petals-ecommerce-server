// const allFeatures = [
//   "100% Warranty",
//   "Free Delivery",
//   "10 Days Replacement",
//   "Amazon Delivered",
//   "Cash on Delivery",
//   "Easy Returns",
//   "24/7 Customer Support",
//   "Eco-Friendly Packaging",
//   "Secure Payment",
//   "Premium Quality"
// ];

// const products = Array.from({ length: 25 }, (_, i) => {
//   const features = [...allFeatures]
//     .sort(() => 0.5 - Math.random())
//     .slice(0, Math.floor(Math.random() * 4) + 2); // 2 to 5 features

//   return {
//     name: `Product ${i + 1} - Classy Easy Zipper Tote`,
//     image: `/images/image_${(i % 10) + 1}.jpg`,
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     brand: ["Zenon", "UrbanEdge", "Fable", "TrendyCo", "Miniml"][i % 5],
//     category: ["Bags", "Backpacks", "Accessories", "Luggage"][i % 4],
//     price: 1000 + (i % 10) * 150,
//     discount: [0, 10, 15, 20][i % 4],
//     previousPrice: Math.round((1000 + (i % 10) * 150) / (1 - [0, 0.1, 0.15, 0.2][i % 4])),
//     countInStock: 5 + (i % 6) * 3,
//     rating: (Math.random() * 2 + 3).toFixed(1),
//     numReviews: Math.floor(Math.random() * 100),
//     colors: [
//       "#000000", "#8B4513", "#D2B48C", "#F5F5DC",
//       "#808000", "#000080", "#808080", "#800000",
//       "#FFFFFF", "#36454F"
//     ].slice(0, (i % 6) + 2),
//     availableColors: [
//       "#000000", "#8B4513", "#D2B48C", "#F5F5DC",
//       "#808000", "#000080", "#808080", "#800000",
//       "#FFFFFF", "#36454F"
//     ].slice(0, (i % 6) + 2),
//     sizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL", "4XL"].slice(0, (i % 4) + 1),
//     availableSizes: ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL", "4XL"].slice(0, (i % 4) + 1),
//     material: ["Leather", "Canvas", "Nylon", "Synthetic"][i % 4],
//     isFeatured: i % 6 === 0,
//     createdAt: new Date(Date.now() - i * 86400000).toISOString(),
//     brandDetails: {
//       name: ["Zenon", "UrbanEdge", "Fable", "TrendyCo", "Miniml"][i % 5],
//       origin: ["Italy", "USA", "Japan", "India", "Germany"][i % 5],
//       description: `High-quality products by ${["Zenon", "UrbanEdge", "Fable", "TrendyCo", "Miniml"][i % 5]}, crafted with precision and care.`
//     },
//     features
//   };
// });

// module.exports = products;

const products = [
  {
    "name": "Product 1 - Classy Easy Zipper Tote",
    "image": "/images/image_1.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Zenon",
    "category": "Bags",
    "price": 1000,
    "discount": 0,
    "previousPrice": 1000,
    "countInStock": 5,
    "rating": "3.3",
    "numReviews": 48,
    "colors": [
      "#000000",
      "#8B4513"
    ],
    "availableColors": [
      "#000000",
      "#8B4513"
    ],
    "sizes": [
      "XS"
    ],
    "availableSizes": [
      "XS"
    ],
    "material": "Leather",
    "isFeatured": true,
    "createdAt": "2025-05-18T06:36:23.528Z",
    "brandDetails": {
      "name": "Zenon",
      "origin": "Italy",
      "description": "High-quality products by Zenon, crafted with precision and care."
    },
    "features": [
      "Eco-Friendly Packaging",
      "10 Days Replacement",
      "Easy Returns",
      "Secure Payment"
    ]
  },
  {
    "name": "Product 2 - Classy Easy Zipper Tote",
    "image": "/images/image_2.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "UrbanEdge",
    "category": "Backpacks",
    "price": 1150,
    "discount": 10,
    "previousPrice": 1278,
    "countInStock": 8,
    "rating": "4.9",
    "numReviews": 74,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C"
    ],
    "sizes": [
      "XS",
      "SM"
    ],
    "availableSizes": [
      "XS",
      "SM"
    ],
    "material": "Canvas",
    "isFeatured": false,
    "createdAt": "2025-05-17T06:36:23.528Z",
    "brandDetails": {
      "name": "UrbanEdge",
      "origin": "USA",
      "description": "High-quality products by UrbanEdge, crafted with precision and care."
    },
    "features": [
      "24/7 Customer Support",
      "Amazon Delivered",
      "Free Delivery",
      "Easy Returns",
      "Secure Payment"
    ]
  },
  {
    "name": "Product 3 - Classy Easy Zipper Tote",
    "image": "/images/image_3.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Fable",
    "category": "Accessories",
    "price": 1300,
    "discount": 15,
    "previousPrice": 1529,
    "countInStock": 11,
    "rating": "4.2",
    "numReviews": 96,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD"
    ],
    "material": "Nylon",
    "isFeatured": false,
    "createdAt": "2025-05-16T06:36:23.528Z",
    "brandDetails": {
      "name": "Fable",
      "origin": "Japan",
      "description": "High-quality products by Fable, crafted with precision and care."
    },
    "features": [
      "Cash on Delivery",
      "Premium Quality",
      "Free Delivery"
    ]
  },
  {
    "name": "Product 4 - Classy Easy Zipper Tote",
    "image": "/images/image_4.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "TrendyCo",
    "category": "Luggage",
    "price": 1450,
    "discount": 20,
    "previousPrice": 1813,
    "countInStock": 14,
    "rating": "3.7",
    "numReviews": 22,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "material": "Synthetic",
    "isFeatured": false,
    "createdAt": "2025-05-15T06:36:23.528Z",
    "brandDetails": {
      "name": "TrendyCo",
      "origin": "India",
      "description": "High-quality products by TrendyCo, crafted with precision and care."
    },
    "features": [
      "24/7 Customer Support",
      "Amazon Delivered",
      "Premium Quality"
    ]
  },
  {
    "name": "Product 5 - Classy Easy Zipper Tote",
    "image": "/images/image_5.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Miniml",
    "category": "Bags",
    "price": 1600,
    "discount": 0,
    "previousPrice": 1600,
    "countInStock": 17,
    "rating": "4.8",
    "numReviews": 52,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080"
    ],
    "sizes": [
      "XS"
    ],
    "availableSizes": [
      "XS"
    ],
    "material": "Leather",
    "isFeatured": false,
    "createdAt": "2025-05-14T06:36:23.528Z",
    "brandDetails": {
      "name": "Miniml",
      "origin": "Germany",
      "description": "High-quality products by Miniml, crafted with precision and care."
    },
    "features": [
      "Amazon Delivered",
      "10 Days Replacement",
      "Free Delivery",
      "Easy Returns",
      "Cash on Delivery"
    ]
  },
  {
    "name": "Product 6 - Classy Easy Zipper Tote",
    "image": "/images/image_6.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Zenon",
    "category": "Backpacks",
    "price": 1750,
    "discount": 10,
    "previousPrice": 1944,
    "countInStock": 20,
    "rating": "3.4",
    "numReviews": 34,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080",
      "#808080"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080",
      "#808080"
    ],
    "sizes": [
      "XS",
      "SM"
    ],
    "availableSizes": [
      "XS",
      "SM"
    ],
    "material": "Canvas",
    "isFeatured": false,
    "createdAt": "2025-05-13T06:36:23.528Z",
    "brandDetails": {
      "name": "Zenon",
      "origin": "Italy",
      "description": "High-quality products by Zenon, crafted with precision and care."
    },
    "features": [
      "100% Warranty",
      "Eco-Friendly Packaging",
      "Free Delivery",
      "Cash on Delivery",
      "Premium Quality"
    ]
  },
  {
    "name": "Product 7 - Classy Easy Zipper Tote",
    "image": "/images/image_7.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "UrbanEdge",
    "category": "Accessories",
    "price": 1900,
    "discount": 15,
    "previousPrice": 2235,
    "countInStock": 5,
    "rating": "4.2",
    "numReviews": 7,
    "colors": [
      "#000000",
      "#8B4513"
    ],
    "availableColors": [
      "#000000",
      "#8B4513"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD"
    ],
    "material": "Nylon",
    "isFeatured": true,
    "createdAt": "2025-05-12T06:36:23.528Z",
    "brandDetails": {
      "name": "UrbanEdge",
      "origin": "USA",
      "description": "High-quality products by UrbanEdge, crafted with precision and care."
    },
    "features": [
      "100% Warranty",
      "24/7 Customer Support",
      "Easy Returns",
      "Free Delivery",
      "Secure Payment"
    ]
  },
  {
    "name": "Product 8 - Classy Easy Zipper Tote",
    "image": "/images/image_8.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Fable",
    "category": "Luggage",
    "price": 2050,
    "discount": 20,
    "previousPrice": 2563,
    "countInStock": 8,
    "rating": "3.4",
    "numReviews": 8,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "material": "Synthetic",
    "isFeatured": false,
    "createdAt": "2025-05-11T06:36:23.528Z",
    "brandDetails": {
      "name": "Fable",
      "origin": "Japan",
      "description": "High-quality products by Fable, crafted with precision and care."
    },
    "features": [
      "Free Delivery",
      "Secure Payment",
      "Cash on Delivery"
    ]
  },
  {
    "name": "Product 9 - Classy Easy Zipper Tote",
    "image": "/images/image_9.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "TrendyCo",
    "category": "Bags",
    "price": 2200,
    "discount": 0,
    "previousPrice": 2200,
    "countInStock": 11,
    "rating": "3.1",
    "numReviews": 46,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC"
    ],
    "sizes": [
      "XS"
    ],
    "availableSizes": [
      "XS"
    ],
    "material": "Leather",
    "isFeatured": false,
    "createdAt": "2025-05-10T06:36:23.528Z",
    "brandDetails": {
      "name": "TrendyCo",
      "origin": "India",
      "description": "High-quality products by TrendyCo, crafted with precision and care."
    },
    "features": [
      "Eco-Friendly Packaging",
      "Secure Payment"
    ]
  },
  {
    "name": "Product 10 - Classy Easy Zipper Tote",
    "image": "/images/image_10.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Miniml",
    "category": "Backpacks",
    "price": 2350,
    "discount": 10,
    "previousPrice": 2611,
    "countInStock": 14,
    "rating": "4.1",
    "numReviews": 98,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000"
    ],
    "sizes": [
      "XS",
      "SM"
    ],
    "availableSizes": [
      "XS",
      "SM"
    ],
    "material": "Canvas",
    "isFeatured": false,
    "createdAt": "2025-05-09T06:36:23.528Z",
    "brandDetails": {
      "name": "Miniml",
      "origin": "Germany",
      "description": "High-quality products by Miniml, crafted with precision and care."
    },
    "features": [
      "100% Warranty",
      "Free Delivery",
      "Easy Returns",
      "24/7 Customer Support"
    ]
  },
  {
    "name": "Product 11 - Classy Easy Zipper Tote",
    "image": "/images/image_1.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Zenon",
    "category": "Accessories",
    "price": 1000,
    "discount": 15,
    "previousPrice": 1176,
    "countInStock": 17,
    "rating": "3.7",
    "numReviews": 23,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD"
    ],
    "material": "Nylon",
    "isFeatured": false,
    "createdAt": "2025-05-08T06:36:23.528Z",
    "brandDetails": {
      "name": "Zenon",
      "origin": "Italy",
      "description": "High-quality products by Zenon, crafted with precision and care."
    },
    "features": [
      "100% Warranty",
      "Easy Returns",
      "24/7 Customer Support",
      "Amazon Delivered"
    ]
  },
  {
    "name": "Product 12 - Classy Easy Zipper Tote",
    "image": "/images/image_2.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "UrbanEdge",
    "category": "Luggage",
    "price": 1150,
    "discount": 20,
    "previousPrice": 1438,
    "countInStock": 20,
    "rating": "3.3",
    "numReviews": 44,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080",
      "#808080"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080",
      "#808080"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "material": "Synthetic",
    "isFeatured": false,
    "createdAt": "2025-05-07T06:36:23.528Z",
    "brandDetails": {
      "name": "UrbanEdge",
      "origin": "USA",
      "description": "High-quality products by UrbanEdge, crafted with precision and care."
    },
    "features": [
      "100% Warranty",
      "Cash on Delivery",
      "Premium Quality",
      "Secure Payment"
    ]
  },
  {
    "name": "Product 13 - Classy Easy Zipper Tote",
    "image": "/images/image_3.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Fable",
    "category": "Bags",
    "price": 1300,
    "discount": 0,
    "previousPrice": 1300,
    "countInStock": 5,
    "rating": "4.5",
    "numReviews": 23,
    "colors": [
      "#000000",
      "#8B4513"
    ],
    "availableColors": [
      "#000000",
      "#8B4513"
    ],
    "sizes": [
      "XS"
    ],
    "availableSizes": [
      "XS"
    ],
    "material": "Leather",
    "isFeatured": true,
    "createdAt": "2025-05-06T06:36:23.528Z",
    "brandDetails": {
      "name": "Fable",
      "origin": "Japan",
      "description": "High-quality products by Fable, crafted with precision and care."
    },
    "features": [
      "Easy Returns",
      "Free Delivery",
      "Amazon Delivered",
      "Secure Payment",
      "Cash on Delivery"
    ]
  },
  {
    "name": "Product 14 - Classy Easy Zipper Tote",
    "image": "/images/image_4.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "TrendyCo",
    "category": "Backpacks",
    "price": 1450,
    "discount": 10,
    "previousPrice": 1611,
    "countInStock": 8,
    "rating": "3.6",
    "numReviews": 56,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C"
    ],
    "sizes": [
      "XS",
      "SM"
    ],
    "availableSizes": [
      "XS",
      "SM"
    ],
    "material": "Canvas",
    "isFeatured": false,
    "createdAt": "2025-05-05T06:36:23.528Z",
    "brandDetails": {
      "name": "TrendyCo",
      "origin": "India",
      "description": "High-quality products by TrendyCo, crafted with precision and care."
    },
    "features": [
      "Premium Quality",
      "100% Warranty",
      "Eco-Friendly Packaging"
    ]
  },
  {
    "name": "Product 15 - Classy Easy Zipper Tote",
    "image": "/images/image_5.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Miniml",
    "category": "Accessories",
    "price": 1600,
    "discount": 15,
    "previousPrice": 1882,
    "countInStock": 11,
    "rating": "4.8",
    "numReviews": 42,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD"
    ],
    "material": "Nylon",
    "isFeatured": false,
    "createdAt": "2025-05-04T06:36:23.528Z",
    "brandDetails": {
      "name": "Miniml",
      "origin": "Germany",
      "description": "High-quality products by Miniml, crafted with precision and care."
    },
    "features": [
      "Easy Returns",
      "Premium Quality",
      "Secure Payment"
    ]
  },
  {
    "name": "Product 16 - Classy Easy Zipper Tote",
    "image": "/images/image_6.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Zenon",
    "category": "Luggage",
    "price": 1750,
    "discount": 20,
    "previousPrice": 2188,
    "countInStock": 14,
    "rating": "3.0",
    "numReviews": 39,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "material": "Synthetic",
    "isFeatured": false,
    "createdAt": "2025-05-03T06:36:23.528Z",
    "brandDetails": {
      "name": "Zenon",
      "origin": "Italy",
      "description": "High-quality products by Zenon, crafted with precision and care."
    },
    "features": [
      "Eco-Friendly Packaging",
      "10 Days Replacement"
    ]
  },
  {
    "name": "Product 17 - Classy Easy Zipper Tote",
    "image": "/images/image_7.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "UrbanEdge",
    "category": "Bags",
    "price": 1900,
    "discount": 0,
    "previousPrice": 1900,
    "countInStock": 17,
    "rating": "3.8",
    "numReviews": 21,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080"
    ],
    "sizes": [
      "XS"
    ],
    "availableSizes": [
      "XS"
    ],
    "material": "Leather",
    "isFeatured": false,
    "createdAt": "2025-05-02T06:36:23.528Z",
    "brandDetails": {
      "name": "UrbanEdge",
      "origin": "USA",
      "description": "High-quality products by UrbanEdge, crafted with precision and care."
    },
    "features": [
      "Free Delivery",
      "100% Warranty",
      "Secure Payment",
      "Eco-Friendly Packaging"
    ]
  },
  {
    "name": "Product 18 - Classy Easy Zipper Tote",
    "image": "/images/image_8.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Fable",
    "category": "Backpacks",
    "price": 2050,
    "discount": 10,
    "previousPrice": 2278,
    "countInStock": 20,
    "rating": "4.0",
    "numReviews": 29,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080",
      "#808080"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080",
      "#808080"
    ],
    "sizes": [
      "XS",
      "SM"
    ],
    "availableSizes": [
      "XS",
      "SM"
    ],
    "material": "Canvas",
    "isFeatured": false,
    "createdAt": "2025-05-01T06:36:23.528Z",
    "brandDetails": {
      "name": "Fable",
      "origin": "Japan",
      "description": "High-quality products by Fable, crafted with precision and care."
    },
    "features": [
      "100% Warranty",
      "Free Delivery",
      "Cash on Delivery",
      "10 Days Replacement"
    ]
  },
  {
    "name": "Product 19 - Classy Easy Zipper Tote",
    "image": "/images/image_9.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "TrendyCo",
    "category": "Accessories",
    "price": 2200,
    "discount": 15,
    "previousPrice": 2588,
    "countInStock": 5,
    "rating": "3.1",
    "numReviews": 24,
    "colors": [
      "#000000",
      "#8B4513"
    ],
    "availableColors": [
      "#000000",
      "#8B4513"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD"
    ],
    "material": "Nylon",
    "isFeatured": true,
    "createdAt": "2025-04-30T06:36:23.528Z",
    "brandDetails": {
      "name": "TrendyCo",
      "origin": "India",
      "description": "High-quality products by TrendyCo, crafted with precision and care."
    },
    "features": [
      "Easy Returns",
      "24/7 Customer Support",
      "Premium Quality"
    ]
  },
  {
    "name": "Product 20 - Classy Easy Zipper Tote",
    "image": "/images/image_10.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Miniml",
    "category": "Luggage",
    "price": 2350,
    "discount": 20,
    "previousPrice": 2938,
    "countInStock": 8,
    "rating": "3.1",
    "numReviews": 95,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "material": "Synthetic",
    "isFeatured": false,
    "createdAt": "2025-04-29T06:36:23.528Z",
    "brandDetails": {
      "name": "Miniml",
      "origin": "Germany",
      "description": "High-quality products by Miniml, crafted with precision and care."
    },
    "features": [
      "Easy Returns",
      "Amazon Delivered",
      "Free Delivery",
      "Eco-Friendly Packaging"
    ]
  },
  {
    "name": "Product 21 - Classy Easy Zipper Tote",
    "image": "/images/image_1.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Zenon",
    "category": "Bags",
    "price": 1000,
    "discount": 0,
    "previousPrice": 1000,
    "countInStock": 11,
    "rating": "4.6",
    "numReviews": 6,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC"
    ],
    "sizes": [
      "XS"
    ],
    "availableSizes": [
      "XS"
    ],
    "material": "Leather",
    "isFeatured": false,
    "createdAt": "2025-04-28T06:36:23.528Z",
    "brandDetails": {
      "name": "Zenon",
      "origin": "Italy",
      "description": "High-quality products by Zenon, crafted with precision and care."
    },
    "features": [
      "100% Warranty",
      "Easy Returns",
      "Eco-Friendly Packaging",
      "24/7 Customer Support"
    ]
  },
  {
    "name": "Product 22 - Classy Easy Zipper Tote",
    "image": "/images/image_2.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "UrbanEdge",
    "category": "Backpacks",
    "price": 1150,
    "discount": 10,
    "previousPrice": 1278,
    "countInStock": 14,
    "rating": "5.0",
    "numReviews": 15,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000"
    ],
    "sizes": [
      "XS",
      "SM"
    ],
    "availableSizes": [
      "XS",
      "SM"
    ],
    "material": "Canvas",
    "isFeatured": false,
    "createdAt": "2025-04-27T06:36:23.528Z",
    "brandDetails": {
      "name": "UrbanEdge",
      "origin": "USA",
      "description": "High-quality products by UrbanEdge, crafted with precision and care."
    },
    "features": [
      "Secure Payment",
      "Cash on Delivery",
      "Amazon Delivered"
    ]
  },
  {
    "name": "Product 23 - Classy Easy Zipper Tote",
    "image": "/images/image_3.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Fable",
    "category": "Accessories",
    "price": 1300,
    "discount": 15,
    "previousPrice": 1529,
    "countInStock": 17,
    "rating": "4.8",
    "numReviews": 64,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD"
    ],
    "material": "Nylon",
    "isFeatured": false,
    "createdAt": "2025-04-26T06:36:23.528Z",
    "brandDetails": {
      "name": "Fable",
      "origin": "Japan",
      "description": "High-quality products by Fable, crafted with precision and care."
    },
    "features": [
      "Easy Returns",
      "100% Warranty"
    ]
  },
  {
    "name": "Product 24 - Classy Easy Zipper Tote",
    "image": "/images/image_4.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "TrendyCo",
    "category": "Luggage",
    "price": 1450,
    "discount": 20,
    "previousPrice": 1813,
    "countInStock": 20,
    "rating": "3.8",
    "numReviews": 69,
    "colors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080",
      "#808080"
    ],
    "availableColors": [
      "#000000",
      "#8B4513",
      "#D2B48C",
      "#F5F5DC",
      "#808000",
      "#000080",
      "#808080"
    ],
    "sizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "availableSizes": [
      "XS",
      "SM",
      "MD",
      "LG"
    ],
    "material": "Synthetic",
    "isFeatured": false,
    "createdAt": "2025-04-25T06:36:23.528Z",
    "brandDetails": {
      "name": "TrendyCo",
      "origin": "India",
      "description": "High-quality products by TrendyCo, crafted with precision and care."
    },
    "features": [
      "100% Warranty",
      "Cash on Delivery"
    ]
  },
  {
    "name": "Product 25 - Classy Easy Zipper Tote",
    "image": "/images/image_5.jpg",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "brand": "Miniml",
    "category": "Bags",
    "price": 1600,
    "discount": 0,
    "previousPrice": 1600,
    "countInStock": 5,
    "rating": "4.4",
    "numReviews": 15,
    "colors": [
      "#000000",
      "#8B4513"
    ],
    "availableColors": [
      "#000000",
      "#8B4513"
    ],
    "sizes": [
      "XS"
    ],
    "availableSizes": [
      "XS"
    ],
    "material": "Leather",
    "isFeatured": true,
    "createdAt": "2025-04-24T06:36:23.528Z",
    "brandDetails": {
      "name": "Miniml",
      "origin": "Germany",
      "description": "High-quality products by Miniml, crafted with precision and care."
    },
    "features": [
      "Premium Quality",
      "Secure Payment",
      "Cash on Delivery"
    ]
  }
]

module.exports = products