import { Globe, Mail } from "lucide-react";
import { CardData, ThemeType, themeStyles } from "../types";

// Icon Components
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const getSocialIcon = (type: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    "Instagram": <InstagramIcon className="w-3.5 h-3.5" />,
    "LinkedIn": <LinkedInIcon className="w-3.5 h-3.5" />,
    "Facebook": <FacebookIcon className="w-3.5 h-3.5" />,
    "YouTube": <YouTubeIcon className="w-3.5 h-3.5" />,
    "Twitter": <TwitterIcon className="w-3.5 h-3.5" />,
    "X": <TwitterIcon className="w-3.5 h-3.5" />,
    "Website": <Globe className="w-3.5 h-3.5" />,
    "Blog": <Globe className="w-3.5 h-3.5" />,
    "Email": <Mail className="w-3.5 h-3.5" />,
  };
  return iconMap[type] || <Globe className="w-3.5 h-3.5" />;
};

interface CardPreviewProps {
  data: CardData;
  theme: ThemeType;
}

export function CardPreview({ data, theme }: CardPreviewProps) {
  const styles = themeStyles[theme];
  const isDark = theme === "gradient" || theme === "dark" || theme === "creative" ||
                 theme === "pastelPink" || theme === "pastelBlue" || theme === "pastelMint";

  const socials: { type: string; value: string }[] = [];
  if (data.instagram) socials.push({ type: "Instagram", value: data.instagram });
  if (data.sns1Type && data.sns1Type !== "none" && data.sns1Value) {
    socials.push({ type: data.sns1Type, value: data.sns1Value });
  }
  if (data.sns2Type && data.sns2Type !== "none" && data.sns2Value) {
    socials.push({ type: data.sns2Type, value: data.sns2Value });
  }

  return (
    <div className="flex justify-center">
      <div
        className={`w-full max-w-md aspect-[1.75/1] rounded-xl p-6 shadow-xl relative overflow-hidden ${styles.card}`}
      >
        {/* Design Elements for specific themes */}
        {theme === "geometric" && (
          <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-50" />
          </>
        )}
        {theme === "striped" && (
          <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500" />
        )}
        {theme === "dotted" && (
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle, #facc15 2px, transparent 2px)",
            backgroundSize: "16px 16px"
          }} />
        )}
        {theme === "custom" && data.logo && (
          <div 
            className="absolute bottom-0 right-0 w-48 h-48 opacity-10 bg-contain bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: `url(${data.logo})` }}
          />
        )}

        <div className="relative h-full flex flex-col justify-between">
          {/* Header with Logo/Company */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                {data.name || "이름"}
              </h2>
              {data.title && (
                <p className={`text-sm mt-1 ${isDark ? "text-white/80" : "text-slate-600"}`}>
                  {data.title}
                </p>
              )}
            </div>
            
            {data.logo ? (
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <img src={data.logo} alt="Logo" className="w-12 h-12 object-contain" />
              </div>
            ) : data.company ? (
              <div className={`px-3 py-1.5 rounded-lg ${isDark ? "bg-white/20" : "bg-slate-100"}`}>
                <span className={`text-sm font-medium ${isDark ? "text-white" : "text-slate-600"}`}>
                  {data.company}
                </span>
              </div>
            ) : null}
          </div>

          {/* Contact Info */}
          <div className="space-y-1.5">
            {data.email && (
              <div className="flex items-center gap-2">
                <Mail className={`w-4 h-4 ${isDark ? "text-white/70" : "text-slate-400"}`} />
                <span className={`text-sm ${isDark ? "text-white/90" : "text-slate-700"}`}>
                  {data.email}
                </span>
              </div>
            )}
            {data.phone && (
              <div className="flex items-center gap-2">
                <span className={`text-sm ${isDark ? "text-white/70" : "text-slate-400"}`}>📞</span>
                <span className={`text-sm ${isDark ? "text-white/90" : "text-slate-700"}`}>
                  {data.phone}
                </span>
              </div>
            )}
            {data.website && (
              <div className="flex items-center gap-2">
                <Globe className={`w-4 h-4 ${isDark ? "text-white/70" : "text-slate-400"}`} />
                <span className={`text-sm ${isDark ? "text-white/90" : "text-slate-700"}`}>
                  {data.website}
                </span>
              </div>
            )}
          </div>

          {/* Social Links */}
          {socials.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {socials.map((social, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${isDark ? "bg-white/20" : "bg-slate-100"}`}
                >
                  <span className={`${isDark ? "text-white" : "text-slate-600"}`}>
                    {getSocialIcon(social.type)}
                  </span>
                  <span className={`text-xs font-medium ${isDark ? "text-white" : "text-slate-600"}`}>
                    {social.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}