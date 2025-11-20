
<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <p class="footer__eyebrow">Proof Agency</p>
        <h2>Launch with confidence.</h2>
        <p class="footer__tagline">
          From ideas to digital reality | Let’s build your proof
        </p>
      </div>

      <div class="footer__grid">
        <section>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#accueil">Home</a></li>
            <li><a href="#services">Our services</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </section>

        <section>
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:contact@proofagency.com">contact@proofagency.com</a></li>
            <li>+33 (0)1 84 88 90 45</li>
            <li>8 Rue de la République, 75001 Paris</li>
          </ul>
        </section>

        <section>
          <h3>Follow us</h3>
          <div class="footer__social">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </section>
      </div>
    </div>

    <div class="footer__legal">
      <p>© {{ new Date().getFullYear() }} Proof Agency. All rights reserved.</p>
      <div class="footer__legal-links">
        <a href="#mentions-legales">Legal notice</a>
        <span>•</span>
        <a href="#politique-confidentialite">Privacy policy</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #050a18;
  color: #eff4ff;
  padding: 4rem 2rem 2rem;
  margin-top: 0;
  border-top: 6px solid #181759;
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2.5rem;
}

.footer__brand h2 {
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  margin: 0.5rem 0;
}

.footer__eyebrow {
  letter-spacing: 0.3em;
  font-size: 1.2rem;
  color: rgb(93, 246, 63);
  text-transform: uppercase;
}

.footer__tagline {
  max-width: 45ch;
  color: #c6d0e8;
  margin: 0.25rem 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

section h3 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  color: #9fb3d8;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 150ms ease;
}

a:hover {
  color: #181759;
}

.footer__social {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.footer__legal {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #94a3c2;
}

.footer__legal-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

@media (max-width: 640px) {
  .footer {
    padding: 3rem 1.5rem 2rem;
  }

  .footer__legal {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

