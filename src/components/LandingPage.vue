<template>
  <section id="accueil" class="landing">
    <div class="landing__overlay">
      <div class="landing__media">
        <img src="../assets/image.svg" alt="Proof Agency illustration" />
      </div>
      <div class="landing__content">
        <h1>Welcome to Proof Agency</h1>
        <p class="landing__lead">
          We craft content, videos, and designs that speak louder than words.
        </p>
        <p>Authentic. Bold. Creative.</p>
        <p class="landing__slogan">
          From ideas to digital reality | Let’s build your proof.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.landing {
  min-height: calc(100vh - 140px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.landing__overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 4rem 2rem;
  transform: translateY(-2cm);
}

.landing__media {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.landing__media img {
  width: 100%;
  max-width: 420px;
  height: auto;
  filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.18));
  border-radius: 24px;
  transform: perspective(900px) rotateY(-6deg);
  animation: floaty 7s ease-in-out infinite;
  transition: transform 0.6s ease, filter 0.6s ease;
}

.landing__media img:hover {
  transform: perspective(900px) rotateY(0deg) translateY(-6px) scale(1.02);
  filter: drop-shadow(0 22px 34px rgba(0, 0, 0, 0.22));
}

.landing__content {
  flex: 1;
  max-width: 640px;
  color: #f8fbff;
  text-align: left;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1rem;
  color: #181759;
}

p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #181759;
}

.landing__lead {
  font-size: 1.35rem;
  font-weight: 500;
}

.landing__slogan {
  margin-top: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #181759;
  animation: pulse 2.8s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.4;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-4px);
  }
  100% {
    opacity: 0.4;
    transform: translateY(0);
  }
}

@keyframes floaty {
  0% {
    transform: perspective(900px) rotateY(-6deg) translateY(0);
  }
  50% {
    transform: perspective(900px) rotateY(-2deg) translateY(-10px);
  }
  100% {
    transform: perspective(900px) rotateY(-6deg) translateY(0);
  }
}

@media (max-width: 900px) {
  .landing__overlay {
    flex-direction: column;
    padding: 3rem 1.5rem;
    transform: translateY(-1cm);
  }

  .landing__content {
    text-align: center;
  }
}
</style>
