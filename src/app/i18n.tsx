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
    statCaption: string;
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
        "Transient Lab은 인간의 창작과 협업을 지원하는 오디오 소프트웨어를 개발합니다.",
      ctaPrimary: "제품 둘러보기",
      ctaSecondary: "더 알아보기",
    },
    about: {
      headline: ["여럿이 함께 만드는데,", "도구는 1인용이었습니다."],
      body: "프로듀서, 엔지니어, 디렉터, 클라이언트가 한 곡에 참여하지만 전문가용 DAW는 혼자 쓰는 도구이고, 피드백은 카톡과 메일로 흩어집니다. 구간은 정확히 지목할 수 없고 기록도 남지 않습니다. Transient Lab은 제작에 참여하는 모두가 한 화면에서 협업하는 도구를 만듭니다.",
      statCaption:
        "음원 제작비가 해석 차이로 인한 소통 착오와 버전 혼선, 재작업으로 새어 나갑니다. 협업이 정리되지 않아 생기는 비용입니다.",
      pillars: [
        {
          num: "01",
          title: "한 화면에서 함께",
          description:
            "전문가용 DAW와 메신저로 갈라진 작업을, 전문가와 비전문가가 같은 워크스페이스에서 함께합니다.",
        },
        {
          num: "02",
          title: "말이 아니라 구간으로",
          description:
            "“여기 이 부분”을 말로 설명하는 대신, 웨이브폼 위 구간을 직접 지목해 타임코드로 피드백합니다.",
        },
        {
          num: "03",
          title: "대화가 아니라 기록으로",
          description:
            "흩어지는 카톡·메일 대신, 피드백과 버전과 결정이 프로젝트에 기록으로 남습니다.",
        },
      ],
    },
    products: {
      headline: ["크리에이터를 위한", "도구를 만듭니다."],
      badge: "베타 준비 중",
      tagline: "멀티트랙 협업 워크스페이스",
      description:
        "여러 트랙을 클라우드에 올리고, 웨이브폼과 프로 미터링을 보며 구간을 지목해 피드백을 남깁니다. 수정은 버전으로 반영되고, 전체 믹스와 개별 트랙을 A/B로 비교합니다.",
      features: [
        "구간별 타임코드 피드백",
        "멀티트랙 · 프로 오디오 미터링",
        "버전 관리 & 끊김 없는 A/B",
        "멤버 권한 관리 (Owner / Editor / Viewer)",
      ],
      cta: "자세히 보기",
    },
    team: {
      headline: "함께 만드는 사람들",
      intro:
        "음악 · 음향 도메인부터 AI · 풀스택 개발까지 — KAIST에서 만난 세 사람이 함께합니다.",
      members: [
        {
          name: "이서진",
          role: "CEO",
          photo: "/team/lee.png",
          credentials: [
            "산업및시스템공학 · 전산 복수전공",
            "경영과학 연구실 학부연구생",
            "풀스택 · AI 개발",
          ],
        },
        {
          name: "홍우진",
          role: "공동대표 · PO",
          photo: "/team/hong.png",
          credentials: [
            "전기및전자공학 석사",
            "음성 · 음향 연구실",
            "뮤직 프로덕션 과정 수료",
          ],
        },
        {
          name: "정홍주",
          role: "테크 리드",
          photo: "/team/jeong.png",
          credentials: [
            "전기및전자 석사 · SmartSoundLab",
            "공간음향 · AI 오디오 전공",
            "현대차 AI 연구 인턴",
          ],
        },
      ],
      trackRecord: [
        { year: "2026", items: ["창업중심대학 지역기반 사업 수행"] },
        {
          year: "2025",
          items: ["KAIST 선도 연구 프로그램 Work Station 장려상", "예비창업패키지 1차 합격"],
        },
        {
          year: "2024",
          items: [
            "KAIST 문화기술대학원 창업챌린지 우수상",
            "학생창업유망팀 300+ 성장트랙",
            "다이노스밴드 공모전 수상",
          ],
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
        "Transient Lab builds audio software for human creativity and collaboration.",
      ctaPrimary: "Explore Products",
      ctaSecondary: "Learn More",
    },
    about: {
      headline: ["Music is made together.", "The tools weren’t."],
      body: "A producer, an engineer, a director, and a client all work on one track — but professional DAWs are built for one person, and feedback scatters across chat and email. You can’t point to an exact section, and nothing is kept. Transient Lab builds a tool where everyone on a project works on one screen.",
      statCaption:
        "of production budgets leak into miscommunication, version confusion, and rework — the cost of collaboration that never gets organized.",
      pillars: [
        {
          num: "01",
          title: "Everyone on one screen",
          description:
            "Work split between a pro DAW and a messenger comes together — experts and non-experts in the same workspace.",
        },
        {
          num: "02",
          title: "Point to the section, not with words",
          description:
            "Instead of describing “this part right here,” mark the exact section on the waveform and leave timecoded feedback.",
        },
        {
          num: "03",
          title: "A record, not a conversation",
          description:
            "Instead of feedback scattered across chat and email, every note, version, and decision stays with the project.",
        },
      ],
    },
    products: {
      headline: ["We build tools", "for creators."],
      badge: "Beta coming soon",
      tagline: "A multitrack collaboration workspace",
      description:
        "Upload your tracks to the cloud, watch the waveform and pro metering, and mark a section to leave feedback. Revisions come back as versions, and you can A/B the full mix or any single track.",
      features: [
        "Section-level timecoded feedback",
        "Multitrack · pro audio metering",
        "Version control & seamless A/B",
        "Member roles (Owner / Editor / Viewer)",
      ],
      cta: "Learn more",
    },
    team: {
      headline: "The people behind it",
      intro:
        "From music and audio to AI and full-stack engineering — three people who met at KAIST.",
      members: [
        {
          name: "Lee Seojin",
          role: "CEO",
          photo: "/team/lee.png",
          credentials: [
            "Industrial & Systems Engineering · CS double major",
            "Undergraduate researcher, Management Science Lab",
            "Full-stack · AI development",
          ],
        },
        {
          name: "Hong Woojin",
          role: "Co-CEO · PO",
          photo: "/team/hong.png",
          credentials: [
            "M.S. Electrical Engineering",
            "Speech & Audio Lab",
            "Completed music production program",
          ],
        },
        {
          name: "Jeong Hongju",
          role: "Tech Lead",
          photo: "/team/jeong.png",
          credentials: [
            "M.S. EE · SmartSoundLab",
            "Spatial audio · AI audio",
            "AI research intern, Hyundai Motor",
          ],
        },
      ],
      trackRecord: [
        { year: "2026", items: ["Selected for the regional startup-hub university program"] },
        {
          year: "2025",
          items: [
            "KAIST Work Station research program — Merit Award",
            "Pre-startup Package, first round",
          ],
        },
        {
          year: "2024",
          items: [
            "KAIST GSCT Startup Challenge — Excellence Award",
            "Student Startup Promising Team 300+ growth track",
            "Dinos Band competition award",
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
