<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import proofLogo from '../assets/lOGO-PNG.png'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const emit = defineEmits(['show-contact', 'show-discover', 'show-all'])

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (hash: string) => {
  const target = document.querySelector(hash)
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleNavClick = (hash: string) => {
  closeMenu()
  emit('show-all')
  scrollToSection(hash)
}

const handleContactClick = () => {
  closeMenu()
  emit('show-contact')
  window.scrollTo({ top: 0, behavior: 'auto' })
}

const handleLogoClick = () => {
  closeMenu()
  emit('show-all')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleDiscoverClick = () => {
  closeMenu()
  emit('show-discover')
  window.scrollTo({ top: 0, behavior: 'auto' })
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleResize = () => {
  if (window.innerWidth > 900) {
    closeMenu()
  }
}

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner">
      <img
        :src="proofLogo"
        alt="Proof Agency"
        class="navbar__logo"
        @click="handleLogoClick"
      />

      <nav
        class="navbar__menu"
        :class="{ 'navbar__menu--open': isMenuOpen }"
        aria-label="Main navigation"
      >
        <button
          class="navbar__close"
          type="button"
          aria-label="Close navigation"
          @click="toggleMenu"
        >
          ×
        </button>
        <a href="#accueil" @click.prevent="handleNavClick('#accueil')">Home</a>
        <a href="#services" @click.prevent="handleNavClick('#services')">Services</a>
        <a href="#about" @click.prevent="handleNavClick('#about')">About</a>
        <a href="#contact" @click.prevent="handleContactClick">Contact</a>
        <a
          href="#discovert"
          class="navbar__cta navbar__cta--inline"
          @click.prevent="handleDiscoverClick"
        >
          Discover
        </a>
      </nav>

      <div class="navbar__actions">
        <a href="#discovert" class="navbar__cta" @click.prevent="handleDiscoverClick">Discover</a>
        <button
          class="navbar__toggle"
          :class="{ 'navbar__toggle--open': isMenuOpen }"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="navbar__backdrop" @click="toggleMenu"></div>
  </header>
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: 'Inter', 'Space Grotesk', system-ui, -apple-system, sans-serif;
  color: #0f172a;
  background: #f4f6fb;
}

:global(html) {
  scroll-behavior: smooth;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  background: #f1f1f3;
  border-bottom: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
  transition: background 200ms ease, box-shadow 200ms ease, opacity 200ms ease;
}

.navbar--scrolled {
  background: #e1e1e5;
  opacity: 0.95;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
}

.navbar__inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.navbar__logo {
  height: 42px;
  width: auto;
  cursor: pointer;
}

.navbar__menu {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 1.75rem;
  font-size: 0.98rem;
  color: #0f172a;
  font-weight: 500;
}

.navbar__menu a {
  position: relative;
  text-decoration: none;
  color: inherit;
  padding: 0.4rem 0;
  transition: color 150ms ease;
}

.navbar__menu a:hover {
  color: #0baa5f;
}

.navbar__menu a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #2dd667;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 180ms ease;
}

.navbar__cta {
  text-decoration: none;
  border-radius: 999px;
  background: linear-gradient(120deg, #23d86c, #53ff65);
  color: #04121d;
  padding: 0.55rem 1.75rem;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(35, 216, 108, 0.25);
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.navbar__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(35, 216, 108, 0.35);
}

.navbar__cta--inline {
  display: none;
}

.navbar__close {
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(15, 23, 42, 0.08);
  color: #0f172a;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background 150ms ease;
}

.navbar__close:hover {
  background: rgba(15, 23, 42, 0.15);
}

.navbar__toggle {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 42, 0.15);
  background: #fff;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
  transition: box-shadow 150ms ease, transform 150ms ease;
  position: relative;
}

.navbar__toggle span {
  display: block;
  width: 18px;
  height: 2px;
  background: #0f172a;
  border-radius: 999px;
  transition: transform 160ms ease, opacity 160ms ease;
}

.navbar__toggle--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__toggle--open span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.navbar__toggle:hover {
  transform: translateY(-1px);
  box-shadow: 0 15px 25px rgba(15, 23, 42, 0.18);
}

.navbar__toggle:focus-visible {
  outline: 2px solid #2dd667;
  outline-offset: 3px;
}

.navbar__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(4, 18, 29, 0.35);
  backdrop-filter: blur(2px);
  z-index: 18;
}

@media (max-width: 900px) {
  .navbar__inner {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .navbar__menu {
    position: fixed;
    top: 0;
    right: 0;
    width: min(320px, 80vw);
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1.75rem 2rem 2rem;
    gap: 1rem;
    background: linear-gradient(180deg, #fdfefe 0%, #f4f7ff 100%);
    box-shadow: -12px 0 35px rgba(15, 23, 42, 0.18);
    transform: translateX(100%);
    transition: transform 200ms ease;
    z-index: 25;
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    border-left: 1px solid rgba(10, 30, 60, 0.06);
  }

  .navbar__menu--open {
    transform: translateX(0);
  }

  .navbar__menu a {
    width: 100%;
    padding: 0.3rem 0;
    font-size: 1.05rem;
    color: #0b1c33;
  }

  .navbar__menu a::after {
    display: none;
  }

  .navbar__actions {
    width: auto;
    gap: 0.25rem;
  }

  .navbar__toggle {
    display: flex;
  }

  .navbar__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .navbar__menu::before {
    content: 'Menu';
    font-size: 0.75rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #7b8aa1;
    margin-bottom: 0.5rem;
  }

  .navbar__menu .navbar__cta--inline {
    display: inline-flex;
    width: 100%;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .navbar__cta {
    display: none;
  }
}
</style>