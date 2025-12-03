<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import posterOne from '../assets/PostersDesigne/P-A/1.png'
import posterTwo from '../assets/PostersDesigne/P-A/2.png'
import posterThree from '../assets/PostersDesigne/P-A/6.png'
import posterFour from '../assets/PostersDesigne/P-A/7.png'
import posterFive from '../assets/PostersDesigne/P-A/ADS June - POST  v3.png'
import posterSix from '../assets/PostersDesigne/P-A/ADS June - POST 16.png'
import posterSeven from '../assets/PostersDesigne/P-A/Halo VS All - POST 3.png'
import posterEight from '../assets/PostersDesigne/P-A/Discount Ad- - POST v1.png'
import posterNine from '../assets/PostersDesigne/P-A/KSA National Day ADS - POST 1.png'
import posterTen from '../assets/PostersDesigne/P-A/VIVA-WEBSITE-BANNER-KSA-NATIONAL-DAY-2025-FV.jpg'
import posterEleven from '../assets/PostersDesigne/P-A/Height increasing shoes - NEW DROPS - POST.png'
import posterTwelve from '../assets/PostersDesigne/P-A/WEBSITE-BANNER--OCTOBER-2025-v2.jpg'

import storyOne from '../assets/PostersDesigne/S/1 - Greeting Story.png'
import storyTwo from '../assets/PostersDesigne/S/5.1.png'
import storyThree from '../assets/PostersDesigne/S/10.1.png'
import storyFour from '../assets/PostersDesigne/S/ADS June - STORY.png'
import storyFive from '../assets/PostersDesigne/S/Discount Ad- - STORY v1.png'
import storySix from '../assets/PostersDesigne/S/Halo VS All - STORY 3.png'
import storySeven from '../assets/PostersDesigne/S/KSA National Day ADS - STORY 1.png'
import storyEight from '../assets/PostersDesigne/S/ADS AUG - STORY 16.png'
import storyNine from '../assets/PostersDesigne/S/Bodies Ad - Story 27.png'
import storyTen from '../assets/PostersDesigne/S/Idhha Greeting.jpg'

import profileOne from '../assets/profiles/1.jpg'
import profileTwo from '../assets/profiles/2.jpg'
import profileThree from '../assets/profiles/3.jpg'
import profileFour from '../assets/profiles/4.jpg'

import videoOne from '../assets/videos/1.mp4'
import videoTwo from '../assets/videos/2.mp4'
import videoThree from '../assets/videos/افتتاح مبهر كعادتهم 🇶🇦♥️.mp4'
import videoFour from '../assets/videos/__جاري كتابة التاريخ في قطر 🇶🇦 في افتتاح كأس العرب ٢٠٢٥_@roadtoqatar_@arabcupqa_qa_.mp4'

type ShowcaseItem = {
  src: string
  title: string
  category: string
  variant?: 'story'
}

type VideoItem = {
  src: string
  title: string
}

type ClientProfile = {
  name: string
  label?: string
  meta?: string
  followers?: string
  description?: string
  instagramUrl: string
  avatarSrc: string
}

const chunkArray = (items: ShowcaseItem[], chunkSize: number) => {
  const chunks: ShowcaseItem[][] = []
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize))
  }
  return chunks
}

const posterShowcase: ShowcaseItem[] = [
  { src: posterOne, title: 'Neo Drop Promo', category: 'Campaign Poster' },
  { src: posterTwo, title: 'Product Focus', category: 'Carousel Tile' },
  { src: posterThree, title: 'Launch Story', category: 'Editorial Layout' },
  { src: posterFour, title: 'Studio Series', category: 'Lookbook Poster' },
  { src: posterFive, title: 'Summer Ads', category: 'Paid Social' },
  { src: posterSix, title: 'Drop Countdown', category: 'Launch Poster' },
  { src: posterSeven, title: 'Halo vs Classic', category: 'Comparison Graphic' },
  { src: posterEight, title: 'Discount Stack', category: 'Promo Poster' },
  { src: posterNine, title: 'KSA National Day', category: 'Cultural Campaign' },
  { src: posterTen, title: 'National Day Banner', category: 'Website Hero' },
  { src: posterEleven, title: 'Product Spotlight', category: 'E-commerce Feature' },
  { src: posterTwelve, title: 'October Banner', category: 'Seasonal Landing' },
]

