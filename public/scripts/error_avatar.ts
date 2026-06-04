document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("error-canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const FRAME_SIZE = 80;
  const SCALE = 4;

  canvas.width = FRAME_SIZE * SCALE;
  canvas.height = FRAME_SIZE * SCALE;

  let frame = 0;
  let frameTimer = 0;
  const frameSpeed = 18;

  const sprite = new Image();
  sprite.src = "/images/avatar/error.png";

  let totalFrames = 0;

  sprite.onload = () => {
    totalFrames = sprite.height / FRAME_SIZE;
  };

  function draw() {
    if (!ctx) return;
    if (!totalFrames) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
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

      if (frame >= totalFrames) {
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
});