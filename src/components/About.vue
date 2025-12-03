<script setup lang="ts">
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

const profiles = [
  {
    name: 'Guedouer Montassar',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=400&h=400&q=80',
    blurb: 'Leading multidisciplinary teams to turn abstract ideas into signature campaigns.',
  },
  {
    name: 'Adam',
    role: 'Head of Production',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=400&h=400&q=80',
    blurb: 'Crafting cinematic-grade visuals and scalable content systems for bold brands.',
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

    <div class="about__profiles">
      <article v-for="profile in profiles" :key="profile.name" class="profile-card">
        <img :src="profile.image" :alt="profile.name" loading="lazy" />
        <h3>{{ profile.name }}</h3>
        <p class="profile-card__role">{{ profile.role }}</p>
      </article>
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

.about__profiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
}

.profile-card {
  background-image: url('../assets/b.jpg');
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(24, 23, 89, 0.35);
  border-radius: 22px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  text-align: center;
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
  box-shadow: 0 18px 40px rgba(5, 10, 24, 0.25);
  color: #1c2470;
}

.profile-card:hover {
  transform: translateY(-6px);
  border-color: #181759;
  box-shadow: 0 26px 55px rgba(24, 23, 89, 0.4);
}

.profile-card img {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #181759;
}

.profile-card h3 {
  margin: 0;
  font-size: 1.15rem;
}

.profile-card__role {
  margin: 0;
  color: #1c2470;
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .about {
    padding: 4rem 1.5rem;
  }

  .about__grid--top {
    grid-template-columns: 1fr;
  }

  .about__grid--bottom,
  .about__profiles {
    grid-template-columns: 1fr;
  }
}
</style>

