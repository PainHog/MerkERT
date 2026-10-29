# Game Studio

Where Richard Moore's new tabletop games get set up. A working name and a synopsis go in; a tested starter zip and a kickoff prompt for the game's own repository come out.

- **Richard:** start with `START-HERE.md`.
- **Claude:** `CLAUDE.md` holds the studio's rules and the setup procedure.

## Commands
```
node tools/make-starter.mjs new --title "<Title>" --id <id> --short <XX> --name <Zip-Name>
node tools/make-starter.mjs todo games/<id>      # what's left to fill
node tools/make-starter.mjs finish games/<id>    # test, then zip + kickoff prompt
node tools/make-starter.mjs selftest             # check the kit itself works
```
Needs Node 22, npm and network access for `npm install`. The book build needs Chromium; it uses `$CHROME_PATH`, or `/opt/pw-browsers/chromium` when present.

## Folders
| Folder | What it is |
|---|---|
| `lessons/` | `DESIGN-RULES.md`, `REVIEW-PROCEDURE.md`, `ART-CHECKLIST.md`: copied into every starter |
| `templates/project/` | The toolchain, with game names as tokens |
| `templates/docs/` | Starter document templates with `<!-- FILL: … -->` markers |
| `tools/` | `make-starter.mjs` |
| `examples/` | A finished set of starter documents (*Don't Get Gobble Gobbled*) |
| `reference/` | `GAME-NOTES.md` (notes on Richard's rulebooks, which are never committed), `books/` (where attached rulebooks sit during a session) and `studies/` (copied into every starter) |
| `games/` | One folder per game set up here |

© 2026 Richard Moore. All rights reserved.
