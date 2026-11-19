/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocationContactSection } from './components/LocationContactSection';
import { PackagesSection } from './components/PackagesSection';
import { PagePreloader } from './components/PagePreloader';
import { PriceMenuSection } from './components/PriceMenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesSection } from './components/ServicesSection';
import {
  INITIAL_PACKAGES,
  INITIAL_PRICE_MENU,
  INITIAL_SERVICES,
  PriceMenuCategory,
} from './data/salonData';

const STORAGE_KEY = 'rupantar_custom_prices_v1';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>(
    INITIAL_SERVICES[0].name
  );
  const [customPrices, setCustomPrices] = useState<Record<string, number>>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as Record<string, number>) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(customPrices));
    } catch {
      // Ignore storage quota errors in restricted environments
    }
  }, [customPrices]);

  const scrollToBooking = useCallback((serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const target = document.getElementById('booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleUpdateItemPrice = useCallback((itemId: string, nextPrice: number) => {
    setCustomPrices((prev) => ({
      ...prev,
      [itemId]: nextPrice,
    }));
  }, []);

  const handleResetPrices = useCallback(() => {
    setCustomPrices({});
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Synchronize custom prices from Price Menu into Services & Packages where IDs map
  const priceMenuCategories: PriceMenuCategory[] = useMemo(() => {
    return INITIAL_PRICE_MENU.map((cat) => ({
      ...cat,
      items: cat.items.map((item) => ({
        ...item,
        indicativePrice: customPrices[item.id] ?? item.indicativePrice,
      })),
    }));
  }, [customPrices]);

  const servicesWithCustomPrices = useMemo(() => {
    const idMap: Record<string, string> = {
      'haircut-styling': 'pm-haircut',
      'hair-spa': 'pm-hairspa',
      'hair-colouring': 'pm-rootcolor',
      'bridal-makeup': 'pm-bridal',
      'party-makeup': 'pm-party',
      'facial-skincare': 'pm-facial',
      'cleanup-detan': 'pm-cleanup',
      'manicure-pedicure': 'pm-manicure',
      'waxing-threading': 'pm-waxthread',
      'saree-draping': 'pm-saree',
    };

    return INITIAL_SERVICES.map((svc) => {
      const mappedId = idMap[svc.id];
      const override = mappedId ? customPrices[mappedId] : undefined;
      return override !== undefined ? { ...svc, indicativePrice: override } : svc;
    });
  }, [customPrices]);

  const packagesWithCustomPrices = useMemo(() => {
    const pkgMap: Record<string, string> = {
      'pkg-glow': 'pm-pkg-glow',
      'pkg-hair': 'pm-pkg-hair',
      'pkg-bridal': 'pm-pkg-bridal',
      'pkg-selfcare': 'pm-pkg-self',
    };

    return INITIAL_PACKAGES.map((pkg) => {
      const mappedId = pkgMap[pkg.id];
      const override = mappedId ? customPrices[mappedId] : undefined;
      return override !== undefined ? { ...pkg, indicativePrice: override } : pkg;
    });
  }, [customPrices]);

  const bookingOptions = useMemo(() => {
    const set = new Set<string>();
    INITIAL_SERVICES.forEach((s) => set.add(s.name));
    INITIAL_PACKAGES.forEach((p) => set.add(p.name));
    INITIAL_PRICE_MENU.forEach((c) => c.items.forEach((i) => set.add(i.name)));
    return Array.from(set);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#242020]">
      <PagePreloader />

      <Header onBookClick={() => scrollToBooking()} />

      <main>
        <HeroSection onBookClick={() => scrollToBooking()} />
        <AboutSection />
        <ServicesSection
          services={servicesWithCustomPrices}
          onSelectService={(name) => scrollToBooking(name)}
        />
        <BeforeAfterSection />
        <GallerySection />
        <ReviewsSection />
        <PriceMenuSection
          categories={priceMenuCategories}
          onBookItem={(name) => scrollToBooking(name)}
          onUpdateItemPrice={handleUpdateItemPrice}
          onResetPrices={handleResetPrices}
          hasCustomPrices={Object.keys(customPrices).length > 0}
        />
        <PackagesSection
          packages={packagesWithCustomPrices}
          onBookPackage={(name) => scrollToBooking(name)}
        />
        <BookingSection
          serviceOptions={bookingOptions}
          preselectedService={preselectedService}
        />
        <LocationContactSection />
        <FaqSection />
      </main>

      <Footer />
      <FloatingActions onBookClick={() => scrollToBooking()} />
    </div>
  );
}
