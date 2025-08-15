const translations = {
  tm: {
    title: "Game Market",
    info1: "7/24 hyzmat",
    info2: "100% howpsuz",
    info3: "Tiz eltip berme",
    order: "Sargyt et",
    games: [
      { name: "PUBG Mobile", img: "img/pubg.png" },
      { name: "Free Fire (NonID/VN/IN/TW)", img: "img/freefire.png" },
      { name: "Delta Force", img: "img/deltaforce.png" },
      { name: "Genshin Impact", img: "img/genshin.png" },
      { name: "Arena Breakout", img: "img/arena.png" },
      { name: "Zepeto", img: "img/zepeto.png" },
      { name: "Clash of Clans", img: "img/clash.png" },
      { name: "Roblox", img: "img/roblox.png" },
      { name: "Fortnite", img: "img/fortnite.png" },
      { name: "Call of Duty Mobile", img: "img/codm.png" },
      { name: "Mobile Legends", img: "img/mlbb.png" },
      { name: "Among Us", img: "img/amongus.png" }
    ]
  },
  ru: {
    title: "Игровой рынок",
    info1: "Круглосуточно",
    info2: "100% безопасно",
    info3: "Быстрая доставка",
    order: "Заказать",
    games: [
      { name: "PUBG Mobile", img: "img/pubg.png" },
      { name: "Free Fire (NonID/VN/IN/TW)", img: "img/freefire.png" },
      { name: "Delta Force", img: "img/deltaforce.png" },
      { name: "Genshin Impact", img: "img/genshin.png" },
      { name: "Arena Breakout", img: "img/arena.png" },
      { name: "Zepeto", img: "img/zepeto.png" },
      { name: "Clash of Clans", img: "img/clash.png" },
      { name: "Roblox", img: "img/roblox.png" },
      { name: "Fortnite", img: "img/fortnite.png" },
      { name: "Call of Duty Mobile", img: "img/codm.png" },
      { name: "Mobile Legends", img: "img/mlbb.png" },
      { name: "Among Us", img: "img/amongus.png" }
    ]
  },
  en: {
    title: "Game Market",
    info1: "24/7 service",
    info2: "100% secure",
    info3: "Fast delivery",
    order: "Order Now",
    games: [
      { name: "PUBG Mobile", img: "img/pubg.png" },
      { name: "Free Fire (NonID/VN/IN/TW)", img: "img/freefire.png" },
      { name: "Delta Force", img: "img/deltaforce.png" },
      { name: "Genshin Impact", img: "img/genshin.png" },
      { name: "Arena Breakout", img: "img/arena.png" },
      { name: "Zepeto", img: "img/zepeto.png" },
      { name: "Clash of Clans", img: "img/clash.png" },
      { name: "Roblox", img: "img/roblox.png" },
      { name: "Fortnite", img: "img/fortnite.png" },
      { name: "Call of Duty Mobile", img: "img/codm.png" },
      { name: "Mobile Legends", img: "img/mlbb.png" },
      { name: "Among Us", img: "img/amongus.png" }
    ]
  }
};

function setLanguage(lang) {
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("info1").textContent = translations[lang].info1;
  document.getElementById("info2").textContent = translations[lang].info2;
  document.getElementById("info3").textContent = translations[lang].info3;

  const gamesList = document.getElementById("games-list");
  gamesList.innerHTML = "";
  translations[lang].games.forEach(game => {
    const card = `
      <div class="game-card">
        <img src="${game.img}" alt="${game.name}">
        <div class="game-title">${game.name}</div>
        <a class="order-btn" href="#">${translations[lang].order}</a>
      </div>
    `;
    gamesList.innerHTML += card;
  });
}

setLanguage("tm"); // Default language
