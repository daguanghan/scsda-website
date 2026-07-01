# SCSDA 英文站当前状态

日期：2026-07-01

## 当前结论

SCSDA 英文站已经完成重建、GitHub 管理和测试域名发布。当前仍处于测试站审阅阶段，正式域名 `scsda.cn` 和 `www.scsda.cn` 尚未切换。

测试站：

```text
https://ultraclaw.space/
```

GitHub 仓库：

```text
https://github.com/daguanghan/scsda-website
```

当前测试站线上内容关键提交：

```text
e1ab73c docs: align future English citation path
```

后续如果只是文档或审阅记录更新，GitHub 最新提交号可能晚于该基线。
正式切换前以 `npm run cutover:ready` 和 `npm run audit:precutover`
的实时输出为准。

当前稳定测试标签：

```text
staging-ready-2026-07-01-v3
```

该标签用于标记正式 DNS 切换前的当前测试站可审阅源码版本，便于后续回滚或比较。
旧标签 `staging-ready-2026-07-01` 和 `staging-ready-2026-07-01-v2`
保留为早期审阅记录。

## 网站定位

当前英文站采用的定位是：

```text
SCSDA 是英文机构型研究平台网站。
韩达光的作用是作为研究院内部的创建、组织、平台建设和研究领导证据层，而不是把 scsda.cn 做成个人包装站。
```

这个定位更适合英国和欧洲教职申请，因为它先建立机构可信度，再自然证明韩达光在研究院建设、研究组织、产学研对接、BIM / 数字孪生 / 智慧基础设施 / 可持续城市方向中的实际经验。

## 已完成内容

- 已用 GitHub 仓库管理源码和发布记录。
- 已发布到 `https://ultraclaw.space/` 供审阅。
- 已建立英文首页、About、Leadership、Evidence、Research、Projects、Outputs、Legacy、Contact 页面。
- 已保留 `/en/` 英文路径，并将其作为未来英国/欧洲教职申请材料中更清晰的英文引用路径。
- 已使用旧中文网站的公开材料、照片和研究院实施报告内容进行重构。
- 已加入 Impeccable 和 Taste Skill 的设计上下文与反模板检查。
- 已加入 `CLAIMS_REGISTER.md`，约束强表述和风险表述。
- 已加入 `npm run claims:guard`，检查高风险表述是否被正向使用。
- 已加入 `npm run cutover:ready`，正式切换前一键只读检查。
- 已建立中文人工审阅清单和中文 GNAME DNS 切换手册。

## 当前验证命令

正式切换前建议运行：

```bash
npm run cutover:ready
```

该命令会依次检查：

```text
npm run check
npm run build
npm run claims:guard
npm run health:staging
npm run review:staging
npm run audit:precutover
```

该命令只读，不会修改 DNS、GitHub Pages 或 GNAME。

## 当前正式域名状态

只读审计显示，正式域名仍指向旧主机：

```text
scsda.cn      -> hkdsn99.maohao.vip -> 154.12.23.232
www.scsda.cn  -> hkdsn99.maohao.vip -> 154.12.23.232
```

这符合当前阶段要求，因为用户尚未确认正式切换。

## 不能做的事

除非用户明确发送 `确认修改 scsda.cn DNS`，不要执行以下动作：

- 不要修改 `scsda.cn` 或 `www.scsda.cn` DNS。
- 不要删除旧记录。
- 不要修改 GNAME 主账号密码。
- 不要转移域名。
- 不要购买任何付费服务。
- 不要修改注册人信息或自动续费设置。

## 下一步

用户需要先人工审阅：

```text
https://ultraclaw.space/
```

建议同时参考：

```text
USER_REVIEW_CHECKLIST_ZH.md
```

如果需要修改内容，请回复：

```text
请修改 SCSDA 英文站。问题如下：
1. [页面或 URL]：[问题]
2. [页面或 URL]：[问题]
修改后重新发布到 ultraclaw.space，不要修改 scsda.cn DNS。
```

如果内容通过但暂时不切正式域名，请回复：

```text
SCSDA 英文站内容通过，暂不修改 scsda.cn DNS。
```

如果内容通过并准备正式切换，请回复：

```text
确认修改 scsda.cn DNS
```

收到该确认后，下一步仍不是直接修改 DNS，而是先再次展示当前记录、计划记录、影响范围和回滚方式，然后再进入 GNAME 修改步骤。
