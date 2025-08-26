// ----------------------
// Google API 設定
// ----------------------
const API_KEY = "AIzaSyDxM1ZnkdYiOVSfLLvu2uKFmgX1IeUmVUkY"; 
const SHEET_ID = "1x7pWiIQyaxN7iMJh7cC7V5azEI8OkDrVn-CGNGKclYA"; 
const RANGE = "Sheet1!A2:F"; 

// ----------------------
// Google API 初期化
// ----------------------
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

async function initClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
  });

  // ユーザーが未認証の場合はサインイン
  if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
    await gapi.auth2.getAuthInstance().signIn();
  }

  // データ取得
  fetchReviews();
}

// ----------------------
// モーダル要素取得
// ----------------------
const modalOverlay = document.getElementById("modalOverlay");
const modalDesktop = document.getElementById("modalDesktop");
const modalMobile = document.getElementById("modalMobile");

const modalNameDesktop = document.getElementById("modalNameDesktop");
const modalReviewDesktop = document.getElementById("modalReviewDesktop");
const modalImageDesktop = document.getElementById("modalImageDesktop");

const modalNameMobile = document.getElementById("modalNameMobile");
const modalReviewMobile = document.getElementById("modalReviewMobile");
const modalImageMobile = document.getElementById("modalImageMobile");

const shopLinks = document.querySelectorAll(".modal-shop-button .shop-btn");

const socialIcons = {
  desktop: {
    instagram: modalDesktop.querySelector(".social-icon.instagram"),
    twitter: modalDesktop.querySelector(".social-icon.twitter"),
    line: modalDesktop.querySelector(".social-icon.line")
  },
  mobile: {
    instagram: modalMobile.querySelector(".social-icon.instagram"),
    twitter: modalMobile.querySelector(".social-icon.twitter"),
    line: modalMobile.querySelector(".social-icon.line")
  }
};

// ----------------------
// Google Sheets データ取得
// ----------------------
async function fetchReviews() {
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: RANGE
  });

  const rows = response.result.values || [];
  const reviews = rows.map(row => ({
    image: row[0] || "",
    name: row[1] || "",
    review: row[2] || "",
    sns: {
      instagram: row[3] || "#",
      twitter: row[4] || "#",
      line: row[5] || "#"
    }
  }));

  renderReviews(reviews);
}

// ----------------------
// レビューカード生成
// ----------------------
function renderReviews(reviews) {
  const reviewsGrid = document.getElementById("reviewsGrid");
  reviewsGrid.innerHTML = "";

  reviews.forEach(data => {
    const card = document.createElement("div");
    card.classList.add("review-card");
    card.innerHTML = `
      <img src="${data.image}" alt="${data.name}のレビュー画像" class="review-card-image">
      <h3 class="review-card-name">${data.name}</h3>
      <p class="review-card-text">${data.review}</p>
    `;
    card.addEventListener("click", () => openModal(data));
    reviewsGrid.appendChild(card);
  });
}

// ----------------------
// モーダル表示
// ----------------------
function openModal(data) {
  modalOverlay.style.display = "block";

  // Desktop
  modalNameDesktop.textContent = data.name;
  modalReviewDesktop.textContent = data.review;
  modalImageDesktop.src = data.image;

  // Mobile
  modalNameMobile.textContent = data.name;
  modalReviewMobile.textContent = data.review;
  modalImageMobile.src = data.image;

  // SNSリンク設定
  Object.keys(socialIcons.desktop).forEach(key => {
    const url = data.sns[key];
    socialIcons.desktop[key].onclick = () => window.open(url, "_blank");
    socialIcons.mobile[key].onclick = () => window.open(url, "_blank");
  });

  // Shopリンク
  shopLinks.forEach(link => {
    link.onclick = () => window.open("https://newgridtone.stores.jp/", "_blank");
  });
}

// ----------------------
// モーダル閉じる
// ----------------------
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

// ----------------------
// 初期化
// ----------------------
window.onload = () => {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/api.js";
  script.onload = handleClientLoad;
  document.body.appendChild(script);
};
