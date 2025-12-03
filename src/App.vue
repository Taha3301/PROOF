<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Header from './components/Header.vue'
import LandingPage from './components/LandingPage.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Discover from './components/Discover.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

type SectionView = 'all' | 'contact' | 'discover'
const visibleSection = ref<SectionView>('all')
const pendingIdeaMessage = ref('')

const handleShowContact = () => {
  visibleSection.value = 'contact'
}

const handleShowDiscover = () => {
  visibleSection.value = 'discover'
}

const handleShowAll = () => {
  visibleSection.value = 'all'
}

const handleIdeaSubmit = (idea: string) => {
  pendingIdeaMessage.value = idea
  handleShowContact()
}

const isFullView = computed(() => visibleSection.value === 'all')
const showScrollTop = ref(false)

const updateScrollState = () => {
  showScrollTop.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

<template>
  <div class="layout">
    <Header
      @show-contact="handleShowContact"
      @show-discover="handleShowDiscover"
      @show-all="handleShowAll"
    />
    <main class="content" :class="{ 'content--no-gap': !isFullView }">
      <LandingPage v-show="isFullView" @submit-idea="handleIdeaSubmit" />
      <Services v-show="isFullView" />
      <About v-show="isFullView" />
      <Discover v-if="visibleSection === 'discover'" />
      <Contact v-if="visibleSection === 'contact'" :initial-message="pendingIdeaMessage" />
    </main>
    <Footer />
    <button
      v-if="showScrollTop"
      class="scroll-top"
      type="button"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 5l-7 7h4v7h6v-7h4l-7-7z"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.layout {
  --header-height: 96px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: visible;
  background-image: url('./assets/b.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.content {
  flex: 1;
  padding-top: var(--header-height);
  background: transparent;
}

.content--no-gap {
  padding-top: var(--header-height);
}

.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(120deg, #23d86c, #53ff65);
  color: #04121d;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 150ms ease, box-shadow 150ms ease;
  z-index: 30;
}

.scroll-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 45px rgba(15, 23, 42, 0.35);
}

.scroll-top svg {
  width: 22px;
  height: 22px;
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background-image: url('./assets/b.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #ffffff;
}

#app {
  min-height: 100%;
  background: transparent;
}
</style>
