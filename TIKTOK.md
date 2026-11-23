# TikTok posting checklist — bring-the-humans-03

Video file to post: `ad.mp4` from the build workspace
(`~/workspace/makefun/bring-the-humans-03/work/ad.mp4`, 24.0 s,
1080×1920, 1.3 MB). Post it as-is — do not re-encode, crop, or add
TikTok stickers/text over the brand badge or the end card.

## Account

- A public TikTok account (Private account OFF), kept public and
  viewable in the US until the results are out.
- Post at or after the competition opens (22 Nov 2026 02:00 WIB) and
  before the deadline (25 Nov 2026 02:00 WIB).

## Caption (copy exactly, filling in the play code)

```
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
Play code: `makefun-shrub-spire-maple`
Join with my referral link: https://make.fun/r/rcye5das
```

The caption must carry all three: `$500 bounty`, `make.fun` written
out, and the play code (or put the play code in the account's bio
instead — the caption route above is preferred, since a bio can be
missed). Do not buy views, promote the video (TikTok Promote), or
drive views from accounts you control — only real people's views
count, and fake views disqualify the entry. Sharing it and asking
people to watch is fine.

## After posting

1. Open the video in a browser (not the app's short share link) and
   copy its full address: `https://www.tiktok.com/@<handle>/video/<id>`
   (id digits only).
2. Put that address in this repo's `VIDEO.json`, replacing the
   placeholder.
3. Run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   and confirm `out/VIDEO.json` matches.
4. Run the kit's `makefun check`, then submit — only after the boss
   says so.
