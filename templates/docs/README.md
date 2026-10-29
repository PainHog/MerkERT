# __GAME_TITLE__ (working title)

A <!-- FILL: the kind of game in a few words, e.g. "party tabletop roleplaying game" --> by **Richard Moore**. <!-- FILL: one to three sentences retelling the pitch in plain words, adding nothing the pitch doesn't say -->

**Status:** early design. The premise is set; the rules aren't written yet. See `docs/DESIGN.md`.

## What's in here
| Folder | What it is |
|---|---|
| `docs/` | `DESIGN.md` (pitch, name check, early flags, decisions, open questions), `DESIGN-RULES.md` (lessons from earlier games), `REVIEW-PROCEDURE.md`, the kickoff prompt, and reference studies |
| `book/` | The rulebook: HTML chapters built into a typeset PDF (digital and print-on-demand), and `book/art/ART-CHECKLIST.md` |
| `sim/` | The rules simulator for balance testing, built once the core rules exist |
| `module/`, `templates/`, `styles/`, `lang/`, `packs/` | The Foundry VTT game system (a skeleton for now) |
| `tools/`, `test/` | Build, validation and test tooling |

## Commands
```
npm install
npm run build:book          # rulebook PDF → book/dist/
node book/build.mjs --print # print-on-demand interior + covers
npm run check               # validate the Foundry system + run tests
```

© __YEAR__ Richard Moore. All rights reserved.
