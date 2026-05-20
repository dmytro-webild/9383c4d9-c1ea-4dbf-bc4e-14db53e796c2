"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Flame, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lions Burger's & Dogos"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "plain",
      }}
      title="The Best Burgers & Dogos in Tijuana"
      description="Authentic flavor, premium ingredients, and the classic Baja spirit. Come taste the legend."
      kpis={[
        {
          value: "100%",
          label: "Baja Flavor",
        },
        {
          value: "24/7",
          label: "Passion",
        },
        {
          value: "5k+",
          label: "Burgers Served",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-delicious-hot-dog-with-onion_23-2149235979.jpg"
      imageAlt="gourmet burger street food"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-tasty-hot-dog_23-2149235916.jpg",
          alt: "High angle tasty hot dog",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-appetizing-hot-dogs-onion-rings_23-2147684597.jpg",
          alt: "Top view of appetizing hot dogs and onion rings",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-delicious-hot-dog_23-2147684591.jpg",
          alt: "Close-up of delicious hot dog",
        },
        {
          src: "http://img.b2bpic.net/free-photo/tasty-fast-food-hot-dog-close-up_23-2148668464.jpg",
          alt: "Tasty fast-food hot dog close-up",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-burger-with-french-fries-sour-yogurt-table_140725-10148.jpg",
          alt: "Side view of burger with french fries and sour yogurt on the table",
        },
      ]}
      avatarText="Join our happy hungry lions family!"
      marqueeItems={[
        {
          type: "text",
          text: "100% Beef",
        },
        {
          type: "text",
          text: "Fresh Local Produce",
        },
        {
          type: "text",
          text: "Authentic Tijuana Style",
        },
        {
          type: "text",
          text: "Grillmaster Approved",
        },
        {
          type: "text",
          text: "Baja Soul",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Crafted in the Heart of Tijuana"
      description={[
        "Born from a love of authentic street food, Lions Burger's & Dogos brings the best of Baja California right to your table.",
        "Our secret is simple: fresh, local ingredients paired with a passion for the perfect grill.",
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Classic Lion Burger",
          price: "$12.00",
          variant: "Beef",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-s-hand-taking-gua-bao-from-white-plate-wooden-table_23-2148123743.jpg",
        },
        {
          id: "p2",
          name: "Baja Hot Dog",
          price: "$6.00",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-tasty-hot-dog_23-2147684579.jpg",
        },
        {
          id: "p3",
          name: "Cheeseburger Deluxe",
          price: "$14.00",
          variant: "Double Patty",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-burgers-with-pickles-cutting-board_23-2148784497.jpg",
        },
        {
          id: "p4",
          name: "Spicy Dog Special",
          price: "$7.50",
          variant: "Jalapeño",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hot-dog-with-pickles-arrangement_23-2148768168.jpg",
        },
        {
          id: "p5",
          name: "Lion Fries",
          price: "$5.00",
          variant: "Loaded",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cheeseburger-cutting-board-with-knife_23-2148784512.jpg",
        },
        {
          id: "p6",
          name: "Baja Soda",
          price: "$3.00",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-cheeseburger-with-fried-egg-tray_23-2148784518.jpg",
        },
      ]}
      title="Our Signature Menu"
      description="Bold flavors inspired by the streets of Tijuana."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          icon: Flame,
          title: "Fire-Grilled",
          description: "Authentic smoky flavor in every bite.",
        },
        {
          icon: Flame,
          title: "Fresh Daily",
          description: "Local ingredients delivered fresh every morning.",
        },
        {
          icon: Star,
          title: "Baja Legend",
          description: "Celebrating the unique culinary culture of Tijuana.",
        },
      ]}
      title="Why Choose Lions?"
      description="Experience food that goes beyond just a meal."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10k+",
          description: "Satisfied Customers",
        },
        {
          id: "m2",
          value: "50+",
          description: "Unique Recipes",
        },
        {
          id: "m3",
          value: "24/7",
          description: "Open Daily",
        },
      ]}
      title="Serving Joy"
      description="Numbers speak for our flavor journey."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex R.",
          handle: "@alexfood",
          testimonial: "Best burger in all of Tijuana!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-dark-long-hair-talking-phone-coffee-shop_273609-2803.jpg",
        },
        {
          id: "t2",
          name: "Maria G.",
          handle: "@mariayum",
          testimonial: "The Baja Dogos are incredible.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-medium-shot_23-2149872407.jpg",
        },
        {
          id: "t3",
          name: "Jorge L.",
          handle: "@jorgeloves",
          testimonial: "Authentic taste every single time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-holding-female-hands-fast-food-burger-close-up_169016-43530.jpg",
        },
        {
          id: "t4",
          name: "Sandra M.",
          handle: "@sandram",
          testimonial: "Love the local ingredients.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/redhead-man-with-long-beard-eating-tasty-classic-burger-drinking-soda-skeptic-nervous-frowning-upset-because-problem-negative-person_839833-12946.jpg",
        },
        {
          id: "t5",
          name: "Carlos P.",
          handle: "@carlosp",
          testimonial: "Simply the best street food.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006709.jpg",
        },
      ]}
      showRating={true}
      title="What Locals Say"
      description="Hear from our hungry Lions family."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Tijuana Foodies",
        "Baja Eats",
        "Street Food Weekly",
        "Local Taste Awards",
        "Best of Baja",
        "Tijuana Times",
        "City Flavor Guide",
      ]}
      title="Loved by the Community"
      description="Recognized for our dedication to Baja food."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      text="Ready for a legendary burger? Visit us in the heart of Tijuana today!"
      buttons={[
        {
          text: "Get Directions",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Lions Burger's & Dogos"
      columns={[
        {
          title: "Visit Us",
          items: [
            {
              label: "Tijuana, Baja California",
              href: "#",
            },
          ],
        },
        {
          title: "Menu",
          items: [
            {
              label: "Burgers",
              href: "#menu",
            },
            {
              label: "Dogos",
              href: "#menu",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
