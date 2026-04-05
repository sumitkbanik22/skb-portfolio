import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="about" class="about">
      <div class="about__divider"></div>
      <div class="about__container">
        <div appScrollReveal class="about__header">
          <span class="about__header-num">01.</span>
          <h2 class="about__header-title">About Me</h2>
          <div class="about__header-line"></div>
        </div>

        <div class="about__grid">
          <div [appScrollReveal]="100" class="about__text">
            <p>
              I'm <strong>Sumit K Banik</strong>, a passionate <strong>Full-Stack Developer</strong> who thrives on building
              robust, scalable, and user-centric web applications. My approach combines clean architecture with modern design
              principles to deliver solutions that not only work flawlessly but also delight users.
            </p>
            <p>
              With deep expertise in the <span class="hl-primary">Angular</span> ecosystem
              and <span class="hl-accent">Node.js</span> backends, I specialize in building
              full-stack applications — from interactive dashboards and admin portals to community platforms and
              real-time systems.
            </p>
            <p>
              I've delivered production-quality projects including dispute resolution platforms, space technology websites,
              and complex admin dashboards — each with responsive design, secure authentication, and polished UX.
            </p>

            <div class="about__stats">
              @for (stat of stats; track stat.label) {
                <div class="about__stat">
                  <div class="about__stat-value">{{ stat.value }}</div>
                  <div class="about__stat-label">{{ stat.label }}</div>
                </div>
              }
            </div>
          </div>

          <div [appScrollReveal]="200" class="about__card-wrap">
            <div class="about__card">
              <div class="about__card-glow"></div>
              <div class="about__card-avatar">&lt;/&gt;</div>
              <div class="about__card-info">
                <h3>Full-Stack Developer</h3>
                <p>Angular &bull; Node.js &bull; MongoDB</p>
              </div>
              <div class="about__services">
                @for (item of services; track item.title) {
                  <div class="about__service">
                    <span class="about__service-icon">{{ item.icon }}</span>
                    <div>
                      <div class="about__service-title">{{ item.title }}</div>
                      <div class="about__service-desc">{{ item.desc }}</div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .about {
      position: relative;
      @include section-padding;
      overflow: hidden;

      &__divider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba($primary, 0.25), transparent);
      }

      &__container { @include container; }

      &__header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 3rem;
        @include sm { margin-bottom: 4rem; }

        &-num { color: $primary-light; font-family: $font-mono; font-size: 0.875rem; font-weight: 500; @include sm { font-size: 1rem; } }
        &-title { font-size: 1.5rem; font-weight: 700; color: $text-primary; @include sm { font-size: 1.875rem; } }
        &-line { display: none; flex: 1; height: 1px; background: rgba($surface-lighter, 0.5); margin-left: 1rem; @include sm { display: block; } }
      }

      &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
        align-items: start;
        @include lg { grid-template-columns: 3fr 2fr; gap: 4rem; }
      }

      &__text {
        p {
          color: $text-secondary;
          line-height: 1.75;
          font-size: 1rem;
          margin-bottom: 1.25rem;
          @include sm { font-size: 1.125rem; }

          strong { color: $text-primary; font-weight: 600; }
          .hl-primary { color: $primary-light; font-weight: 600; }
          .hl-accent { color: $accent-light; font-weight: 600; }
        }
      }

      &__stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        padding-top: 1.5rem;
        @include sm { grid-template-columns: repeat(3, 1fr); }
      }

      &__stat {
        padding: 1rem;
        border-radius: $radius-lg;
        background: rgba($surface-light, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.06);
        transition: all $transition-base;
        &:hover {
          border-color: rgba($primary, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba($primary, 0.08);
        }

        &-value {
          font-size: 1.5rem;
          font-weight: 700;
          @include gradient-text;
          @include sm { font-size: 1.875rem; }
        }
        &-label { font-size: 0.75rem; color: $text-muted; margin-top: 0.25rem; @include sm { font-size: 0.875rem; } }
      }

      &__card-wrap { position: relative; }

      &__card {
        position: relative;
        padding: 1.5rem;
        border-radius: $radius-2xl;
        background: rgba($surface-light, 0.5);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.06);
        transition: border-color $transition-slow, box-shadow $transition-slow;
        @include sm { padding: 2rem; }

        &:hover {
          border-color: rgba($primary, 0.25);
          box-shadow: 0 20px 60px rgba($primary, 0.08);
          .about__card-glow { opacity: 1; }
        }

        &-glow {
          position: absolute;
          inset: -1px;
          border-radius: $radius-2xl;
          background: linear-gradient(135deg, rgba($primary, 0.15), rgba($accent, 0.15));
          opacity: 0;
          transition: opacity $transition-slow;
          filter: blur(24px);
          z-index: -1;
        }

        &-avatar {
          width: 5rem;
          height: 5rem;
          border-radius: $radius-2xl;
          background: linear-gradient(135deg, $primary, $accent-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.875rem;
          color: white;
          font-weight: 700;
          margin: 0 auto 1.5rem;
          box-shadow: 0 8px 32px rgba($primary, 0.25);
          transition: all $transition-base;
          @include sm { width: 6rem; height: 6rem; font-size: 2.25rem; }
        }

        &:hover &-avatar {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba($primary, 0.35);
        }

        &-info {
          text-align: center;
          margin-bottom: 1.5rem;
          h3 { font-size: 1.25rem; font-weight: 700; color: $text-primary; }
          p { font-size: 0.875rem; color: $text-muted; margin-top: 0.25rem; }
        }
      }

      &__services { display: flex; flex-direction: column; gap: 0.75rem; }

      &__service {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 0.75rem;
        border-radius: $radius-sm;
        background: rgba(255,255,255,0.02);
        border: 1px solid transparent;
        transition: all $transition-fast;
        &:hover {
          background: rgba($primary, 0.04);
          border-color: rgba($primary, 0.1);
        }

        &-icon { font-size: 1.125rem; margin-top: 0.125rem; flex-shrink: 0; }
        &-title { font-size: 0.875rem; font-weight: 500; color: $text-primary; }
        &-desc { font-size: 0.75rem; color: $text-muted; margin-top: 0.125rem; }
      }
    }
  `]
})
export class AboutComponent {
  stats = [
    { value: '2+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24h', label: 'Avg. Response Time' },
  ];

  services = [
    { icon: '🎯', title: 'Frontend Development', desc: 'Angular SPAs with responsive UI' },
    { icon: '⚙️', title: 'Backend Development', desc: 'RESTful APIs with Node.js & Express' },
    { icon: '🗄️', title: 'Database Design', desc: 'MongoDB schemas & data modeling' },
    { icon: '🚀', title: 'Full-Stack Solutions', desc: 'End-to-end application delivery' },
  ];
}
