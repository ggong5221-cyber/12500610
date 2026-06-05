import { useState, useRef } from "react";
import { Download, Eye, Edit, Share2, Palette, Globe, Mail, Upload, X, Sparkles } from "lucide-react";
import { CardPreview } from "./components/CardPreview";
import { CardForm } from "./components/CardForm";
import { ThemeSelector } from "./components/ThemeSelector";
import { CardData, ThemeType, themes } from "./types";

const initialData: CardData = {
  name: "",
  title: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  instagram: "",
  sns1Type: "none",
  sns1Value: "",
  sns2Type: "none",
  sns2Value: "",
  logo: undefined,
};

type ViewMode = "edit" | "preview" | "share";

function App() {
  const [data, setData] = useState<CardData>(initialData);
  const [theme, setTheme] = useState<ThemeType>("minimal");
  const [viewMode, setViewMode] = useState<ViewMode>("edit");

  const handleExport = async () => {
    const cardElement = document.getElementById("business-card");
    if (!cardElement) return;

    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardElement, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `business-card-${data.name || "card"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
      alert("이미지 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">디지털 명함 메이커</h1>
                <p className="text-xs text-slate-500">퍼스널 브랜딩을 위한 명함 제작 도구</p>
              </div>
            </div>

            {/* View Mode Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("edit")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "edit"
                    ? "bg-white text-emerald-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Edit className="w-4 h-4" />
                편집
              </button>
              <button
                onClick={() => setViewMode("preview")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "preview"
                    ? "bg-white text-emerald-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Eye className="w-4 h-4" />
                미리보기
              </button>
              <button
                onClick={() => setViewMode("share")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "share"
                    ? "bg-white text-emerald-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Share2 className="w-4 h-4" />
                공유
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {viewMode === "edit" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">명함 정보 입력</h2>
              <CardForm data={data} onChange={setData} />
            </div>

            {/* Preview Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">미리보기</h2>
                <div id="business-card">
                  <CardPreview data={data} theme={theme} />
                </div>
              </div>

              {/* Theme Selector */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-emerald-500" />
                  테마 선택
                </h2>
                <ThemeSelector
                  themes={themes}
                  currentTheme={theme}
                  onSelect={setTheme}
                  hasLogo={!!data.logo}
                />
              </div>
            </div>
          </div>
        )}

        {viewMode === "preview" && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-6 text-center">명함 미리보기</h2>
              <div id="business-card">
                <CardPreview data={data} theme={theme} />
              </div>
            </div>

            {/* Theme Selector */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-emerald-500" />
                테마 변경
              </h2>
              <ThemeSelector
                themes={themes}
                currentTheme={theme}
                onSelect={setTheme}
                hasLogo={!!data.logo}
              />
            </div>
          </div>
        )}

        {viewMode === "share" && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-6 text-center">명함 내보내기</h2>
              <div id="business-card">
                <CardPreview data={data} theme={theme} />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">저장 옵션</h2>
              <div className="space-y-4">
                <button
                  onClick={handleExport}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-colors"
                >
                  <Download className="w-5 h-5" />
                  이미지로 저장 (PNG)
                </button>
                <p className="text-xs text-slate-500 text-center">
                  고해상도 PNG 이미지로 다운로드됩니다.
                </p>
              </div>
            </div>

            {/* Theme Selector */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-emerald-500" />
                테마 변경
              </h2>
              <ThemeSelector
                themes={themes}
                currentTheme={theme}
                onSelect={setTheme}
                hasLogo={!!data.logo}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;