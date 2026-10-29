# Kickoff prompt: __GAME_TITLE__

1. Create your new, empty GitHub repository (suggested name: **__REPO_NAME__**) and start a new Claude Code session with **only that repository** selected.
2. Attach **`__STARTER_ZIP__`**.
3. Paste everything below the line.

---

I'm Richard Moore, starting a new tabletop RPG, working title **__GAME_TITLE__**. <!-- FILL: two or three sentences retelling the pitch in plain words, adding nothing --> My earlier games were reviewed with simulators and agent playtests, and the same mistakes kept turning up. This project starts with those lessons built in.

**Setup first:**
1. Unzip the attached `__STARTER_ZIP__` into the root of this repository. Its top folder's *contents* go at the root, not the folder itself.
2. Check that the GitHub URLs in `system.json` match this repository's name. They're set to `__GITHUB_REPO__`; fix them if the name is different.
3. Run `npm install` and `npm run check`. Tell me if anything fails.
4. Commit everything to the default branch with the message "Project setup: design docs and toolchain", and push.

**Then read, in this order:**
1. `CLAUDE.md`: how we work. These are the project's rules. I decide all game content; you give options and I choose.
2. `docs/DESIGN.md`: my pitch, the name check, the early flags, and the open questions.
3. `docs/DESIGN-RULES.md`: Part A hard rules, Part B questions, Part C process, Part D release gates.
4. `book/art/ART-CHECKLIST.md` and `docs/REVIEW-PROCEDURE.md`: for later stages.

**Today's goal is the core design**, not chapters or art:
- **Interview me** through the open questions in `docs/DESIGN.md` §5, in order and one topic at a time. Settle the early flags in §4 as they come up.
  - For each topic, give two or three concrete options, with your recommendation and why, and wait for my choice.
  - Start with **question 1** (<!-- FILL: what question 1 covers for this game -->), then **question 2**: <!-- FILL: what question 2 asks -->.
- **When one of my ideas would repeat a mistake** from `DESIGN-RULES.md` Part A, tell me straight away and name the rule.
- **After each decision,** add it to the Decisions log in `docs/DESIGN.md`, then commit and push.
- **Once the core is settled:**
  1. Write the one-page `docs/CORE-RULES.md`.
  2. Build a first simulator in `sim/`.
  3. Show me <!-- FILL: the measures this game's simulator must report, e.g. "the escape and gobble rates by difficulty and player count, how often rescues are tried and work, and game length" -->, against the targets we agree on.
- **No rulebook chapters or art until I approve the core rules.**

Start with the setup, then ask me the first question.
