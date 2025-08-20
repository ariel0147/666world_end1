
function createBlock(blocksArray, className) {
  for(let i = 0 ; i < blocksArray.length; i++){
  const block = document.createElement("div");
  block.classList.add(className);
  block.style.left = blocksArray[i].x + "px";
  block.style.top = blocksArray[i].y + "px";
  block.style.position = "absolute";
  world.appendChild(block);
  }
}


const hellblocks = [
  { x: 0, y: 2350 },
  { x: 100, y: 2350 },
  { x: 250, y: 2250 },
  { x: 500, y: 2250 },
  { x: 750, y: 2150 },
  { x: 900, y: 2150 },
  { x: 1200, y: 2350 },
  { x: 1500, y: 2350 },
  { x: 1750, y: 2350 },
  { x: 1900, y: 2350 },
  { x: 2000, y: 2350 },
  { x: 963, y: 2350 },
  { x: 2000, y: 2350 },
  { x: 2100, y: 2350 },
  { x: 1800, y: 2350 },
  { x: 850, y: 2250 },
  { x: 1200, y: 2250 },
  { x: 1450, y: 2250 },
  { x: 2222, y: 2223 },
  { x: 2450, y: 2250 },
  { x: 2500, y: 2350 },
  { x: 2000, y: 2000 },
  { x: 1800, y: 1850 },
  { x: 1950, y: 1850 },
  { x: 2150, y: 2000 },
  { x: 2300, y: 2000 },
  { x: 2450, y: 2000 },
  { x: 0, y: 1850 },
  { x: 150, y: 1850 },
  { x: 300, y: 1850 },
  { x: 450, y: 1850 },
  { x: 600, y: 1785 },
  { x: 100, y: 1785 },
  { x: 900, y: 1850 },
  { x: 1200, y: 1850 },
  { x: 1500, y: 1850 },
  { x: 300, y: 1785 },
  { x: 750, y: 1785 },
  { x: 1000, y: 1785 },
  { x: 1300, y: 1785 },
  { x: 1700, y: 1785 },
  { x: 2100, y: 1785 },
  { x: 2250, y: 1785 },
  { x: 2300, y: 1785 },
  { x: 2450, y: 1785 },
  { x: 450, y: 1700 },
  { x: 650, y: 1700 },
  { x: 800, y: 1700 },
  { x: 1000, y: 1700 },
  { x: 1250, y: 1700 },
  { x: 1400, y: 1700 },
  { x: 1600, y: 1700 },
  { x: 1800, y: 1700 },
  { x: 2100, y: 1700 },
  { x: 2250, y: 1700 },
  { x: 2400, y: 1700 },
  { x: 0, y: 2000 },
  { x: 150, y: 2000 },
  { x: 300, y: 2000 },
  { x: 600, y: 2000 },
  { x: 750, y: 2000 },
  { x: 900, y: 2000 },
  { x: 1200, y: 2000 },
  { x: 1350, y: 2000 },
  { x: 1600, y: 2000 },
  { x: 1750, y: 2000 },
  { x: 1900, y: 2000 },
  { x: 2250, y: 2000 },
  { x: 500, y: 1925 },
  { x: 1000, y: 1925 },
  { x: 1400, y: 1925 },
  { x: 2000, y: 1925 },
  { x: 150, y: 2100 },
  { x: 450, y: 1925 },
  { x: 600, y: 1925 },
  { x: 1200, y: 1925 },
  { x: 1350, y: 1925 },
  { x: 1650, y: 1925 },
  { x: 1800, y: 1925 },
  { x: 2150, y: 1925 },
  { x: 2400, y: 1925 },
  { x: 0, y: 2175 },
  { x: 300, y: 2175 },
  { x: 450, y: 2175 },
  { x: 600, y: 2175 },
  { x: 1100, y: 2175 },
  { x: 1250, y: 2125 },
  { x: 1400, y: 2125 },
  { x: 1600, y: 2125 },
  { x: 1750, y: 2125 },
  { x: 1900, y: 2125 },
  { x: 2300, y: 2125 },
  { x: 400, y: 2350 },
  { x: 700, y: 2350 },
  { x: 2000, y: 2200 },
  { x: 1700, y: 2200 },
  { x: 400, y: 2075 },
  { x: 550, y: 2075 },
];
createBlock(hellblocks,"hellblock");
const heavenBlocks = [
  {x: 0,y:750},
  {x: 250,y:750},
  {x: 450,y:750},
  {x: 600,y:750},
  {x: 1000,y:750},
  {x: 1400,y:750},
  {x: 1600,y:750},
  {x: 1950,y:750},
  {x: 2300,y:750},
  {x: 200,y:675},
  {x: 500,y:675},
  {x: 700,y:675},
  {x: 850,y:675},
  {x: 1000,y:675},
  {x: 1200,y:675},
  {x: 1750,y:675},
  {x: 2000,y:675},
  {x: 2150,y:675},
  {x: 2450,y:675},
  {x: 300,y:600},
  {x: 450,y:600},
  {x: 750,y:600},
  {x: 900,y:600},
  {x: 1300,y:600},
  {x: 1450,y:600},
  {x: 1600,y:600},
  {x: 1800,y:600},
  {x: 1950,y:600},
  {x: 2100,y:600},
  {x: 2300,y:600},
  {x: 2505,y:600},
  {x: 0,y:525},
  {x: 350,y:525},
  {x: 650,y:525},
  {x: 800,y:525},
  {x: 1100,y:525},
  {x: 1300,y:525},
  {x: 1600,y:525},
  {x: 1950,y:525},
  {x: 2100,y:525},
  {x: 150,y:450},
  {x: 300,y:450},
  {x: 450,y:450},
  {x: 800,y:450},
  {x: 950,y:450},
  {x: 1150,y:450},
  {x: 1500,y:450},
  {x: 1750,y:450},
  {x: 2000,y:450},
  {x: 2150,y:450},
  {x: 2300,y:450},
  {x: 2450,y:450},
  {x: 2505,y:450},
  {x: 350,y:375},
  {x: 600,y:375},
  {x: 750,y:375},
  {x: 1100,y:375},
  {x: 1400,y:375},
  {x: 1700,y:375},
  {x: 2100,y:375},
  {x: 2350,y:375},
  {x: 0,y:300},
  {x: 150,y:300},
  {x: 450,y:300},
  {x: 600,y:300},
  {x: 950,y:300},
  {x: 1200,y:300},
  {x: 1350,y:300},
  {x: 1500,y:300},
  {x: 1800,y:300},       
  {x: 1950,y:300},
  {x: 2250,y:300},
  {x: 2505,y:300},
  {x: 350,y:225},
  {x: 700,y:225},
  {x: 850,y:225},
  {x: 1100,y:225},
  {x: 1500,y:225},
  {x: 1650,y:225},
  {x: 1800,y:225},
  {x: 2100,y:225},
  {x: 2250,y:225},
  {x: 2400,y:225},
  {x: 0,y:150},
  {x: 150,y:150},
  {x: 400,y:150},
  {x: 550,y:150},
  {x: 700,y:150},
  {x: 900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:150},
  {x: 1600,y:150},
  {x: 2000,y:150},
  {x: 2300,y:150},
  {x: 300,y:75},
  {x: 600,y:75},
  {x: 750,y:75},
  {x: 900,y:75},
  {x: 1150,y:75},
  {x: 1350,y:75},
  {x: 1550,y:75},
  {x: 1800,y:75},
  {x: 2000,y:75},
  {x: 2150,y:75},
  {x: 2300,y:75},
  {x: 2450,y:75},
];
createBlock(heavenBlocks,"heavenblock");
const worldblock = [
  {x: 50,y:800},
  {x: 200,y:800},
  {x: 400,y:800},
  {x: 750,y:800},
  {x: 900,y:800},
  {x: 1100,y:800},
  {x: 1450,y:800},
  {x: 1700,y:800},
  {x: 2000,y:800},
  {x: 2150,y:800},
  {x: 2450,y:800},
  {x: 0,y:875},
  {x: 150,y:875},
  {x: 400,y:875},
  {x: 550,y:875},
  {x: 1000,y:875},
  {x: 1400,y:875},
  {x: 1750,y:875},
  {x: 1900,y:875},
  {x: 2100,y:875},
  {x: 2250,y:875},
  {x: 0,y:950},
  {x: 150,y:950},
  {x: 300,y:950},
  {x: 450,y:950},
  {x: 500,y:950},
  {x: 650,y:950},
  {x: 800,y:950},
  {x: 1200,y:950},
  {x: 1450,y:950},
  {x: 1600,y:950},
  {x: 2000,y:950},
  {x: 2150,y:950},
  {x: 2300,y:950},
  {x: 2450,y:950},
  {x: 350,y:1025},
  {x: 550,y:1025},
  {x: 850,y:1025},
  {x: 1000,y:1025},
  {x: 1250,y:1025},
  {x: 1700,y:1025},
  {x: 1850,y:1025},
  {x: 2505,y:1025},
  {x: 150,y:1100},
  {x: 300,y:1100},
  {x: 650,y:1100},
  {x: 1100,y:1100},
  {x: 1350,y:1100},
  {x: 1600,y:1100},
  {x: 2050,y:1100},
  {x: 2200,y:1100},
  {x: 2350,y:1100},
  {x: 0,y:1175},
  {x: 250,y:1175},
  {x: 400,y:1175},
  {x: 800,y:1175},
  {x: 950,y:1175},
  {x: 1100,y:1175},
  {x: 1250,y:1175},
  {x: 1400,y:1175},
  {x: 1550,y:1175},
  {x: 1700,y:1175},
  {x: 1850,y:1175},
  {x: 0,y:1250},
  {x: 150,y:1250},
  {x: 650,y:1250},
  {x: 1350,y:1250},
  {x: 1500,y:1250},
  {x: 1650,y:1250},
  {x: 1800,y:1250},
  {x: 1950,y:1250},
  {x: 2100,y:1250},
  {x: 2250,y:1250},
  {x: 2400,y:1250},
  {x: 550,y:1325},
  {x: 700,y:1325},
  {x: 850,y:1325},
  {x: 1200,y:1325},
  {x: 1800,y:1325},
  {x: 1950,y:1325},
  {x: 2300,y:1325},
  {x: 2450,y:1325},
  {x: 300,y:1400},
  {x: 450,y:1400},
  {x: 600,y:1400},
  {x: 750,y:1400},
  {x: 1700,y:1400},
  {x: 1850,y:1400},
  {x: 2000,y:1400},
  {x: 2150,y:1400},
  {x: 2300,y:1400},
  {x: 2450,y:1400},
  {x: 2505,y:1400},
  {x: 0,y:1475},
  {x: 150,y:1475},
  {x: 300,y:1475},
  {x: 900,y:1475},
  {x: 1100,y:1475},
  {x: 1250,y:1475},
  {x: 1400,y:1475},
  {x: 1550,y:1475},
  {x: 1700,y:1475},
  {x: 300,y:1550},
  {x: 450,y:1550},
  {x: 600,y:1550},
  {x: 750,y:1550},
  {x: 1000,y:1550},
  {x: 1200,y:1550},
  {x: 1400,y:1550},
  {x: 1600,y:1550},
  {x: 1800,y:1550},
  {x: 1950,y:1550},
  {x: 2100,y:1550},
  {x: 0,y:1625},
  {x: 150,y:1625},
  {x: 300,y:1625},
  {x: 650,y:1625},
  {x: 800,y:1625},
  {x: 950,y:1625},
  {x: 1100,y:1625},
  {x: 1250,y:1625},
  {x: 1400,y:1625},
  {x: 2100,y:1625},
  {x: 2250,y:1625},
  {x: 2450,y:1625},
];
createBlock(worldblock,"worldblock")

