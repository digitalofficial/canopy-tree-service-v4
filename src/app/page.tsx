import {
  Scissors,
  TreePine,
  CircleDot,
  CloudLightning,
  Palmtree,
  LandPlot,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Send,
  ArrowDown,
} from "lucide-react";
import Logo from "@/components/Logo";
import HoloCard from "@/components/HoloCard";
import MagneticButton from "@/components/MagneticButton";
import ScrollFallback from "@/components/ScrollFallback";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Scissors,
    title: "Tree Trimming & Pruning",
    description:
      "Expert shaping and health-focused pruning that keeps your trees thriving in the Tucson heat. We remove deadwood, improve structure, and let the sunlight through.",
    align: "left" as const,
  },
  {
    icon: TreePine,
    title: "Tree Removal",
    description:
      "Safe, efficient removal of hazardous, dead, or unwanted trees. We handle every size -- from backyard mesquites to towering eucalyptus -- with precision and care.",
    align: "right" as const,
  },
  {
    icon: CircleDot,
    title: "Stump Grinding",
    description:
      "Eliminate tripping hazards and reclaim your yard. Our stump grinding goes below grade so you can landscape, build, or simply enjoy a clean, flat surface.",
    align: "left" as const,
  },
  {
    icon: CloudLightning,
    title: "Emergency Storm Cleanup",
    description:
      "Monsoon season does not wait, and neither do we. Same-day response for fallen trees, broken limbs, and storm-damaged property. Available 24/7.",
    align: "right" as const,
  },
  {
    icon: Palmtree,
    title: "Palm Tree Trimming",
    description:
      "Keep your palms healthy and looking sharp. We safely remove seed pods, dead fronds, and fruit clusters at any height -- a Tucson specialty.",
    align: "left" as const,
  },
  {
    icon: LandPlot,
    title: "Land Clearing",
    description:
      "Preparing a lot for construction or landscaping? We clear brush, remove trees, and grind stumps so your project starts on solid ground.",
    align: "right" as const,
  },
];

const stats = [
  { value: "3,000+", label: "Trees Serviced" },
  { value: "15", label: "Years Experience" },
  { value: "Same-Day", label: "Emergency Response" },
];

