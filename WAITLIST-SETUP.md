# Waitlist → Google Sheet

The form posts to `/api/waitlist` (server-side), which forwards the row to a Google
Apps Script web app bound to your sheet. The webhook URL never reaches the browser.

## 1. Create the sheet + script

1. Create a Google Sheet (any name). The script creates a `Waitlist` tab with headers
   automatically on the first signup.
2. **Extensions → Apps Script**. Delete the placeholder code and paste the contents of
   [`scripts/google-sheet-waitlist.gs`](scripts/google-sheet-waitlist.gs).
3. Optional but recommended: set `SHARED_SECRET` at the top of that script to a long
   random string.
4. **Deploy → New deployment → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Authorize when prompted, then copy the `.../exec` URL.

> The "Anyone" setting is required — Apps Script needs to accept an unauthenticated
> POST from your server. If it's set to anything else, Google returns an HTML sign-in
> page and the route will (correctly) report a failure instead of a false success.

## 2. Local

Fill in `.env.local`:

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfy.../exec
GOOGLE_SHEETS_SHARED_SECRET=the-same-string-as-in-the-script
```

Restart `bun run dev` — env vars are only read at boot.

## 3. Vercel

Add the same two variables under **Settings → Environment Variables** (Production +
Preview), plus:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

That last one drives canonical and Open Graph URLs; without it they fall back to the
per-deployment `*.vercel.app` hostname.

Redeploy after adding env vars — existing deployments don't pick them up.

## Behaviour

| Case | User sees | HTTP |
|---|---|---|
| Valid new email | "Thank you. We'll be in touch before launch." | 200 |
| Email already in sheet | Same success message (no duplicate row) | 200 |
| Invalid email | "Please enter a valid email address." | 400 |
| Webhook unset | "Signups are temporarily unavailable." | 503 |
| Webhook down / rejects / returns HTML | "We couldn't save your spot. Please try again." | 502 |

Emails are trimmed and lower-cased before storage. Each row records timestamp, email,
source (`hero` or `final-cta`), and user agent. Failures are logged server-side with
the specific cause — check the Vercel function logs.

## Editing the script later

Apps Script keeps serving the deployed version. After changing the `.gs` file use
**Deploy → Manage deployments → edit → Version: New version**, or the URL will keep
running the old code.
