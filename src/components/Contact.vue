<script setup lang="ts">
import { reactive, watch } from 'vue'

const props = defineProps<{
  initialMessage?: string
}>()

const form = reactive({
  name: '',
  email: '',
  details: '',
})

watch(
  () => props.initialMessage,
  (value) => {
    if (typeof value === 'string' && value.trim()) {
      form.details = value
    }
  },
  { immediate: true },
)

const handleSubmit = () => {
  // Placeholder submit handler
  // In a real app you would send this to an API
  console.log('Submitting contact form', { ...form })
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__intro">
      <h2 class="contact__title">Contact</h2>
      <p>Share a bit about your brief and we’ll reply within 24 hours.</p>
    </div>

    <div class="contact__content">
      <div class="contact__info">
        <div>
          <p class="contact__eyebrow">Connect directly</p>
          <h3>Let’s start the conversation</h3>
          <p class="contact__description">
            Reach out with your timelines, challenges, or a simple hello. We typically respond in less than a day.
          </p>
        </div>

        <ul>
          <li><span>Email</span> <a href="mailto:contact@proofagency.com">contact@proofagency.com</a></li>
          <li><span>Phone</span> +33 (0)1 84 88 90 45</li>
          <li><span>Studio</span> 8 Rue de la République, Paris</li>
        </ul>

        <div class="contact__chips">
          <span>Strategy</span>
          <span>Video</span>
          <span>Design</span>
          <span>Branding</span>
        </div>
      </div>

      <div class="contact__card">
        <h3>Start a project</h3>
        <form class="contact__form" @submit.prevent="handleSubmit">
          <label>
            Name
            <input type="text" placeholder="Jane Doe" v-model="form.name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="jane@brand.com" v-model="form.email" required />
          </label>
          <label>
            Project details
            <textarea
              rows="5"
              placeholder="Tell us about timelines, scope, goals…"
              v-model="form.details"
              required
            ></textarea>
          </label>
          <button type="submit">Send inquiry</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 5rem 1.5rem;
  background: #ffffff;
  color: #0f172a;
  max-width: 1100px;
  margin: 3rem auto;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

.contact__intro {
  text-align: center;
  margin-bottom: 2rem;
}

.contact__title {
  margin: 0 0 0.75rem;
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  letter-spacing: -0.02em;
}

.contact__content {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: start;
}

.contact__card {
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 20px;
  padding: 2rem;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0 1rem 0 1.5rem;
}

.contact__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.85rem;
  color: #00c853;
  margin-bottom: 0.5rem;
}

.contact__info h3 {
  margin: 0 0 0.5rem;
  font-size: 2rem;
}

.contact__description {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}

.contact__form {
  display: grid;
  gap: 1rem;
}

label {
  display: grid;
  gap: 0.35rem;
  font-size: 0.9rem;
}

input,
textarea {
  border: 1px solid rgba(15, 23, 42, 0.15);
  border-radius: 12px;
  background: #ffffff;
  color: inherit;
  padding: 0.8rem;
  font: inherit;
}

button {
  border: none;
  border-radius: 999px;
  padding: 0.85rem 1.4rem;
  background: linear-gradient(120deg, #23d86c, #53ff65);
  color: #04121d;
  font-weight: 600;
  cursor: pointer;
}

.contact__info ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.9rem;
  font-size: 0.95rem;
}

.contact__info span {
  color: #64748b;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.contact__info a {
  color: inherit;
  text-decoration: none;
}

.contact__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.contact__chips span {
  border: 1px solid rgba(15, 23, 42, 0.15);
  border-radius: 999px;
  padding: 0.25rem 0.85rem;
  font-size: 0.85rem;
}
</style>

