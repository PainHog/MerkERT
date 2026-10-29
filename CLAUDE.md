# Richard Moore's Game Studio: working rules for Claude

This repository is where Richard Moore's new tabletop games are **set up**, not designed. Richard brings a working name and a synopsis. The studio returns a tested **starter zip** and a **kickoff prompt**. Richard then creates the game's own repository, starts a new session there, attaches the zip and pastes the prompt. All design work happens in that game's own repository, with Richard deciding everything.

**Read before any work:** this file, `GAMES.md`, `reference/GAME-NOTES.md`, `lessons/DESIGN-RULES.md`, and the worked example in `examples/dont-get-gobble-gobbled/`.

## The action: setting up a new game

Richard's message looks like "New game. Name: … Synopsis: …", sometimes with extras such as references, a player count or a game it should feel like. Do the steps below without stopping to ask, except where step 2 says to.

### 1. Take in the pitch
- Keep Richard's words **exactly as written**, spelling and all. They go into the design document verbatim.
- Read `GAMES.md` and `reference/GAME-NOTES.md`. Note how close the pitch sits to Richard's other games, and whether it fits a series (for example the "Don't Get…" line).

### 2. Name and rights check (risk flags, not legal advice)
Use the session's web search tool:
- **The exact title** in quotes, with "RPG", "tabletop", "board game" and "card game". Also look on DriveThruRPG, itch.io, BoardGameGeek, Kickstarter, Steam and Amazon.
- **Close variants and trademarks:** brands that share the title's key words. Earlier finds include *Gobblet* (a Blue Orange board game) against "Gobble" and the 9Lives cat-food brand against "Nine Lives".
- **Intellectual property the pitch leans on** (a book, film or show, such as *Animorphs* or *Invincible*): the names, terms and distinctive designs the game must not copy.
- **The closest existing games** in the niche: three to eight, one line each. Then name what sets this pitch apart.

If no search tool works, say so plainly and mark the check "not run".

**Ask before stamping** only when the pitch says it needs a name, or the name clashes badly with a product or trademark. Offer three name options with a recommendation, then wait. The title sets file names and ids, so it should be settled first. Otherwise keep the given name as the working title.

### 3. Stamp the starter
```
node tools/make-starter.mjs new --title "<Title>" --id <short-kebab-id> --short <XX> --name <Zip-Name>
```
- **`--id`:** short and readable. Drop filler when the rest is distinctive, such as `gobble-gobbled` rather than `dont-get-gobble-gobbled`.
- **`--short`:** two to four capitals, such as `GG`.
- **`--name`:** the zip's name, such as `Gobble-Gobbled`, which makes `Gobble-Gobbled-Starter.zip`.
- **The suggested repository** defaults to `PainHog/<TitleWithoutSpaces>`. Override it with `--repo` if Richard names one.

`node tools/make-starter.mjs --help` lists every option.

### 4. Fill in the starter
`node tools/make-starter.mjs todo games/<id>` lists every `<!-- FILL: … -->` marker. Each marker says what belongs there. Match the depth and tone of `examples/dont-get-gobble-gobbled/`.
- **`docs/DESIGN.md`:**
  - §1: the pitch verbatim, plus what the pitch settles (only what it actually says).
  - §2: the name check.
  - §3: the first Decisions row.
  - §4: five to nine **early flags**. Each one names the part of the pitch, the Part A rules it touches (by number), what went wrong in an earlier game, and the question to settle. Always include **identity**: how close the game is to Richard's other games, and what it can reuse from them.
  - §5: the **interview questions**, which cover every Part B topic in this game's own terms:
    - question 1 is identity (tone, ages, players, length, the title, series);
    - question 2 is the pitch's central idea or biggest open choice;
    - the engine question offers Richard's proven engines (from `GAME-NOTES.md`) against building new.
  - §6: three to five suggestions, each one labelled as a suggestion.
- **`PROJECT-CLAUDE.md`:** Richard's earlier games and the list of other games (from `GAMES.md`), this game's kinds of content, and what its simulator must measure.
- **`README.md`:** the kind of game, and the pitch retold in plain words.
- **`book/art/ART-CHECKLIST.md`:** the project section, numbered on from the general items. It covers:
  - real anatomy as countable facts;
  - recognisable, consistent characters;
  - believable scale for the key places;
  - the tone line;
  - sensitivity limits;
  - famous characters or brands to steer clear of.
- **`docs/KICKOFF-PROMPT.md`:** the pitch retold, what questions 1 and 2 cover, and the simulator measures.

**While filling in:**
- Nothing about the game is decided except Richard's pitch. Everything else is a flag, a question or a labelled suggestion.
- Never "improve" the pitch's wording.
- Write in plain words; Richard reads these first.

