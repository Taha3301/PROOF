<script setup lang="ts">
import { ref } from 'vue'

const ideaText = ref('')
const emit = defineEmits<{
  (e: 'submit-idea', idea: string): void
}>()

const handleSubmitIdea = () => {
  const trimmed = ideaText.value.trim()
  if (!trimmed) {
    return
  }
  emit('submit-idea', trimmed)
  ideaText.value = ''
}
</script>

<template>
  <section id="accueil" class="landing">
    <div class="landing__overlay">
      <div class="landing__input-wrapper">
        <input
          type="text"
          class="landing__input"
          placeholder="Describe your next bold idea…"
          aria-label="Describe your next bold idea"
          v-model="ideaText"
          @keyup.enter="handleSubmitIdea"
        />
        <button type="button" class="landing__input-button" @click="handleSubmitIdea">Send my idea</button>
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
  min-height: calc(100vh - 120px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(3rem, 10vw, 5rem) 1.5rem 3rem;
  background: inherit;
  background-size: inherit;
  background-position: inherit;
  background-attachment: inherit;
}

.landing__overlay {
  width: min(960px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 5vw, 3rem);
  padding: 0 1rem;
  background: transparent;
}

.landing__input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: min(520px, 100%);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: 0.65rem 0.65rem 0.65rem 1.25rem;
  backdrop-filter: blur(6px);
  box-shadow: 0 12px 30px rgba(5, 12, 27, 0.35);
}

.landing__input {
  flex: 1;
  background: transparent;
  border: none;
  color: #f8fbff;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
}

.landing__input::placeholder {
  color: rgba(248, 251, 255, 0.8);
}

.landing__input-button {
  border: none;
  border-radius: 999px;
  background: linear-gradient(120deg, #23d86c, #53ff65);
  color: #04121d;
  font-weight: 600;
  padding: 0.6rem 1.75rem;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(35, 216, 108, 0.35);
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.landing__input-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 32px rgba(35, 216, 108, 0.45);
}

.landing__content {
  flex: 1;
  width: 100%;
  max-width: 640px;
  color: #f8fbff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin: 0 0 0.75rem;
  color: #181759;
}

p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #181759;
}

.landing__lead {
  font-size: clamp(1.2rem, 3vw, 1.45rem);
  font-weight: 600;
  margin: 0;
}

.landing__slogan {
  margin-top: 0.3rem;
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
    padding: 0;
  }

  .landing__content {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .landing__input-wrapper {
    flex-direction: column;
    border-radius: 28px;
    padding: 0.85rem 1rem;
    width: min(340px, 100%);
  }

  .landing__input-button {
    width: 100%;
    text-align: center;
  }

  .landing {
    padding: 3rem 1.25rem 2.5rem;
  }

  h1 {
    font-size: 2.2rem;
  }
}
</style>
