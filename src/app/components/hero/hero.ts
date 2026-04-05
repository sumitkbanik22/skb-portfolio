import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="hero__bg">
        <div class="hero__bg-gradient"></div>
        <div class="hero__bg-orb hero__bg-orb--1"></div>
        <div class="hero__bg-orb hero__bg-orb--2"></div>
        <div class="hero__bg-orb hero__bg-orb--3"></div>
        <div class="hero__bg-grid"></div>
        <div class="hero__bg-noise"></div>
      </div>

      <canvas #particlesCanvas class="hero__particles"></canvas>

      <div class="hero__content">
        <div class="hero__badge fade-in">
          <span class="hero__badge-dot">
            <span class="hero__badge-ping"></span>
            <span class="hero__badge-solid"></span>
          </span>
          <span class="hero__badge-text">Available for freelance work</span>
        </div>

        <h1 class="hero__title fade-in-up">
          <span>I build </span>
          <span class="hero__title-gradient">exceptional</span>
          <br />
          <span> digital experiences</span>
        </h1>

        <p class="hero__subtitle fade-in-up delay-1">
          Hi, I'm <strong>Sumit K Banik</strong> — a Full-Stack Developer who crafts
          <span class="highlight-primary">Angular</span>,
          <span class="highlight-accent">Node.js</span> &amp;
          <span class="highlight-primary">MongoDB</span>
          applications that users love and businesses rely on.
        </p>

        <div class="hero__cta fade-in-up delay-2">
          <a href="#projects" class="hero__cta-primary">
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </a>
          <a href="#contact" class="hero__cta-outline">Get in Touch</a>
        </div>

        <div class="hero__tech fade-in-up delay-3">
          <span class="hero__tech-label">Tech Stack</span>
          <div class="hero__tech-row">
            @for (tech of techStack; track tech.name) {
              <div class="hero__tech-item" [title]="tech.name">
                <span class="hero__tech-icon">{{ tech.icon }}</span>
                <span class="hero__tech-name">{{ tech.name }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .hero {
      position: relative;
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      &__bg {
        position: absolute;
        inset: 0;

        &-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba($primary, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba($accent, 0.08), transparent),
            radial-gradient(ellipse 60% 40% at 20% 80%, rgba($primary, 0.06), transparent),
            $surface;
        }

        &-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);

          &--1 {
            top: 10%;
            left: 15%;
            width: 20rem;
            height: 20rem;
            background: rgba($primary, 0.12);
            animation: orbFloat1 8s ease-in-out infinite;
            @include sm { width: 30rem; height: 30rem; }
          }

          &--2 {
            bottom: 10%;
            right: 10%;
            width: 18rem;
            height: 18rem;
            background: rgba($accent, 0.1);
            animation: orbFloat2 10s ease-in-out infinite;
            @include sm { width: 26rem; height: 26rem; }
          }

          &--3 {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 14rem;
            height: 14rem;
            background: rgba($primary-light, 0.06);
            animation: orbFloat3 12s ease-in-out infinite;
            @include sm { width: 20rem; height: 20rem; }
          }
        }

        &-grid {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image:
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
        }

        &-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
          pointer-events: none;
        }
      }

      &__particles {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }

      &__content {
        position: relative;
        z-index: 10;
        @include container;
        padding-block: 6rem 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        @include sm { padding-block: 8rem 4rem; }
      }

      &__badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.375rem 0.75rem;
        border-radius: $radius-full;
        border: 1px solid rgba($green, 0.25);
        background: rgba($green, 0.06);
        margin-bottom: 1.5rem;
        backdrop-filter: blur(8px);
        @include sm { padding: 0.5rem 1rem; margin-bottom: 2rem; }

        &-dot {
          position: relative;
          display: flex;
          width: 0.5rem;
          height: 0.5rem;
        }

        &-ping {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: $green-light;
          opacity: 0.75;
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        &-solid {
          position: relative;
          display: inline-flex;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: $green;
        }

        &-text {
          font-size: 0.75rem;
          color: $green-light;
          font-weight: 500;
          @include sm { font-size: 0.875rem; }
        }
      }

      &__title {
        font-size: 2.25rem;
        font-weight: 800;
        line-height: 1.08;
        letter-spacing: -0.03em;
        color: $text-primary;
        @include sm { font-size: 3rem; }
        @include md { font-size: 3.75rem; }
        @include lg { font-size: 4.5rem; }

        &-gradient {
          @include gradient-text($primary-light, $accent-light);
          position: relative;
        }
      }

      &__subtitle {
        margin-top: 1.25rem;
        font-size: 1rem;
        color: $text-secondary;
        max-width: 38rem;
        line-height: 1.75;
        @include sm { margin-top: 1.5rem; font-size: 1.125rem; }
        @include md { font-size: 1.2rem; }

        strong { color: $text-primary; }
        .highlight-primary { color: $primary-light; font-weight: 600; }
        .highlight-accent { color: $accent-light; font-weight: 600; }
      }

      &__cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        margin-top: 2rem;
        width: 100%;
        @include sm { flex-direction: row; justify-content: center; gap: 1rem; margin-top: 2.5rem; width: auto; }

        &-primary {
          @include btn-primary;
          width: 100%;
          padding: 0.875rem 1.75rem;
          font-size: 0.9rem;
          @include sm { width: auto; padding: 1rem 2.25rem; font-size: 1rem; }
          svg { margin-left: 0.5rem; transition: transform $transition-fast; }
          &:hover svg { transform: translateY(2px); }
        }

        &-outline {
          @include btn-outline;
          width: 100%;
          padding: 0.875rem 1.75rem;
          font-size: 0.9rem;
          @include sm { width: auto; padding: 1rem 2.25rem; font-size: 1rem; }
        }
      }

      &__tech {
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        @include sm { margin-top: 4.5rem; }

        &-label {
          font-size: 0.65rem;
          color: $text-muted;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 500;
        }

        &-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          @include sm { gap: 1rem; }
        }

        &-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: $radius-lg;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all $transition-base;
          cursor: default;
          @include sm { width: 3.25rem; height: 3.25rem; }

          &:hover {
            border-color: rgba($primary-light, 0.35);
            background: rgba($primary, 0.08);
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba($primary, 0.12);
            .hero__tech-name { opacity: 1; transform: translateY(0); }
          }
        }

        &-icon {
          font-size: 1.125rem;
          @include sm { font-size: 1.375rem; }
        }

        &-name {
          position: absolute;
          bottom: -1.75rem;
          font-size: 0.65rem;
          color: $text-muted;
          opacity: 0;
          transform: translateY(-4px);
          transition: all $transition-fast;
          white-space: nowrap;
          font-weight: 500;
        }
      }
    }

    // Animations
    @keyframes orbFloat1 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -40px) scale(1.05); }
      66% { transform: translate(-20px, 20px) scale(0.95); }
    }
    @keyframes orbFloat2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(-40px, 30px) scale(1.08); }
      66% { transform: translate(20px, -30px) scale(0.92); }
    }
    @keyframes orbFloat3 {
      0%, 100% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.15); }
    }
    @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }

    .fade-in { animation: fadeIn 0.8s ease-out both; }
    .fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .delay-1 { animation-delay: 0.2s; }
    .delay-2 { animation-delay: 0.4s; }
    .delay-3 { animation-delay: 0.6s; }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('particlesCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private animationId = 0;
  private particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

  techStack = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '⚡' },
    { name: 'SCSS', icon: '🎨' },
  ];

  ngOnInit() {
    this.initParticles();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
  }

  private initParticles() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      o: Math.random() * 0.4 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.o})`;
        ctx.fill();
      }
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }
}
