import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="contact" class="contact">
      <div class="contact__divider"></div>
      <div class="contact__glow contact__glow--left"></div>
      <div class="contact__glow contact__glow--right"></div>

      <div class="contact__container">
        <div appScrollReveal class="contact__header">
          <span class="contact__header-num">04.</span>
          <h2 class="contact__header-title">Get in Touch</h2>
          <div class="contact__header-line"></div>
        </div>

        <div class="contact__grid">
          <div appScrollReveal class="contact__cta">
            <h3 class="contact__cta-heading">
              <span>Let's build</span><br />
              <span class="gradient">something great</span><br />
              <span>together.</span>
            </h3>

            <p class="contact__cta-text">
              Have a project in mind? I'm currently available for freelance work
              and open to discussing new opportunities. Let's talk about how I can help bring your ideas to life.
            </p>

            <div class="contact__info">
              @for (info of contactInfo; track info.label) {
                <div class="contact__info-card">
                  <span class="contact__info-icon">{{ info.icon }}</span>
                  <div>
                    <div class="contact__info-label">{{ info.label }}</div>
                    <div class="contact__info-value">{{ info.value }}</div>
                  </div>
                </div>
              }
            </div>

            <div class="contact__social">
              @for (social of socials; track social.label) {
                <a [href]="social.url" target="_blank" rel="noopener" class="contact__social-link" [title]="social.label">
                  <span>{{ social.icon }}</span>
                </a>
              }
            </div>
          </div>

          <div [appScrollReveal]="150" class="contact__form-wrap">
            <div class="contact__form-card">
              <h4 class="contact__form-title">Send a message</h4>
              <form class="contact__form">
                <div class="contact__form-row">
                  <div class="contact__form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div class="contact__form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your&#64;email.com" />
                  </div>
                </div>
                <div class="contact__form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Project discussion" />
                </div>
                <div class="contact__form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" class="contact__form-submit">
                  Send Message
                  <span class="contact__form-submit-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .contact {
      position: relative;
      @include section-padding;
      background: rgba($surface-light, 0.2);

      &__divider {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba($accent, 0.25), transparent);
      }

      &__glow {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;

        &--left {
          bottom: 0;
          left: 25%;
          width: 16rem;
          height: 16rem;
          background: rgba($primary, 0.08);
          filter: blur(120px);
          @include sm { width: 24rem; height: 24rem; }
        }
        &--right {
          top: 25%;
          right: 25%;
          width: 12rem;
          height: 12rem;
          background: rgba($accent, 0.06);
          filter: blur(100px);
          @include sm { width: 18rem; height: 18rem; }
        }
      }

      &__container {
        position: relative;
        @include container;
      }

      &__header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
        @include sm { margin-bottom: 1.5rem; }

        &-num { color: $primary-light; font-family: $font-mono; font-size: 0.875rem; font-weight: 500; @include sm { font-size: 1rem; } }
        &-title { font-size: 1.5rem; font-weight: 700; color: $text-primary; @include sm { font-size: 1.875rem; } }
        &-line { display: none; flex: 1; height: 1px; background: rgba($surface-lighter, 0.5); margin-left: 1rem; @include sm { display: block; } }
      }

      &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
        @include lg { grid-template-columns: 1fr 1fr; gap: 4rem; }
      }

      &__cta {
        &-heading {
          font-size: 1.875rem;
          font-weight: 700;
          line-height: 1.2;
          color: $text-primary;
          margin-bottom: 1.5rem;
          @include sm { font-size: 2.25rem; }
          @include lg { font-size: 3rem; }

          .gradient {
            @include gradient-text($primary-light, $accent-light);
          }
        }

        &-text {
          color: $text-secondary;
          font-size: 1rem;
          line-height: 1.7;
          max-width: 28rem;
          margin-bottom: 2rem;
          @include sm { font-size: 1.125rem; }
        }
      }

      &__info {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 1.5rem;

        &-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: $radius-lg;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all $transition-base;
          &:hover {
            border-color: rgba($primary, 0.2);
            background: rgba($primary, 0.04);
            transform: translateX(4px);
          }
        }

        &-icon { font-size: 1.25rem; flex-shrink: 0; }
        &-label { font-size: 0.7rem; color: $text-muted; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500; }
        &-value { font-size: 0.875rem; color: $text-primary; font-weight: 500; margin-top: 0.125rem; }
      }

      &__social {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &-link {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: $radius-lg;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: $text-muted;
          font-size: 1.125rem;
          transition: all $transition-base;
          @include sm { width: 2.75rem; height: 2.75rem; }

          &:hover {
            border-color: rgba($primary, 0.3);
            color: $primary-light;
            background: rgba($primary, 0.08);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba($primary, 0.1);
          }
        }
      }

      &__form-wrap { position: relative; }

      &__form-card {
        padding: 1.5rem;
        border-radius: $radius-2xl;
        background: rgba($surface-light, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(12px);
        transition: border-color $transition-slow, box-shadow $transition-slow;
        @include sm { padding: 2rem; }

        &:hover {
          border-color: rgba($primary, 0.15);
          box-shadow: 0 20px 60px rgba($primary, 0.05);
        }
      }

      &__form-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: $text-primary;
        margin-bottom: 1.5rem;
        @include sm { font-size: 1.25rem; }
      }

      &__form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @include sm { gap: 1.25rem; }

        &-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          @include sm { grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        }

        &-group {
          label {
            display: block;
            font-size: 0.7rem;
            font-weight: 500;
            color: $text-muted;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 0.5rem;
            transition: color $transition-fast;
          }

          &:focus-within label { color: $primary-light; }

          input, textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: $radius-md;
            color: $text-primary;
            font-size: 0.875rem;
            outline: none;
            transition: all $transition-base;
            resize: vertical;

            &::placeholder { color: $text-muted; }
            &:focus {
              border-color: rgba($primary, 0.5);
              background: rgba($primary, 0.04);
              box-shadow: 0 0 0 3px rgba($primary, 0.08), 0 0 20px rgba($primary, 0.06);
            }
          }
        }

        &-submit {
          @include btn-primary;
          width: 100%;
          padding: 0.875rem 1.5rem;
          font-size: 0.9375rem;

          &-arrow {
            margin-left: 0.5rem;
            display: inline-block;
            transition: transform $transition-fast;
          }

          &:hover .contact__form-submit-arrow {
            transform: translateX(6px);
          }
        }
      }
    }
  `]
})
export class ContactComponent {
  contactInfo = [
    { icon: '📧', label: 'Email', value: 'sumitk.banik22@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Available Worldwide (Remote)' },
    { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
  ];

  socials = [
    { icon: '🐙', label: 'GitHub', url: '#' },
    { icon: '💼', label: 'LinkedIn', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' },
  ];
}
