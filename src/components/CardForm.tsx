import { useState, useRef } from "react";
import { CardData } from "../types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select";
import { Globe, Mail, Upload, X } from "lucide-react";

interface CardFormProps {
  data: CardData;
  onChange: (data: CardData) => void;
}

const snsOptions = [
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

export function CardForm({ data, onChange }: CardFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(data.logo || null);

  const handleChange = (field: keyof CardData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setLogoPreview(result);
        onChange({ ...data, logo: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogoPreview(null);
    onChange({ ...data, logo: undefined });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* 기본 정보 */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          기본 정보
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700">이름 *</Label>
            <Input
              id="name"
              placeholder="홍길동"
              value={data.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title" className="text-slate-700">직함</Label>
            <Input
              id="title"
              placeholder="마케팅 디렉터"
              value={data.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-slate-700">회사명</Label>
          <Input
            id="company"
            placeholder="ABC 회사"
            value={data.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        {/* 로고 업로드 */}
        <div className="space-y-2">
          <Label className="text-slate-700">로고 이미지</Label>
          <div className="flex items-center gap-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
            
            {logoPreview ? (
              <div className="relative group">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-white border border-slate-200 flex items-center justify-center">
                  <img 
                    src={logoPreview} 
                    alt="Logo preview" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleRemoveLogo}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-16 h-16 rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-1 text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              >
                <Upload className="w-5 h-5" />
                <span className="text-xs">업로드</span>
              </button>
            )}
            
            <div className="flex-1">
              <p className="text-xs text-slate-500">
                로고 이미지를 업로드하면 명함에 표시됩니다.
              </p>
              <p className="text-xs text-slate-400">
                PNG, JPG, SVG 권장 (투명 배경)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 연락처 */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          연락처
        </h3>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 flex items-center gap-2">
            <Mail className="w-4 h-4" /> 이메일
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="hello@example.com"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-700">전화번호</Label>
          <Input
            id="phone"
            placeholder="010-1234-5678"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website" className="text-slate-700 flex items-center gap-2">
            <Globe className="w-4 h-4" /> 웹사이트
          </Label>
          <Input
            id="website"
            placeholder="www.example.com"
            value={data.website}
            onChange={(e) => handleChange("website", e.target.value)}
            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* SNS */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          SNS
        </h3>
        
        <div className="space-y-2">
          <Label htmlFor="instagram" className="text-slate-700 flex items-center gap-2">
            <span className="text-pink-500">📷</span> Instagram
          </Label>
          <Input
            id="instagram"
            placeholder="@username"
            value={data.instagram}
            onChange={(e) => handleChange("instagram", e.target.value)}
            className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-slate-700">SNS 1 종류</Label>
            <Select
              value={data.sns1Type}
              onValueChange={(value) => handleChange("sns1Type", value)}
            >
              <SelectTrigger className="border-slate-200 focus:ring-emerald-500">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                {snsOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="flex items-center gap-2">
                      <span>{option.icon}</span>
                      <span>{option.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-slate-700">SNS 1 아이디</Label>
            <Input
              placeholder="아이디 또는 URL"
              value={data.sns1Value}
              onChange={(e) => handleChange("sns1Value", e.target.value)}
              disabled={data.sns1Type === "none" || !data.sns1Type}
              className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 disabled:bg-slate-100 disabled:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-slate-700">SNS 2 종류</Label>
            <Select
              value={data.sns2Type}
              onValueChange={(value) => handleChange("sns2Type", value)}
            >
              <SelectTrigger className="border-slate-200 focus:ring-emerald-500">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                {snsOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="flex items-center gap-2">
                      <span>{option.icon}</span>
                      <span>{option.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-slate-700">SNS 2 아이디</Label>
            <Input
              placeholder="아이디 또는 URL"
              value={data.sns2Value}
              onChange={(e) => handleChange("sns2Value", e.target.value)}
              disabled={data.sns2Type === "none" || !data.sns2Type}
              className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 disabled:bg-slate-100 disabled:text-slate-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}