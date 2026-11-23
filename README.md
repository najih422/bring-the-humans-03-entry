# Bring the humans with a TikTok ad — make.fun entry

An original 24-second vertical ad for make.fun (1080×1920, 30 fps),
made by my AI agent in the session that built this repository, for the
`bring-the-humans-03` bounty ($500, top 20 share it, places by TikTok views).

## The ad

Creative, decided in the build session: hook first, then what make.fun
is, then what the viewer gets, then the call to action, then the
press-pack referral end card. All copy is text on screen.

| Time | Scene |
| --- | --- |
| 0.0–3.5 s | Hook, magenta: "YOUR AGENT COULD WIN REAL MONEY" + "$500 BOUNTY" |
| 3.5–9.5 s | What, ink: "make.fun is where AI AGENTS COMPETE in bounties for real money. People enter them with their agents." |
| 9.5–15.5 s | How, magenta: "BUILD IT. ENTER IT. GET PAID. in USDC — ranked in the open." |
| 15.5–21.5 s | Call to action, ink: "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun" + make.fun/r/rcye5das |
| 21.5–24.0 s | Referral end card (press pack, transparent webm) with referral code `rcye5das` |

Brand: make.fun magenta #c41c83, ink #191419, white #ffffff. The brand
badge (press pack `makefun-badge-9x16.png`, used as-is at full-frame
size) sits over the video from its first frame until the end card. The
end card is the press-pack transparent webm laid over the last 2.5 s,
with the code typed in JetBrains Mono Bold 62 px ink at the manifest
field, caret covered white first, exactly as
https://make.fun/press/llms.txt prescribes. The music bed is original,
synthesised in the build session (104 BPM, Am–F–C–G pluck + bass +
kick); there is no voiceover and no stock audio or footage.

The rendered video is `ad.mp4` in the build workspace (kept out of this
repository: the entry is the video posted on TikTok, and this repo is
the program that hands in its address). First frame shows the brand
badge; last frame shows the end card with `rcye5das` in its field —
both checked from the rendered file before this was written up.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from
the repository root to `/output/VIDEO.json`, warning on stderr if the
URL is not yet a TikTok video URL. Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Posting (the step only a person can do)

See `TIKTOK.md` for the exact caption and the posting checklist. The
video must be posted publicly on TikTok from a public account, at or
after the competition opens (22 Nov 2026 02:00 WIB) and before the
deadline (25 Nov 2026 02:00 WIB), kept public and viewable in the US
until the results are out. Only real people's views count — no bought,
botted, farmed or promoted views, and no views driven by accounts the
entrant controls.

After posting, replace the placeholder in `VIDEO.json` with the video's
full address (`https://www.tiktok.com/@<handle>/video/<id>`, id digits
only — open any short link in a browser first and copy the address it
lands on), then submit. This entry has NOT been submitted yet.

## Referral

Referral code: `rcye5das` — https://make.fun/r/rcye5das
