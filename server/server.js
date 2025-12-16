import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const clientOrigin = process.env.CLIENT_ORIGIN || '*'

app.use(
  cors({
    origin: clientOrigin === '*' ? true : clientOrigin,
    methods: ['POST', 'OPTIONS'],
  }),
)
app.use(express.json())

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM']

app.post('/api/contact', async (req, res) => {
  const missing = requiredEnv.filter((key) => !process.env[key])
  if (missing.length) {
    return res.status(500).json({
      ok: false,
      message: `Server missing required env vars: ${missing.join(', ')}`,
    })
  }

  const { name, email, details } = req.body || {}
  if (!name || !email || !details) {
    return res.status(400).json({ ok: false, message: 'Name, email, and details are required.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const message = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO || process.env.SMTP_FROM,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nDetails:\n${details}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Details:</strong></p>
             <p>${details.replace(/\n/g, '<br/>')}</p>`,
    }

    await transporter.sendMail(message)

    res.json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact email', error)
    res.status(500).json({ ok: false, message: 'Failed to send message.' })
  }
})

app.listen(PORT, () => {
  console.log(`Contact server listening on http://localhost:${PORT}`)
})