const storyShowcase: ShowcaseItem[] = [
  { src: storyOne, title: 'Greeting Story', category: 'Story Series' },
  { src: storyTwo, title: 'Product Story 05', category: 'Story Drop' },
  { src: storyThree, title: 'Launch Story 10', category: 'Story Drop' },
  { src: storyFour, title: 'June Highlights', category: 'Story Carousel' },
  { src: storyFive, title: 'Discount Story', category: 'Promo Story' },
  { src: storySix, title: 'Halo Comparison', category: 'Story Breakdown' },
  { src: storySeven, title: 'KSA Pride', category: 'Story Tribute' },
  { src: storyEight, title: 'August Shout', category: 'Story Drop' },
  { src: storyNine, title: 'Bodies Story', category: 'Product Story' },
  { src: storyTen, title: 'Idhha Greeting', category: 'Seasonal Story' },
]

const clientProfiles: ClientProfile[] = [
  {
    name: 'Dr. Ahmad Al-Rushaidan',
    followers: '436K',
    meta: '127/196 countries',
    description: 'Travel, lifestyle, and community-focused content from around the world.',
    instagramUrl: 'https://www.instagram.com/bukhaleefa',
    avatarSrc: profileOne,
  },
  {
    name: 'Papparazo™',
    label: 'Papparazo™ · Brand',
    followers: '73.4K',
    description: 'Premium fashion and lifestyle brand with campaign-led social content.',
    instagramUrl: 'https://www.instagram.com/papparaz0',
    avatarSrc: profileTwo,
  },
  {
    name: 'Omar Alkhaldi',
    label: '🇰🇼 Omar Alkhaldi',
    followers: '147K',
    meta: 'Content creator',
    description: 'Travel, photography, and social content with a focus on Kuwait and beyond.',
    instagramUrl: 'https://www.instagram.com/oalkhaldii',
    avatarSrc: profileThree,
  },
  {
    name: 'Saleh Hamadah',
    label: 'Saleh Hamadah · Overland & off-road',
    followers: '135K',
    description: 'Kuwait-based creator sharing camping, overland and off-road adventures.',
    instagramUrl: 'https://www.instagram.com/salehhamadah',
    avatarSrc: profileFour,
  },
]

const AUTOPLAY_DELAY = 6000
const BREAKPOINT_SM = 640
const BREAKPOINT_MD = 900

const videoItems: VideoItem[] = [
  { src: videoOne, title: 'Campaign Reel — Showreel 01' },
  { src: videoTwo, title: 'Social Cutdowns — Showreel 02' },
  { src: videoThree, title: 'Qatar Event Highlight' },
  { src: videoFour, title: 'Arab Cup 2025 Opening' },
]

const activeShowcaseTab = ref<'graphics' | 'videos'>('graphics')

const allShowcaseItems = computed(() => [
  ...posterShowcase,
  ...storyShowcase.map((item) => ({ ...item, variant: 'story' as const })),
])

const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

const itemsPerSlide = computed(() => {
  if (viewportWidth.value <= BREAKPOINT_SM) return 1
  if (viewportWidth.value <= BREAKPOINT_MD) return 2
  return 3
})

const showcaseSlides = computed(() => {
  if (activeShowcaseTab.value !== 'graphics') return []
  return chunkArray(allShowcaseItems.value, itemsPerSlide.value)
})

const currentSlide = ref(0)
const activeItem = ref<ShowcaseItem | null>(null)
let sliderTimer: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
  if (!showcaseSlides.value.length) return
  currentSlide.value = (currentSlide.value + 1) % showcaseSlides.value.length
}

const prevSlide = () => {
  if (!showcaseSlides.value.length) return
  currentSlide.value = (currentSlide.value - 1 + showcaseSlides.value.length) % showcaseSlides.value.length
}

const startSliderTimer = () => {
  stopSliderTimer()
  if (activeShowcaseTab.value === 'graphics' && showcaseSlides.value.length > 1) {
    sliderTimer = setInterval(nextSlide, AUTOPLAY_DELAY)
  }
}

