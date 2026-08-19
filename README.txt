GHOSTS IN THE CITY — PUBLIC WEBSITE V3
========================================

WHAT CHANGED
- Fullscreen cinematic hero inspired by the private pitch's visual language.
- YouTube teaser is used as a muted autoplay background on desktop.
- Steam_Screenshot_1 remains the poster/fallback image.
- Steam CTA is the primary action.
- Publishers & Investors CTA is visible on the first screen.
- No confidential budgets, wishlist targets, market data or fundraising amounts are exposed.
- Dark/orange visual system, numbered sections and subtle Japanese background typography.
- Gallery order and video list remain easy to edit.

TEST LOCALLY
1. Unzip this archive.
2. Double-click index.html.
3. For the fullscreen YouTube background, an internet connection is required.

IMPORTANT: CONTACT + DISCORD
Open site-config.js and fill:
    discordUrl: ""
    contactEmail: ""

SCREENSHOT ORDER
Open site-config.js and reorder the names in:
    gallery: [ ... ]

VIDEO ORDER
Open site-config.js and reorder/add entries in:
    videos: [ ... ]

FULLSCREEN HERO VIDEO
The current background uses:
    heroVideoId: "nNNiZ4j-7XM"

You can replace this YouTube ID later.

BEST FINAL QUALITY OPTION
For the final public version, a short locally hosted optimized MP4/WebM background will look cleaner than a YouTube iframe:
- no YouTube overlays
- smoother looping
- exact crop and playback control
The site already uses Steam_Screenshot_1 as fallback, so this can be changed later without redesigning the page.

DEPLOYMENT
The folder is ready for Cloudflare Pages Direct Upload.
Do not change Wix DNS until the temporary pages.dev version is validated.


V3 CHANGES
- Removed the hidden-story reveal from all public copy.
- Added Steam_Screenshot_9 (interior).
- Gallery now uses equal 16:9 rounded thumbnails in a 3-column desktop grid.
- Japanese background typography is smaller and more discreet.


V4 CHANGES
==========
- Removed "Solo Offline".
- Multiplayer wording now reflects hosted sessions with join-in-progress.
- Added a dedicated Section 01 vehicle block:
  civilian vehicles, military vehicles, repair/recovery, exploration/combat.
- Both YouTube videos are now grouped in Section 02.
- Removed the former standalone video Section 04.
- Renumbered remaining sections:
  01 Game
  02 Videos
  03 Screenshots
  04 Community
  05 Publishing & Investment


V5 CHANGES
==========
- Removed the duplicated title displayed below each video thumbnail.
- "Steam_Screenshot_Ghosts" is now the 2nd gallery image.
- Vehicles is now the 5th regular gameplay feature box in Section 01.
- Removed the separate standalone vehicle panel.
- Removed "Host a Session" and "Join in Progress" from the intro.
- Multiplayer wording is now: "1–4 Player Co-op Campaign".


V6 CHANGES
==========
- Discord buttons now point to:
  https://discord.gg/fHp2GMb7Mr
- Contact / Publishers & Investors buttons now email:
  contact@acid-pixel.com


V7 CHANGES
==========
- Added Acid Pixel favicon supplied by the user.
- Added favicon.ico
- Added 16x16 and 32x32 PNG favicons.
- Added Apple Touch Icon 180x180.
- Added Android/Chrome icons 192x192 and 512x512.
- Added site.webmanifest for browser/mobile shortcuts.


V8 CHANGES
==========
- Added a full Transporter section before Publishing & Investment.
- Added Transporter to the top navigation.
- Added public Steam and Nintendo Switch store links.
- Added two Steam-hosted Transporter trailers:
  Operation Overlord and Indy Jungle.
- Added a Transporter screenshot/media gallery using official Steam assets.
- Added game facts: 19 vehicles, 11 cargo types, 2 worlds, global leaderboards.
- Added 100% positive Steam review status.
- Added text noting that the Nintendo Switch edition became the strongest-selling version.
- Publishing & Investment is now Section 06.


V9 CHANGES
==========
- Removed the large decorative image on the right side of the Transporter intro.
- Added 9 uploaded Transporter screenshots as local optimized WebP assets.
- Transporter screenshot gallery now matches the GITC gallery style:
  equal 16:9 thumbnails, rounded corners, responsive grid, fullscreen lightbox.
- Replaced the fullscreen home-page background YouTube video with:
  https://youtu.be/QGj4jSOn93w


V10 CHANGES
===========
- Removed the Transporter poster/header image at the start of the Transporter section.
- Transporter screenshot gallery now uses the exact same CSS classes and dimensions as the GITC gallery.
- Removed all Transporter-specific gallery sizing overrides.


V11 FIXES
========
- Fixed broken Transporter screenshot 2 by restoring the missing file Steam_ScreenshotN10-2048.webp (copied from the available 1280px source).


V12 FIXES
=========
- Lightbox now uses a fixed viewport display area (96vw x 92vh) with object-fit: contain.
- All screenshots, including Transporter screenshot 2, now display at a consistent fullscreen size regardless of source resolution.


V13 CHANGES
===========
- Added a discreet SOUND ON / SOUND OFF control to the fullscreen hero video.
- Hero still starts muted so browser autoplay remains reliable.
- First user click unmutes the YouTube background video and sets volume to 100%.
- Sound button is hidden on mobile where the site uses the static hero fallback.