### 5. Finish
```
node tools/make-starter.mjs finish games/<id>
```
This refuses while any marker or token is left. It installs, checks and builds the book in a clean copy, then writes `games/<id>/<Name>-Starter.zip` and `games/<id>/KICKOFF-PROMPT.md`.

If it fails, fix the cause and run it again. **Never hand over a starter that hasn't passed `finish`.**

### 6. Deliver
Send Richard **both files**: the zip and `KICKOFF-PROMPT.md`. Use the session's file-sending tool if it has one; otherwise point to them in this repository on GitHub. In the reply, keep it short:
1. The name check, in one or two sentences.
2. The three most important early flags.
3. The first two interview questions.
4. The three steps:
   - create an empty repository (give the suggested name);
   - start a new session with only that repository;
   - attach the zip and paste everything below the line in the kickoff prompt.

### 7. Save
1. Add or update the game's row in `GAMES.md`.
2. Commit `games/<id>/` (the starter folder, the zip, the kickoff prompt and `game.json`) with the message "Set up <Title>: starter and kickoff".
3. Push.

## Never
- **Never create GitHub repositories.** Richard creates each game's repository.
- **Never write to any repository except this studio.** If another of Richard's repositories is attached to a session, it is **read-only reference**.
- **Never decide game content.** That includes rules, numbers, characters, settings and names of mechanics. Give options with a recommendation; Richard chooses.
- **Never name a game's rules file `CLAUDE.md` inside this repository.** Inside `games/`, it's `PROJECT-CLAUDE.md`, and `finish` renames it inside the zip. A nested `CLAUDE.md` would be read as the studio's own rules.
- **Never copy text from Richard's books into a new game.** The books are reference for engines, structure and lessons.
- **Keep model names out of commits, code and docs** (except a required commit trailer).

## Reference books
- **Never commit Richard's rulebook PDFs.** He attaches them to a session for reference only. Save them to `reference/books/` for that session (`.gitignore` keeps `*.pdf` there out of git), read them, and keep what matters in the notes below.
- **`reference/GAME-NOTES.md`:** one section per game, written from the books in the first session and updated when Richard attaches a new version. It's the studio's only lasting record of his books. Each section covers:
  - the premise in a line;
  - player count and session length;
  - the core roll or engine;
  - the threat tracks and clocks;
  - character options;
  - signature mechanics;
  - what the reviews found (cite rule numbers in `lessons/DESIGN-RULES.md`);
  - what's worth reusing.
- **Use the notes for:** the identity flag, the engine options in question 3, series fit and naming collisions with Richard's own games.

## Lessons
- **`lessons/` holds the lessons every new game starts with:**
  - `DESIGN-RULES.md`: Part A hard rules A1–A29, Part B questions, Part C process, Part D release gates;
  - `REVIEW-PROCEDURE.md`;
  - `ART-CHECKLIST.md`.
- **When Richard reports a new lesson** (from a review, a playtest or a night at the table):
  - add it as the next free Part A number (A30, A31…) under the right heading, with the real example and the game it came from;
  - **never renumber**, because every game's documents cite rules by number;
  - commit with the message "Lessons: <what>";
  - tell Richard which existing games might want the new rule. New starters pick it up automatically; existing games don't.

## Reviews (when asked)
If Richard uploads a book for review:
- follow `lessons/REVIEW-PROCEDURE.md`;
- save the work under `reviews/<game>/<version>/`;
- deliver one zip with a README and a ready-to-paste prompt for the game's own chat;
- add any new lesson as above.

## Looking after the kit
- **What's in `templates/project/`:**
  - the toolchain: rulebook builder, art tools, simulator start, Foundry skeleton, tests and CI;
  - names written as tokens: `__GAME_TITLE__`, `__GAME_TITLE_CURLY__`, `__GAME_TITLE_UPPER__`, `__GAME_ID__`, `__GAME_SHORT__`, `__game_short__`, `__GAME_CAMEL__`, `__GAME_FILE__`, `__GITHUB_REPO__` and `__YEAR__`.
- **`templates/docs/`** holds the document templates with their FILL markers.
- **After any change to `templates/`, `lessons/` or `tools/`,** run `node tools/make-starter.mjs selftest` before committing.
- **To bring a toolchain fix back from a game,** Richard attaches that repository or pastes the file. Port the fix by hand, put tokens in place of names, and run the self-test.

## Housekeeping
- Commit and push after each finished step; sessions can stop at any time.
- Talk to Richard in plain words.
- **Credits in every game:** "Game design & writing: Richard Moore"; "Editing, layout & illustration: Produced with AI assistance (Claude, by Anthropic), directed and approved by Richard Moore".