const stopSliderTimer = () => {
  if (sliderTimer) {
    clearInterval(sliderTimer)
    sliderTimer = null
  }
}

const updateViewportWidth = () => {
  viewportWidth.value = window.innerWidth
}

watch(showcaseSlides, (slides) => {
  if (currentSlide.value >= slides.length) {
    currentSlide.value = 0
  }
})

watch(
  activeShowcaseTab,
  (tab) => {
    if (tab === 'graphics') {
      startSliderTimer()
    } else {
      stopSliderTimer()
    }
  },
  { immediate: true },
)

onMounted(() => {
  startSliderTimer()
  window.addEventListener('keydown', handleKeydown, { passive: true })
  window.addEventListener('resize', updateViewportWidth, { passive: true })
})

onBeforeUnmount(() => {
  stopSliderTimer()
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', updateViewportWidth)
  document.body.style.overflow = ''
})

const openItem = (item: ShowcaseItem) => {
  activeItem.value = item
  document.body.style.overflow = 'hidden'
  stopSliderTimer()
}

const closeItem = () => {
  activeItem.value = null
  document.body.style.overflow = ''
  startSliderTimer()
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && activeItem.value) {
    closeItem()
  }
}
</script>

<template>
  <section id="discovert" class="discover">
    <div class="discover__content">
      <h2>Graphic Design | Video explorations</h2>
      
    </div>

    <div class="graphic-showcase">
      <div class="graphic-showcase__header">
        <div class="graphic-showcase__summary">
          <p class="graphic-showcase__eyebrow">Graphic Design</p>
          <h3>Posters & drops from the studio</h3>
          <p>Each composition blends typography, product focus, and color blocking for scroll-stopping impact.</p>
        </div>

        <div class="showcase-tabs" role="tablist" aria-label="Discover content type">
          <button
            type="button"
            class="showcase-tab"
            :class="{ 'showcase-tab--active': activeShowcaseTab === 'graphics' }"
            role="tab"
            :aria-selected="activeShowcaseTab === 'graphics'"
            @click="activeShowcaseTab = 'graphics'"
          >
            Graphic design
          </button>
          <button
            type="button"
            class="showcase-tab"
            :class="{ 'showcase-tab--active': activeShowcaseTab === 'videos' }"
            role="tab"
            :aria-selected="activeShowcaseTab === 'videos'"
            @click="activeShowcaseTab = 'videos'"
          >
            Videos
          </button>
        </div>
      </div>

      <div
        v-if="activeShowcaseTab === 'graphics'"
        class="showcase-slider"
        @mouseenter="stopSliderTimer"
        @mouseleave="startSliderTimer"
      >
        <div
          class="showcase-slider__track"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(slide, slideIndex) in showcaseSlides"
            :key="`showcase-slide-${slideIndex}`"
            class="showcase-slider__panel"
          >
            <figure
              v-for="item in slide"
              :key="item.title"
              class="graphic-card"
              :class="{ 'graphic-card--story': item.variant === 'story' }"
              role="button"
              tabindex="0"
              @click="openItem(item)"
              @keydown.enter.prevent="openItem(item)"
              @keydown.space.prevent="openItem(item)"
            >
              <img :src="item.src" :alt="item.title" loading="lazy" />
              <figcaption>
                <p class="graphic-card__category">{{ item.category }}</p>
                <p class="graphic-card__title">{{ item.title }}</p>
              </figcaption>
            </figure>
          </div>
        </div>

        <button
          class="slider-button slider-button--floating slider-button--prev"
          type="button"
          aria-label="Previous visuals"
          @click="prevSlide"
        >
          ←
        </button>
        <button
          class="slider-button slider-button--floating slider-button--next"
          type="button"
          aria-label="Next visuals"
          @click="nextSlide"
        >
          →
        </button>

        <div class="slider-controls">
          <button class="slider-button" type="button" @click="prevSlide" aria-label="Previous visuals">
            ←
          </button>
          <div class="slider-dots">
            <button
              v-for="(_, index) in showcaseSlides"
              :key="`showcase-dot-${index}`"
              class="slider-dot"
              :class="{ 'slider-dot--active': currentSlide === index }"
              @click="currentSlide = index"
              type="button"
              :aria-label="`Show slide ${index + 1}`"
            />
          </div>
          <button class="slider-button" type="button" @click="nextSlide" aria-label="Next visuals">
            →
          </button>
        </div>
      </div>

      <div v-else class="video-grid">
        <figure v-for="video in videoItems" :key="video.title" class="video-card">
          <video
            class="video-card__media"
            :src="video.src"
            controls
            playsinline
            preload="metadata"
          />
          <figcaption class="video-card__caption">
            {{ video.title }}
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="clients">
      <div class="clients__header">
        <p class="clients__eyebrow">Clients</p>
        <h3>Brands & creators we collaborate with</h3>
        <p>Selected partners that trust Proof with their visual storytelling and campaign design.</p>
      </div>

      <div class="clients__grid">
        <article v-for="client in clientProfiles" :key="client.instagramUrl" class="client-card">
          <div class="client-card__header">
            <img
              class="client-card__avatar"
              :src="client.avatarSrc"
              :alt="`${client.name} profile photo`"
              loading="lazy"
            />
            <div>
              <h4 class="client-card__name">
                {{ client.name }}
              </h4>
              <p v-if="client.label" class="client-card__label">
                {{ client.label }}
              </p>
              <p v-if="client.followers || client.meta" class="client-card__meta">
                <span v-if="client.followers" class="client-card__followers">
                  {{ client.followers }} followers
                </span>
                <span v-if="client.meta" class="client-card__meta-text">
                  · {{ client.meta }}
                </span>
              </p>
            </div>
          </div>
          <p v-if="client.description" class="client-card__description">
            {{ client.description }}
          </p>
          <a
            class="client-card__button"
            :href="client.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Instagram profile
          </a>
        </article>
      </div>
    </div>

    <transition name="lightbox">
      <div v-if="activeItem" class="lightbox" @click.self="closeItem">
        <button class="lightbox__close" type="button" aria-label="Close preview" @click="closeItem">
          ×
        </button>
        <figure class="lightbox__content">
          <img :src="activeItem.src" :alt="activeItem.title" />
          <figcaption>
            <p class="graphic-card__category">{{ activeItem.category }}</p>
            <p class="graphic-card__title">{{ activeItem.title }}</p>
          </figcaption>
        </figure>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.discover {
  padding: 4rem 1.5rem 5rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background: transparent;
}

