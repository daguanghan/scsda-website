# SCSDA Formal Domain Cutover Checklist

This checklist is for moving the reviewed English SCSDA site from
`ultraclaw.space` to `scsda.cn` and `www.scsda.cn`.

Do not execute this checklist until the user explicitly says:

```text
确认修改 scsda.cn DNS
```

## 1. Pre-Cutover Checks

- [ ] Confirm user has reviewed `https://ultraclaw.space/`.
- [ ] Confirm user has reviewed `REVIEW_GUIDE.md` acceptance and rejection criteria.
- [ ] Confirm latest GitHub Actions deployment is successful.
- [ ] Confirm local `npm run build` passes.
- [ ] Run `npm run audit:precutover` and save the output.
- [ ] Confirm `git status` is clean.
- [ ] Re-check current DNS records in GNAME before editing.
- [ ] Record screenshots or exported DNS table before making changes.

## 2. GitHub Pages Custom Domain

Current review domain:

```text
ultraclaw.space
```

Production domain to bind:

```text
scsda.cn
```

Expected note:

- GitHub Pages normally supports one primary custom domain per repository.
- Moving to `scsda.cn` may remove `ultraclaw.space` from this repository.
- If staging still needs to be kept, a separate staging repository or platform
  should be configured later.

## 3. DNS Records To Apply

Replace current `hkdsn99.maohao.vip` records with GitHub Pages records.

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    daguanghan.github.io
```

## 4. Post-Cutover Verification

Check DNS:

```bash
dig +short scsda.cn A
dig +short www.scsda.cn CNAME
dig +short www.scsda.cn A
```

Check site:

```bash
curl -I https://scsda.cn/
curl -I https://www.scsda.cn/
```

Browser-check:

- [ ] `https://scsda.cn/`
- [ ] `https://www.scsda.cn/`
- [ ] `https://scsda.cn/en/`
- [ ] `https://www.scsda.cn/en/`
- [ ] Homepage
- [ ] Leadership
- [ ] Evidence
- [ ] Research
- [ ] Projects
- [ ] Contact
- [ ] HTTPS lock
- [ ] Mobile view

## 5. Expected Propagation

- DNS propagation can take up to 24 hours.
- GitHub Pages HTTPS provisioning can take up to about an hour after DNS is
  accepted.
- Some visitors may temporarily see the old IIS site while others see GitHub
  Pages.

## 6. Rollback

If the new site fails after cutover:

```text
Restore @ and www records to hkdsn99.maohao.vip.
```

Then verify:

```bash
dig +short scsda.cn A
dig +short www.scsda.cn
curl -I http://scsda.cn/
curl -I http://www.scsda.cn/
```