const allBlocks = [...hellblocks, ...heavenBlocks, ...worldblock];



const bot_dragons = [
  { x: 0, y: 150, min_x: 0, max_x: 2505 }
];

function create_dragon(bot_array, className) {
  for (let i = 0; i < bot_array.length; i++) {
    const dragon = document.createElement("div");
    dragon.classList.add(className);
    dragon.style.position = "absolute";
    dragon.style.left = bot_array[i].x + "px";
    dragon.style.top = bot_array[i].y + "px";
    world.appendChild(dragon);

    let position = bot_array[i].x;
    let direction = 1; // 1 = ימינה, -1 = שמאלה
    const speed = 2;

    function animate() {
      // בדיקה לפני עדכון המיקום
      if (position >= bot_array[i].max_x) {
        position = bot_array[i].max_x; // תקן את הגבול
        direction = -1;
        dragon.style.transform = 'scaleX(-1)'; // מסתובב שמאלה
      } else if (position <= bot_array[i].min_x) {
        position = bot_array[i].min_x;
        direction = 1;
        dragon.style.transform = 'scaleX(1)'; // מסתובב ימינה
      }

      // עדכון מיקום
      position += direction * speed;
      dragon.style.left = position + "px";

      requestAnimationFrame(animate);
    }

    animate();
  }
}

