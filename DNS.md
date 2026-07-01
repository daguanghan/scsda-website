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
https://scsda.cn/en/      English academic-facing site
https://scsda.cn/zh/      concise Chinese institutional page
https://scsda.cn/legacy/  preserved historical Chinese archive
```

The final production move should not be done until the user approves the `ultraclaw.space` review deployment.
