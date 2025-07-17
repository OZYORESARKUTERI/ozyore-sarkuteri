const categories = [
  { id: 'bal', name: 'Bal' },
  { id: 'kasar', name: 'Kaşar' },
  { id: 'aricilik', name: 'Arıcılık Ürünleri' },
];

const products = [
  {
    id: 1,
    name: 'Çam Balı 500g',
    category: 'bal',
    price: 120,
    img: 'images/cam-bali.jpg',
    description: 'Doğal ve saf çam balı.'
  },
  {
    id: 2,
    name: 'Klasik Kaşar Peyniri 1kg',
    category: 'kasar',
    price: 95,
    img: 'images/kasar-peyniri.jpg',
    description: 'Lezzetli ve taze kaşar peyniri.'
  },
  {
    id: 3,
    name: 'Arı Kovanı Malzemeleri Seti',
    category: 'aricilik',
    price: 450,
    img: 'images/kovan-malzemeleri.jpg',
    description: 'Arıcılık için gerekli tüm malzemeler.'
  },
  // Daha fazla ürün ekleyebilirsin
];

let cart = [];
