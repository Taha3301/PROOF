<script setup lang="ts">
const services = [
  {
    icon: '🎥',
    title: 'Content Creation',
    description:
      'We craft strategic and visually compelling content designed to engage, inspire, and connect with your audience.',
  },
  {
    icon: '🎬',
    title: 'Video Production',
    description:
      'From cinematic videos to digital-first content, we produce visuals that speak louder than words.',
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    description:
      'Creative assets, layouts, and visuals built with precision, clarity, and strong artistic direction.',
  },
  {
    icon: '🟦',
    title: 'Branding & Visual Identity',
    description:
      'Logo design, brand systems, color palettes, typography, and full identity development.',
  },
  {
    icon: '⚡',
    title: 'Motion Graphics',
    description:
      'Dynamic, modern animations that enhance storytelling and elevate your brand presence.',
  },
  {
    icon: '🌐',
    title: 'Digital Creative Assets',
    description:
      'Icons, banners, UI components, and digital visuals for websites, apps, and social media.',
  },
]
</script>

<template>
  <section id="services" class="services">
    <div class="services__heading">
      <h2>Our Services</h2>
      <p class="services__intro">
        Full-stack creative support—from strategy and storytelling to design systems and launch-ready
        assets. Choose the mix that fits your campaign or product roadmap.
      </p>
    </div>

    <div class="services__grid">
      <article v-for="service in services" :key="service.title" class="service-card">
        <span class="service-card__icon">{{ service.icon }}</span>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </article>
    </div>

    <div class="services__extra">
      <article class="service-card service-card--extra">
        <span class="service-card__icon">💻</span>
        <h3>Web Development</h3>
        <p>
          Modern, responsive websites that bring your brand, content, and visuals together into one
          seamless experience.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #f7f9ff 0%, #ffffff 100%);
  color: #0f172a;
  border-top: 6px solid #181759;
  box-shadow: inset 0 10px 20px rgba(24, 23, 89, 0.08);
}

.services__heading {
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
}

.services__eyebrow {
  font-size: 0.95rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #7c3aed;
  margin-bottom: 0.75rem;
}

.services__heading h2 {
  font-size: clamp(2rem, 5vw, 2.85rem);
  margin-bottom: 1rem;
}

.services__intro {
  color: #475569;
  line-height: 1.7;
}

.services__grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.services__extra {
  max-width: 1100px;
  margin: 2.5rem auto 0;
  display: flex;
  justify-content: center;
}

.service-card {
  background: #ffffff;
  border-radius: 22px;
  padding: 2rem;
  box-shadow: 0 25px 55px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.service-card--extra {
  max-width: 360px;
  width: 100%;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 25px 65px rgba(15, 23, 42, 0.12);
}

.service-card__icon {
  font-size: 2rem;
}

.service-card h3 {
  margin: 0;
  font-size: 1.25rem;
}

.service-card p {
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 900px) {
  .services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .services__extra {
    margin-top: 2rem;
  }
}

@media (max-width: 640px) {
  .services {
    padding: 4rem 1.5rem;
  }

  .services__grid {
    grid-template-columns: 1fr;
  }

  .services__extra {
    margin-top: 2rem;
  }

  .service-card {
    padding: 1.75rem;
  }
}
</style>

