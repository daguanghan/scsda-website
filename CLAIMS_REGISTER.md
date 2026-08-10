# Claims Register

This register maps public website wording to the current source boundary. It is for cautious public communication, not for writing a self-explaining strategy page.

| Claim | Public wording | Source status | Notes |
|---|---|---|---|
| SCSDA was established in 2019 | SCSDA was established in Chongqing in 2019 | Supported by implementation report and legacy website | Safe for public use |
| SCSDA is nonprofit | nonprofit applied research academy / nonprofit applied research organization | Supported by user confirmation and implementation-report wording | Add registration document when available |
| Main institutional positioning | Research, education, and applied innovation in smart cities and sustainable development | Derived from preserved website, implementation report, and user direction | Formal homepage positioning |
| Dr Han founded and led SCSDA | SCSDA was initiated and led by Dr Daguang Han | User-confirmed; implementation report lists Dr Han as responsible person | Use formal leadership wording; avoid "one person solely completed everything" |
| Dr Han's platform role | founder and founding executive lead of the Academy's early research platform | User-confirmed and consistent with implementation-report role | Stronger appointment titles can be added when registration or board documents are added |
| Dr Han research agenda alignment | Dr Han's academic research agenda in BIM, reality capture, sensing, smart infrastructure, infrastructure resilience, and engineering assessment | User-confirmed; partly aligned with public Southeast University profile and SCSDA public materials | Use as research-direction alignment, not as a claim that every item is a funded project |
| 12 research centres/labs | 12 research centres and laboratories reported for the 2019-2023 platform-construction period | Supported by implementation report | Period-label required |
| 49 IP outputs | 49 intellectual-property outputs reported in the implementation report | Supported by implementation report | Period-label required |
| 61 papers | 61 papers reported in the implementation report | Supported by implementation report | Period-label required |
| 46 postgraduate and doctoral participants | 46 postgraduate and doctoral participants reported for the 2019-2023 construction period | Supported by implementation report | Period-label required; do not imply current enrollment |
| 45 master's-level research staff | 45 master's-level or above research personnel reported for the construction period | Supported by implementation report | Period-label required; do not imply current staffing |
| Enterprise-commissioned R&D services | RMB 18 million enterprise-commissioned R&D service projects | User-confirmed public metric; add source document when available | Use as cumulative applied-research-service indicator; do not publish confidential project details |
| Competitive research funding | RMB 20 million competitive research and platform funding | User-confirmed public metric; add source document when available | Use competitive funding wording; avoid political or official-authority framing |
| Core-team high-tech start-ups | 3 high-tech start-up ventures with controlling equity held by core team members | User-confirmed public metric; add registration evidence when available | Use platform-development context; avoid implying SCSDA owns each company unless documentary evidence is added |
| 13 incubation projects | 13 incubation projects reported in the implementation report | Supported by implementation report | Use as construction-period ecosystem record, not current business claims |
| Flexible expert count | international expert engagement | Source has summary inconsistency between 16 and 17 people | Do not publish a numeric expert-count claim until source reconciliation |
| Public platform support | externally supported platform-construction project | Supported by implementation report | Avoid political or official-authority wording |
| Enterprise-facing applied research | enterprise-facing applied research | Supported by implementation report project list | Do not publish confidential project details |
| Research directions | BIM, digital twins, smart infrastructure, MEMS sensing, AIoT, sustainable construction, and urban systems | Supported by preserved website and implementation report | Safe when written as research themes |

## Wording To Avoid

- official government academy
- government-authorized platform
- national platform
- government decision platform
- public security platform
- surveillance
- military
- confidential technology
- technology transfer to China
- all work was solely completed by one person
- 政府官网
- 官方授权
- 政府机构
- 军工
- 公共安全
- 监控
- 涉密
- 敏感技术转移
- 所有成果都由一个人独立完成

## Preferred Architecture

- Main SCSDA formal domain entry points: `scsda.cn` and `www.scsda.cn`
- Preferred English entry point: `scsda.cn/en/`
- Chinese or historical material: `scsda.cn/zh/` or `scsda.cn/legacy/`
- Dr Han's full personal CV and academic profile: `daguanghan.com`
- Temporary staging and review: `ultraclaw.space` until formal DNS cutover is approved

## 2026-08-05 Update Batch (numbers canon alignment)

