document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("avatar-canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const FRAME_SIZE = 80;
  const SCALE = 4;

  canvas.width = FRAME_SIZE * SCALE;
  canvas.height = FRAME_SIZE * SCALE;

  type SpriteState = "idle" | "spin" | "attack";
  let currentState: SpriteState = "idle";
  let frame = 0;
  let frameTimer = 0;
  const frameSpeed = 18;

  const sprites = {
    idle: new Image(),
    spin: new Image(),
    attack: new Image()
  };

  sprites.idle.src = "/images/avatar/idle.png";
  sprites.spin.src = "/images/avatar/spin.png";
  sprites.attack.src = "/images/avatar/attack.png";

  const spriteData: Record<SpriteState, { frames: number }> = {
    idle: { frames: 0 },
    spin: { frames: 0 },
    attack: { frames: 0 }
  };

  function calculateFrames(img: HTMLImageElement, state: SpriteState) {
    spriteData[state].frames = img.height / FRAME_SIZE;
  }

  sprites.idle.onload = () => calculateFrames(sprites.idle, "idle");
  sprites.spin.onload = () => calculateFrames(sprites.spin, "spin");
  sprites.attack.onload = () => calculateFrames(sprites.attack, "attack");

  function draw() {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sprite = sprites[currentState];
    const totalFrames = spriteData[currentState].frames;
    if (!totalFrames) return;

    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      sprite,
      0,
      frame * FRAME_SIZE,
      FRAME_SIZE,
      FRAME_SIZE,
      0,
      0,
      FRAME_SIZE * SCALE,
      FRAME_SIZE * SCALE
    );
  }

  function update() {
    frameTimer++;

    if (frameTimer >= frameSpeed) {
      frameTimer = 0;
      frame++;

      if (frame >= spriteData[currentState].frames) {
        currentState = "idle";
        frame = 0;
      }
    }
  }

  function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
  }

  animate();

  document.getElementById("spin-btn")?.addEventListener("click", () => {
    currentState = "spin";
    frame = 0;
  });

  document.getElementById("attack-btn")?.addEventListener("click", () => {
    currentState = "attack";
    frame = 0;
  });
});