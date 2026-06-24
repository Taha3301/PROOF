<script setup lang="ts">
import { ref } from 'vue'

const sliderRef = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: -320, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: 320, behavior: 'smooth' })
  }
}

const topHighlights = [
  {
    title: 'Who We Are',
    quote: '“We are a full-service creative agency specializing in content creation, video production, and graphic design.”',
    body: 'We combine strategy and visual craft to deliver bold narratives that feel authentic to every brand we partner with.',
  },
  {
    title: 'Our Philosophy',
    quote: '“We believe great ideas deserve more than attention; they deserve evidence.”',
    body: 'Every concept is backed by research, experimentation, and design systems that prove the idea can live in the real world.',
  },
  {
    title: 'What We Do',
    quote: '“Every project reflects authenticity, consistency, and creative excellence.”',
    body: 'From cinematic films to digital launches, we ship cohesive experiences across video, social, and visual identity.',
  },
]

const bottomHighlights = [
  {
    title: 'Our Mission',
    quote: '“Our mission is simple: to craft stories that stand out, connect deeply, and leave a lasting impression.”',
    body: 'We design work that makes audiences feel something, remember it, and act on it.',
  },
  {
    title: 'What Defines Us',
    quote: '“More than an agency, we’re your creative proof of concept — turning vision into visibility, and imagination into influence.”',
    body: 'We turn vision into visibility by pairing imagination with meticulous production and measurable outcomes.',
  },
]

import rayenImg from '../assets/profile/rayen.jpeg'
import montasarImg from '../assets/profile/montasar.jpeg'
import ademImg from '../assets/profile/adem.jpeg'
import tahaImg from '../assets/profile/taha.jpg'
import marwenImg from '../assets/profile/marwen.jpg'

const profiles = [
  {
    name: 'Montassar Guedouar',
    role: 'Founder',
    image: montasarImg,
  },
  {
    name: 'Guedouar Rayen',
    role: 'CEO',
    image: rayenImg,
  },
  {
    name: 'Adem Dhahri',
    role: 'Head of Video Production',
    image: ademImg,
  },
  {
    name: 'Marwen Dridi',
    role: 'Art Director',
    image: marwenImg,
  },
  {
    name: 'Taha Daoud',
    role: 'Head of Web Development',
    image: tahaImg,
  },
]
</script>

<template>
  <section id="about" class="about">
    <div class="about__intro">
      <h2>Creative proof, crafted with intention.</h2>
    </div>

    <div class="about__grid about__grid--top">
      <article v-for="item in topHighlights" :key="item.title" class="about-card">
        <p class="about-card__label">✨ {{ item.title }}</p>
        <blockquote>{{ item.quote }}</blockquote>
        <p class="about-card__body">{{ item.body }}</p>
      </article>
    </div>

    <div class="about__grid about__grid--bottom">
      <article v-for="item in bottomHighlights" :key="item.title" class="about-card">
        <p class="about-card__label">✨ {{ item.title }}</p>
        <blockquote>{{ item.quote }}</blockquote>
        <p class="about-card__body">{{ item.body }}</p>
      </article>
    </div>
    <div class="about__intro" style="margin-top: 5rem; margin-bottom: 2rem;">
      <h2>Meet the Team</h2>
    </div>

    <div class="slider-container">
      <button @click="scrollLeft" class="slider-btn slider-btn--left" aria-label="Previous profile">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <div class="about__profiles" ref="sliderRef">
        <article v-for="profile in profiles" :key="profile.name" class="profile-card">
          <img :src="profile.image" :alt="profile.name" loading="lazy" />
          <h3>{{ profile.name }}</h3>
          <p class="profile-card__role">{{ profile.role }}</p>
        </article>
      </div>

      <button @click="scrollRight" class="slider-btn slider-btn--right" aria-label="Next profile">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 3rem 2rem 5rem;
  background: #f1f3f8;
  color: #e6ecff;
  border-top: 6px solid #181759;
}

.about__intro {
  max-width: 780px;
  margin: 0 auto 3rem;
  text-align: center;
}

.about__intro h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  color: #0a0a0a;
}

.about__grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.about__grid--top {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1100px;
  margin: 0 auto 3rem;
}

.about__grid--bottom {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 700px;
  margin: 0 auto 3rem;
}

.about-card {
  background-image: url('../assets/b.jpg');
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(24, 23, 89, 0.35);
  border-radius: 24px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  box-shadow: 0 25px 60px rgba(5, 10, 24, 0.25);
  color: #1c2470;
}

.about-card:hover {
  transform: translateY(-8px) scale(1.01);
  border-color: #181759;
  box-shadow: 0 30px 70px rgba(24, 23, 89, 0.4);
}

.about-card__label {
  font-weight: 600;
  color: #1c2470;
  margin: 0;
}

blockquote {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #1c2470;
}

.about-card__body {
  margin: 0;
  font-size: 0.95rem;
  color: #1c2470;
}

.slider-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
}

.about__profiles {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1.5rem;
  padding: 1.5rem 0.5rem 2rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}

.about__profiles::-webkit-scrollbar {
  display: none;
}

.profile-card {
  min-width: 280px;
  scroll-snap-align: center;
  flex-shrink: 0;
  background-image: url('../assets/b.jpg');
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(24, 23, 89, 0.35);
  border-radius: 22px;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  text-align: center;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms ease, border-color 300ms ease;
  box-shadow: 0 15px 35px rgba(5, 10, 24, 0.2);
  color: #1c2470;
}

.profile-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #181759;
  box-shadow: 0 25px 50px rgba(24, 23, 89, 0.35);
}

.profile-card img {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #181759;
  box-shadow: 0 8px 20px rgba(24, 23, 89, 0.2);
}

.profile-card h3 {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
}

.profile-card__role {
  margin: 0;
  color: #1c2470;
  font-size: 1.05rem;
  font-weight: 500;
  opacity: 0.9;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(24, 23, 89, 0.2);
  box-shadow: 0 8px 25px rgba(5, 10, 24, 0.15);
  color: #181759;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 250ms ease;
  z-index: 10;
}

.slider-btn:hover {
  background: #181759;
  color: #ffffff;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 10px 30px rgba(24, 23, 89, 0.3);
}

.slider-btn svg {
  transition: transform 250ms ease;
}

.slider-btn:hover svg {
  transform: scale(1.15);
}

.slider-btn--left {
  left: 0;
}

.slider-btn--right {
  right: 0;
}

@media (max-width: 1200px) {
  .slider-container {
    padding: 0 3rem;
  }
  
  .slider-btn {
    width: 44px;
    height: 44px;
  }
  
  .about__profiles {
    margin: 0 -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .profile-card {
    min-width: 260px;
  }
}

@media (max-width: 640px) {
  .about {
    padding: 4rem 1.5rem 6rem; /* extra padding at bottom for buttons */
  }

  .about__grid--top {
    grid-template-columns: 1fr;
  }

  .about__grid--bottom {
    grid-template-columns: 1fr;
  }

  .slider-container {
    padding: 0;
  }

  .about__profiles {
    padding-bottom: 2.5rem; /* space for scroll dots or just visual separation */
  }

  .slider-btn {
    top: auto;
    bottom: -2rem;
    transform: none;
  }
  
  .slider-btn:hover {
    transform: scale(1.1);
  }

  .slider-btn--left {
    left: 35%;
    margin-left: -22px;
  }

  .slider-btn--right {
    right: 35%;
    margin-right: -22px;
  }
}
</style>