.discover__content {
  max-width: 640px;
  text-align: center;
}

.discover__description {
  color: #475569;
  line-height: 1.7;
}

.graphic-showcase {
  width: 100%;
  max-width: 1100px;
  border: 1px solid rgba(24, 23, 89, 0.1);
  border-radius: 28px;
  padding: 2.5rem;
  background: #ffffff;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.08);
}

.graphic-showcase__header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.graphic-showcase__summary {
  max-width: 640px;
}

.showcase-tabs {
  display: flex;
  justify-content: center;
  padding: 0.25rem;
  margin: 1.5rem auto 0;
  border-radius: 999px;
  background: rgba(10, 207, 59, 0.06);
  max-width: 320px;
}

.showcase-tab {
  border: none;
  border-radius: 999px;
  padding: 0.45rem 1.4rem;
  font-size: 0.9rem;
  background: transparent;
  color: #0f172a;
  cursor: pointer;
  transition: background 160ms ease, box-shadow 160ms ease, color 160ms ease, transform 160ms ease;
}

.showcase-tab--active {
  background: #181759;
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.3);
  transform: translateY(-1px);
}

.graphic-showcase__eyebrow {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgb(93, 246, 63);
  margin-bottom: 0.5rem;
}

.showcase-slider {
  overflow: hidden;
  position: relative;
}

.showcase-slider__track {
  display: flex;
  transition: transform 400ms ease;
  width: 100%;
}

.showcase-slider__panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  min-width: 100%;
  padding-bottom: 0.5rem;
}

.graphic-card {
  margin: 0;
  background: #f5f6fb;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(24, 23, 89, 0.08);
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.graphic-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.graphic-card--story img {
  height: 420px;
}

.graphic-card figcaption {
  padding: 1rem 1.25rem 1.5rem;
}

.graphic-card__category {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  color: #94a3c6;
  margin: 0 0 0.4rem;
}

.graphic-card__title {
  margin: 0;
  font-weight: 600;
  color: #0f172a;
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.slider-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #181759;
  color: #ffffff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: opacity 200ms ease;
}

.slider-button:hover {
  opacity: 0.85;
}

.slider-button--floating {
  position: absolute;
  bottom: 1rem;
  display: none;
  z-index: 2;
  background: rgba(24, 23, 89, 0.95);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.3);
}

