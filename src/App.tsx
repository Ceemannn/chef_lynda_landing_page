import { useState, useEffect } from 'react'
import { 
  ChefHat, 
  BookOpen, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Instagram, 
  Youtube,
  Star,
  Award,
  Users,
  Sparkles
} from 'lucide-react'

const PREORDER_LINK = "https://selar.com/5659993z69"
const LAUNCH_DATE = new Date('2026-03-10T00:00:00')

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = LAUNCH_DATE.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="font-heading text-xl font-bold text-primary">Chef Lyn</span>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-soft-black hover:text-gold transition-colors">About</button>
              <button onClick={() => scrollToSection('book')} className="text-soft-black hover:text-gold transition-colors">The Book</button>
              <button onClick={() => scrollToSection('author')} className="text-soft-black hover:text-gold transition-colors">Author</button>
              <button onClick={() => scrollToSection('pricing')} className="text-soft-black hover:text-gold transition-colors">Pre-Order</button>
            </div>
            <a 
              href={PREORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-primary-dark font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Pre-Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-light opacity-95"></div>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #c9a962 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Author Image & Welcome */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold shadow-2xl mx-auto lg:mx-0">
                  <img 
                    src="/author.jpg" 
                    alt="Chef Lynda Ewalefoh" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-primary-dark px-4 py-2 rounded-full font-semibold shadow-lg">
                  <ChefHat className="inline w-5 h-5 mr-1" />
                  Chef Lyn
                </div>
              </div>
              
              <h2 className="text-gold font-heading text-2xl md:text-3xl mb-4 italic">
                "Welcome to Food Business Simplified"
              </h2>
              <p className="text-cream/90 text-lg md:text-xl leading-relaxed">
                Allow me hold your hands to structure and simplify that food business
              </p>
            </div>

            {/* Right - Book Info */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="inline w-4 h-4 mr-1" />
                PRE-ORDER NOW AVAILABLE
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
                The Business
                <span className="block text-gold">of Food</span>
              </h1>
              
              <p className="text-cream/80 text-lg md:text-xl mb-8 italic">
                Branding, Marketing & Visibility Simplified
              </p>

              <p className="text-cream/70 mb-8 max-w-lg">
                A Practical Guide for Nigerian Food Businesses. Transform your cooking passion into a profitable, sustainable empire.
              </p>

              {/* Countdown Timer */}
              <div className="mb-8">
                <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-wider">Launch Countdown</p>
                <div className="flex justify-center lg:justify-start gap-4">
                  {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Mins' },
                    { value: timeLeft.seconds, label: 'Secs' }
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
                      <div className="text-2xl md:text-3xl font-bold text-white">{String(item.value).padStart(2, '0')}</div>
                      <div className="text-xs text-cream/60 uppercase">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={PREORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gold hover:bg-gold-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Pre-Order for ₦15,000
              </a>
              <p className="text-cream/50 text-sm mt-3">
                <span className="line-through">₦20,000</span> — Save ₦5,000 with pre-order!
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section id="about" className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">
              Why This Book?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-soft-black/70 max-w-2xl mx-auto text-lg">
              Stop guessing. Start building a food business that actually makes money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/book-cover.png" 
                  alt="The Business of Food Book Cover" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-primary-dark px-6 py-3 rounded-xl font-bold shadow-lg">
                Digital eBook
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl text-primary font-bold mb-6">
                A Practical Guide for Food Entrepreneurs
              </h3>
              <p className="text-soft-black/80 mb-6 leading-relaxed">
                <strong>The Business of Food</strong> is a practical guide for anyone looking to turn cooking skills into a profitable and sustainable food business. Written from real-life experience, Chef Lyn breaks down the often ignored business side of food; pricing, food costing, branding, operations, consistency, and growth.
              </p>
              <p className="text-soft-black/80 mb-8 leading-relaxed">
                This ebook helps readers stop guessing, avoid common mistakes, and start making informed business decisions that support long-term success in the food industry.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, text: 'Strategic Pricing' },
                  { icon: Award, text: 'Brand Building' },
                  { icon: TrendingUp, text: 'Sustainable Growth' },
                  { icon: Users, text: 'Customer Retention' }
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <item.icon className="w-6 h-6 text-gold" />
                    <span className="font-medium text-primary">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section id="book" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">
              What You'll Learn
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-soft-black/70 max-w-2xl mx-auto text-lg">
              Gain the knowledge and skills to transform your food business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Price Food Correctly', desc: 'Learn the exact formulas to price your food confidently and profitably' },
              { title: 'Understand Branding', desc: 'Master the art of creating a memorable food brand identity' },
              { title: 'Build a Strong Brand', desc: 'Develop a brand that stands out in the competitive food market' },
              { title: 'Operate with Structure', desc: 'Create systems that ensure consistency in every dish' },
              { title: 'Avoid Common Mistakes', desc: 'Learn from others\' errors so you don\'t repeat them' },
              { title: 'Run a Real Business', desc: 'Transition from "just cooking" to running a profitable enterprise' },
              { title: 'Make Smarter Decisions', desc: 'Use data and strategy to guide your business choices' },
              { title: 'Achieve Sustainable Growth', desc: 'Build a business that grows steadily and lasts' },
              { title: 'Master Food Costing', desc: 'Understand exactly what each dish costs you to make' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-gold/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-soft-black/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Who Is This Book For?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-cream/80 max-w-2xl mx-auto text-lg">
              This book is specifically designed for passionate food creators ready to build real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ChefHat, title: 'Food Vendors & Caterers', desc: 'Already serving customers but want to scale profitably' },
              { icon: Users, title: 'Home Cooks', desc: 'Looking to monetize your cooking skills professionally' },
              { icon: TrendingUp, title: 'Aspiring Food Entrepreneurs', desc: 'Ready to start your food business the right way' },
              { icon: BookOpen, title: 'Culinary Students & Graduates', desc: 'Want to understand the business side of food' },
              { icon: Target, title: 'Unstructured Food Businesses', desc: 'Running a food business without proper systems' },
              { icon: Star, title: 'Food Content Creators', desc: 'Selling food online and want to maximize profits' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-cream/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/author-meet.jpg" 
                  alt="Chef Lynda Ewalefoh" 
                  onError={(e) => {
                    e.currentTarget.src = '/author.jpg'
                  }}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-8 left-8 w-full h-full bg-gold/20 rounded-2xl -z-0"></div>
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-2">
                Meet the Author
              </h2>
              <p className="text-gold font-semibold text-xl mb-6">LYNDA EWALEFOH</p>
              <p className="text-soft-black/60 text-sm uppercase tracking-wider mb-6">
                Culinary Instructor | Food Entrepreneur | Educator
              </p>

              <p className="text-soft-black/80 mb-6 leading-relaxed">
                Chef Lynda is a seasoned culinary instructor, food entrepreneur, and content creator with years of hands-on experience building and running successful food businesses.
              </p>
              
              <p className="text-soft-black/80 mb-6 leading-relaxed">
                As the founder of <strong>Lyndishes Kitchen</strong> and <strong>Lyndishes Culinary School</strong>, she has trained and mentored aspiring chefs, food vendors, and caterers, equipping them with both culinary skills and business knowledge.
              </p>

              <p className="text-soft-black/80 mb-8 leading-relaxed">
                Her work focuses on helping food entrepreneurs move beyond passion-driven cooking into structured, profitable, and sustainable businesses.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/cheflyn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-light transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @cheflyn
                </a>
                <a 
                  href="https://tiktok.com/@lyndishesculinaryschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-soft-black text-white px-4 py-2 rounded-full hover:bg-soft-black/80 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
                <a 
                  href="https://youtube.com/@Cheflyn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gold text-6xl font-serif mb-4">"</div>
          <blockquote className="font-heading text-2xl md:text-3xl text-white italic mb-6">
            People may forget what they ate, but they will never forget how you made them feel.
          </blockquote>
          <p className="text-gold font-semibold">— Chef Lyn</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">
              Get Your Copy Today
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-soft-black/70 max-w-2xl mx-auto text-lg">
              Invest in your food business success
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-primary-dark px-6 py-2 rounded-bl-2xl font-bold">
                PRE-ORDER
              </div>
              
              <div className="text-center mb-8">
                <p className="text-cream/60 text-sm uppercase tracking-wider mb-2">Limited Time Offer</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-cream/50 line-through text-2xl">₦20,000</span>
                  <span className="text-5xl font-bold text-gold">₦15,000</span>
                </div>
                <p className="text-gold/80 text-sm mt-2">Save ₦5,000 with pre-order!</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Digital eBook with instant access',
                  'Practical pricing formulas',
                  'Branding strategies that work',
                  'Real-life business insights',
                  'Lifetime access to content'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-cream/90">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={PREORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold hover:bg-gold-light text-primary-dark font-bold py-4 rounded-full text-center text-lg transition-all duration-300 hover:shadow-xl"
              >
                Pre-Order Now on Selar
              </a>

              <div className="flex items-center justify-center gap-2 mt-6 text-cream/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>Instant download after purchase</span>
              </div>
            </div>

            <p className="text-center text-soft-black/60 mt-6 text-sm">
              Available exclusively on Selar. After purchase, you'll receive instant access to download the ebook.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Food Business?
          </h2>
          <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of food entrepreneurs who are taking their businesses from passion projects to profitable enterprises.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-wider">Book Launches In</p>
            <div className="flex justify-center gap-4">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Mins' },
                { value: timeLeft.seconds, label: 'Secs' }
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
                  <div className="text-2xl md:text-3xl font-bold">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-xs text-cream/60 uppercase">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <a 
            href={PREORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold hover:bg-gold-light text-primary-dark font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <BookOpen className="mr-2 w-5 h-5" />
            Secure Your Pre-Order — ₦15,000
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soft-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gold">The Business of Food</h3>
              <p className="text-white/60 text-sm">
                A practical guide for Nigerian food businesses by Chef Lynda Ewalefoh.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-white/60">
                <button onClick={() => scrollToSection('about')} className="block hover:text-gold transition-colors">About the Book</button>
                <button onClick={() => scrollToSection('author')} className="block hover:text-gold transition-colors">Meet the Author</button>
                <button onClick={() => scrollToSection('pricing')} className="block hover:text-gold transition-colors">Pre-Order</button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect with Chef Lyn</h3>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/cheflyn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://tiktok.com/@lyndishesculinaryschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@Cheflyn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            <p>© 2026 Chef Lynda Ewalefoh. All rights reserved.</p>
            <p className="mt-2">Launch Date: March 10, 2026</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