| Change | Old | New | Evidence |
|---|---|---|---|
| `src/data/site.ts` metric tile | "RMB 18m enterprise-commissioned R&D services" | "100+ engineering-project validations" | Government-accepted construction-period report (实施报告 2023-04-18, verbatim "100 余个工程项目验证"); monetary figure removed per owner decision 2026-08-05 (amounts live only in application materials; the RMB 18m figure is retired — confirmed cumulative contracts ≈RMB 10m, see `1-vault-obsi/4. impact证据链/11_SCSDA数字统一口径与成果启用.md`) |
| `src/data/site.ts` metric tile | "RMB 20m competitive research funding" | "5-year government support framework" | Agreement KC-2018-061-TZ §3.6 (five-year framework; municipal S&T grant 2019 + Liangjiang matching funds per §3.6.1 and acceptance-report disbursement table); monetary figure removed per owner decision 2026-08-05 |
| `src/data/research.ts` Research Outputs items | Two RMB figures | Qualitative funding/contract lines | Same as above |
| `src/pages/leadership.astro` | "founder and founding executive lead" | "Founding Dean … named as its designated head in the Liangjiang New Area government approval of March 2019" | Approval document Yu-Liangjiang-Guan [2019] No.20 (`portfolio/grants/[04d]`), agreement KC-2018-061-TZ §5.2, acceptance report 2023 |

Rule reaffirmed: no monetary amounts anywhere on the site; the HAN-LI Chair (KU Leuven, c.2017-2020, concluded) is not presented on the site (owner decision 2026-08-05).

## 2026-08-05 Addition: /press/ (In the Media)

New page listing third-party coverage only. Sources and evidence base:
`1-vault-obsi/4. impact证据链/10_SCSDA跨国合作新闻报道佐证包.md` (full-text snapshots in `快照-SCSDA新闻/`).

| Entry | Publisher | Link status (checked Aug 2026) |
|---|---|---|
| Chongqing sets sights firmly on future | China Daily, 19 Jan 2021 | live |
| More than ten leading universities partner with Liangjiang New Area | Xinhua via Jiemian, 22 Aug 2019 | live |
| Chongqing and KU Leuven sign cooperation agreement | Chongqing Daily via CRI Online, 14 Dec 2017 | restricted outside mainland China (flagged on page) |
| Research outputs supporting the city's digital upgrade | Liangjiang New Area Administrative Committee, 4 Mar 2021 | restricted outside mainland China (flagged on page) |
| Innovation alliance launched | Hualong Net, 19 Jul 2019 | live |
| International research platforms move west | Shangyou News, 20 Sep 2019 | live |
| Postgraduate exchange at KU Leuven | Chongqing Jiaotong University, 17 Jan 2019 | live |

Editorial decisions:
- The China Daily pull quote is the talent-attraction sentence, quoted verbatim with publisher and date. The article's separate "co-director ... University of Leuven" phrasing is NOT used on the site: that chair ran c.2017-2020 and has concluded, and presenting it here would read as a current role (owner decision 2026-08-05).
- Aggregator re-posts and recruitment platforms are excluded; only original publishers or their direct syndication partners are listed.
- Restricted links are labelled on the page, with archived copies offered on request.
- Route is `/press/` so it does not collide with the `/media/` static asset directory (interview video).

## 2026-08-10 Addition: /operating-model/

New page describing how the academy is organised. Basis: `1-vault-obsi/1.1 MASTER-Info./个人资产特征_可迁移能力体系_canonical.md` §2 特征一 (platform design) and the sync specification `HDG 网站/00-workspace-admin/网站与LinkedIn同步规格_资产定位_2026-08-10.md` §3.1.

| Claim on page | Basis | Grade |
|---|---|---|
| Groups join with their own teams under a shared framework (directions, targets, funding, facilities) | Owner-confirmed operating mechanism; corroborated by academy introduction deck [04e] | 🟨 |
| Projects won by participating groups contract in the academy's name | Same | 🟨 |
| Academy directly employs a core operations team (finance, delivery, management, market, commercialisation) | Same | 🟨 |
| Mature results spin out with the academy holding equity and continuing support | Same; three registered ventures per acceptance report | 🟨 / 🟩 for the three ventures |
| Overseas centres run the same model with the academy paying the partner side | Owner-confirmed | 🟨 |
| 12 joint bilateral centres incl. 4 overseas; 45 researchers (MSc+) recruited cumulatively; 46 postgraduate/doctoral participants; 17 flexibly engaged experts | Government-accepted construction-period report, 2019-2023 | 🟩 |

Editorial decisions:
- **No partner academics or their universities are named.** An agreement with an individual researcher is not an institution-level partnership and naming could imply an endorsement that was never given.
- No monetary amounts (standing site rule since 2026-08-06).
- Figures are labelled as construction-period performance, explicitly not a claim about current staffing.
