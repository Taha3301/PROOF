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
      <LandingPage v-show="isFullView" @submit-idea="handleIdeaSubmit" @show-discover="handleShowDiscover" />
      <Services v-show="isFullView" />
      <About v-show="isFullView" />
      <Discover v-if="visibleSection === 'discover'" />
      <Contact v-if="visibleSection === 'contact'" :initial-message="pendingIdeaMessage" />
    </main>
    <Footer />
    <a
      href="https://wa.me/21621918926"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
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

.whatsapp-button {
  position: fixed;
  bottom: 5.5rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: #25D366;
  color: #ffffff;
  box-shadow: 0 20px 40px rgba(37, 211, 102, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 150ms ease, box-shadow 150ms ease;
  z-index: 30;
  text-decoration: none;
}

.whatsapp-button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 25px 50px rgba(37, 211, 102, 0.45);
}

.whatsapp-button svg {
  width: 28px;
  height: 28px;
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
