import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { navigation } from "@/constants";
import Link from "next/link";

const FooterNavigation = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((item) =>
          item.links.length > 0 ? (
            <li key={item.titleKey}>
              <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                {t.nav[item.titleKey]}
              </div>
              <ul role="list" className="mt-4 text-sm text-neutral-700">
                {item.links.map((link) => (
                  <li key={link.href} className="mt-4">
                    <Link
                      href={link.href}
                      className="transition hover:text-neutral-950"
                    >
                      {t.nav[link.titleKey] || link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
