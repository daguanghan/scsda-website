# GNAME DNS 正式切换执行手册

日期：2026-07-01

适用目标：把已经审阅通过的 SCSDA 英文站从测试域名 `ultraclaw.space` 切换到正式域名：

```text
scsda.cn
www.scsda.cn
```

当前规则：除非用户明确发送以下完整确认语句，否则不得修改 `scsda.cn` DNS：

```text
确认修改 scsda.cn DNS
```

## 1. 切换前必须满足的条件

执行前必须确认：

- 用户已经审阅 `https://ultraclaw.space/`。
- 用户没有要求继续修改页面内容、图片、链接或英文表述。
- GitHub Pages 最新部署成功。
- 本地 `git status` 干净。
- `npm run build` 通过。
- `npm run claims:guard` 通过。
- `npm run health:staging` 通过。
- `npm run review:staging` 通过。
- `npm run cutover:ready` 通过。
- `npm run audit:precutover` 通过。
- 已再次展示当前 DNS 记录、计划修改记录、影响范围和回滚方式。

## 2. 切换前必须展示给用户的信息

在进入 GNAME 修改记录前，必须先向用户展示以下内容，并等待最终确认。

当前记录应类似：

```text
scsda.cn      -> hkdsn99.maohao.vip -> 154.12.23.232
www.scsda.cn  -> hkdsn99.maohao.vip -> 154.12.23.232
```

计划修改为：

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    daguanghan.github.io
```

影响范围：

- `scsda.cn` 和 `www.scsda.cn` 将停止使用旧主机 `hkdsn99.maohao.vip`。
- DNS 生效期间，部分访问者可能看到旧站，部分访问者可能看到新站。
- GitHub Pages HTTPS 证书可能需要一段时间完成签发。
- `ultraclaw.space` 可能不再作为同一 GitHub Pages 仓库的主自定义域名。

再次确认语句：

```text
请回复：确认修改 scsda.cn DNS
```

## 3. GNAME 页面操作顺序

登录 GNAME 后：

1. 进入域名列表。
2. 找到 `scsda.cn`。
3. 进入解析 / DNS 管理页面。
4. 截图或复制当前完整解析记录。
5. 不要立即删除记录。
6. 对照本手册列出当前记录和计划记录。
7. 等用户最终确认。
8. 用户确认后，再执行修改。

## 4. 推荐修改方式

建议先处理根域名 `@`：

```text
删除或替换旧的 @ / scsda.cn 指向 hkdsn99.maohao.vip 或 154.12.23.232 的记录。
新增 4 条 A 记录：
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

再处理 `www`：

```text
删除或替换旧的 www 指向 hkdsn99.maohao.vip 的记录。
新增 1 条 CNAME：
CNAME  www  daguanghan.github.io
```

TTL：

```text
如果 GNAME 提供默认 TTL，保留默认即可。
如果需要选择，建议使用 600 秒或平台默认值。
```

## 5. 不要做的动作

除非另有明确确认，不要执行以下动作：

- 不要修改 GNAME 主账号密码。
- 不要转移域名。
- 不要修改域名注册人信息。
- 不要关闭自动续费。
- 不要购买任何付费 DNS、SSL、主机或安全产品。
- 不要删除与本次切换无关的邮箱、验证、TXT 或其他记录。
- 不要修改 `daguanghan.com`。
- 不要修改 `ultraclaw.space` 的注册商信息。

## 6. GitHub Pages 侧设置

正式切换通常还需要在 GitHub Pages 设置中把自定义域名从：

```text
ultraclaw.space
```

改为：

```text
scsda.cn
```

注意：

- GitHub Pages 一个仓库通常只能绑定一个主自定义域名。
- 切换到 `scsda.cn` 后，`ultraclaw.space` 可能需要另建 staging 仓库或使用其他平台。
- 修改 GitHub Pages custom domain 也属于发布影响动作，应在正式切换步骤中记录。

## 7. 切换后验证

DNS 修改后，先运行：

```bash
dig +short scsda.cn A
dig +short www.scsda.cn CNAME
dig +short www.scsda.cn A
```

再检查网页：

```bash
curl -I https://scsda.cn/
curl -I https://www.scsda.cn/
```

最后运行：

```bash
npm run verify:production
```

浏览器人工检查：

```text
https://scsda.cn/
https://www.scsda.cn/
https://scsda.cn/en/
https://www.scsda.cn/en/
```

重点看：

- HTTPS 是否正常。
- 首页是否为新版 SCSDA 英文站。
- Leadership、Evidence、Research、Projects、Contact 是否可访问。
- 手机端是否正常。
- 是否还显示旧 IIS 页面。

## 8. 回滚方式

如果切换失败，恢复旧记录：

```text
@      -> hkdsn99.maohao.vip
www    -> hkdsn99.maohao.vip
```

或按 GNAME 原记录截图恢复所有被修改项。

恢复后验证：

```bash
dig +short scsda.cn A
dig +short www.scsda.cn
curl -I http://scsda.cn/
curl -I http://www.scsda.cn/
```

## 9. 发布记录

每次正式切换或回滚后，必须记录：

- 操作时间。
- 操作前 DNS。
- 操作后 DNS。
- GitHub 最新 commit。
- 验证结果。
- 是否需要继续等待 HTTPS 或 DNS 传播。

建议记录在 `CHANGELOG.md`、`DNS.md` 或单独的运维记录中。