const aboutWords = [
  "Licensed.",
  "Insured.",
  "Family-owned.",
  "We've",
  "been",
  "caring",
  "for",
  "Tucson's",
  "trees",
  "for",
  "over",
  "15",
  "years.",
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <ScrollFallback />

      {/* ============================================
          NAV
          ============================================ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, rgba(10,18,10,0.92) 0%, rgba(10,18,10,0) 100%)",
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <Logo size={36} />
        </div>
        <a
          href="tel:+15205550140"
          style={{
            pointerEvents: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            background: "rgba(74,222,128,0.1)",
            border: "1px solid rgba(74,222,128,0.2)",
            borderRadius: "8px",
            color: "#4ADE80",
            fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            transition: "background 0.3s, border-color 0.3s",
          }}
        >
          <Phone size={16} />
          (520) 555-0140
        </a>
      </nav>

      {/* ============================================
          A) HERO — FADES ON SCROLL
          ============================================ */}
        <section
          className="hero-section"
        >
          {/* Hero background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1600&h=900&fit=crop"
            alt="Tall trees viewed from below looking up at the canopy"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A120A]/80 via-[#0A120A]/60 to-[#0A120A]/90" />

          {/* Glow orb */}
          <div
            className="glow-orb"
            style={{ top: "20%", left: "50%", marginLeft: "-250px" }}
          />

          <div className="hero-content" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1
              style={{
                fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
                fontSize: "clamp(2.8rem, 8vw, 7rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                maxWidth: "900px",
                padding: "0 24px",
              }}
            >
              Your trees
              <br />
              <span style={{ color: "#4ADE80" }}>deserve better.</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#6B8068",
                marginTop: "24px",
                maxWidth: "500px",
                padding: "0 24px",
              }}
            >
              Professional tree care in Tucson, AZ. Trimming, removal,
              emergency response -- done right.
            </p>
          </div>

          {/* Scroll indicator */}
          <div
            className="scroll-indicator"
            style={{
              position: "absolute",
              bottom: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              color: "#6B8068",
              fontSize: "0.8rem",
              fontFamily: "var(--font-body), 'Inter', sans-serif",
              letterSpacing: "0.1em",
              zIndex: 2,
            }}
          >
            Scroll to explore
            <ArrowDown size={18} />
          </div>
        </section>

      {/* ============================================
          B) SERVICES FLOW
          ============================================ */}
      <div className="flow-section flow-glow">
        <div className="container">
          <h2
            className="text-reveal"
            style={{
              fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
              fontWeight: 600,
              color: "#4ADE80",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            What We Do
          </h2>
          <p
            className="text-reveal-slow"
            style={{
              fontFamily: "var(--font-display), 'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: "600px",
              marginBottom: "96px",
            }}
          >
            Comprehensive tree care, from canopy to root.
          </p>

          {/* Service cards -- stacked, alternating alignment */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "64px",
            }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="parallax-slow"
                  style={{
                    maxWidth: "580px",
                    alignSelf:
                      service.align === "right" ? "flex-end" : "flex-start",
                  }}
                >
                  <HoloCard
                    style={{
                      padding: "40px 36px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "20px",
                      }}
                    >
                      <div className="glass-icon">
                        <Icon size={26} />
                      </div>
                      <div>
                        <h3
                          className="text-reveal"
                          style={{
                            fontFamily:
                              "var(--font-display), 'Space Grotesk', sans-serif",
                            fontSize: "1.35rem",
                            fontWeight: 700,
                            marginBottom: "10px",
                          }}
                        >
                          {service.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: "var(--font-body), 'Inter', sans-serif",
                            fontSize: "0.95rem",
                            lineHeight: 1.7,
                            color: "#6B8068",
                          }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </HoloCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================
          C) STATS — SCALE IN
          ============================================ */}
      <div className="flow-section flow-dark">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "48px",
              textAlign: "center",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="stat-scale">
                <div
                  style={{
                    fontFamily:
                      "var(--font-display), 'Space Grotesk', sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  <span
                    className="animated-gradient"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), 'Inter', sans-serif",
                    color: "#6B8068",
                    fontSize: "1rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================
          D) ABOUT FLOW — WORD BY WORD REVEAL
          ============================================ */}
      <div className="flow-section flow-glow">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily:
                "var(--font-display), 'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.5,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0 12px",
            }}
          >
            {aboutWords.map((word, i) => (
              <span key={i} className="word-reveal">
                {word}
              </span>
            ))}
          </p>
          <p
            className="fade-in-scroll"
            style={{
              fontFamily: "var(--font-body), 'Inter', sans-serif",
              color: "#6B8068",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: "580px",
              margin: "40px auto 0",
            }}
          >
            Based right here in Tucson, we understand the unique challenges
            the Sonoran Desert presents for trees. Monsoon winds, extreme
            heat, and fast-growing species all demand expert attention. That
            is exactly what we deliver -- every single time.
          </p>
        </div>
      </div>

      {/* ============================================
          E) TESTIMONIAL — CLIP REVEAL
          ============================================ */}
      <div className="flow-section flow-deep">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <div className="quote-reveal">
            <div
              style={{
                width: "48px",
                height: "4px",
                borderRadius: "2px",
                margin: "0 auto 40px",
              }}
              className="animated-gradient"
            />
            <blockquote
              style={{
                fontFamily:
                  "var(--font-display), 'Space Grotesk', sans-serif",
                fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
                fontWeight: 500,
                lineHeight: 1.6,
                fontStyle: "italic",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              &ldquo;After the monsoon took down our 30-foot mesquite, Canopy
              was here within two hours. They cleared everything, ground the
              stump, and left our yard cleaner than they found it. Absolutely
              the best tree service in Tucson.&rdquo;
            </blockquote>
            <p
              style={{
                marginTop: "28px",
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                color: "#4ADE80",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Maria R.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                color: "#6B8068",
                fontSize: "0.85rem",
                marginTop: "4px",
              }}
            >
              Homeowner, Catalina Foothills
            </p>
          </div>
        </div>
      </div>

      {/* ============================================
          F) CONTACT FORM
          ============================================ */}
      <div className="flow-section flow-glow" id="contact">
        <div className="container-narrow">
          <div className="fade-in-scroll" style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily:
                  "var(--font-display), 'Space Grotesk', sans-serif",
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                fontWeight: 600,
                color: "#4ADE80",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Get a Free Estimate
            </h2>
            <p
              style={{
                fontFamily:
                  "var(--font-display), 'Space Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Tell us about your trees.
            </p>
          </div>

          <form
            className="fade-in-scroll"
            onSubmit={undefined}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="glass-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="glass-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="glass-input"
            />
            <select name="service" className="glass-input" defaultValue="">
              <option value="" disabled>
                Select a Service
              </option>
              <option>Tree Trimming &amp; Pruning</option>
              <option>Tree Removal</option>
              <option>Stump Grinding</option>
              <option>Emergency Storm Cleanup</option>
              <option>Palm Tree Trimming</option>
              <option>Land Clearing</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              name="address"
              placeholder="Property Address"
              className="glass-input"
              style={{ gridColumn: "1 / -1" }}
            />
            <textarea
              name="details"
              placeholder="Tell us more about the job..."
              rows={5}
              className="glass-input"
              style={{ gridColumn: "1 / -1", resize: "vertical" }}
            />
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "center",
                marginTop: "8px",
              }}
            >
              <MagneticButton type="submit">
                <Send size={18} />
                Send Request
              </MagneticButton>
            </div>
          </form>

          {/* Responsive override for mobile: single column */}
          <style>{`
            @media (max-width: 600px) {
              form { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </div>

      {/* ============================================
          G) FOOTER
          ============================================ */}
      <footer
        style={{
          padding: "80px 24px 40px",
          background:
            "linear-gradient(180deg, #0A120A 0%, #060A06 100%)",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          {/* Col 1: Logo */}
          <div>
            <Logo size={44} />
            <p
              style={{
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                color: "#6B8068",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginTop: "20px",
                maxWidth: "280px",
              }}
            >
              Professional tree care for Tucson homes and businesses.
              Licensed, insured, and committed to every job.
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4
              style={{
                fontFamily:
                  "var(--font-display), 'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B8068",
                marginBottom: "20px",
              }}
            >
              Contact
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontSize: "0.95rem",
              }}
            >
              <a
                href="tel:+15205550140"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#F0FFF0",
                }}
              >
                <Phone size={16} color="#4ADE80" />
                (520) 555-0140
              </a>
              <a
                href="mailto:info@canopytreeservicetucson.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#F0FFF0",
                }}
              >
                <Mail size={16} color="#4ADE80" />
                info@canopytreeservicetucson.com
              </a>
            </div>
          </div>

          {/* Col 3: Hours */}
          <div>
            <h4
              style={{
                fontFamily:
                  "var(--font-display), 'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B8068",
                marginBottom: "20px",
              }}
            >
              Hours
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "#F0FFF0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Clock size={16} color="#4ADE80" />
                <span>Mon - Fri: 7 AM - 6 PM</span>
              </div>
              <div style={{ paddingLeft: "26px" }}>Sat: 8 AM - 2 PM</div>
              <div style={{ paddingLeft: "26px", color: "#6B8068" }}>
                Sun: Closed
              </div>
              <div
                style={{
                  paddingLeft: "26px",
                  color: "#4ADE80",
                  fontSize: "0.85rem",
                  marginTop: "4px",
                }}
              >
                24/7 Emergency Service
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            fontFamily: "var(--font-body), 'Inter', sans-serif",
            fontSize: "0.8rem",
            color: "#6B8068",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} Canopy Tree Service. All rights reserved.
          </span>
          <span>Licensed &amp; Insured &middot; ROC #000000</span>
        </div>
      </footer>
    </>
  );
}
