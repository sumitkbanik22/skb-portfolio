import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="projects" class="projects">
      <div class="projects__divider"></div>
      <div class="projects__container">
        <div appScrollReveal class="projects__header">
          <span class="projects__header-num">02.</span>
          <h2 class="projects__header-title">Featured Projects</h2>
          <div class="projects__header-line"></div>
        </div>
        <p appScrollReveal class="projects__subtitle">
          Real-world applications I've designed &amp; developed end-to-end, delivering production-ready solutions.
        </p>

        <div class="projects__list">
          @for (project of projects; track project.title; let i = $index) {
            <div [appScrollReveal]="i * 150" class="projects__card" [class.projects__card--reverse]="i % 2 !== 0">
              <div class="projects__card-inner">
                <div class="projects__card-glow" [style.background]="'radial-gradient(600px circle at 50% 50%, ' + project.glowColor + ', transparent 40%)'"></div>
                <div class="projects__card-body">
                  <div class="projects__card-content">
                    <div class="projects__card-meta">
                      <span class="projects__card-label">{{ project.label }}</span>
                      <span class="projects__card-type">{{ project.type }}</span>
                    </div>
                    <h3 class="projects__card-title">{{ project.title }}</h3>
                    <p class="projects__card-desc">{{ project.description }}</p>

                    <div class="projects__card-features">
                      @for (feat of project.features; track feat) {
                        <div class="projects__card-feature">
                          <span class="projects__card-feature-check">✓</span>
                          <span>{{ feat }}</span>
                        </div>
                      }
                    </div>

                    <div class="projects__card-tags">
                      @for (tag of project.tech; track tag) {
                        <span class="projects__card-tag">{{ tag }}</span>
                      }
                    </div>

                    <div class="projects__card-links">
                      <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer" class="projects__card-link">
                        <span class="projects__card-link-icon">↗</span>
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <div class="projects__card-preview">
                    <div class="projects__card-browser">
                      <div class="projects__card-browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div class="projects__card-browser-url">{{ project.url }}</div>
                    </div>
                    <div class="projects__card-screen">
                      <img [src]="project.screenshot" [alt]="project.title + ' homepage screenshot'" class="projects__card-screen-img" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .projects {
      position: relative;
      @include section-padding;
      background: rgba($surface-light, 0.15);

      &__divider {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba($accent, 0.25), transparent);
      }

      &__container { @include container; }

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

      &__subtitle {
        color: $text-secondary;
        font-size: 1rem;
        margin-bottom: 2.5rem;
        max-width: 40rem;
        @include sm { font-size: 1.125rem; margin-bottom: 3.5rem; }
      }

      &__list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        @include sm { gap: 3rem; }
      }

      &__card {
        &-inner {
          position: relative;
          border-radius: $radius-2xl;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba($surface-light, 0.5);
          backdrop-filter: blur(8px);
          overflow: hidden;
          transition: border-color $transition-slow, box-shadow $transition-slow, transform $transition-slow;
          &:hover {
            border-color: rgba($primary, 0.25);
            box-shadow: 0 20px 60px rgba($primary, 0.08), 0 0 0 1px rgba($primary, 0.1);
            transform: translateY(-4px);
            .projects__card-glow { opacity: 1; }
            .projects__card-screen-img { transform: scale(1.03); }
          }
        }

        &-glow {
          position: absolute;
          inset: -1px;
          border-radius: $radius-2xl;
          opacity: 0;
          transition: opacity $transition-slow;
          z-index: 0;
          pointer-events: none;
        }

        &-body {
          position: relative;
          z-index: 1;
          padding: 1.25rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: center;
          @include sm { padding: 2rem; gap: 2rem; }
          @include lg { grid-template-columns: 1fr 1fr; gap: 2.5rem; padding: 2.5rem; }
        }

        &--reverse .projects__card-body {
          @include lg { direction: rtl; > * { direction: ltr; } }
        }

        &-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        &-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: $primary-light;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        &-type {
          font-size: 0.65rem;
          color: $text-muted;
          padding: 0.2rem 0.6rem;
          border-radius: $radius-full;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        &-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: $text-primary;
          margin-bottom: 0.75rem;
          @include sm { font-size: 1.625rem; }
        }

        &-desc {
          color: $text-secondary;
          font-size: 0.875rem;
          line-height: 1.7;
          margin-bottom: 1.25rem;
          @include sm { font-size: 1rem; }
        }

        &-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          @include sm { grid-template-columns: 1fr 1fr; }
        }

        &-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: $text-secondary;
          &-check { color: $green; font-weight: 700; font-size: 0.75rem; }
        }

        &-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        &-tag {
          font-size: 0.7rem;
          padding: 0.3rem 0.65rem;
          border-radius: $radius-full;
          background: rgba($primary, 0.08);
          color: $primary-light;
          font-weight: 500;
          font-family: $font-mono;
          border: 1px solid rgba($primary, 0.1);
          transition: all $transition-fast;
          &:hover {
            background: rgba($primary, 0.15);
            border-color: rgba($primary, 0.25);
          }
        }

        &-links {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        &-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: $primary-light;
          text-decoration: none;
          padding: 0.5rem 1.1rem;
          border-radius: $radius-full;
          border: 1px solid rgba($primary, 0.3);
          background: rgba($primary, 0.08);
          transition: all $transition-base;
          &:hover {
            background: rgba($primary, 0.18);
            border-color: rgba($primary, 0.5);
            transform: translateY(-2px);
            box-shadow: 0 0 20px rgba($primary, 0.15);
          }
          &-icon { font-size: 0.95rem; transition: transform $transition-fast; }
          &:hover &-icon { transform: translate(2px, -2px); }
        }

        // Browser preview
        &-preview {
          border-radius: $radius-lg;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: $surface;
          position: relative;

          // Shine sweep on hover
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.04), transparent);
            z-index: 2;
            pointer-events: none;
            transition: none;
          }
          .projects__card-inner:hover &::after {
            animation: shine 0.8s ease-out forwards;
          }
        }

        &-browser {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.75rem;
          background: rgba($surface-light, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);

          &-dots {
            display: flex;
            gap: 0.375rem;
            span {
              width: 0.5rem;
              height: 0.5rem;
              border-radius: 50%;
              &:nth-child(1) { background: #ef4444; }
              &:nth-child(2) { background: #f59e0b; }
              &:nth-child(3) { background: #10b981; }
            }
          }

          &-url {
            flex: 1;
            font-size: 0.65rem;
            color: $text-muted;
            font-family: $font-mono;
            padding: 0.25rem 0.5rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: $radius-sm;
          }
        }

        &-screen {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: $surface;

          &-img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: top;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }
        }
      }
    }

    @keyframes shine {
      from { left: -100%; }
      to { left: 150%; }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      label: 'Featured Project',
      type: 'Full-Stack',
      title: 'Samdoot Portal',
      description: 'An institutional mediation & dispute resolution platform built for SGT University. Features public dispute submission, admin case management dashboard, and complete case lifecycle tracking with role-based access.',
      features: [
        'Public dispute submission forms',
        'Admin dashboard & case management',
        'JWT authentication & role-based access',
        'File upload/download with Multer',
        'Password reset via email',
        'Responsive university-themed UI',
      ],
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap 5', 'Multer'],
      url: 'samdoot-portal.vercel.app',
      liveUrl: 'https://samdoot-portal.vercel.app/',
      screenshot: '/projects/samdoot-portal.png',
      glowColor: 'rgba(99, 102, 241, 0.08)',
      screenBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(30, 41, 59, 0.8))',
    },
    {
      label: 'Featured Project',
      type: 'Full-Stack',
      title: 'The Quantum Veda',
      description: 'A futuristic space technology community website with a cosmic dark theme, animated star backgrounds, and glassmorphism UI components. Includes project showcases, team profiles, and event management.',
      features: [
        'Animated star field & cosmic theme',
        'Glassmorphism UI components',
        'Community & event management',
        'Contact forms with Nodemailer',
        'Newsletter subscription system',
        'Mobile-first responsive SCSS',
      ],
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB', 'SCSS', 'Canvas API', 'Nodemailer'],
      url: 'quantum-veda-indol.vercel.app',
      liveUrl: 'https://quantum-veda-indol.vercel.app/',
      screenshot: '/projects/quantum-veda.png',
      glowColor: 'rgba(6, 182, 212, 0.08)',
      screenBg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(30, 41, 59, 0.8))',
    },
  ];
}
