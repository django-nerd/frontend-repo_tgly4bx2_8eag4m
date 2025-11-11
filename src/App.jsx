import React from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Star, Shield, Zap, Crown, Rocket, LineChart, Timer, Settings } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Section = ({ children, className = '' }) => (
  <section className={`w-full relative ${className}`}>{children}</section>
)

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 sm:px-8 ${className}`}>{children}</div>
)

const GoldButton = ({ children, className = '', ...props }) => (
  <button
    {...props}
    className={`group inline-flex items-center justify-center rounded-md bg-gradient-to-t from-[#b8891a] to-[#f3d070] text-black font-semibold px-6 py-3 transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_0_1px_rgba(248,224,166,0.35),0_10px_30px_-10px_rgba(248,224,166,0.35)] ${className}`}
  >
    <span className="mr-2">{children}</span>
    <Sparkles className="h-4 w-4 opacity-80 transition-transform group-hover:rotate-12" />
  </button>
)

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen w-full bg-[#0b0b0c] text-zinc-100 overflow-x-hidden">
      {/* Subtle background vignette and gold glow accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_-10%,rgba(253,230,138,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_80%_20%,rgba(253,230,138,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_25%)]" />
      </div>

      {/* HERO */}
      <Section className="relative min-h-[92vh] flex items-center">
        <Container className="relative z-10 grid lg:grid-cols-2 gap-10 items-center py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-4 py-1.5 backdrop-blur">
              <Crown className="h-4 w-4 text-amber-300" />
              <span className="text-xs tracking-widest uppercase text-zinc-300/80">Premium eBook</span>
            </div>

            <h1 className="font-luxury text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-zinc-50">
              Build Once. <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500">Earn Forever.</span>
            </h1>

            <p className="max-w-xl text-zinc-300/90 text-lg">
              The Digital Empire Playbook — Learn how to systemize your digital product business using AI and automation.
            </p>

            <div className="flex items-center gap-4">
              <GoldButton onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                Get Instant Access
              </GoldButton>
              <div className="text-zinc-400 text-sm flex items-center gap-2">
                <Shield className="h-4 w-4 text-amber-300" /> 7-day satisfaction guarantee
              </div>
            </div>
          </motion.div>

          {/* Spline 3D Scene */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/40">
              <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent" />
            </div>
          </div>
        </Container>

        {/* elegant gold line accent */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[88%] h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      </Section>

      {/* ABOUT */}
      <Section className="py-24">
        <Container className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="font-luxury text-3xl sm:text-4xl text-zinc-50">About the Playbook</h2>
            <p className="text-zinc-300/90 text-lg leading-relaxed">
              A premium, step-by-step guide to build, automate, and scale a modern digital product empire. Inside, you’ll master AI workflows, automation systems, and branding secrets that create leveraged income without trading time for money.
            </p>
            <ul className="grid sm:grid-cols-3 gap-4">
              <li className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-amber-300" />
                <span className="text-zinc-300">AI workflows that ship faster</span>
              </li>
              <li className="flex items-center gap-3">
                <Settings className="h-5 w-5 text-amber-300" />
                <span className="text-zinc-300">Automation systems that scale</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="h-5 w-5 text-amber-300" />
                <span className="text-zinc-300">Branding frameworks that convert</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-amber-200/40 to-amber-500/30">
              <div className="rounded-[11px] bg-zinc-900 p-6">
                <div className="text-sm text-zinc-400 leading-relaxed">
                  • Zero fluff. Action-first frameworks
                  <br />• Templates, prompts, and systems
                  <br />• Tested across real creator businesses
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT YOU'LL LEARN */}
      <Section className="py-24">
        <Container>
          <h2 className="font-luxury text-3xl sm:text-4xl text-zinc-50 mb-10">What You’ll Learn</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Rocket, title: 'Build your first digital asset' },
              { icon: Timer, title: 'Automate income systems' },
              { icon: Crown, title: 'Brand yourself like a premium creator' },
              { icon: Sparkles, title: 'Scale with content & AI' },
              { icon: LineChart, title: 'Monetize without burnout' },
              { icon: Shield, title: 'Operate like a digital CEO' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-6 backdrop-blur-sm hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300">
                    {React.createElement(item.icon, { className: 'h-5 w-5' })}
                  </div>
                  <div>
                    <h3 className="text-zinc-50 font-semibold">{item.title}</h3>
                    <p className="text-zinc-400 mt-1 text-sm">
                      Concise playbooks, prompts, and templates to execute fast.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* VISUAL PREVIEW */}
      <Section className="py-24">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-luxury text-3xl sm:text-4xl text-zinc-50">Inside the Playbook</h2>
            <p className="text-zinc-300/90 max-w-xl">
              Get a cinematic view of the assets: page templates, funnel maps, automation blueprints, and AI prompt kits.
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-amber-300" /> 150+ pages of frameworks and walkthroughs</li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-amber-300" /> Notion systems and Airtable-ready databases</li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-amber-300" /> Copy-and-paste prompts for research, content, and ops</li>
            </ul>
          </div>

          {/* 3D mockup style card */}
          <div className="relative">
            <div className="relative mx-auto h-[420px] w-[300px] sm:h-[520px] sm:w-[380px] [perspective:1600px]">
              <div className="absolute inset-0 rounded-xl border border-amber-400/30 bg-[linear-gradient(135deg,#111,35%,#171717_60%,#1c1c1c_85%)] shadow-[0_0_0_1px_rgba(248,224,166,0.25),0_30px_80px_-20px_rgba(248,224,166,0.25)] [transform:rotateY(-18deg)_rotateX(8deg)_translateZ(0)] overflow-hidden">
                <div className="absolute inset-0 opacity-60 bg-[radial-gradient(120%_60%_at_10%_0%,rgba(253,230,138,0.35),transparent_40%)]" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs tracking-[0.2em] text-amber-300">EBOOK</span>
                    <h3 className="font-luxury text-3xl mt-2">The Digital Empire Playbook</h3>
                    <p className="text-zinc-400 mt-2 text-sm">Systems. AI. Brand. Scale.</p>
                  </div>
                  <div className="text-zinc-400 text-xs">
                    © Digital Empire. All Rights Reserved.
                  </div>
                </div>
              </div>
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl bg-amber-300/20" />
            </div>
          </div>
        </Container>
      </Section>

      {/* SOCIAL PROOF */}
      <Section className="py-20">
        <Container>
          <div className="mb-10">
            <p className="text-center text-zinc-300">Join 1,000+ creators building their digital empires.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Alex R.', role: 'Creator & Consultant', quote: 'A masterclass in systems. I shipped my first product in 7 days.' },
              { name: 'Maya L.', role: 'Automation Designer', quote: 'Finally, a premium playbook with real operators’ insight.' },
              { name: 'Jordan C.', role: 'Founder', quote: 'Brand, AI, and monetization—dialed. Worth 10x the price.' },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 border border-zinc-700" />
                  <div>
                    <div className="text-sm font-medium text-zinc-200">{t.name}</div>
                    <div className="text-xs text-zinc-400">{t.role}</div>
                  </div>
                </div>
                <p className="text-zinc-300">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRICING / OFFER */}
      <Section className="py-24">
        <Container className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-luxury text-3xl sm:text-4xl text-zinc-50 mb-4">Limited Founder’s Launch Offer</h2>
            <p className="text-zinc-300/90 max-w-xl">Get lifetime access to the complete playbook and resources. Instant digital delivery.</p>
          </div>
          <div className="rounded-2xl border border-amber-400/30 bg-zinc-900/50 p-8">
            <div className="flex items-end gap-3">
              <span className="font-luxury text-5xl bg-clip-text text-transparent bg-gradient-to-b from-amber-200 to-amber-500">$39</span>
              <span className="text-zinc-400 mb-2">— One-Time Access</span>
            </div>
            <div className="mt-6">
              <GoldButton className="w-full py-4 text-base">Download Now</GoldButton>
              <p className="mt-3 text-center text-xs text-zinc-400">Instant digital delivery. 7-day satisfaction guarantee.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-24">
        <Container>
          <div className="rounded-2xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 p-10 text-center">
            <h2 className="font-luxury text-3xl sm:text-4xl text-zinc-50">Start Building Your Digital Empire Today.</h2>
            <p className="mt-3 text-zinc-300/90">Systems. AI. Freedom. Everything inside.</p>
            <div className="mt-6"><GoldButton>Get the Playbook</GoldButton></div>
          </div>
        </Container>
      </Section>

      <footer className="py-10">
        <Container>
          <div className="text-center text-xs text-zinc-500">© {new Date().getFullYear()} Digital Empire. All Rights Reserved.</div>
        </Container>
      </footer>
    </div>
  )
}

export default App
