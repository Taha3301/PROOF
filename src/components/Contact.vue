<script setup lang="ts">
import { reactive, watch } from 'vue'
import emailjs from '@emailjs/browser'

const props = defineProps<{
  initialMessage?: string
}>()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  whatsapp: '',
  details: '',
})

const state = reactive({
  loading: false,
  success: '',
  error: '',
})

const isValidEmail = (value: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(value.trim())
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5ur1ohk'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_k2pk4uq'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'u4dUw2xE3KxyH9YfN'

watch(
  () => props.initialMessage,
  (value) => {
    if (typeof value === 'string' && value.trim()) {
      form.details = value
    }
  },
  { immediate: true },
)

const handleSubmit = async () => {
  state.loading = true
  state.success = ''
  state.error = ''

  try {
    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      state.error = 'Name, email, and project details are required.'
      state.loading = false
      return
    }

    if (!isValidEmail(form.email)) {
      state.error = 'Please enter a valid email address.'
      state.loading = false
      return
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject || 'Website inquiry',
      whatsapp: form.whatsapp || 'Not provided',
      message: form.details,
    }

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    state.success = 'Thanks! Your message was sent.'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.whatsapp = ''
    form.details = ''
  } catch (error) {
    console.error('EmailJS error:', error)
    const message = error instanceof Error ? error.message : 'Unable to send message right now. Please try again.'
    state.error = message
  } finally {
    state.loading = false
  }
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
          <li><span>Email</span> <a href="mailto:contact@proofagency.tn">contact@proofagency.tn</a></li>
          <li><span>Phone</span> +216 21 918 926</li>
          <li><span>Studio</span> Djerba Houmt Souk, Tunisia</li>
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
            Subject
            <input type="text" placeholder="Project or request topic" v-model="form.subject" />
          </label>
          <label>
            WhatsApp (optional)
            <input type="tel" placeholder="+1 555 000 0000" v-model="form.whatsapp" />
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
          <button type="submit" :disabled="state.loading">
            {{ state.loading ? 'Sending…' : 'Send inquiry' }}
          </button>
          <p v-if="state.error" class="contact__status contact__status--error">{{ state.error }}</p>
          <p v-if="state.success" class="contact__status contact__status--success">{{ state.success }}</p>
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

button[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
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

.contact__status {
  margin: 0;
  font-size: 0.9rem;
}

.contact__status--error {
  color: #d14343;
}

.contact__status--success {
  color: #15803d;
}
</style>

