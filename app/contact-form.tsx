"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-wrap" id="contact">
      <div className="contact-section container">
        <div className="contact-intro">
        <div className="eyebrow">Have a question?</div>
        <h2>Let&apos;s talk<br /><em>about speed.</em></h2>
        <p>
          Tell us what you&apos;re building and we&apos;ll show you how Dynamic
          can help your API move faster.
        </p>
        <div className="contact-detail"><span>✦</span><div><strong>Prefer email?</strong><br />hello@dynamic.dev</div></div>
        </div>
        <div className="contact-card">
        {submitted ? (
          <div className="form-success">
            <div className="success-icon">✓</div>
            <h3>Message received.</h3>
            <p>Thanks for reaching out. We&apos;ll be in touch shortly.</p>
            <Button type="button" variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field"><Label htmlFor="name">Name</Label><Input id="name" name="name" placeholder="Alex Morgan" required /></div>
              <div className="form-field"><Label htmlFor="email">Work email</Label><Input id="email" name="email" type="email" placeholder="alex@company.com" required /></div>
            </div>
            <div className="form-field"><Label htmlFor="company">Company <span>(optional)</span></Label><Input id="company" name="company" placeholder="Acme Inc." /></div>
            <div className="form-field"><Label htmlFor="message">How can we help?</Label><Textarea id="message" name="message" placeholder="Tell us a little about your API and what you want to improve..." required /></div>
            <div className="form-footer"><span>We&apos;ll never share your information.</span><Button type="submit">Send message <span>↗</span></Button></div>
          </form>
        )}
        </div>
      </div>
    </section>
  );
}
