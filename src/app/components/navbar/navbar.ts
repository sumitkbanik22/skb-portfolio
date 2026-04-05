import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar" [class.scrolled]="scrolled()">
      <div class="navbar__inner">
        <a href="#hero" class="navbar__logo">
          <div class="navbar__logo-icon">SKB</div>
          <span class="navbar__logo-text">Sumit K Banik<span class="dot"></span></span>
        </a>

        <div class="navbar__links">
          @for (item of navItems; track item.label) {
            <a [href]="item.href" class="navbar__link">{{ item.label }}</a>
          }
          <a href="#contact" class="navbar__cta">Let's Talk</a>
        </div>

        <button
          class="navbar__hamburger"
          (click)="mobileOpen.set(!mobileOpen())"
          [attr.aria-expanded]="mobileOpen()"
          aria-label="Toggle menu"
        >
          <span class="bar" [class.open]="mobileOpen()"></span>
          <span class="bar" [class.open]="mobileOpen()"></span>
          <span class="bar" [class.open]="mobileOpen()"></span>
        </button>
      </div>

      @if (mobileOpen()) {
        <div class="navbar__mobile">
          @for (item of navItems; track item.label) {
            <a [href]="item.href" class="navbar__mobile-link" (click)="mobileOpen.set(false)">{{ item.label }}</a>
          }
          <a href="#contact" class="navbar__mobile-cta" (click)="mobileOpen.set(false)">Let's Talk</a>
        </div>
      }
    </nav>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      transition: all $transition-slow;

      &.scrolled {
        background: rgba($surface, 0.7);
        backdrop-filter: blur(24px) saturate(1.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }

      &__inner {
        @include container;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 4rem;
        @include sm { height: 5rem; }
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
          @include sm { padding: 0.4rem 0.6rem; font-size: 0.8rem; }
        }

        &-text {
          color: $text-primary;
          font-weight: 700;
          font-size: 1.125rem;
          letter-spacing: 0.02em;
          .dot { color: $primary-light; }
        }

        &:hover .navbar__logo-icon {
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 4px 16px rgba($primary, 0.3);
        }
      }

      &__links {
        display: none;
        align-items: center;
        gap: 0.25rem;
        @include md { display: flex; }
      }

      &__link {
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
        color: $text-secondary;
        border-radius: $radius-sm;
        transition: all $transition-fast;
        position: relative;
        @include lg { padding: 0.5rem 1rem; }
        &:hover {
          color: $text-primary;
          background: rgba(255, 255, 255, 0.05);
        }
      }

      &__cta {
        @include btn-primary;
        margin-left: 0.5rem;
        padding: 0.5rem 1.25rem;
        font-size: 0.875rem;
      }

      &__hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 2.5rem;
        height: 2.5rem;
        background: none;
        border: none;
        border-radius: $radius-sm;
        cursor: pointer;
        transition: background $transition-fast;
        @include md { display: none; }
        &:hover { background: rgba(255, 255, 255, 0.05); }

        .bar {
          display: block;
          width: 1.25rem;
          height: 2px;
          background: $text-primary;
          border-radius: 2px;
          transition: all $transition-base;

          &.open:nth-child(1) { transform: rotate(45deg) translate(2.5px, 2.5px); }
          &.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
          &.open:nth-child(3) { transform: rotate(-45deg) translate(2.5px, -2.5px); }
        }
      }

      &__mobile {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 1rem;
        background: rgba($surface, 0.95);
        backdrop-filter: blur(24px);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        @include md { display: none; }
      }

      &__mobile-link {
        padding: 0.75rem 1rem;
        color: $text-secondary;
        border-radius: $radius-sm;
        font-size: 1rem;
        transition: all $transition-fast;
        &:hover {
          color: $text-primary;
          background: rgba(255, 255, 255, 0.05);
        }
      }

      &__mobile-cta {
        margin-top: 0.5rem;
        padding: 0.75rem 1rem;
        text-align: center;
        color: white;
        font-weight: 600;
        background: linear-gradient(135deg, $primary, $accent-dark);
        border-radius: $radius-lg;
        transition: all $transition-base;
        &:hover {
          box-shadow: 0 0 20px rgba($primary, 0.3);
        }
      }
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }
}
