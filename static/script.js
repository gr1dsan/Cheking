
document.addEventListener("keydown", (event) => {
  
  if (event.code === "Space") {
     
    const x = lastMouseX;
    const y = lastMouseY;
    overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 150px, rgba(0, 0, 0, 0.97) 200px)`;

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 150px, rgba(0, 0, 0, 0.97) 200px)`;
    });
  }
});

let lastMouseX = 0;
let lastMouseY = 0;
document.addEventListener("mousemove", (e) => {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});