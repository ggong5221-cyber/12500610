export interface CardData {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  instagram: string;
  sns1Type: string;
  sns1Value: string;
  sns2Type: string;
  sns2Value: string;
  logo?: string;
}

export type ThemeType = 
  | "minimal" 
  | "gradient" 
  | "dark" 
  | "corporate" 
  | "creative"
  | "pastelPink"
  | "pastelBlue"
  | "pastelMint"
  | "geometric"
  | "striped"
  | "dotted"
  | "custom";

export interface Theme {
  id: ThemeType;
  name: string;
  preview: string;
}

export const themes: { id: ThemeType; name: string; preview: string }[] = [
  { id: "minimal", name: "미니멀", preview: "bg-white border border-slate-200" },
  { id: "gradient", name: "그라데이션", preview: "bg-gradient-to-br from-violet-500 to-indigo-600" },
  { id: "dark", name: "다크", preview: "bg-slate-900" },
  { id: "corporate", name: "기업", preview: "bg-white border-l-4 border-l-emerald-500" },
  { id: "creative", name: "크리에이티브", preview: "bg-gradient-to-br from-amber-400 to-orange-500" },
  { id: "pastelPink", name: "파스텔 핑크", preview: "bg-gradient-to-br from-pink-200 to-rose-300" },
  { id: "pastelBlue", name: "파스텔 블루", preview: "bg-gradient-to-br from-blue-200 to-indigo-300" },
  { id: "pastelMint", name: "파스텔 민트", preview: "bg-gradient-to-br from-emerald-200 to-teal-300" },
  { id: "geometric", name: "지오메트릭", preview: "bg-white border border-slate-200" },
  { id: "striped", name: "스트라이프", preview: "bg-white border-t-4 border-t-blue-500" },
  { id: "dotted", name: "도티드", preview: "bg-yellow-50 border border-yellow-300" },
  { id: "custom", name: "로고 테마", preview: "bg-gradient-to-br from-slate-100 to-slate-200" },
];

export const themeStyles: Record<ThemeType, { card: string }> = {
  minimal: { card: "bg-white border border-slate-200" },
  gradient: { card: "bg-gradient-to-br from-violet-600 to-indigo-700" },
  dark: { card: "bg-slate-900" },
  corporate: { card: "bg-white border-l-4 border-l-emerald-500 border border-slate-200" },
  creative: { card: "bg-gradient-to-br from-amber-400 to-orange-500" },
  pastelPink: { card: "bg-gradient-to-br from-pink-100 to-rose-200" },
  pastelBlue: { card: "bg-gradient-to-br from-blue-100 to-indigo-200" },
  pastelMint: { card: "bg-gradient-to-br from-emerald-100 to-teal-200" },
  geometric: { card: "bg-white border border-slate-200" },
  striped: { card: "bg-white border border-slate-200" },
  dotted: { card: "bg-yellow-50 border border-yellow-200" },
  custom: { card: "bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200" },
};

export const snsOptions = [
  { value: "none", label: "선택안함", icon: "➖" },
  { value: "Instagram", label: "Instagram", icon: "📷" },
  { value: "LinkedIn", label: "LinkedIn", icon: "💼" },
  { value: "Facebook", label: "Facebook", icon: "👤" },
  { value: "YouTube", label: "YouTube", icon: "▶️" },
  { value: "Twitter", label: "Twitter/X", icon: "🐦" },
  { value: "Website", label: "Website", icon: "🌐" },
  { value: "Blog", label: "Blog", icon: "📝" },
  { value: "Email", label: "Email", icon: "✉️" },
];