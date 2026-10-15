# SurvivalTaktix 회사 웹사이트 — 작업 규약

https://www.survivaltaktixs.com · Astro 정적 사이트 · 영어 단일 · 이슈 트래킹은 Dopamine 레포 #815

## 1. 구조

| 경로 | 역할 |
|---|---|
| `src/data/site.ts` | **단일 진실 소스** — 링크(스토어·프레스킷·메일), 메뉴, 소셜, 게임 카탈로그, 연표, 페스티벌 선정. 링크·게임 정보는 여기서만 고친다 |
| `src/pages/` | `index`(Home) · `studio` · `contact` · `seferia-matrix` · `survive-together` · `404` |
| `src/components/` | `Header`(로고+메뉴+소셜) · `Footer`(Follow Us) · `Socials` |
| `src/styles/global.css` | 디자인 시스템 전체 |
| `public/images` · `public/video` · `public/icons` | 정적 에셋 |

메뉴 = Home / The Studio / Contact. Careers 없음. 별도 Press 페이지 없음(프레스는 게임 페이지 `#press` 섹션).

## 2. 디자인

- 공통 테마 = **Graphite**(근흑 `#0B0B0D` + 골드 `#C9A24B`, Fraunces 세리프 + Inter). 공통 영역(헤더·푸터·홈·스튜디오·연락처)은 골드 고정.
- **게임 고유색은 게임 페이지 `<main data-accent>`에만** — Seferia 시안 `#3FD0E0`, Survive Together 그린 `#7CC078`. 공통 영역에 게임색 금지.
- 레이아웃 레퍼런스 = moongamestudios.com(구조만 차용, 색·붓터치는 미차용).
- 헤더 로고 = `public/images/logo-stx.png`(원본 Dopamine `Assets/Images/LOGO_STX_WHITE_TITLE_TRANSPARENT.png`). 파비콘은 같은 로고의 STS 심볼.

## 3. 카피 규칙

- **회사 모토 = "Games you remember. Worlds that grow."** (Studio 히어로 + Home Our Games 태그라인).
- 회사 소개(Home·Studio)에는 **회사 이야기만** — 게임 특성(장르·런·리플레이·메카닉)은 각 게임 페이지에서만.
- **규모 어필 금지** — "N명", "N개월 만에", "1인 개발", "small team" 류 쓰지 않는다.
- **AI 사용 언급 안 함**(헤드라인·본문 모두). 스팀 상점의 AI 고지는 그대로 둔다.
- 짧게. 이력서식 문장·창업자 개인 경력·빈말(passion, crafted, worlds 남발, unforgettable) 금지.
- 게임명 표기: **"Seferia Matrix"**, **"Seferia Paritas"** — 콜론 없음(스팀 공식명 기준, 사이트 전체 통일).
- 페스티벌은 "selected"/"Top 52"로만. "award-winning" 금지(수상 아님).
- 사실 수치는 출처와 맞춘다 — Survive Together = 2–4인 협동(친구 1~3명), Android + Windows(Google Play Games on PC). Seferia 3학파(모드 아님).

## 4. 게임 카탈로그

- Our Games 정렬 = **출시순**: Survive Together → Seferia Matrix → Seferia Paritas(In Development).
- 게임 카드 이미지 = 세로 패킷샷(748:896). 클릭 = 게임 페이지(트레일러 링크 아님).
- 개발 중 게임은 `site.ts`에서 `slug` 없이 `logo`·`subtitle`·`status`로 등록 → 로고 카드 + 배지, 게임 페이지·버튼 없음.
- **이미지는 현재 스토어 에셋 기준.** 스토어가 바뀌면 사이트도 바꾼다.
  - Seferia: Steam `IStoreBrowseService/GetItems`(include_assets)로 최신 캡슐·헤더·라이브러리 히어로, `appdetails`로 스크린샷.
  - Survive Together: Google Play 상세 페이지(`hl=en`)의 이미지, 키아트 원본 = projectST `Assets/Resource/IMAGE/ST_KEY_IMAGE.png`.
  - Paritas: Seferia 공통 로고(Dopamine `Assets/Images/UI/SeferiaLogo.png`, Matrix 없는 것). 기획 정본 = `C:\Projects\Switch\docs\design\GAME_SPEC.md`.

## 5. 프레스킷

- **게임별로 따로** 두고 각 게임 페이지 `#press`에 팩트시트 + 다운로드 버튼. 링크는 `site.ts`의 `pressKit`(Seferia) / `pressKitSurvive`.
- 킷 구성 = 키아트·스크린샷·(트레일러)·스토어 텍스트(`store_text_EN.txt`)·스튜디오 소개·로고. 내용은 **현재 스토어 기준**으로 갱신.
- 드라이브에서 파일을 교체할 때는 "버전 관리 → 새 버전 업로드"로 링크 유지. 새 파일로 올렸으면 `site.ts` 링크 교체.

## 6. 작업·검증·배포

1. 수정 → `npm run build`
2. 로컬 확인: `python -m http.server 4177 --directory dist` → http://localhost:4177
3. 퍼블리시 전 점검(PC 1440 / 모바일 390):
   - 내부·외부 링크 200, 깨진 이미지·alt 누락 없음, 가로 넘침 없음, 콘솔 오류 없음
   - OG 이미지·canonical = 절대경로(`Layout.astro`가 `Astro.site`로 생성) — `og:image`에 상대경로 넣지 않기
   - 이미지 용량(큰 PNG는 JPG로), 히어로 영상은 `preload="metadata"` 유지
4. `main`에 push → GitHub Actions(`.github/workflows/deploy.yml`)가 자동 빌드·배포 (`huaffinity/survivaltaktix-site`, public)

## 7. 도메인·인프라

- 호스팅 = GitHub Pages(무료). 사용자 도메인 = `public/CNAME`(`www.survivaltaktixs.com`).
- DNS = Squarespace Domains(구 Google Domains). 사이트용 레코드는 "사용자 지정 레코드"의 `www` CNAME → `huaffinity.github.io` + `@` A × 4(`185.199.108~111.153`)뿐.
- **Google Workspace 레코드(MX `smtp.google.com`, TXT 3개)는 절대 건드리지 않는다** — 메일이 끊긴다.
- 함정: Pages HTTPS 인증서가 DNS 정상인데도 `null`로 안 걸리면 기다리지 말고 `gh api -X PUT repos/huaffinity/survivaltaktix-site/pages -F cname=` 로 비웠다가 다시 `-f cname=www.survivaltaktixs.com` → 발급 후 `-F https_enforced=true`.
