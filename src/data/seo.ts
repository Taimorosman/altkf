import { Metadata } from 'next';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export const siteUrl = 'https://altakeefsa.com';

export const seoData: Record<string, { ar: SEOData; en: SEOData }> = {
  home: {
    ar: {
      title: "مقاول تكييف مركزي بالرياض وأنظمة HVAC | أعمال التكييف",
      description: "مقاول تكييف مركزي بالرياض لتوريد وتركيب أنظمة HVAC، VRF، والشيلر للمشاريع التجارية والصناعية بخبرة 10 سنوات. اتصل الآن للحصول على استشارة مجانية.",
      keywords: ["مقاول تكييف مركزي الرياض", "توريد وتركيب تكييف VRF", "شركة تكييف تجاري الرياض", "تمديد دكت التكييف المركزي", "مشاريع تكييف صناعي السعودية", "أنظمة HVAC للمباني"]
    },
    en: {
      title: "Central AC & HVAC Contractor in Riyadh | Al-Takeef",
      description: "Certified HVAC contractor in Riyadh specializing in central AC, VRF, and chillers for commercial projects with 10 years of experience. Call now for a quote.",
      keywords: ["Commercial HVAC Riyadh", "VRF installation Saudi Arabia", "Central AC contractor Riyadh", "Industrial Chiller installation", "AC duct fabrication", "HVAC engineering contracts"]
    }
  },
  about: {
    ar: {
      title: "شركة مقاولات تكييف مركزي بالرياض | أعمال التكييف",
      description: "تعرف على مؤسسة أعمال التكييف، مقاول HVAC المعتمد لتصميم وتركيب أنظمة التكييف المركزي والتهوية الميكانيكية للمشاريع التجارية بالرياض. اتصل بنا الآن.",
      keywords: ["من نحن أعمال التكييف", "شركة تكييف تجاري الرياض", "مقاول HVAC معتمد", "تاريخ مؤسسة أعمال التكييف"]
    },
    en: {
      title: "About Our HVAC Contracting in Riyadh | Al-Takeef",
      description: "Learn about Al-Takeef, a leading HVAC contractor in Riyadh providing design, supply, and installation of commercial cooling and ventilation systems. Call now.",
      keywords: ["About Al-Takeef HVAC", "Riyadh HVAC contractor", "mechanical engineering partner", "corporate cooling solutions"]
    }
  },
  contact: {
    ar: {
      title: "اتصل بمقاول التكييف المركزي بالرياض | أعمال التكييف",
      description: "تواصل مع قسم تقدير مشاريع التكييف المركزي بالرياض لتقديم المخططات الهندسية وطلب عروض أسعار للمشاريع التجارية والصناعية. اتصل بنا على 0552239595 الآن.",
      keywords: ["تواصل مع أعمال التكييف", "رقم شركة تكييف مركزي الرياض", "مبيعات التكييف المركزي", "تقديم مخططات تكييف"]
    },
    en: {
      title: "Contact Riyadh HVAC Contracting Team | Al-Takeef",
      description: "Contact Al-Takeef in Riyadh to submit your engineering drawings and request quotations for commercial and industrial HVAC projects. Call +966552239595 today.",
      keywords: ["Contact HVAC estimator", "Riyadh AC project number", "HVAC quotation Riyadh", "submit AC drawings"]
    }
  },
  projects: {
    ar: {
      title: "مشاريع مقاولات التكييف المركزي بالرياض | أعمال التكييف",
      description: "تصفح مشاريع التكييف المركزي وVRF ومحطات الشيلر التي نفذتها أعمال التكييف للمباني التجارية والمصانع والمستشفيات بالرياض. اطلب عرض سعر لمشروعك الآن.",
      keywords: ["مشاريع التكييف المركزي", "سابقة أعمال HVAC", "مشاريع تكييف تجاري", "تكييف أبراج ومستشفيات"]
    },
    en: {
      title: "Commercial HVAC Projects in Riyadh | Al-Takeef",
      description: "Browse our portfolio of completed central AC, VRF, and chiller installation projects for commercial complexes, malls, and factories in Riyadh. Call us today.",
      keywords: ["HVAC projects Riyadh", "commercial cooling references", "chiller installation portfolio", "VRF projects Saudi Arabia"]
    }
  },
  blog: {
    ar: {
      title: "مدونة هندسة التكييف والتهوية بالرياض | أعمال التكييف",
      description: "اقرأ مقالات مدونة أعمال التكييف بالرياض حول حساب الأحمال الحرارية، وتصميم الدكت، ومقارنة أنظمة VRF والشيلر للمهندسين والمطورين العقاريين. اتصل بنا.",
      keywords: ["مدونة التكييف الهندسي", "تصميم مجاري الهواء", "مقارنة VRF والشيلر", "حساب الأحمال الحرارية للمشاريع"]
    },
    en: {
      title: "HVAC Engineering & Design Blog Riyadh | Al-Takeef",
      description: "Read about heat load calculations, duct design, VRF vs chiller comparisons, and Saudi building code from our HVAC engineering blog in Riyadh. Contact us today.",
      keywords: ["HVAC engineering blog", "Riyadh duct design standards", "VRF vs chiller HVAC", "cooling load calculations"]
    }
  },
  vrf: {
    ar: {
      title: "تركيب تكييف VRF بالرياض وأنظمة VRV | أعمال التكييف",
      description: "تصميم وتوريد وتركيب أنظمة تكييف VRF / VRV موفرة للطاقة بالرياض للمجمعات التجارية والأبراج الإدارية بمواصفات هندسية معتمدة. اطلب عرض سعر لمشروعك الآن.",
      keywords: ["تركيب تكييف VRF الرياض", "أنظمة تدفق التكييف المتغير", "مقاول تكييف VRF معتمد", "تكييف VRV الرياض"]
    },
    en: {
      title: "VRF/VRV AC System Installation Riyadh | Al-Takeef",
      description: "Professional engineering-grade VRF/VRV system design and installation in Riyadh for commercial offices, malls, and residential towers. Contact us for a quote.",
      keywords: ["VRF installation Riyadh", "commercial VRV installation", "multi-split VRF contracting", "VRV system Riyadh"]
    }
  },
  central: {
    ar: {
      title: "مقاول تكييف مركزي بالرياض وتصميم دكت | أعمال التكييف",
      description: "أفضل مقاول تكييف مركزي بالرياض متخصص في حساب الأحمال وتصميم وتوريد دكت مجاري الهواء للمشاريع التجارية والصناعية الكبرى. اتصل بنا لطلب عرض سعر الآن.",
      keywords: ["شركة تكييف مركزي بالرياض", "تركيب دكت تكييف مركزي", "مقاول HVAC تجاري بالرياض", "تمديد دكت تكييف الرياض"]
    },
    en: {
      title: "Central AC Contractor & Ducting Riyadh | Al-Takeef",
      description: "Central AC contractor in Riyadh specializing in heat load calculations, supply, and installation of commercial ducted HVAC systems. Contact us for a quote.",
      keywords: ["Central AC Riyadh", "commercial AC ductwork Riyadh", "HVAC contractor Saudi", "AC duct design Riyadh"]
    }
  },
  'concealed-duct': {
    ar: {
      title: "تركيب تكييف مخفي كونسيلد بالرياض | أعمال التكييف",
      description: "توريد وتركيب تكييف مخفي كونسيلد بالرياض وتصميم مجاري الهواء المعزولة للمكاتب والفلل الفاخرة بأسعار تنافسية وضمان معتمد. اتصل بنا للحصول على كوتيشن.",
      keywords: ["تكييف مخفي كونسيلد الرياض", "مكيفات مخفي دكت بالرياض", "تركيب تكييف دكت سبليت", "تصميم مجاري الهواء بالرياض"]
    },
    en: {
      title: "Concealed Duct Split AC Riyadh | Al-Takeef",
      description: "Sleek and highly efficient concealed duct split AC installation in Riyadh. Professional engineering and duct fabrication for commercial offices. Call us today.",
      keywords: ["Concealed duct split AC", "Concealed AC Riyadh", "Duct split installation Riyadh", "commercial hidden AC"]
    }
  },
  chiller: {
    ar: {
      title: "مقاول تكييف شيلر ومبردات مياه بالرياض | أعمال التكييف",
      description: "مقاول تكييف شيلر ومبردات مياه بالرياض لتوريد وتركيب وصيانة أنظمة التبريد المركزي للمصانع والمستشفيات الكبرى مع الضمان. اطلب عرض سعر لمشروعك الآن.",
      keywords: ["تكييف شيلر الرياض", "تركيب مبردات مياه صناعية بالرياض", "صيانة تشيلرات مصانع الرياض", "تبريد مياه تشيلر الرياض"]
    },
    en: {
      title: "Chiller AC & Industrial Cooling Riyadh | Al-Takeef",
      description: "Supply, installation, and maintenance of heavy-duty chiller AC systems and cooling towers for factories and hospitals in Riyadh. Contact us for a quote now.",
      keywords: ["Chiller AC Riyadh", "industrial water chiller installation Riyadh", "cooling tower installation Riyadh", "chiller maintenance Riyadh"]
    }
  },
  crac: {
    ar: {
      title: "تبريد مراكز البيانات CRAC بالرياض | أعمال التكييف",
      description: "توريد وتركيب وحدات تكييف دقيق CRAC لتبريد مراكز البيانات وغرف السيرفرات بالرياض مع التحكم الكامل بدرجة الحرارة والرطوبة. اتصل بنا لطلب عرض سعر الآن.",
      keywords: ["تبريد مراكز البيانات بالرياض", "تبريد CRAC الرياض", "تكييف غرف السيرفرات بالرياض", "Precision cooling Riyadh"]
    },
    en: {
      title: "CRAC Units & Data Center Cooling Riyadh | Al-Takeef",
      description: "Precision cooling and CRAC unit installation in Riyadh. Secure your server room and data center stability with professional humidity controls. Call us today.",
      keywords: ["CRAC units Riyadh", "Data center cooling Riyadh", "Precision cooling Saudi", "server room AC installation Riyadh"]
    }
  },
  'split-wall': {
    ar: {
      title: "توريد مكيفات سبليت جدارية بالرياض | أعمال التكييف",
      description: "موزع مكيفات سبليت بالرياض لتوريد وتركيب أجهزة التكييف الجدارية بالجملة للمشاريع السكنية والإنشائية والجهات الحكومية بأفضل الأسعار. اتصل بنا الآن.",
      keywords: ["تركيب مكيف سبليت بالرياض", "مكيفات سبليت مشاريع الرياض", "توريد مكيفات سبليت بالجملة", "مشاريع تكييف سبليت بالرياض"]
    },
    en: {
      title: "Bulk Split AC Supply & Installation Riyadh | Al-Takeef",
      description: "Bulk supply and installation of wall-mounted split AC units for construction projects, residential developments, and government offices in Riyadh. Call now.",
      keywords: ["Split AC Riyadh", "Split AC installation Riyadh", "bulk split AC supply Riyadh", "project split AC contracting"]
    }
  },
  cassette: {
    ar: {
      title: "تركيب مكيف كاسيت سقفي بالرياض | أعمال التكييف",
      description: "توريد وتركيب مكيفات كاسيت سقفية للمعارض والمحلات التجارية والمكاتب المفتوحة بالرياض بتوزيع هواء دائري 360 درجة وتثبيت احترافي. اتصل بنا لطلب السعر.",
      keywords: ["مكيف كاسيت سقفي بالرياض", "مكيف كاسيت تجاري بالرياض", "تكييف معارض ومكاتب الرياض", "تركيب تكييف كاسيت بالرياض"]
    },
    en: {
      title: "Cassette Ceiling AC Installation Riyadh | Al-Takeef",
      description: "Ceiling cassette AC installation for showrooms, open-plan offices, and commercial spaces in Riyadh. Enjoy complete 360 air distribution. Call us for a quote.",
      keywords: ["Cassette AC Riyadh", "Cassette installation Riyadh", "Ceiling cassette Riyadh", "commercial cassette AC Riyadh"]
    }
  },
  maintenance: {
    ar: {
      title: "عقود صيانة تكييف سنوية للمنشآت والمجمعات بالرياض",
      description: "عقود صيانة تكييف مركزي سنوية وعقود تشغيل تشيلرات معتمدة للمصانع والمنشآت التجارية بالرياض مع فرق طوارئ متكاملة واستجابة سريعة. اطلب عرض السعر الآن.",
      keywords: ["عقود صيانة تكييف سنوية بالرياض", "صيانة تكييف مركزي الرياض", "صيانة تشيلرات بالرياض", "صيانة HVAC للشركات بالرياض"]
    },
    en: {
      title: "Commercial AC Maintenance & AMC Riyadh | Al-Takeef",
      description: "Annual Maintenance Contracts (AMC) and servicing for central AC, VRF, and industrial chiller systems in commercial complexes in Riyadh. Contact us today.",
      keywords: ["AC maintenance Riyadh", "commercial HVAC AMC Riyadh", "chiller maintenance contracts Riyadh", "industrial AC service Riyadh"]
    }
  },
  ventilation: {
    ar: {
      title: "أنظمة تهوية ميكانيكية وسحب الدخان بالرياض | أعمال التكييف",
      description: "تصميم وتركيب أنظمة التهوية الميكانيكية وسحب دخان الحرائق وتهوية المستودعات ومواقف السيارات بالرياض بمواصفات هندسية قياسية. اتصل بنا لطلب كوتيشن.",
      keywords: ["أنظمة تهوية ميكانيكية بالرياض", "تهوية مستودعات بالرياض", "سحب دخان مواقف السيارات الرياض", "مراوح شفط تجارية بالرياض"]
    },
    en: {
      title: "Mechanical Ventilation & Smoke Control Riyadh | Al-Takeef",
      description: "Custom design and installation of mechanical ventilation, warehouse ventilation, and smoke exhaust systems for commercial facilities in Riyadh. Call us today.",
      keywords: ["Mechanical ventilation Riyadh", "warehouse ventilation Riyadh", "smoke control systems Riyadh", "kitchen hood exhaust Riyadh"]
    }
  },
  store: {
    ar: {
      title: "مبيعات أجهزة تكييف ومعدات HVAC بالرياض | أعمال التكييف",
      description: "قسم مبيعات أجهزة ومعدات التكييف المركزي وقطع HVAC بالرياض للمقاولين والمطورين العقاريين بتوريد مباشر بضمان الوكيل المعتمد. اتصل بنا لطلب كوتيشن الآن.",
      keywords: ["توريد أجهزة تكييف الرياض", "أسعار مكيفات مشاريع الرياض", "مبيعات معدات HVAC بالرياض", "موزع مكيفات معتمد بالرياض"]
    },
    en: {
      title: "HVAC Equipment & AC Unit Supply Riyadh | Al-Takeef",
      description: "B2B sales and supply of central AC units, VRF systems, and HVAC equipment for contractors and real estate developers in Riyadh. Contact us for a quote today.",
      keywords: ["HVAC equipment supply Riyadh", "commercial AC unit prices Riyadh", "bulk AC sales Saudi", "approved HVAC supplier Riyadh"]
    }
  }
};

