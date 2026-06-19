import { useState } from "react";
import { profile } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormState("sending");

    const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormState("sent");
  };

  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="-- CONTACT.SH ------------------------------------------------"
          title="CONTACT.SH"
          subtitle="Let's build something together — send a message or reach out directly."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="terminal-border p-6">
            <p className="mb-4 text-sm">
              <span className="text-[#ffc107]">$</span> ./contact_info.sh
            </p>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                <span className="text-[#ffc107]">EMAIL</span>
                <br />
                <a href={`mailto:${profile.email}`} className="contact-link">
                  {profile.email}
                </a>
              </p>
              <p>
                <span className="text-[#ffc107]">PHONE</span>
                <br />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-link">
                  {profile.phone}
                </a>
              </p>
              <p>
                <span className="text-[#ffc107]">LOCATION</span>
                <br />
                {profile.location}
              </p>
            </div>

            <div className="mt-8 space-y-2 border-t border-[rgba(255,235,59,0.15)] pt-6 text-xs text-[#ffc107]">
              <p>$ Initializing contact protocol...</p>
              <p>$ Loading human-communication.sh</p>
              <p>$ Ready. Type your message below.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="terminal-border p-6">
            <p className="mb-4 text-sm">
              <span className="text-[#ffc107]">$</span> ./compose_message.sh
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs text-[#ffc107]">
                  YOUR_NAME
                </label>
                <input
                  id="name"
                  className="input-field"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="enter name..."
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs text-[#ffc107]">
                  YOUR_EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="enter email..."
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs text-[#ffc107]">
                  MESSAGE_BODY
                </label>
                <textarea
                  id="message"
                  className="input-field min-h-32 resize-y"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="type message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={formState === "sending"}
              >
                {formState === "sending"
                  ? "[ DEPLOYING... ]"
                  : formState === "sent"
                    ? "[ OPENING MAIL CLIENT ]"
                    : "[ SEND MESSAGE ]"}
              </button>

              {formState === "sent" ? (
                <p className="text-xs text-[#ffc107]">
                  $ Message routed to {profile.email}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
