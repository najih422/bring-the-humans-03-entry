// A bring-the-humans-03 entry (Node 22, standard library only): it copies
// VIDEO.json from the repository root to /output/VIDEO.json, where the gate
// reads it. That is all the program has to do. The entry is the video
// itself: an original short vertical ad for make.fun, posted publicly on
// TikTok from a public account with the bounty's line and the entrant's
// play code in its caption (or the code in the account's bio). VIDEO.json
// names the video, and the house reads the video's views from TikTok.
// Nothing this program writes about the video is scored.
//
// The ad shows make.fun's brand badge (the mascot mark and the make.fun
// wordmark) from its first frame and ends on make.fun's referral end card
// with the entrant's own referral code in its field, both from make.fun's
// press pack and used as they are, as is every make.fun mark, wordmark or
// colour in it: https://make.fun/press/manifest.json lists the files and
// https://make.fun/press/llms.txt is the guide for agents. Fetch them
// when you make the ad; this repository holds no copy of them. No check
// reads the video for them: make.fun's admins may disqualify a video
// without them.
//
// The video is the v11 "While You Sleep" cut (work/ad11.mp4, 24.0 s,
// 1080x1920): same story and timeline as v9/v10, with two fixes the
// boss ordered. (1) DETAIL: the HOW TO JOIN tutorial was too thin —
// each step now carries a detail sub-line taken from the RULES
// (make an account, link your AI agent, your agent builds the entry
// and you win real money); the voice tutorial segment is now
// "Buka mekfan, bikin akun, sambungin agen lu, pilih hadiah."
// (2) NO MORE VOICE COLLISION: v10 had a real overlap — s4 ended at
// 13.26 s while s5 started at 12.7 s, and s6/s7 nearly touched. v11
// retimed all 6 segments with >=0.5 s of true silence between them
// (verified on the voice-only mix: every gap reads -91 dB, digital
// silence) and dropped s7 (its line is already on screen in the
// morning scene). Segments (voice vg_id_m27, Indonesian): s1 @0.3
// "Agen lu kerja, sementara lu tidur." / s2 @3.8 "Dia kerjain lomba
// satu-satu, dan saldo lu naik terus." / s3 @9.0 "Sempat eror, tapi
// dia coba lagi." / s4 @11.9 "Sampai lima ratus dolar." / s5 @14.63
// "Buka mekfan, bikin akun, sambungin agen lu, pilih hadiah." /
// s6 @20.13 "Pagi, hape bunyi: agen lu dapet duit." Voice windows
// -18 to -20 dB. Voice in work/voice11/ (s5, s6 new) + work/voice10/
// (s1-s4 reused); mix in work/mix11.wav (music9: buzz 9.0 s, ding
// 17.9 s); video rendered by work/render11.py (frames11/).
// The v10 cut (work/ad-v10-voice-id.mp4), v9 (work/ad-v9-tutorial.mp4),
// v8 (English voice, work/ad-v8-english.mp4), v7 (Indonesian voice,
// Helio, work/ad-v7-voice.mp4), v6 without voice (work/ad-v6-sleep.mp4),
// v5 race cut (work/ad-v5-race.mp4), v4 (work/ad-v4.mp4), v3
// (work/ad-v3.mp4), v2 (work/ad-v2.mp4) and v1 (work/ad-v1.mp4) are
// kept as backups; ad.mp4 is the v11 cut.
//
// The VIDEO.json this entry ships holds a placeholder address until the
// video is posted: replace it with the video's full address before
// submitting, https://www.tiktok.com/@<handle>/video/<id>, id digits only.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail loudly on a placeholder or malformed VIDEO.json instead of handing
// the gate a URL it will refuse: the address must be a TikTok video URL,
// https://www.tiktok.com/@<handle>/video/<id>, id digits only.
const videoPath = join(BOT_DIR, 'VIDEO.json');
const video = JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown };
if (typeof video.url !== 'string' ||
    !/^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+$/.test(video.url)) {
  // Warn, do not exit: the gate is the one that refuses a placeholder
  // URL, and main.ts must still copy VIDEO.json so the gate can read it.
  console.error(`WARNING: VIDEO.json does not hold a TikTok video URL yet: ${String(video.url)}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Verify the copy landed byte-identical, so a silent partial write can
// never reach the gate: read both files back and compare them.
const written = readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8');
const source = readFileSync(videoPath, 'utf8');
if (written !== source) {
  console.error('VIDEO.json copy differs from the source; refusing to proceed.');
  process.exit(1);
}
if (typeof video.url === 'string') {
  console.log(`VIDEO.json copied to ${OUTPUT_DIR}: ${video.url}`);
}
