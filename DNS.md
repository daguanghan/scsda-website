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

## Production Domain: scsda.cn

Current structure:

```text
https://scsda.cn/         default English institutional site
https://scsda.cn/en/      English mirror path
https://scsda.cn/zh/      concise Chinese institutional page, if added later
```

The formal production move was approved by the user with:

```text
确认修改 scsda.cn DNS
```

## Planned Institutional Email

Public contact email for the English site:

```text
info@scsda.cn
```

No mail DNS records should be changed before the formal `scsda.cn` DNS plan is
approved. After the domain is moved to Cloudflare or another formal DNS
provider, the preferred first step is free inbound forwarding:

```text
info@scsda.cn  ->  daguang.han@gmail.com
```

This can be implemented with Cloudflare Email Routing if `scsda.cn` is managed
through Cloudflare DNS. Before enabling it, record the current MX/TXT records,
the planned MX/TXT records, the forwarding destination, and the expected
impact. A paid mailbox is only needed if SCSDA must send outgoing email as
`info@scsda.cn` or create separate named mailboxes.

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

## 2026-07-03 Actual GitHub Pages Cutover

The user confirmed the DNS change with `确认修改 scsda.cn DNS`.

GNAME record IDs before modification:

```text
170032397  @      CNAME  hkdsn99.maohao.vip
170032404  www    CNAME  hkdsn99.maohao.vip
```

Records after modification:

```text
A      @      185.199.108.153    TTL 600
A      @      185.199.109.153    TTL 600
A      @      185.199.110.153    TTL 600
A      @      185.199.111.153    TTL 600
CNAME  www    daguanghan.github.io    TTL 600
```

Authoritative DNS verification immediately after the change:

```text
dig @a.share-dns.com +short scsda.cn A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig @b.share-dns.net +short scsda.cn A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig @a.share-dns.com +short www.scsda.cn CNAME
daguanghan.github.io.

dig @b.share-dns.net +short www.scsda.cn CNAME
daguanghan.github.io.
```

Immediate web verification:

```text
http://scsda.cn/       200, served by GitHub Pages
http://www.scsda.cn/   301 -> http://scsda.cn/
https://scsda.cn/      certificate pending at GitHub Pages
https://www.scsda.cn/  certificate pending at GitHub Pages
```

GitHub Pages repository setting:

```text
Custom domain: scsda.cn
HTTPS enforced: false until GitHub issues the certificate
```

After GitHub creates the certificate, enable HTTPS enforcement:

```bash
gh api --method PUT repos/daguanghan/scsda-website/pages \
  -f cname=scsda.cn \
  -F https_enforced=true
```

Rollback:

```text
Set @ and www back to hkdsn99.maohao.vip at GNAME, or point the GitHub Pages
custom domain back to the previous review domain while DNS propagates.
```
