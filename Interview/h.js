const body = document.getElementsByTagName("body")[0];
let val = 0;
let circles = [];

body.addEventListener("click", (e) => {
  if (val === 2) {
    const div = document.querySelectorAll("div");
    div.forEach((a) => {
      body.removeChild(a);
    });
    circles = [];
    val = 0;
  }
  val++;
  const div = document.createElement("div");
  console.log(e.clientX);
  console.log(e.clientY);

  div.style.top = `${e.clientY}px`;
  div.style.left = `${e.clientX}px`;

  body.appendChild(div);
  circles.push({
    x: e.clientX,
    y: e.clientY,
    radius: 50, // Circle radius = 100px / 2
  });

  if (circles.length === 2) {
    const dx = circles[1].x - circles[0].x;
    const dy = circles[1].y - circles[0].y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radiusSum = circles[0].radius + circles[1].radius;

    console.log("Distance:", distance);
    console.log("Radius Sum:", radiusSum);

    if (distance <= radiusSum) {
      console.log("✅ Circles are intersecting");
    } else {
      console.log("❌ Circles are NOT intersecting");
    }
  }
});