create_dragon(bot_dragons, "dragon");


const enemy_array = [
  { x: 0, y: 1025, min_x: 0, max_x: 2505, elementSrc: "image_bot/character_is_walking_left_walk_cycle_20250626_002021_0_v2.gif" }
];

function create_enemy(enemy_array,className) {
  for (let i = 0; i < enemy_array.length; i++) {
    const enemy = document.createElement("img");
    enemy.src = enemy_array[i].elementSrc;
    enemy.classList.add(className);
    enemy.style.position = "absolute";
    enemy.style.left = enemy_array[i].x + "px";
    enemy.style.top = enemy_array[i].y + "px";
    enemy.style.transform = "scaleX(1)";
    world.appendChild(enemy);

    let position = enemy_array[i].x;
    let direction = 1; // 1 = ימינה, -1 = שמאלה
    const speed = 2;

    function animate() {
      if (position >= enemy_array[i].max_x) {
        position = enemy_array[i].max_x;
        direction = -1;
        enemy.style.transform = 'scaleX(1)'; // שמאלה = GIF מקורי
      } else if (position <= enemy_array[i].min_x) {
        position = enemy_array[i].min_x;
        direction = 1;
        enemy.style.transform = 'scaleX(-1)'; // ימינה = הפוך
      }

      position += direction * speed;
      enemy.style.left = position + "px";

      requestAnimationFrame(animate);
    }

    animate();
  }
}

