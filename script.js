// サンプル口コミデータ
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
    {
        id: '3',
        name: '山田次郎',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=375&fit=crop&crop=face',
        fullReview: '期待以上でした！友人の紹介で利用しましたが、本当に来て良かったです。価格も妥当で、コストパフォーマンスが excellent です。次回は家族も一緒に利用したいと思います。'
    },
    {
        id: '4',
        name: '鈴木美紀',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=375&fit=crop&crop=face',
        fullReview: 'また利用したいです。初めての利用でしたが、丁寧な説明とサポートで安心して過ごすことができました。施設も新しく、アメニティも充実していました。'
    },
    {
        id: '5',
        name: '高橋健太',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=375&fit=crop&crop=face',
        fullReview: '最高の体験でした。特別な日に利用しましたが、期待を大きく上回るサービスを受けることができました。記念日にぴったりの演出もしていただき、本当に感謝しています。'
    },
    {
        id: '6',
        name: '伊藤里美',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=375&fit=crop&crop=face',
        fullReview: '快適に過ごせました。清潔で落ち着いた環境で、リラックスして時間を過ごすことができました。スタッフの皆さんも気配りが行き届いていて、心地よかったです。'
    },
    {
        id: '7',
        name: '渡辺誠',
        image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=375&fit=crop&crop=face',
        fullReview: '感動しました！細部にまでこだわりを感じる素晴らしい体験でした。プロフェッショナルなサービスと温かいおもてなしに心から感謝しています。必ずまた訪れたいと思います。'
    },
    {
        id: '8',
        name: '加藤由美',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=375&fit=crop&crop=face',
        fullReview: 'おすすめです。友達と一緒に利用しましたが、みんなで楽しい時間を過ごすことができました。雰囲気も良く、写真映えもするので、特別な日の利用にぴったりだと思います。'
    },
    {
        id: '9',
        name: '小林博',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=375&fit=crop&crop=face',
        fullReview: '完璧でした。すべての面で期待を超える品質でした。予約の段階から当日まで、一貫して高いレベルのサービスを提供していただきました。価格以上の価値を感じています。'
    },
    {
        id: '10',
        name: 'ああああああああああ',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=375&fit=crop&crop=face',
        fullReview: '完璧でした。すべての面で期待を超える品質でした。予約の段階から当日まで、一貫して高いレベルのサービスを提供していただきました。価格以上の価値を感じています。'
    }
];

// DOM要素の取得
const reviewsGrid = document.getElementById('reviewsGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalImageDesktop = document.getElementById('modalImageDesktop');
const modalImageMobile = document.getElementById('modalImageMobile');
const modalNameDesktop = document.getElementById('modalNameDesktop');
const modalNameMobile = document.getElementById('modalNameMobile');
const modalReviewDesktop = document.getElementById('modalReviewDesktop');
const modalReviewMobile = document.getElementById('modalReviewMobile');

// 名前の長さに応じたフォントサイズを計算する関数
function calculateFontSize(nameLength) {
    const baseSize = 20;
    const minSize = 12;
    const maxSize = 20;
    const calculatedSize = Math.max(minSize, Math.min(maxSize, baseSize - (nameLength - 1) * 0.5));
    return calculatedSize;
}

// 口コミカードを生成する関数
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
    
    // カードクリックイベントを追加
    card.addEventListener('click', () => openModal(review));
    
    return card;
}

// モーダルを開く関数
function openModal(review) {
    // モーダルの内容を更新
    modalImageDesktop.src = review.image;
    modalImageDesktop.alt = review.name;
    modalImageMobile.src = review.image;
    modalImageMobile.alt = review.name;
    
    modalNameDesktop.textContent = review.name;
    modalNameMobile.textContent = review.name;
    
    modalReviewDesktop.textContent = review.fullReview;
    modalReviewMobile.textContent = review.fullReview;
    
    // モーダルを表示
    modalOverlay.classList.add('active');
    
    // bodyのスクロールを無効にする
    document.body.style.overflow = 'hidden';
}

// モーダルを閉じる関数
function closeModal() {
    modalOverlay.classList.remove('active');
    
    // bodyのスクロールを有効にする
    document.body.style.overflow = 'auto';
}

// 口コミカードを生成してグリッドに追加
function renderReviews() {
    reviewsGrid.innerHTML = '';
    
    mockReviews.forEach(review => {
        const card = createReviewCard(review);
        reviewsGrid.appendChild(card);
    });
}

// イベントリスナーを設定
function setupEventListeners() {
    // モーダルクローズボタン
    modalClose.addEventListener('click', closeModal);
    
    // モーダル背景クリックで閉じる
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    // ソーシャルアイコンのクリックイベント（必要に応じて実装）
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            // ここにソーシャルメディアへのリンク処理を追加
            console.log('Social icon clicked:', icon.className);
        });
    });
    
    // ショップボタンのクリックイベント（必要に応じて実装）
    document.querySelectorAll('.shop-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // ここにショップページへのリンク処理を追加
            console.log('Shop button clicked');
        });
    });
}

// ページ読み込み完了時に実行
document.addEventListener('DOMContentLoaded', () => {
    renderReviews();
    setupEventListeners();
});

// ウィンドウリサイズ時の処理（必要に応じて）
window.addEventListener('resize', () => {
    // レスポンシブ対応の追加処理があれば記述
});