import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="skills" class="skills">
      <div class="skills__divider"></div>
      <div class="skills__container">
        <div appScrollReveal class="skills__header">
          <span class="skills__header-num">03.</span>
          <h2 class="skills__header-title">Skills & Technologies</h2>
          <div class="skills__header-line"></div>
        </div>
        <p appScrollReveal class="skills__subtitle">
          Technologies I work with daily to build modern, performant web applications.
        </p>

        <div class="skills__grid">
          @for (category of skillCategories; track category.title; let i = $index) {
            <div [appScrollReveal]="i * 100" class="skills__card">
              <div class="skills__card-header">
                <div class="skills__card-icon" [style.background]="category.bgColor">
                  {{ category.icon }}
                </div>
                <div>
                  <h3 class="skills__card-title">{{ category.title }}</h3>
                  <p class="skills__card-subtitle">{{ category.subtitle }}</p>
                </div>
              </div>
              <div class="skills__card-list">
                @for (skill of category.skills; track skill.name) {
                  <div class="skills__skill">
                    <div class="skills__skill-info">
                      <span class="skills__skill-name">{{ skill.name }}</span>
                      <span class="skills__skill-level">{{ skill.level }}</span>
                    </div>
                    <div class="skills__skill-bar">
                      <div class="skills__skill-fill" [style.width]="skill.percent + '%'" [style.background]="category.barColor"></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <div [appScrollReveal]="300" class="skills__other">
          <h4 class="skills__other-title">Other tools & technologies I've worked with</h4>
          <div class="skills__other-tags">
            @for (tool of otherTools; track tool) {
              <span class="skills__other-tag">{{ tool }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .skills {
      position: relative;
      @include section-padding;
      background: rgba($surface-light, 0.2);

      &__divider {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba($primary, 0.25), transparent);
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

      &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        @include sm { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @include lg { grid-template-columns: 1fr 1fr 1fr; }
      }

      &__card {
        @include glass-card;
        padding: 1.25rem;
        @include sm { padding: 1.5rem; }
        &:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba($primary, 0.06);
        }

        &-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        &-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: $radius-lg;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
          transition: transform $transition-base;
        }

        &:hover &-icon { transform: scale(1.1); }

        &-title { font-size: 1rem; font-weight: 600; color: $text-primary; @include sm { font-size: 1.125rem; } }
        &-subtitle { font-size: 0.7rem; color: $text-muted; }

        &-list { display: flex; flex-direction: column; gap: 0.875rem; }
      }

      &__skill {
        &-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.375rem;
        }

        &-name { font-size: 0.8rem; color: $text-secondary; font-weight: 500; }
        &-level { font-size: 0.65rem; color: $text-muted; font-family: $font-mono; }

        &-bar {
          width: 100%;
          height: 4px;
          background: rgba($surface-lighter, 0.4);
          border-radius: 2px;
          overflow: hidden;
        }

        &-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          &::after {
            content: '';
            position: absolute;
            right: 0;
            top: -1px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: inherit;
            filter: blur(3px);
          }
        }
      }

      &__other {
        margin-top: 2.5rem;
        padding: 1.5rem;
        border-radius: $radius-2xl;
        background: rgba($surface-light, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.06);
        @include sm { margin-top: 3.5rem; padding: 2rem; }

        &-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: $text-secondary;
          margin-bottom: 1rem;
          @include sm { font-size: 1rem; }
        }

        &-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        &-tag {
          font-size: 0.75rem;
          padding: 0.35rem 0.75rem;
          border-radius: $radius-full;
          background: rgba(255, 255, 255, 0.04);
          color: $text-secondary;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all $transition-fast;
          &:hover {
            border-color: rgba($primary, 0.3);
            color: $primary-light;
            background: rgba($primary, 0.06);
            transform: translateY(-1px);
          }
        }
      }
    }
  `]
})
export class SkillsComponent {
  skillCategories = [
    {
      icon: '🎨',
      title: 'Frontend',
      subtitle: 'UI & Interaction',
      bgColor: 'rgba(99, 102, 241, 0.15)',
      barColor: 'linear-gradient(90deg, #6366f1, #818cf8)',
      skills: [
        { name: 'Angular', level: 'Advanced', percent: 92 },
        { name: 'TypeScript', level: 'Advanced', percent: 90 },
        { name: 'HTML / SCSS', level: 'Advanced', percent: 95 },
        { name: 'Bootstrap', level: 'Proficient', percent: 85 },
      ],
    },
    {
      icon: '⚙️',
      title: 'Backend',
      subtitle: 'Server & APIs',
      bgColor: 'rgba(6, 182, 212, 0.15)',
      barColor: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
      skills: [
        { name: 'Node.js', level: 'Advanced', percent: 90 },
        { name: 'Express.js', level: 'Advanced', percent: 88 },
        { name: 'REST APIs', level: 'Advanced', percent: 92 },
        { name: 'JWT Auth', level: 'Proficient', percent: 85 },
      ],
    },
    {
      icon: '🗄️',
      title: 'Database & Tools',
      subtitle: 'Data & DevOps',
      bgColor: 'rgba(34, 197, 94, 0.15)',
      barColor: 'linear-gradient(90deg, #22c55e, #4ade80)',
      skills: [
        { name: 'MongoDB', level: 'Advanced', percent: 88 },
        { name: 'Mongoose', level: 'Proficient', percent: 85 },
        { name: 'Git / GitHub', level: 'Advanced', percent: 90 },
        { name: 'Postman', level: 'Proficient', percent: 82 },
      ],
    },
  ];

  otherTools = [
    'Multer', 'Nodemailer', 'Canvas API', 'RxJS', 'Angular CLI',
    'NPM', 'VS Code', 'Figma', 'Vercel', 'Render', 'Linux',
    'Chrome DevTools', 'Responsive Design', 'Agile/Scrum',
  ];
}
