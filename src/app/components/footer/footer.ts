import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__top">
          <a href="#hero" class="footer__logo">
            <div class="footer__logo-icon">SKB</div>
            <span class="footer__logo-text">Sumit K Banik<span class="dot"></span></span>
          </a>
          <nav class="footer__nav">
            @for (link of links; track link.label) {
              <a [href]="link.href" class="footer__nav-link">{{ link.label }}</a>
            }
          </nav>
        </div>
        <div class="footer__divider"></div>
        <div class="footer__bottom">
          <p class="footer__copy">&copy; {{ year }} Sumit K Banik. All rights reserved.</p>
          <p class="footer__built">Built with Angular &bull; Custom SCSS</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .footer {
      position: relative;
      padding-block: 2.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba($surface, 0.5);
      @include sm { padding-block: 3rem; }

      &__container { @include container; }

      &__top {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        @include sm { flex-direction: row; justify-content: space-between; }
      }

      &__logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &-icon {
          padding: 0.35rem 0.5rem;
          border-radius: $radius-sm;
          background: linear-gradient(135deg, $primary, $accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          line-height: 1;
          transition: all $transition-base;
        }

        &-text {
          color: $text-primary;
          font-weight: 700;
          font-size: 1.125rem;
          .dot { color: $primary-light; }
        }

        &:hover .footer__logo-icon {
          transform: scale(1.1);
          box-shadow: 0 4px 16px rgba($primary, 0.25);
        }
      }

      &__nav {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: center;
        @include sm { gap: 0.25rem; }

        &-link {
          padding: 0.375rem 0.75rem;
          font-size: 0.8rem;
          color: $text-muted;
          border-radius: $radius-sm;
          transition: all $transition-fast;
          &:hover {
            color: $text-primary;
            background: rgba(255, 255, 255, 0.05);
          }
        }
      }

      &__divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba($primary, 0.15), transparent);
        margin-block: 1.5rem;
        @include sm { margin-block: 2rem; }
      }

      &__bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        @include sm { flex-direction: row; justify-content: space-between; }
      }

      &__copy { font-size: 0.8rem; color: $text-muted; }
      &__built { font-size: 0.75rem; color: rgba($text-muted, 0.6); }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
  links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];
}
