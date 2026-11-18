// 画像がない場合でも即座に見た目を確認できるSVG生成ヘルパー
function createWeaponPreview(label, sub) {
  const svg = `<svg xmlns="http://w3.org" width="480" height="240" viewBox="0 0 480 240">
    <rect width="480" height="240" fill="#0d1015"/>
    <rect x="16" y="16" width="448" height="208" rx="8" fill="none" stroke="#2d3340" stroke-width="2"/>
    <text x="240" y="110" fill="#f0f2f5" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">${label}</text>
    <text x="240" y="145" fill="#c82333" font-family="sans-serif" font-size="14" text-anchor="middle">${sub}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const weapons = [
  {
    name: "ウイングシューター",
    category: "ハンドガン",
    damage: "120",
    ammo: "9mm弾（装弾数：18）",
    appearance: "カスタムされた黒銀ツートンの自動拳銃。モードチェンジで二丁拳銃スタイルに切り替え可能。",
    locations: [
      { campaign: "レオン", detail: "レオン編：初期装備（レオン専用）" }
    ],
    image: createWeaponPreview("WING SHOOTER", "Custom Dual-Wield Handgun")
  },
  {
    name: "ピカドール",
    category: "ハンドガン",
    damage: "160",
    ammo: "9mm弾（装弾数：16）",
    appearance: "マットブラックのタクティカルハンドガン。レーザーサイト標準装備で単発威力が高い。",
    locations: [
      { campaign: "レオン", detail: "レオン編：初期装備（ヘレナ専用）" }
    ],
    image: createWeaponPreview("PICADOR", "Tactical 9mm Handgun")
  },
  {
    name: "ハンドガン909",
    category: "ハンドガン",
    damage: "150",
    ammo: "9mm弾（装弾数：15）",
    appearance: "無骨な軍用自動拳銃。クセがなく扱いやすいバランス型。",
    locations: [
      { campaign: "クリス", detail: "クリス編：初期装備（クリス専用）" },
      { campaign: "ジェイク", detail: "ジェイク編：初期装備（ジェイク専用）" }
    ],
    image: createWeaponPreview("NINE-OH-NINE", "Military Standard Pistol")
  },
  {
    name: "トリプルショット",
    category: "ハンドガン",
    damage: "130",
    ammo: "9mm弾（装弾数：20）",
    appearance: "ロングマガジンを備えた銀色の自動拳銃。3点バースト射撃に切り替え可能。",
    locations: [
      { campaign: "ジェイク", detail: "ジェイク編：初期装備（シェリー専用）" }
    ],
    image: createWeaponPreview("TRIPLE SHOT", "3-Round Burst Pistol")
  },
  {
    name: "ショットガン",
    category: "ショットガン",
    damage: "180×7",
    ammo: "12ゲージ装弾（装弾数：8）",
    appearance: "木製ストックを備えたオーソドックスなポンプアクション式散弾銃。",
    locations: [
      { campaign: "レオン", detail: "レオン編 CP1：市街地のガンショップ（または民家を抜けた先の死体）" },
      { campaign: "ジェイク", detail: "ジェイク編 CP4：ロッカー内" }
    ],
    image: createWeaponPreview("SHOTGUN", "12-Gauge Pump-Action")
  },
  {
    name: "ハイドラ",
    category: "ショットガン",
    damage: "170×7",
    ammo: "10ゲージ装弾（装弾数：3）",
    appearance: "3本の銃身を持つソードオフ・ショットガン。クイックショットで回転撃ちを行う。",
    locations: [
      { campaign: "レオン", detail: "レオン編：初期装備（ヘレナ専用）" }
    ],
    image: createWeaponPreview("HYDRA", "Triple-Barrel 10-Gauge")
  },
  {
    name: "アサルトショットガン",
    category: "ショットガン",
    damage: "170×7",
    ammo: "12ゲージ装弾（装弾数：7）",
    appearance: "黒色のタクティカル・セミオートショットガン。連射速度に優れる。",
    locations: [
      { campaign: "クリス", detail: "クリス編 CP1：雑居ビル屋上へ向かう途中のフロア" },
      { campaign: "エイダ", detail: "エイダ編 CP1：潜水艦動力炉" }
    ],
    image: createWeaponPreview("ASSAULT SHOTGUN", "Semi-Auto Combat Shotgun")
  },
  {
    name: "アサルトライフルST",
    category: "アサルトライフル",
    damage: "200",
    ammo: "5.56mm弾（装弾数：30）",
    appearance: "ホロサイト付きの特殊部隊向けカービン銃。高精度で取り回しが良い。",
    locations: [
      { campaign: "クリス", detail: "クリス編：初期装備（クリス専用）" }
    ],
    image: createWeaponPreview("ASSAULT RIFLE ST", "Special Tactics Carbine")
  },
  {
    name: "アサルトライフルBC",
    category: "アサルトライフル",
    damage: "190（榴弾：500〜1500）",
    ammo: "5.56mm弾（装弾数：30 / グレネード：6）",
    appearance: "銃身下部にグレネードランチャーを内蔵した重厚な突撃銃。",
    locations: [
      { campaign: "ジェイク", detail: "ジェイク編 CP3：研究施設内の武器庫" },
      { campaign: "エイダ", detail: "エイダ編 CP4：空母前部格納庫" }
    ],
    image: createWeaponPreview("BEAR COMMANDER", "Assault Rifle + Grenade Launcher")
  },
  {
    name: "アサルトライフルRN",
    category: "アサルトライフル",
    damage: "210",
    ammo: "5.56mm弾（装弾数：30）",
    appearance: "木製ハンドガードとスチールフレームを持つ東欧系アサルトライフル。",
    locations: [
      { campaign: "レオン", detail: "レオン編 CP3：カタコンベ序盤の棺桶の中" }
    ],
    image: createWeaponPreview("ASSAULT RIFLE RN", "High-Power 5.56mm Rifle")
  },
  {
    name: "セミオートスナイパーライフル",
    category: "スナイパーライフル",
    damage: "600",
    ammo: "7.62mm弾（装弾数：5）",
    appearance: "大型スコープとバイポッドを備えた連射可能な狙撃銃。",
    locations: [
      { campaign: "レオン", detail: "レオン編 CP2：大聖堂（悲しみのマリア像付近）" },
      { campaign: "クリス", detail: "クリス編 CP3：市街地の高台・通路" }
    ],
    image: createWeaponPreview("SEMI-AUTO SNIPER", "7.62mm Scoped Rifle")
  },
  {
    name: "スナイパーライフル",
    category: "スナイパーライフル",
    damage: "700",
    ammo: "7.62mm弾（装弾数：6）",
    appearance: "黒色のボルトアクション式スナイパーライフル。単発威力が高い。",
    locations: [
      { campaign: "ジェイク", detail: "ジェイク編 CP2：雪山の小屋" },
      { campaign: "エイダ", detail: "エイダ編 CP2：森林墓地" }
    ],
    image: createWeaponPreview("SNIPER RIFLE", "Bolt-Action 7.62mm")
  },
  {
    name: "アンチマテリアルライフル",
    category: "スナイパーライフル",
    damage: "1000",
    ammo: "12.7mm弾（装弾数：10）",
    appearance: "大型のマズルブレーキとサーマルスコープを備えた対物ライフル。敵を貫通する。",
    locations: [
      { campaign: "クリス", detail: "クリス編：初期装備（ピアーズ専用）" }
    ],
    image: createWeaponPreview("ANTI-MATERIEL RIFLE", "12.7mm Thermal Scope Rifle")
  },
  {
    name: "MP-AF",
    category: "マシンピストル",
    damage: "100",
    ammo: "9mm弾（装弾数：30）",
    appearance: "フォアグリップとストックを備えたコンパクトな機関拳銃。フルオートと単発を切替可能。",
    locations: [
      { campaign: "クリス", detail: "クリス編：初期装備（ピアーズ専用）" }
    ],
    image: createWeaponPreview("MP-AF", "Compact Machine Pistol")
  },
  {
    name: "AB-50",
    category: "マシンピストル",
    damage: "90",
    ammo: "9mm弾（装弾数：50）",
    appearance: "銃身下部に50発の大容量マガジンを装着した短機関銃。",
    locations: [
      { campaign: "エイダ", detail: "エイダ編：初期装備（エイダ専用）" }
    ],
    image: createWeaponPreview("AMMO BOX 50", "50-Round Submachine Gun")
  },
  {
    name: "グレネードランチャー",
    category: "特殊武器",
    damage: "炸裂：500〜1500 / 冷凍：0〜500 / 硫酸：200〜450",
    ammo: "40mm各種グレネード弾（装弾数：6）",
    appearance: "回転式シリンダーを持つ大型ランチャー。3種類の弾薬を切り替えて発射できる。",
    locations: [
      { campaign: "クリス", detail: "クリス編 CP2：市庁舎・広場周辺" }
    ],
    image: createWeaponPreview("GRENADE LAUNCHER", "40mm Rotary Launcher")
  },
  {
    name: "ライトニングホーク",
    category: "マグナム",
    damage: "1400",
    ammo: ".50AE弾（装弾数：7）",
    appearance: "銀色の大型オートマチックマグナム。反動は大きいが絶大な威力を誇る。",
    locations: [
      { campaign: "レオン", detail: "レオン編 CP4：旅客機内" },
      { campaign: "クリス", detail: "クリス編 CP3：医療研究施設付近" }
    ],
    image: createWeaponPreview("LIGHTNING HAWK", ".50 Action Express Magnum")
  },
  {
    name: "エレファントキラー",
    category: "マグナム",
    damage: "1600",
    ammo: ".500S&W弾（装弾数：5）",
    appearance: "長銃身の大型リボルバー。全ハンドガン系の中で最高クラスの単発火力を誇る。",
    locations: [
      { campaign: "ジェイク", detail: "ジェイク編 CP2：雪山の洞窟・採掘場" }
    ],
    image: createWeaponPreview("ELEPHANT KILLER", ".500 S&W Magnum Revolver")
  },
  {
    name: "クロスボウ",
    category: "特殊武器",
    damage: "550（パイルボム爆発時：1200）",
    ammo: "アロー / パイルボム（装弾数：1）",
    appearance: "折りたたみ式リムを備えた静音ボウガン。時限爆弾付きの矢も発射可能。",
    locations: [
      { campaign: "エイダ", detail: "エイダ編：初期装備（エイダ専用）" }
    ],
    image: createWeaponPreview("CROSSBOW", "Tactical Bow + Pipe Bomb Arrows")
  }
];

const weaponListEl = document.getElementById("weapon-list");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("image-modal");

function renderWeapons(filter = "all") {
  weaponListEl.innerHTML = "";
  const filtered = filter === "all"
    ? weapons
    : weapons.filter(w => w.locations.some(loc => loc.campaign === filter));

  filtered.forEach((weapon) => {
    const card = document.createElement("article");
    card.className = "weapon-card";

    const locationText = weapon.locations.map(l => l.detail).join(" / ");

    card.innerHTML = `
      <div>
        <div class="card-header">
          <span class="weapon-name">${weapon.name}</span>
          <span class="weapon-category">${weapon.category}</span>
        </div>
        <ul class="spec-list">
          <li><span class="spec-label">ダメージ:</span>${weapon.damage}</li>
          <li><span class="spec-label">使用弾丸:</span>${weapon.ammo}</li>
          <li><span class="spec-label">入手場所:</span>${locationText}</li>
        </ul>
      </div>
      <button class="tap-btn" onclick="openModal('${weapon.name}')">📷 武器の見た目を見る</button>
    `;
    weaponListEl.appendChild(card);
  });
}

function openModal(weaponName) {
  const weapon = weapons.find(w => w.name === weaponName);
  if (!weapon) return;

  document.getElementById("modal-title").textContent = weapon.name;
  document.getElementById("modal-img").src = weapon.image;
  document.getElementById("modal-appearance").textContent = `【見た目・特徴】${weapon.appearance}`;
  document.getElementById("modal-specs").innerHTML = `
    <strong>ダメージ:</strong> ${weapon.damage}<br>
    <strong>使用弾丸:</strong> ${weapon.ammo}<br>
    <strong>入手場所:</strong> ${weapon.locations.map(l => l.detail).join(" / ")}
  `;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderWeapons(btn.dataset.campaign);
  });
});

renderWeapons();
