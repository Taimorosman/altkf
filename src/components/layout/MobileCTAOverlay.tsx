'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Phone } from 'lucide-react';

export default function MobileCTAOverlay() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const whatsappUrl = isRTL 
    ? 'https://wa.me/966552239595?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AA%D9%88%D8%B1%D9%8A%D8%AF%20%D9%88%D8%AA%D8%B1%D9%83%D9%8A%D8%A8%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81.'
    : `https://wa.me/966552239595?text=${encodeURIComponent('Hello, I would like to request a free consultation for my HVAC project.')}`;

  return (
    <>
      {/* Call Button (Left Side) */}
      <a
        href="tel:+966552239595"
        onClick={() => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ 'event': 'phone_call_click_success' });
          if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_three) { (window as any).gtag_report_conversion_three('tel:+966552239595'); }
        }}
        className="fixed z-50 left-4 bottom-4 md:left-8 md:bottom-8 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FBBF24] active:bg-[#FBBF24]/90 hover:bg-[#FBBF24]/90 text-[#121212] shadow-[0_10px_25px_rgba(251,191,36,0.3)] hover:scale-110 active:scale-95 duration-150 transition-all cursor-pointer group"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 fill-current shrink-0" />
        
        {/* Tooltip Label with Little Arrow */}
        <span className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FBBF24] text-[#121212] text-[9px] md:text-[10px] font-black py-1.5 px-3 rounded-lg shadow-lg border border-[#FBBF24]/20 animate-pulse pointer-events-none">
          {isRTL ? 'اتصل بنا' : 'Call Us'}
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FBBF24] rotate-45"></span>
        </span>
      </a>

      {/* WhatsApp Button (Right Side) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ 'event': 'whatsapp_click_success' });
        }}
        className="fixed z-50 right-4 bottom-4 md:right-8 md:bottom-8 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] active:bg-[#25D366]/90 hover:bg-[#25D366]/90 text-white shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 duration-150 transition-all cursor-pointer group"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 shrink-0"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        
        {/* Tooltip Label with Little Arrow */}
        <span className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#25D366] text-white text-[9px] md:text-[10px] font-black py-1.5 px-3 rounded-lg shadow-lg border border-[#25D366]/20 animate-bounce pointer-events-none">
          {isRTL ? 'عرض سعر مجاني 100%' : '100% Free Quotation'}
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#25D366] rotate-45"></span>
        </span>
      </a>
    </>
  );
}