create_enemy(enemy_array,"enemy");


const skeleton_array = [
  { x: 0, y: 1925, min_x: 0, max_x: 2505, elementSrc: "image_bot/walking_horizontaly_to_left_animation_20250325_225207_0_v2 (1) (1).gif" }
];



function create_skeleton(skeleton_array,className) {
  for (let i = 0; i < skeleton_array.length; i++) {
    const skeleton = document.createElement("img");
    skeleton.src = skeleton_array[i].elementSrc;
    skeleton.classList.add(className);
    skeleton.style.position = "absolute";
    skeleton.style.left = skeleton_array[i].x + "px";
    skeleton.style.top = skeleton_array[i].y + "px";
    skeleton.style.transform = "scaleX(1)";
    world.appendChild(skeleton);

    let position = skeleton_array[i].x;
    let direction = 1; // 1 = ימינה, -1 = שמאלה
    const speed = 2;

    function animate() {
      if (position >= skeleton_array[i].max_x) {
        position = skeleton_array[i].max_x;
        direction = -1;
        skeleton.style.transform = 'scaleX(1)'; // שמאלה = GIF מקורי
      } else if (position <= skeleton_array[i].min_x) {
        position = skeleton_array[i].min_x;
        direction = 1;
        skeleton.style.transform = 'scaleX(-1)'; // ימינה = הפוך
      }

      position += direction * speed;
      skeleton.style.left = position + "px";

      requestAnimationFrame(animate);
    }

    animate();
  }
}

create_skeleton(skeleton_array,"skeleton");


// -------------------- מערכת פיזיקה לשחקן --------------------
const game = document.querySelector(".game");
const player = document.createElement("div");
player.classList.add("player");
game.appendChild(player);

let playerX = 100;
let playerY = 300;
let velocityY = 0;
let gravity = 0.8;
let jumpPower = -15;
let jumps = 0;
let maxJumps = 2;
const playerWidth = 64;
const playerHeight = 64;

let frameX = 0;
let frameY = 0;
let frameCounter = 0;

let keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// הפיכת בלוקים לפורמט עם width/height
const blockWidth = 150;
const blockHeight = 25;
const blocks = allBlocks.map(b => ({
  x: b.x,
  y: b.y,
  width: blockWidth,
  height: blockHeight
}));

// בדיקת התנגשות
function isColliding(px, py, pw, ph, block) {
  return !(
    px + pw < block.x ||
    px > block.x + block.width ||
    py + ph < block.y ||
    py > block.y + block.height
  );
}

// -------------------- לולאת המשחק --------------------
function gameLoop() {
  // תנועה אופקית
  let nextX = playerX;
  if (keys["ArrowRight"]) nextX += 5;
  if (keys["ArrowLeft"]) nextX -= 5;

  // בדיקה אופקית מול בלוקים
  for (let block of blocks) {
    if (isColliding(nextX, playerY, playerWidth, playerHeight, block)) {
      nextX = playerX; // לא זז אם נתקל
    }
  }
  playerX = nextX;

  // קפיצה
  if ((keys[" "] || keys["Space"]) && jumps < maxJumps) {
    velocityY = jumpPower;
    jumps++;
    keys[" "] = false;
  }

  // גרביטציה
  velocityY += gravity;
  let nextY = playerY + velocityY;

  // בדיקה אנכית מול בלוקים
  for (let block of blocks) {
    if (isColliding(playerX, nextY, playerWidth, playerHeight, block)) {
      if (velocityY > 0) { // נופל על בלוק
        nextY = block.y - playerHeight;
        velocityY = 0;
        jumps = 0;
      } else if (velocityY < 0) { // מתנגש בתקרה
        nextY = block.y + block.height;
        velocityY = 0;
      }
    }
  }
  playerY = nextY;

  // אנימציה
  if (keys["ArrowRight"]) { frameY = 0; animateWalk(); }
  else if (keys["ArrowLeft"]) { frameY = 1; animateWalk(); }
  else frameX = 1;

  // ציור השחקן
  player.style.left = playerX + "px";
  player.style.top = playerY + "px";
  player.style.backgroundPosition = `-${frameX * 64}px -${frameY * 64}px`;

  requestAnimationFrame(gameLoop);
}

function animateWalk() {
  frameCounter++;
  if (frameCounter % 10 === 0) {
    frameX = (frameX + 1) % 3;
    if (frameX === 1) frameX = 0;
  }
}

// התחלת המשחק
gameLoop();

