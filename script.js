// ฟังก์ชันเข้าสู่ระบบ
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "bu" && pass === "1234") {
    document.getElementById("login-container").style.display = "none";
    document.querySelector("nav").style.display = "block";
    document.getElementById("home-content").style.display = "block";
  } else {
    document.getElementById("login-error").innerText = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
}

// คลาสเมนูอาหาร (Food Item)
class FoodItem {
  constructor(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
  }
}

// 🔸 คลาสแม่: เมนูพื้นฐาน
class BaseMenu {
  constructor(mood, emoji) {
    this.mood = mood;
    this.emoji = emoji;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getAllItems() {
    return this.items;
  }

  getRandomItem() {
    const randomIndex = Math.floor(Math.random() * this.items.length);
    return this.items[randomIndex];
  }
}

// 🔸 คลาสลูก (สืบทอด + override)
class HappyMenu extends BaseMenu {
  getRandomItem() {
    const subset = this.items.slice(0, 3);
    const randomIndex = Math.floor(Math.random() * subset.length);
    return subset[randomIndex];
  }
}

class SadMenu extends BaseMenu {
  getRandomItem() {
    const subset = this.items.slice(0, 3);
    const randomIndex = Math.floor(Math.random() * subset.length);
    return subset[randomIndex];
  }
}

class AngryMenu extends BaseMenu {
  getRandomItem() {
    const subset = this.items.slice(0, 3);
    const randomIndex = Math.floor(Math.random() * subset.length);
    return subset[randomIndex];
  }
}

class SleepyMenu extends BaseMenu {
  // ใช้พฤติกรรมเหมือน BaseMenu (ไม่มี override)
}

// 🔹 สร้างอ็อบเจกต์ตามอารมณ์
const moodMenus = {
  happy: new HappyMenu("happy", "😊"),
  sad: new SadMenu("sad", "😢"),
  angry: new AngryMenu("angry", "😡"),
  sleepy: new SleepyMenu("sleepy", "😴")
};

// 🔹 ข้อมูลเมนู
const foodData = {
  happy: [
    ["ชานมไข่มุก", "https://shorturl.asia/aYQoR", "ความสุขมันอยู่ในแก้วนี้! ชานมหวานละมุนพร้อมไข่มุกหนึบๆ เติมเต็มรอยยิ้มของวันดีๆ"],
    ["ข้าวเหนียวมะม่วง", "https://shorturl.asia/ALFms", "หวานสดชื่นจนยิ้มไม่หุบ! ข้าวเหนียวนุ่มๆ คู่กับมะม่วงฉ่ำๆ ทำให้ความสุขพุ่งกระฉูด"],
    ["เค้กผลไม้", "https://shorturl.asia/Adms4", "เค้กหวานนุ่มเต็มไปด้วยผลไม้สด ช่วยเพิ่มพลังบวกในวันที่สดใส"],
    ["ขนมโตเกียว", "https://shorturl.asia/Uutma", "ขนมโตเกียวหอมๆ ไส้แน่นๆ คือความฟินของคนอารมณ์ดี"],
    ["บิงซู", "https://shorturl.asia/fq1lp", "บิงซูเย็นฉ่ำ สีสันสดใส ทำให้รอยยิ้มของคุณสดใสยิ่งกว่าเดิม!"]
  ],
  sad: [
    ["ไก่ทอด", "https://shorturl.asia/hJB9H", "ไก่ทอดกรอบนอกนุ่มใน พร้อมปลอบใจคุณให้รู้สึกอบอุ่นในวันที่ใจห่อเหี่ยว"],
    ["พิซซ่า", "https://shorturl.asia/NXvU4", "พิซซ่าร้อนๆ ชีสยืดๆ เหมือนอ้อมกอดอบอุ่นที่โอบล้อมคุณไว้ในวันที่เศร้า"],
    ["ข้าวต้มหมู", "https://shorturl.asia/oW1rS", "ข้าวต้มหมูร้อนๆ เหมือนเพื่อนซี้ที่อยู่ข้างคุณในวันที่อ่อนแอ"],
    ["ราเมง", "https://shorturl.asia/wrQgG", "ราเมงน้ำซุปร้อนๆ ซดแล้วรู้สึกเหมือนได้รับกำลังใจเล็กๆ"],
    ["ไอศกรีมวานิลลา", "https://shorturl.asia/zRk6f", "ความเย็นละมุนของไอศกรีมช่วยลบความหม่นหมองในใจให้เบาบางลง"]
  ],
  angry: [
    ["ต้มยำกุ้ง", "https://shorturl.asia/NYoR7", "ต้มยำกุ้งรสจัด เปรี้ยว เผ็ด แสบซ่า สะใจ คลายอารมณ์ร้อนแรงในใจ!"],
    ["ยำวุ้นเส้น", "https://shorturl.asia/SgCXU", "ความแซ่บของยำวุ้นเส้นคือทางออกของอารมณ์เดือด!"],
    ["ส้มตำ", "https://shorturl.asia/ywFrS", "ส้มตำเผ็ดจี๊ดจ๊าด จัดเต็มให้ระบายความขุ่นเคืองได้อย่างถึงใจ!"],
    ["หมูทอดกระเทียม", "https://shorturl.asia/G8JOg", "หมูทอดกรอบๆ กลิ่นกระเทียมหอมๆ ให้คุณลืมความหงุดหงิดไปชั่วขณะ"],
    ["ผัดกระเพราไข่ดาว", "https://shorturl.asia/fOyVE", "ความจัดจ้านของกระเพรา คือคู่หูของวันที่อารมณ์พุ่งพล่าน!"]
  ],
  sleepy: [
    ["กาแฟเย็น", "https://shorturl.asia/tc8dq", "กาแฟเย็นหอมเข้มปลุกคุณจากความง่วงให้ตื่นทันที!"],
    ["ขนมปังปิ้ง", "https://shorturl.asia/Hy9ZU", "ขนมปังกรอบๆ หอมกลิ่นเนย ช่วยปลุกเช้าแสนง่วงให้สดใสขึ้น"],
    ["ไข่กระทะ", "https://shorturl.asia/lFfIE", "ไข่กระทะร้อนๆ โปรตีนแน่นๆ เติมพลังให้ลุยวันใหม่แบบสดชื่น"],
    ["น้ำส้มคั้นสด", "https://shorturl.asia/wO8Ey", "วิตามิน C จากน้ำส้มสดๆ คือพลังงานธรรมชาติที่ปลุกคุณให้สดชื่นทันใจ!"],
    ["โจ๊กหมูใส่ไข่", "https://shorturl.asia/TyXe1", "โจ๊กร้อนๆ ละมุนลิ้น ปลุกความอุ่นใจให้ออกสตาร์ทเช้าวันใหม่"]
  ]
};

// 🔹 เพิ่มเมนูเข้าแต่ละอารมณ์
for (const mood in foodData) {
  foodData[mood].forEach(([name, image, description]) => {
    moodMenus[mood].addItem(new FoodItem(name, image, description));
  });
}

// 🔹 ฟังก์ชันแนะนำอาหารตามอารมณ์
function suggestFood(mood) {
  const selected = moodMenus[mood].getRandomItem();

  document.getElementById("result").innerHTML = `
    คุณรู้สึก ${moodMenus[mood].emoji} ลองทาน 👉 <strong>${selected.name}</strong> ดูไหม?<br>
    <img src="${selected.image}" alt="${selected.name}" class="food-image"><br>
    <p>${selected.description}</p>
  `;
}

// 🔹 แสดงหน้า Home
function showHome() {
  document.getElementById('home-content').style.display = 'block';
  document.getElementById('menu-content').style.display = 'none';
}

// 🔹 แสดงหน้าเมนูทั้งหมด
function showMenu() {
  document.getElementById('home-content').style.display = 'none';
  document.getElementById('menu-content').style.display = 'block';

  const menuList = document.getElementById('full-menu-list');
  menuList.innerHTML = '';

  for (const mood in moodMenus) {
    const section = document.createElement('div');
    section.innerHTML = `<h3>${moodMenus[mood].emoji} ${mood}</h3>`;

    moodMenus[mood].getAllItems().forEach(item => {
      section.innerHTML += `
        <div>
          <strong>${item.name}</strong><br>
          <img src="${item.image}" class="food-image"><br>
          <p>${item.description}</p>
        </div><hr/>
      `;
    });

    menuList.appendChild(section);
  }
}