'use client';

import { useState, type FormEvent } from 'react';
import { buttonClass } from './button';

const fieldClass =
  'bg-field text-ink placeholder:text-ink-soft/70 block w-full rounded-xl border border-transparent px-3 text-base transition-[background-color,border-color,box-shadow] outline-none focus:border-accent-2 focus:bg-white focus:shadow-[0_0_0_3px_rgb(61_158_174/0.16)]';

const fields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@email.com',
    autoComplete: 'email',
  },
  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
] as const;

/** No backend: the form composes a mailto: draft in the visitor's mail client. */
export function ContactForm({ email }: { email: string }) {
  const [note, setNote] = useState('Opens your mail client. Nothing is stored on this site.');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? '').trim();
    const body = `From: ${value('name')} (${value('email')})\n\n${value('message')}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(value('subject'))}&body=${encodeURIComponent(body)}`;
    setNote('Draft opened in your mail client.');
  };

  return (
    <form onSubmit={onSubmit} className="card px-[18px] py-[22px] md:p-7">
      {fields.map((field) => (
        <div key={field.id} className="mb-4">
          <label
            htmlFor={`contact-${field.id}`}
            className="text-ink mb-1.5 block text-[13px] font-bold"
          >
            {field.label}
          </label>
          <input
            id={`contact-${field.id}`}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={'autoComplete' in field ? field.autoComplete : undefined}
            required
            className={`${fieldClass} h-[52px]`}
          />
        </div>
      ))}
      <div className="mb-4">
        <label htmlFor="contact-message" className="text-ink mb-1.5 block text-[13px] font-bold">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          placeholder="A short note is enough."
          required
          className={`${fieldClass} h-[140px] py-3`}
        />
      </div>
      <button type="submit" className={buttonClass('solid')}>
        Open email draft
      </button>
      <p className="text-ink-soft mt-3 mb-0 text-[13px]" role="status" aria-live="polite">
        {note}
      </p>
    </form>
  );
}
