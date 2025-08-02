# AlMarket – Game Item Shop

**AlMarket** is a multi-language digital game shop that supports purchases for games like PUBG Mobile, Free Fire, Mobile Legends, and Call of Duty. The shop features custom pricing, point systems, internal payment handling, per-order chat, and full admin control.

---

## 🌐 Supported Languages

- Turkmen
- Russian
- English

---

## 🎮 Supported Games

- PUBG Mobile (UC)
- Free Fire (Diamonds)
- Mobile Legends (Diamonds)
- Call of Duty Mobile (CP)
- And more...

---

## ⚙️ Technologies Used

- **Frontend**: React, TailwindCSS, React Router
- **Backend**: Node.js (Express), MongoDB
- **Hosting**: Vercel (Frontend), Render or Railway (Backend)
- **Payments**: Stripe Integration

---

## 🚀 Features

- Internal payment system (no card data stored)
- Multi-language support (3 languages)
- Admin panel with full control (orders, prices, items, chat)
- Automatic status system:
  - **Ýatyryldy** – Cancelled (unpaid)
  - **Garasylyar** – Waiting (paid, processing)
  - **Gowşuryldy** – Delivered (admin button)
- Per-order private chat (buyer ↔ admin)
- Point system (e.g., 60UC = 5 points, 325UC = 20 points)
- UC split logic (e.g., 600UC = 300UC + 300UC if needed)
- Custom pricing and editable catalog
- Order tracking page for each user
- Admin logs of all orders

---

## 🧾 Order Flow

1. Buyer selects game & UC/points
2. Enters in-game ID
3. Pays via internal Stripe system
4. Order gets status: `Garasylyar`
5. Admin confirms: status → `Gowşuryldy`

---

## 📁 Project Structure
```
almarket/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Catalog.jsx
│   │   ├── Checkout.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── OrderTracking.jsx
│   │   ├── Chat.jsx
│   │   ├── PaymentSuccess.jsx
│   │   ├── PaymentCancel.jsx
│   │   └── NotFound.jsx
│   ├── index.css
│   └── main.jsx
├── .env (Stripe keys, etc.)
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🛠️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/mistersarko/almarket.git
   cd almarket
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

4. Frontend runs at: `http://localhost:5173`

---

## 🌍 Production URL

- [https://al-market.vercel.app](https://al-market.vercel.app)

---

## 📩 Contact

- Developer: [@mistersarko](https://github.com/mistersarko)
