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
| Flexible expert count | visiting professorship network of 17 senior experts engaged under institutional agreements | **Reconciled 2026-08-20**: acceptance report lines 63/65/173/178 give 17 flexibly engaged experts, of whom 16 hold professorial rank — the two figures are a total and a subset, not a contradiction. Canon: `4. impact证据链/11_SCSDA数字统一口径与成果启用.md` | Publishable. Wording must use *visiting professorship network under institutional agreements*; do NOT use talent/recruitment-programme framing |
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

## 2026-08-10 Addition: image upgrade + advisory-structure section

**New images** (all from the Academy's own WeChat-published materials or its introduction deck; resized/optimised, no partner logos, no team face-grids, no monetary or spec-sheet content):

| File | Source | Used on |
|---|---|---|
| centres-development-wall.jpg | Academy WeChat library (044) | operating-model |
| mems-sensing-centre.jpg | Academy WeChat library (042) | operating-model |
| field-engineering-work.jpg | Academy WeChat library (063) | projects |
| recycled-materials-pilot.jpg | Academy introduction deck [04e] image111 | projects |
| mems-sensor-board.jpg | Academy WeChat library (046) | outputs |
| sensor-calibration-equipment.jpg | Academy WeChat library (045) | (reserve) |
| research-exhibition.jpg / lab-engagement.jpg / academy-launch.jpg | already in repo, previously unused | outputs / leadership / press |

**Advisory-structure section on /operating-model/**: committee of 30+ experts, international and Chinese co-chairs, five expert groups (digital transformation; applied AI; intelligent sensing; intelligent construction and operations; green and low-carbon). Source: the Academy's own published committee article (WeChat, 2023). **Names of chairs and members deliberately not republished on this site**; the structure is described, the roster stays on the Academy's own channel.

Editorial exclusions this round: 2019 signing photo (only 555px available — below quality bar); partner-logo imagery (implies institution-level endorsement); personnel ID portraits.

## 2026-08-11 Image substitution (owner request)

Removed from the site and deleted from the repo: `lab-engagement.jpg` (leadership) and `research-exhibition.jpg` (outputs) — both showed clearly identifiable faces of visitors/partners. Replacements: `sensor-calibration-equipment.jpg` (WeChat library 045, equipment only) on leadership with caption reworked to "Leadership close to the laboratory"; `green-materials-centre.jpg` (WeChat library 051, centre nameplates, no people) on outputs with the card retitled to sustainable-materials research, linking to the recycled-materials IP record.

## 2026-08-12 Addition: working principle on /research/

New section "Standardise the data, not the algorithm" on the research page (both language routes). Basis: the Academy's own digital-research emphasis on information structures, data quality and interoperability, and the founding dean's standards roles (ISO/TC 59/SC 13 JWG 14 committee member; deputy chair, standards digitalisation committee, CECS — both 🟩, held since 2023). The reasoning stated — algorithms are replaced continuously while standardised data is the shared input for later generations — is a position, not a factual claim about any project, and carries no client, monetary or technical-content exposure.


## 2026-08-20 Public-face calibration (T3) — subtraction and addition

Basis: MASTER `§GEORISK 四bis` (three-tier exposure model) and `§GEORISK 六` (public-network layer, strictest tier), owner ruling 2026-08-20. The public face is now held to a **stricter** standard than targeted application materials, because it is permanently indexable and read without context by any party.

### Wording removed (subtraction)

| Was | Now | Why |
|---|---|---|
| `Overseas centres run the same model` | `Centres with European partners run the same model` | `offshore` / `overseas` / `abroad` are prohibited English on the public face — they read as an offshoring posture rather than a research network |
| `four of them overseas` | dropped; replaced by `each formed under a dated signed agreement with its co-founding partner` | Same prohibition. The count itself (4 of 12) remains canon-correct and stays available for targeted materials |
| `partner institutions abroad` | `European partner institutions` | Same prohibition |
| `Silicon Photonics Sensing Civil Engineering Laboratory` | `Optical Sensing for Civil Engineering Laboratory (with Ghent University)` | `§GEORISK 六` mandates the optical-sensing naming; the silicon-photonics rendering pulls a civil-engineering laboratory into a semiconductor frame it does not belong in, and doing so also exposes the European partner |
| `seventeen flexibly engaged senior experts` | `a visiting professorship network of seventeen senior experts engaged under institutional agreements` | `§GEORISK 二`: talent/recruitment-programme verbs are a targeted term in Western security narratives. The underlying arrangement is visiting professorships under institutional agreements, which is both safer and more accurate |

### Wording added (addition)

| Claim | Public wording | Source status | Notes |
|---|---|---|---|
| European agreement network | four European universities across three countries, instruments signed between December 2019 and December 2021 | Supported by the government-accepted implementation report (centre agreement ledger, each row carrying an agreement date and a formation decision) | 🔴 State as **4 universities / 3 countries**. Never merge with any wider network count — the agreement layer and the network layer are different objects. Partner names are **not** listed on this site, consistent with the standing non-naming rule; they appear on daguanghan.com, which speaks in a personal voice |
| Agreements not contacts | governed by signed agreements rather than informal contacts | Same source | This is the differentiator worth stating. It is what allows a partner to commit staff, and it is why the arrangement survived personnel changes on both sides |
| Two-way substance | joint publications, four signed tripartite agreements for joint master's and doctoral supervision, and a shared submission to a European national research council | Implementation report: tripartite agreements recorded against the construction-waste centre; joint submission recorded in the joint-application schedule (2021-05-19) | 🚫 Do not write *supervisor of record*. 🚫 Do not name the funding body's project title — it sits in a restricted technical area |
| Circular-economy centres | two centres established March 2020 with a European research institute working on zero-waste construction | Implementation report centre ledger (both formed 2020-03-13) | 🚫 The partner institute is **not named** on either site (owner decision D1: the chair carrying his surname is concluded and stays off both websites). Elevated this round from a sustainability heading to a load-bearing research direction |
| ICIC governance role | Vice-President of the International Innovation Cooperation Center (ICIC), chaired by Professor Michael Kraft of KU Leuven | Owner-confirmed; organisation records | 🚫 No clickable link (the domain has lapsed, and an earlier unrelated occupant of the same domain is in the Wayback record). 🚫 No board roster. 🚫 No site marketing figures |

### Deliberately retained

- **China Daily verbatim quotations** keep the word *overseas* where the newspaper used it. A quotation that is edited is no longer a quotation, and third-party corroboration is worth more than internal consistency on one word.
- **MEMS sensing** stays as a sensing method in civil-monitoring context. What is excluded is the semiconductor frame around it: device counts, fabrication, and any technology-import narrative.
- **Microsystems / micro-nano centre names** stay. They are the registered names of civil-facing research centres, and renaming them would misdescribe the record.
