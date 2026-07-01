# DNS Notes

No DNS change should be made without recording the current records, planned changes and expected impact.

## Review Domain: ultraclaw.space

Target deployment platform:

- GitHub Pages

Common GitHub Pages DNS records:

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    daguanghan.github.io
```

Actual DNS must be verified in the domain registrar before any edit.

## Future Domain: scsda.cn

Recommended final structure:

```text
https://scsda.cn/         formal domain entry point
https://scsda.cn/en/      canonical English academic-facing site
https://scsda.cn/zh/      concise Chinese institutional page
https://scsda.cn/legacy/  preserved historical Chinese archive
```

The final production move should not be done until the user approves the `ultraclaw.space` review deployment.

## 2026-07-01 Current scsda.cn Read-Only Audit

Read-only checks showed the current formal domain is still on the legacy host:

```text
scsda.cn              A/CNAME chain -> hkdsn99.maohao.vip -> 154.12.23.232
www.scsda.cn          CNAME/A chain -> hkdsn99.maohao.vip -> 154.12.23.232
Nameservers           a.share-dns.com, b.share-dns.net
HTTP                  Microsoft-IIS/8.5 legacy host returns 200
HTTPS                 connection reset by peer on both apex and www
```

No DNS edits were made during this audit.

## Proposed Future GitHub Pages Cutover

GitHub's current documentation recommends adding the custom domain in the
repository first, then updating DNS. DNS changes can take up to 24 hours to
propagate. GitHub Pages can automatically redirect between an apex domain and
the `www` subdomain when both sides are configured correctly.

Recommended production custom domain for the repository:

```text
scsda.cn
```

Recommended DNS records after user approval:

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    daguanghan.github.io
```

Records to replace or remove after approval:

```text
@      -> hkdsn99.maohao.vip
www    -> hkdsn99.maohao.vip
```

Expected impact:

- `scsda.cn` and `www.scsda.cn` will stop serving the legacy IIS host and start
  serving the new GitHub Pages site after DNS propagation.
- English content will be available both at the root path and under `/en/`;
  `/en/` is the preferred citation path for academic use, while the root path
  remains an easy formal-domain entry point.
- GitHub Pages HTTPS certificate provisioning may take up to about an hour after
  the custom domain and DNS are accepted.
- During propagation, some visitors may see the old site and others may see the
  new site.
- The current `ultraclaw.space` review domain may need to be removed from this
  repository because a GitHub Pages repository can use one primary custom domain.

Rollback:

```text
Restore @ and www records to hkdsn99.maohao.vip, or rebind GitHub Pages custom
domain back to ultraclaw.space while DNS changes propagate.
```

Do not execute the cutover until the user explicitly confirms:

```text
确认修改 scsda.cn DNS
```
