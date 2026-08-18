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
