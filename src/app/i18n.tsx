"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "ko" | "en";

type Member = {
  name: string;
  role: string;
  photo: string;
  credentials: string[];
};

type Dict = {
  nav: { cta: string };
  hero: { subtitle: string; ctaPrimary: string; ctaSecondary: string };
  about: {
    headline: string[];
    body: string;
    precedents: { field: string; name: string; open?: boolean }[];
    pillars: { num: string; title: string; description: string }[];
  };
  products: {
    headline: string[];
    badge: string;
    tagline: string;
    description: string;
    features: string[];
    cta: string;
  };
  team: {
    headline: string;
    intro: string;
    members: Member[];
    trackRecord: { year: string; items: string[] }[];
  };
  contact: { headline: string[]; body: string; address: string };
  meta: { title: string };
};

export const CONTENT: Record<Locale, Dict> = {
  ko: {
    nav: { cta: "문의하기" },
    hero: {
      subtitle:
        "음악을 함께 만드는 방식을 바꿉니다.\nTransient Lab은 음원 제작 협업을 위한 플랫폼을 만듭니다.",
      ctaPrimary: "제품 둘러보기",
      ctaSecondary: "더 알아보기",
    },
    about: {
      headline: ["모든 창작에는 협업의 표준이 생겼습니다.", "음악만 빼고."],
      body: "디자인에는 Figma, 영상에는 Frame.io, 코드에는 GitHub. 창작 분야마다 함께 일하는 방식을 다시 설계한 도구가 나왔고, 그 도구들은 산업의 표준이 됐습니다. 음원 제작에는 아직 그 자리가 비어 있습니다. Transient Lab은 창작자들이 함께 만드는 방식을 바꾸고, 음악 협업의 표준을 만듭니다.",
      precedents: [
        { field: "디자인", name: "Figma" },
        { field: "영상", name: "Frame.io" },
        { field: "코드", name: "GitHub" },
        { field: "음악", name: "아직 비어 있음", open: true },
      ],
      pillars: [
        {
          num: "01",
          title: "접근성",
          description: "전문가의 도구를 누구나 쓸 수 있게. 창작 협업의 진입 장벽을 낮춥니다.",
        },
        {
          num: "02",
          title: "자동화",
          description: "쌓인 협업 데이터를 바탕으로, AI가 피드백 정리와 의사결정을 돕습니다.",
        },
        {
          num: "03",
          title: "인프라",
          description: "제작의 협업·기록·메타데이터가 한곳에 모이는, 음원 제작의 표준으로.",
        },
      ],
    },
    products: {
      headline: ["여럿이 함께 만드는데,", "도구는 1인용이었습니다."],
      badge: "베타 준비 중",
      tagline: "멀티트랙 협업 워크스페이스",
      description:
        "여러 트랙을 클라우드에 올리고, 웨이브폼과 프로 미터링을 보며 구간을 지목해 피드백을 남깁니다. 수정은 버전으로 반영되고, 전체 믹스와 개별 트랙을 A/B로 비교합니다.",
      features: [
        "구간별 타임코드 피드백",
        "멀티트랙 · 프로 미터링",
        "버전 관리 · 끊김 없는 A/B 테스트",
        "역할별 권한 관리 (Owner / Editor / Viewer)",
      ],
      cta: "자세히 보기",
    },
    team: {
      headline: "함께 만드는 사람들",
      intro:
        "음악 · 음향부터 AI · 풀스택 개발까지, KAIST 밴드 동아리에서 만난 세 사람이 함께합니다.",
      members: [
        {
          name: "이서진",
          role: "CEO",
          photo: "/team/lee.png",
          credentials: [
            "산업및시스템공학 · 전산 복수전공",
            "KAIST 경영전략학회 MSK 활동",
            "풀스택 · AI 개발",
          ],
        },
        {
          name: "홍우진",
          role: "공동대표 · PO",
          photo: "/team/hong.png",
          credentials: [
            "전기및전자공학 학부 재학",
            "KAIST KE 창업학회 활동",
            "레코드팩토리 뮤직 프로덕션 과정 수료",
          ],
        },
        {
          name: "정홍주",
          role: "테크 리드",
          photo: "/team/jeong.png",
          credentials: [
            "전기및전자공학 석사 · SmartSoundLab",
            "공간음향 · AI 오디오 전공",
            "(전) 현대차 AI 연구 인턴",
          ],
        },
      ],
      trackRecord: [
        { year: "2026", items: ["창업중심대학 지역기반 사업 수행"] },
        {
          year: "2025",
          items: ["KAIST 선도 연구 프로그램 Work Station 장려상", "KAIST E*5 참가"],
        },
        {
          year: "2024",
          items: ["KAIST 문화기술대학원 창업챌린지 우수상", "학생창업유망팀 300+ 성장트랙"],
        },
      ],
    },
    contact: {
      headline: ["함께하고 싶다면", "언제든 연락주세요."],
      body: "투자, 협업, 채용 등 어떤 이야기든 환영합니다.",
      address: "대전광역시 유성구 어은로 52번길 13 지하3호, 4호, 5호",
    },
    meta: { title: "Transient Lab | Make Change in Music Industry" },
  },

  en: {
    nav: { cta: "Get in Touch" },
    hero: {
      subtitle:
        "Changing how music gets made together.\nTransient Lab builds the collaboration platform for music production.",
      ctaPrimary: "Explore Products",
      ctaSecondary: "Learn More",
    },
    about: {
      headline: ["Every creative field has a way to collaborate.", "Except music."],
      body: "Design has Figma. Video has Frame.io. Code has GitHub. Each craft got a tool that redesigned how people work together, and those tools became the industry standard. Music production still has an empty seat. Transient Lab is rebuilding how creators make things together — and building the standard for music collaboration.",
      precedents: [
        { field: "Design", name: "Figma" },
        { field: "Video", name: "Frame.io" },
        { field: "Code", name: "GitHub" },
        { field: "Music", name: "Still open", open: true },
      ],
      pillars: [
        {
          num: "01",
          title: "Access",
          description:
            "Bring professional tools within everyone’s reach, and lower the barrier to creative collaboration.",
        },
        {
          num: "02",
          title: "Automation",
          description:
            "Turn accumulated collaboration data into AI that helps with feedback, organizing, and decisions.",
        },
        {
          num: "03",
          title: "Infrastructure",
          description:
            "Where a project’s collaboration, history, and metadata all live — the standard for music production.",
        },
      ],
    },
    products: {
      headline: ["Made by many.", "Built for one."],
      badge: "Beta coming soon",
      tagline: "A multitrack collaboration workspace",
      description:
        "Upload your tracks to the cloud, watch the waveform and pro metering, and mark a section to leave feedback. Revisions come back as versions, and you can A/B the full mix or any single track.",
      features: [
        "Section-level timecoded feedback",
        "Multitrack · pro metering",
        "Version control · seamless A/B testing",
        "Role-based permissions (Owner / Editor / Viewer)",
      ],
      cta: "Learn more",
    },
    team: {
      headline: "The people behind it",
      intro:
        "From music and audio to AI and full-stack engineering — three people who met in a KAIST band club.",
      members: [
        {
          name: "Lee Seojin",
          role: "CEO",
          photo: "/team/lee.png",
          credentials: [
            "Industrial & Systems Engineering · CS double major",
            "KAIST Management Strategy Society (MSK)",
            "Full-stack · AI development",
          ],
        },
        {
          name: "Hong Woojin",
          role: "Co-CEO · PO",
          photo: "/team/hong.png",
          credentials: [
            "Electrical Engineering, undergraduate",
            "KAIST KE Entrepreneurship Society",
            "Record Factory music production program",
          ],
        },
        {
          name: "Jeong Hongju",
          role: "Tech Lead",
          photo: "/team/jeong.png",
          credentials: [
            "M.S. Electrical Engineering · SmartSoundLab",
            "Spatial audio · AI audio",
            "Former AI research intern, Hyundai Motor",
          ],
        },
      ],
      trackRecord: [
        { year: "2026", items: ["Selected for the regional startup-hub university program"] },
        {
          year: "2025",
          items: [
            "KAIST Work Station research program — Merit Award",
            "KAIST E*5 program",
          ],
        },
        {
          year: "2024",
          items: [
            "KAIST GSCT Startup Challenge — Excellence Award",
            "Student Startup Promising Team 300+ growth track",
          ],
        },
      ],
    },
    contact: {
      headline: ["Want to work with us?", "Reach out anytime."],
      body: "Investment, partnership, hiring — any conversation is welcome.",
      address: "B3–5, 13 Eoeun-ro 52beon-gil, Yuseong-gu, Daejeon, Republic of Korea",
    },
    meta: { title: "Transient Lab | Make Change in Music Industry" },
  },
};

type LangContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");

  // Restore saved preference after mount (avoids SSR/hydration mismatch).
  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "ko" || saved === "en") setLocaleState(saved);
  }, []);

  // Keep <html lang> and document title in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = CONTENT[locale].meta.title;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {
      /* storage unavailable — non-fatal */
    }
  };

  return (
    <LangContext.Provider value={{ locale, setLocale, t: CONTENT[locale] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
