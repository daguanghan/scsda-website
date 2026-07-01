# SCSDA 英文站人工审阅清单

日期：2026-07-01

测试站：

```text
https://ultraclaw.space/
```

正式域名目标：

```text
https://scsda.cn/
https://www.scsda.cn/
```

当前状态：测试站可审阅，正式域名尚未切换。不要修改 `scsda.cn` DNS，除非用户明确发送：

```text
确认修改 scsda.cn DNS
```

## 一句话判断标准

这个网站应当首先像一个可信的英文研究院网站，其次自然证明韩达光在研究院中的创建、组织、研究平台建设和产学研对接能力。它不应当像个人包装页，也不应当像政府官网或敏感项目平台。

## 必看页面

请至少打开并检查以下页面：

```text
https://ultraclaw.space/
https://ultraclaw.space/about/
https://ultraclaw.space/leadership/
https://ultraclaw.space/evidence/
https://ultraclaw.space/research/
https://ultraclaw.space/projects/
https://ultraclaw.space/outputs/
https://ultraclaw.space/legacy/
https://ultraclaw.space/contact/
https://ultraclaw.space/en/
https://ultraclaw.space/en/evidence/
```

## 页面审阅重点

### 首页

- 是否第一眼能看出这是 Smart Cities and Sustainable Development Academy。
- 是否明确呈现 smart cities、digital built environment、BIM、digital twins、smart infrastructure、sustainable urban systems。
- 是否专业、克制、可信，适合英国和欧洲教职申请评审者快速浏览。
- 是否不像个人广告页，也不像商业营销落地页。

### About

- 是否把研究院说成 nonprofit applied research organization / research platform。
- 是否避免暗示政府官网、官方授权、政府机构或行政身份。
- 是否解释研究院背景和研究方向，但不过度夸大当前规模。

### Leadership

- 是否清楚说明韩达光的角色：`principal responsible person`、`founding executive lead`。
- 是否能体现他负责整体规划、机构建设、研究平台组织、专家合作和产业对接。
- 是否没有写成“所有成果都由一个人独立完成”。
- 是否没有使用缺少证据支撑的更强头衔，例如 `Founding President` 或 `Chair of the Board`，除非以后补充任命或理事会证据。

### Evidence

- 是否能直接服务英国/欧洲教职申请：让评审者理解韩达光不只是发表论文，也有平台创建、研究组织、应用转化和合作网络建设经验。
- 是否把中文材料和实施报告转化成英文证据，而不是简单翻译旧站。
- 是否所有强表述都有边界，例如 public-facing、non-confidential、reported for the 2019-2023 platform-construction period。

### Research / Projects / Outputs

- 是否突出 BIM、数字孪生、AI for built environment、AIoT/MEMS sensing、smart infrastructure、sustainable cities。
- 项目是否写成 public-facing research summaries，而不是敏感项目披露。
- 是否避免 public security、military、surveillance、confidential technology、government decision platform 等风险表述。

### Legacy

- 是否清楚说明旧中文站内容是 preserved public historical material。
- 是否没有把旧站内容直接当作当前规模或当前组织状态。

### Contact

- 是否只放适合公开的邮箱、ORCID、Google Scholar、东南大学个人页等链接。
- 是否没有放敏感手机号、身份证件、登录账号、后台入口或付款信息。

## 通过条件

可以批准正式域名切换的条件：

- 网站整体定位正确：机构网站在前，韩达光证据层在中，不是个人包装页。
- 英文表达专业可信，适合英国/欧洲高校评审者阅读。
- 首页、Leadership、Evidence 三个页面能共同支撑韩达光的教职申请叙事。
- 没有政府官网、官方授权、军工、公共安全、监控、涉密、敏感技术转移等误读风险。
- 手机和电脑上都能正常阅读。
- 图片、导航、主要链接没有明显错误。

## 需要退回修改的情况

如果发现以下任何问题，先不要切换 `scsda.cn`：

- 某个事实不准确，或者需要更谨慎表达。
- 语气太像自我宣传，不像研究机构资料。
- 页面看起来不够专业，或者移动端排版明显有问题。
- 某个链接、图片、页面打不开。
- 有任何可能让英国高校误解为政府背景、敏感平台或夸大机构规模的表述。

## 给 Codex 的回复模板

如果需要修改，请直接回复：

```text
请修改 SCSDA 英文站。问题如下：
1. [页面 URL 或页面名]：[问题]
2. [页面 URL 或页面名]：[问题]
修改后重新发布到 ultraclaw.space，不要修改 scsda.cn DNS。
```

如果内容通过，但暂时不切正式域名，请回复：

```text
SCSDA 英文站内容通过，暂不修改 scsda.cn DNS。
```

如果内容通过，并且可以切换正式域名，请回复：

```text
确认修改 scsda.cn DNS
```

## 切换前必须再次确认

在正式 DNS 修改前，Codex 必须再次展示：

- 当前 `scsda.cn` 和 `www.scsda.cn` DNS 记录。
- 计划修改为哪些 GitHub Pages 记录。
- 影响范围和可能的 DNS 生效时间。
- 回滚方式。

只有再次确认后，才进入 GNAME DNS 修改步骤。