export function getMetadata(
  key: string,
  locale: string,
  pathname: string = '',
  overrides?: Partial<Metadata> & { title?: string; description?: string; image?: string; type?: 'website' | 'article' }
): Metadata {
  const currentLocale = locale === 'ar' ? 'ar' : 'en';
  const data = seoData[key]?.[currentLocale] || seoData.home[currentLocale];
  
  const cleanPath = pathname ? (pathname.startsWith('/') ? pathname : `/${pathname}`) : '';
  const pathnameWithoutLocale = cleanPath.replace(/^\/(ar|en)/, '');
  const normalizedPath = pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale;
  
  const url = `${siteUrl}/${currentLocale}${normalizedPath}`;
  const arUrl = `${siteUrl}/ar${normalizedPath}`;
  const enUrl = `${siteUrl}/en${normalizedPath}`;

  const title = overrides?.title || data.title;
  const description = overrides?.description || data.description;
  const imageUrl = overrides?.image || `${siteUrl}/images/company_logo.png`;
  const type = overrides?.type || 'website';

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: data.keywords,
    verification: {
      google: 'PNEV0SqWo0P-5Drs2s6xB-hIwtFxs8Q5zS4JswioLsM',
    },
    alternates: {
      canonical: url,
      languages: {
        'ar': arUrl,
        'en': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: url,
      siteName: currentLocale === 'ar' ? 'مؤسسة أعمال التكييف' : 'Al-Takeef Contracting Establishment',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: currentLocale === 'ar' ? 'ar_SA' : 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@altakeef',
    },
    ...overrides,
  };
}
