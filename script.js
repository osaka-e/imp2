// ---------------------------
// サンプル口コミデータ
// ---------------------------
const mockReviews = [
    {
        id: '1',
        name: '田中太郎',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=375&fit=crop&crop=face',
        fullReview: '素晴らしいサービスでした！スタッフの方々がとても親切で、細かい要望にも快く対応していただきました。料理も美味しく、雰囲気も最高でした。また絶対に利用したいと思います。'
    },
    {
        id: '2',
        name: '佐藤花子',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?w=300&h=375&fit=crop&crop=face',
        fullReview: 'とても満足しています。予約から当日まで、スムーズに進行しました。設備も充実していて、清潔感もありました。唯一、もう少し早い時間帯の予約が取れるとより良かったです。'
    },
    // 他のレビューも同様に...
];

// ---------------------------
// DOM要素の取得
// ---------------------------
const reviewsGrid = document.getElementById('reviewsGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalImageDesktop = document.getElementById('modalImageDesktop');
const modalImageMobile = document.getElementById('modalImageMobile');
const modalNameDesktop = document.getElementById('modalNameDesktop');
const modalNameMobile = document.getElementById('modalNameMobile');
const modalReviewDesktop = document.getElementById('modalReviewDesktop');
const modalReviewMobile = document.getElementById('modalReviewMobile');
const shopButtons = document.querySelectorAll('.shop-btn');
const socialIcons = document.querySelectorAll('.social-icon');

// ---------------------------
// フォントサイズ計算
// ---------------------------
function calculateFontSize(nameLength) {
    const baseSize = 20;
    const minSize = 12;
    const maxSize = 20;
    return Math.max(minSize, Math.min(maxSize, baseSize - (nameLength - 1) * 0.5));
}

// ---------------------------
// 口コミカード生成
// ---------------------------
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.setAttribute('data-review-id', review.id);

    const fontSize = calculateFontSize(review.name.length);

    card.innerHTML = `
        <img src="${review.image}" alt="${review.name}" class="review-card-image" onerror="this.style.backgroundColor='#d9d9d9'; this.style.backgroundImage='none';">
        <div class="review-card-name">
            <span style="font-size: ${fontSize}px;">${review.name}</span>
        </div>
    `;

    // クリックでモーダルを開く
    card.addEventListener('click', () => openModal(review));

    return card;
}

// ---------------------------
// モーダル開閉
// ---------------------------
function openModal(review) {
    // デスクトップ・モバイル両方に反映
    modalImageDesktop.src = review.image;
    modalImageDesktop.alt = review.name;
    modalImageMobile.src = review.image;
    modalImageMobile.alt = review.name;

    modalNameDesktop.textContent = review.name;
    modalNameMobile.textContent = review.name;

    modalReviewDesktop.textContent = review.fullReview;
    modalReviewMobile.textContent = review.fullReview;

    // 表示
    modalOverlay.classList.add('active');

    // bodyスクロール無効
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ---------------------------
// 口コミグリッド描画
// ---------------------------
function renderReviews() {
    reviewsGrid.innerHTML = '';
    mockReviews.forEach(review => {
        const card = createReviewCard(review);
        reviewsGrid.appendChild(card);
    });
}

// ---------------------------
// イベント設定
// ---------------------------
function setupEventListeners() {
    // 背景クリックで閉じる
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
    });

    // ショップボタン
    shopButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Shop button clicked');
            // 必要に応じてリンク処理を追加
        });
    });

    // ソーシャルアイコン
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Social icon clicked');
            // 必要に応じてリンク処理を追加
        });
    });
}

// ---------------------------
// 初期化
// ---------------------------
document.addEventListener('DOMContentLoaded', () => {
    renderReviews();
    setupEventListeners();
});