.slider-button--prev {
  left: 1rem;
}

.slider-button--next {
  right: 1rem;
}

.slider-dots {
  display: flex;
  gap: 0.5rem;
}

.slider-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(24, 23, 89, 0.2);
  cursor: pointer;
}

.slider-dot--active {
  background: rgb(93, 246, 63);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 180ms ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(4, 12, 24, 0.84);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 50;
}

.lightbox__content {
  max-width: min(900px, 90vw);
  max-height: 90vh;
  margin: 0;
  background: #ffffff;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.45);
}

.lightbox__content img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  background: #0f172a;
}

.lightbox__content figcaption {
  padding: 1.25rem 1.5rem 1.5rem;
}

.lightbox__close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  transition: background 150ms ease;
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.video-card {
  margin: 0;
  border-radius: 24px;
  overflow: hidden;
  background: #000000;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.5);
  aspect-ratio: 9 / 16;
}

.video-card__media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.video-card__caption {
  margin: 0;
  padding: 0.75rem 1rem 1rem;
  font-size: 0.95rem;
  color: #0f172a;
  background: #ffffff;
}

.clients {
  width: 100%;
  max-width: 1100px;
  margin-top: 3rem;
  border-radius: 28px;
  padding: 2.5rem;
  background: #0b1220;
  color: #e5e7eb;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.4);
}

.clients__header {
  max-width: 640px;
  margin-bottom: 2rem;
}

.clients__eyebrow {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgb(93, 246, 63);
  margin-bottom: 0.5rem;
}

.clients__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

.client-card {
  padding: 1.5rem 1.25rem;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.4);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 100px;
  height: 80%;
}

.client-card__header {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.client-card__avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid rgb(93, 246, 63);
}

.client-card__name {
  margin: 0;
  font-weight: 600;
  color: #f9fafb;
}

.client-card__label {
  margin: 0;
  font-size: 0.9rem;
  color: #cbd5f5;
}

.client-card__meta {
  margin: 0.15rem 0 0;
  font-size: 0.8rem;
  color: #9ca3c7;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.client-card__description {
  margin: 0.7rem 0 0.25rem;
  font-size: 0.85rem;
  color: #e5e7f5;
}

.client-card__button {
  width: 100%;
  justify-content: center;
  margin-top: auto;
}

.client-card__followers {
  position: relative;
  font-weight: 600;
  color: #bbf7d0;
  padding-left: 1.1rem;
}

.client-card__followers::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #5df63f;
  box-shadow: 0 0 0 0 rgba(93, 246, 63, 0.8);
  transform: translateY(-50%);
  animation: followersPulse 1.9s ease-out infinite;
}

.client-card__meta-text {
  color: #9ca3c7;
}

@keyframes followersPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(93, 246, 63, 0.7);
    transform: translateY(-50%) scale(1);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(93, 246, 63, 0);
    transform: translateY(-50%) scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(93, 246, 63, 0);
    transform: translateY(-50%) scale(1);
  }
}

.client-card__button {
  width: 80%;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #020617;
  background: rgb(93, 246, 63);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 150ms ease, transform 150ms ease, box-shadow 150ms ease;
}

.client-card__button:hover {
  background: rgb(132, 255, 112);
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.45);
}

@media (max-width: 900px) {
  .showcase-slider__panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .video-grid {
    grid-template-columns: 1fr;
  }

  .graphic-showcase__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

@media (min-width: 901px) {
  .graphic-showcase__header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .graphic-showcase__summary {
    max-width: 70%;
  }
}

@media (max-width: 640px) {
  .graphic-showcase {
    padding: 2rem;
  }

  .showcase-slider__panel {
    grid-template-columns: 1fr;
  }

  .slider-controls {
    display: none;
  }

  .slider-dots {
    display: none;
  }

  .slider-button--floating {
    display: inline-flex;
  }
}
</style>
