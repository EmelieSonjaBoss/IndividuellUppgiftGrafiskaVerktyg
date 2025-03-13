const container = document.body;
const numFlakes = 500;
const numRaindrops = 1000;
const snowTarget = document.getElementById("t");
const rainTarget = document.getElementById("r");
const sunTarget = document.getElementById("o");
const rainTarget2 = document.getElementById("m");
const snowTarget2 = document.getElementById("s");
const snowTarget3 = document.getElementById("oo");
const sun = document.getElementById("sun");

// Snow
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  container.appendChild(snowflake);

  gsap.to(snowflake, {
    y: window.innerHeight + 10,
    x: `+=${Math.random() * 100 - 50}`,
    duration: Math.random() * 4 + 2,
    opacity: 0,
    ease: "linear",
    onComplete: () => snowflake.remove()
  });
}

// Rain
function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");
  raindrop.style.left = `${Math.random() * window.innerWidth}px`;
  raindrop.style.top = `${Math.random() * -100}px`;
  container.appendChild(raindrop);

  gsap.to(raindrop, {
    y: window.innerHeight + 100,
    duration: Math.random() * 0.5 + 0.3,
    opacity: 0,
    ease: "power1.in",
    onComplete: () => raindrop.remove()
  });
}

// Sun
gsap.set(sun, { opacity: 0 });


// Event listeners
function snowListener (target) {
target.addEventListener("mouseenter", () => {
  for (let i = 0; i < numFlakes; i++) {
    setTimeout(createSnowflake, i * 10);
  }
  gsap.to(target, { opacity: 0.7, duration: 0.3 });
});

target.addEventListener("mouseleave", () => {
  gsap.to(target, { opacity: 1, duration: 0.3 });
});
}
snowListener(snowTarget)
snowListener(snowTarget2)
snowListener(snowTarget3)

// Event listener for rain-targets
function rainListener (target) {
  target.addEventListener("mouseenter", () => {
  for (let i = 0; i < numRaindrops; i++) {
    setTimeout(createRaindrop, i * 1);
  }
  gsap.to(target, { opacity: 0.7, duration: 0.3 });
});

target.addEventListener("mouseleave", () => {
  gsap.to(target, { opacity: 1, duration: 0.3 });
});
} 
rainListener(rainTarget)
rainListener(rainTarget2)


sunTarget.addEventListener("mouseenter", function () {
  gsap.to(sun, { opacity: 1, duration: 1, ease: "power2.out" });
  gsap.to(sunTarget, { opacity: 0.7, duration: 0.3 });
});

sunTarget.addEventListener("mouseleave", function () {
  gsap.to(sun, { opacity: 0, duration: 1, ease: "power2.out" });
  gsap.to(sunTarget, { opacity: 1, duration: 0.3 });
});