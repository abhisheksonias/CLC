# DMARC Record Setup Guide for CLC Law

## Overview
DMARC (Domain-based Message Authentication, Reporting & Conformance) is an email authentication protocol that helps protect your domain from email spoofing and phishing attacks. This is a **DNS-level configuration** that needs to be set up in your domain's DNS settings.

## Prerequisites
Before setting up DMARC, ensure you have:
1. **SPF Record** configured for your domain
2. **DKIM Record** configured for your domain
3. Access to your domain's DNS management panel

## Step-by-Step DMARC Setup

### Step 1: Access DNS Management
1. Log in to your domain registrar or DNS hosting provider (e.g., GoDaddy, Namecheap, Cloudflare, etc.)
2. Navigate to DNS Management / DNS Settings

### Step 2: Create DMARC Record
Add a new TXT record with the following details:

**Record Type:** `TXT`

**Host/Name:** `_dmarc`

**Value/Content:** 
```
v=DMARC1; p=none; rua=mailto:dmarc-reports@clclaw.in; ruf=mailto:dmarc-forensics@clclaw.in; pct=100; sp=none; aspf=r;
```

### Step 3: DMARC Policy Explanation

**Initial Policy (Recommended for Testing):**
```
v=DMARC1; p=none; rua=mailto:dmarc-reports@clclaw.in; ruf=mailto:dmarc-forensics@clclaw.in; pct=100; sp=none; aspf=r;
```

**Policy Values:**
- `v=DMARC1` - DMARC version (always DMARC1)
- `p=none` - Policy mode (start with "none" for monitoring, then move to "quarantine" or "reject")
- `rua=mailto:dmarc-reports@clclaw.in` - Email address for aggregate reports
- `ruf=mailto:dmarc-forensics@clclaw.in` - Email address for forensic reports (optional)
- `pct=100` - Percentage of emails to apply policy to (100 = all emails)
- `sp=none` - Subdomain policy (same as main domain policy)
- `aspf=r` - SPF alignment mode (relaxed)

### Step 4: Policy Progression

**Phase 1: Monitoring (Recommended First Step)**
```
v=DMARC1; p=none; rua=mailto:dmarc-reports@clclaw.in; pct=100;
```
- Monitor email authentication for 2-4 weeks
- Review reports to ensure legitimate emails pass

**Phase 2: Quarantine (After Monitoring)**
```
v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@clclaw.in; pct=100;
```
- Emails failing DMARC will be quarantined (sent to spam)
- Continue monitoring for 2-4 weeks

**Phase 3: Reject (Final Step)**
```
v=DMARC1; p=reject; rua=mailto:dmarc-reports@clclaw.in; pct=100;
```
- Emails failing DMARC will be rejected
- Only implement after thorough testing

### Step 5: Verify DMARC Record
After adding the record, verify it using:
- **Online Tools:**
  - https://mxtoolbox.com/dmarc.aspx
  - https://www.dmarcanalyzer.com/
  - https://dmarcian.com/dmarc-inspector/

**Command Line (if you have access):**
```bash
nslookup -type=TXT _dmarc.clclaw.in
```

### Step 6: Monitor Reports
1. Set up email addresses to receive DMARC reports:
   - `dmarc-reports@clclaw.in` - Aggregate reports (daily/weekly)
   - `dmarc-forensics@clclaw.in` - Forensic reports (real-time, optional)

2. Use DMARC report analyzers:
   - https://dmarcian.com/
   - https://www.dmarcanalyzer.com/
   - https://postmarkapp.com/dmarc

## Important Notes

1. **TTL (Time To Live):** Set to 3600 seconds (1 hour) for faster propagation during testing, then increase to 86400 (24 hours) for production

2. **Email Addresses:** Replace `dmarc-reports@clclaw.in` and `dmarc-forensics@clclaw.in` with actual email addresses you can monitor

3. **Testing Period:** Always start with `p=none` and monitor for at least 2-4 weeks before moving to stricter policies

4. **Third-Party Services:** If you use email marketing services (Mailchimp, SendGrid, etc.), ensure they are properly authenticated with SPF and DKIM

5. **Subdomains:** The `sp=none` setting applies the same policy to subdomains. Adjust if needed

## Common Issues

**Issue:** DMARC reports not being received
- **Solution:** Check spam folder, verify email addresses exist, ensure DNS propagation is complete

**Issue:** Legitimate emails being rejected
- **Solution:** Review SPF and DKIM records, check third-party email services, adjust policy to `quarantine` or `none`

**Issue:** DNS propagation delay
- **Solution:** Wait 24-48 hours for full propagation, use multiple DNS checkers to verify

## Additional Resources

- [DMARC.org Official Documentation](https://dmarc.org/)
- [Google DMARC Setup Guide](https://support.google.com/a/answer/2466563)
- [Microsoft DMARC Guide](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/use-dmarc-to-validate-email)

## Support
For technical assistance with DMARC setup, contact your IT administrator or DNS provider support.

---

**Last Updated:** November 2025
**Domain:** clclaw.in

