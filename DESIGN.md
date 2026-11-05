# DESIGN.md · soypaez.com (era TODO ESTÁ BIEN)

World: the record opened once, printed in the single ink of the official cover (cobalt on cream, risograph grain). Sleeve (dark blue-hour band) → booklet spread on one gutter (blue-tinted paper) → the album as a horizon photo → earlier records → the man → letters → back cover.

## Tokens
| token | value | role |
|---|---|---|
| --marino | #0B2288 | cobalt of the official COMPATIBLES cover: sleeve band, header, ink on paper |
| --noche | #04155E | deep cobalt: booklet ground, who-is band |
| --negro | #030C3A | deepest cobalt: earlier records, back cover |
| --hora | #1F3C94 | selection, hover on paper buttons |
| --roto | #E6E2D6 | cream of the cover type: ink on cobalt, primary button, paper |
| --niebla | #C3C7E2 | secondary ink on cobalt |
| --piedra | #A9B0D6 | captions / fine print on cobalt (≥4.5:1) |
| --papel | #E6E2D6 | booklet + letters paper |
| --tinta / --tinta-suave / --tinta-tenue | #0B2288 / #2E3F8F / #4D5A99 | ink on paper (all ≥4.5:1) |

## Type (self-hosted woff2, brand-pinned in Archivo Azul campaign)
- Anton 400: h1 COMPATIBLES only, echoing the cover lettering (48–92px).
- Instrument Serif 400 / italic: titles ( section titles 40–64px, album 60–152px).
- Cormorant Garamond 400/500/italic: lyric, letters, quotes (18–28px, line-height 1.4–1.5).
- Inter 300/400/500: UI, nav, labels, fine print; Inter 300 + 0.42–0.62em tracking only for PÁEZ / COMPATIBLES set as sleeve type.
- Copy in lowercase except COMPATIBLES and PÁEZ.

## Components
- Sleeve cover: the official cover image, square, soft long neutral shadow on the cobalt field.
- Photos: cobalt/cream duotone (img/*-azul.jpg), except the corazón ceniza cover kept in its true colour as the previous era.
- Player: 60px hairline circle play, time tabular-nums, 1px track / 2px progress, live sung line in Cormorant italic.
- Primary button: blanco roto block, marino text, square corners, 48px min height. Secondary: underlined link.
- Booklet: paper spread 7/5 columns, fold shadow at the gutter; lyric in 2 columns; chorus marked with a 1px rule; sung line highlighted with a low marker band.
- Mini player: fixed bottom bar appears only while playing and the main player is off-screen.
- Pending items: grey text + outlined "pronto" tag (never a dead link).

## Motion
One authored moment: cover clears from blur on load (1.8s expo-out); lyric lines follow the audio. Everything else static. prefers-reduced-motion removes both.

## Rules
Blue is atmosphere, never decoration; no neon, no gradients on text, no cards grid, no emojis in UI. Air over saturation. Every link works or is marked pending.
