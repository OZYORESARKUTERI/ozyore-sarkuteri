const products = [
  { name: "Taze Kaşar", price: 180 },
  { name: "Eski Kaşar", price: 240 },
  { name: "Kars Çiçek Balı", price: 300 },
  { name: "Tereyağı", price: 260 },
  { name: "Çeçil Peyniri", price: 220 },
  { name: "Kurutulmuş Kuşburnu", price: 100 },
  { name: "Kayısı", price: 90 },
  { name: "Ceviz", price: 180 },
  { name: "Maske", price: 25 },
  { name: "Eldiven", price: 20 },
  { name: "Körük", price: 120 },
  { name: "Mum (Lis)", price: 40 },
  { name: "Arı Kovanı", price: 550 }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const paymentInfo = document.getElementById("payment-info");

let cart = [];

products.forEach((product, index) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Fiyat: ${product.price} TL</p>
    <button onclick="addToCart(${index})">Sepete Ekle</button>
  `;
  productList.appendChild(div);
});

function addToCart(index) {
  cart.push(products[index]);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, idx) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.price} TL`;
    cartItems.appendChild(div);
  });
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    paymentInfo.textContent = "Sepetiniz boş.";
  } else {
    paymentInfo.innerHTML = "<p>Ödeme için lütfen aşağıdaki IBAN'a havale yapınız:</p><strong>IBAN: [SENİN İBANIN]</strong><br><strong>Alıcı: Özcan Aladağ</strong><br><p>WhatsApp: 0532 100 9336</p>";
  }
});
