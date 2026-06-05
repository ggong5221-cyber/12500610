import { ThemeType } from "../types";
import { Sparkles } from "lucide-react";

interface ThemeSelectorProps {
  themes: { id: ThemeType; name: string; preview: string }[];
  currentTheme: ThemeType;
  onSelect: (theme: ThemeType) => void;
  hasLogo?: boolean;
}

export function ThemeSelector({ themes, currentTheme, onSelect, hasLogo }: ThemeSelectorProps) {
  return (
    <div className="space-y-4">
      {/* 로고 기반 추천 안내 */}
      {hasLogo && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <p className="text-xs text-emerald-700">
            <span className="font-medium">로고 테마</span>를 선택하면 로고 이미지를 활용한 맞춤형 명함을 만들 수 있습니다.
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-4 gap-3">
        {themes.map((theme) => {
          const isLogoTheme = theme.id === "custom";
          const isDisabled = isLogoTheme && !hasLogo;
          
          return (
            <button
              key={theme.id}
              onClick={() => !isDisabled && onSelect(theme.id)}
              disabled={isDisabled}
              className={`relative aspect-[1.75/1] rounded-lg overflow-hidden transition-all ${
                currentTheme === theme.id
                  ? "ring-2 ring-emerald-500 ring-offset-2"
                  : isDisabled
                  ? "opacity-40 cursor-not-allowed ring-1 ring-slate-200"
                  : "ring-1 ring-slate-200 hover:ring-slate-300 hover:shadow-md"
              }`}
            >
              <div className={`w-full h-full ${theme.preview}`}>
                {theme.id === "minimal" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-slate-200 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-300 rounded" />
                    </div>
                  </div>
                )}
                {theme.id === "dark" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-slate-600 rounded" />
                  </div>
                )}
                {theme.id === "corporate" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded" />
                  </div>
                )}
                {theme.id === "geometric" && (
                  <div className="w-full h-full relative">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-slate-100" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-50" />
                  </div>
                )}
                {theme.id === "striped" && (
                  <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                    <div className="absolute top-2 left-0 right-0 h-0.5 bg-blue-200" />
                  </div>
                )}
                {theme.id === "dotted" && (
                  <div className="w-full h-full opacity-30" style={{
                    backgroundImage: "radial-gradient(circle, #facc15 2px, transparent 2px)",
                    backgroundSize: "8px 8px"
                  }} />
                )}
                {theme.id === "custom" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-slate-400 rounded" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-2 py-1">
                <span className="text-xs font-medium text-slate-700">{theme.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}