"use client"

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { contactPageStyles as c, contactPageStyles } from "../data/dummyStyles";
import { Boxes } from "../components/ui/background-boxes";



const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [focused, setFocused] = useState<string | null>(null)
  const [sending, setSending] = useState(false)

  // No se usa emailjs.init() — la publicKey se pasa directamente en emailjs.send()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    const serviceId = "service_lsy2379";
    const templateId = "template_021y1sf";  // Formato correcto: template_XXXXXXX
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    try {
      if (!publicKey) throw new Error("Missing EmailJS public key — check NEXT_PUBLIC_EMAIL_JS_PUBLICK_KEY in .env");
      if (!serviceId || !templateId) throw new Error("Missing service or template ID");

      // Pasamos publicKey como 4º argumento — más fiable que emailjs.init()
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFocused(null);

      alert("Message sent successfully!");

    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const getLabelClass = (fieldName: string) => {
    const baseClass = c.formLabelBase;
    const focusedClass = focused === fieldName || formData[fieldName as keyof typeof formData] ? c.formLabelFocused : c.formLabelUnfocused
    return `${baseClass} ${focusedClass}`
  }


  return (
    <div className={c.pageContainer}>
      <div className={c.contentContainer}>
        <div className={c.formOuterContainer} style={{ minHeight: "300px" }}>

          {/* Boxes con eventos de ratón activos — z-0 */}
          <div className="absolute inset-0 z-0">
            <Boxes />
          </div>

          {/* Máscara radial decorativa — pointer-events-none para no bloquear el hover de Boxes */}
          <div className="absolute inset-0 z-10 w-full h-full bg-zinc-950/30 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          {/* Header — encima de todo */}
          <div className="relative z-30 mb-12 text-center px-4 py-8">
            <h1 className={c.headerTitle}>
              Get in Touch
            </h1>
            <p className={c.headerSubtitle}>
              have a project in mind or just want to say hi? I&apos;d love to hear from you
            </p>
          </div>

          <div className={c.contactMethodsGrid}>
            <a
              href="mailto:hexagosservices@gmail.com"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Email</p>
                <p className={contactPageStyles.contactValue}>
                  hello@Viratk.ai
                </p>
              </div>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Twitter</p>
                <p className={contactPageStyles.contactValue}>@Viratk</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className={c.formContainer}
          >
            <div className={c.formGrid}>
              {/* Name Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="name" className={getLabelClass("name")}>
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="john@example.com"
                  required
                />
                <label htmlFor="email" className={getLabelClass("email")}>
                  Email
                </label>
              </div>
            </div>

            {/* Subject Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                className={contactPageStyles.formInput}
                placeholder="Project Collaboration"
                required
              />
              <label htmlFor="subject" className={getLabelClass("subject")}>
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={6}
                className={contactPageStyles.formTextarea}
                placeholder="Tell me about your project..."
                required
              />
              <label htmlFor="message" className={getLabelClass("message")}>
                Message
              </label>

              <div className={c.submitButtonContainer}>
                <button
                  type="submit"
                  disabled={sending}
                  aria-label={sending ? "Sending message..." : "Send message"}
                  className={c.submitButton}
                >
                  <span className={c.submitButtonText}>
                    {sending ? "Sending..." : "Send Message"}
                    <svg
                      className={contactPageStyles.submitButtonIcon}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <p className={c.alternativeText}>
          Prefer to schedule a call? {" "}
          <a href="#" className={c.alternativeLink}>
            9005-123-456
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact