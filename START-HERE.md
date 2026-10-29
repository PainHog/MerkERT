# Start here: your Game Studio

## What "the action" is
When you have a new game idea, you give the studio chat a working name and a few sentences. It then does what we've been doing together by hand:

1. **Checks the name.** Is it already a product? Does it sit near a trademark or a famous show? Which games are closest? These are risk flags, not legal advice.
2. **Compares the idea with your earlier games and the lessons.**
   - The lessons are the 29 mistakes found in *Heisty Spideys*, *Don't Get Forked* and *Nine Lives Gang*.
   - It writes the **early flags** (where this idea could repeat an old mistake) and the **interview questions** the game must answer before any rules are written.
3. **Builds a starter pack:**
   - the tools from *Heisty Spideys*, with your game's name in every file: the rulebook PDF builder, art tools, the start of a simulator, a Foundry VTT skeleton and tests;
   - the design document (your pitch word for word), the project rules, the lessons and the art checklist.
4. **Tests it.** It installs the tools, runs the checks, builds a sample PDF, then zips the pack.
5. **Writes the kickoff prompt** for the game's own chat.
6. **Gives you both files** and keeps a copy in the studio.

Then you create the game's repository, start a new chat with only that repository, attach the zip and paste the prompt. That chat interviews you one question at a time, and you decide everything.

**The studio never** creates repositories, touches your other games or decides anything about your game.

## One-time setup (about 10 minutes)
1. **Create a private repository** on GitHub, for example **GameStudio**. Leave it empty, with no README.
2. **Start a new Claude Code session** with only that repository selected.
3. **Attach `Game-Studio-Kit.zip`** and your rulebook PDFs (*Heisty Spideys*, *Don't Get Forked*, *Nine Lives Gang* and any others). If the chat won't take them all at once, attach the rest in the next messages.
4. **Paste the setup prompt** below.

### Setup prompt (paste everything below the line)

---

This is my game studio repository. Here you set up my new tabletop games: I give you a working name and a synopsis, and you give me a tested starter zip and a kickoff prompt for the game's own repository and chat.

1. Unzip the attached `Game-Studio-Kit.zip` into the root of this repository. Its top folder's *contents* go at the root, not the folder itself.
2. Save the rulebook PDFs I've attached into `reference/books/`, named by game and version.
3. Commit everything to the default branch with the message "Studio setup: kit and reference books", and push.
4. Read `CLAUDE.md`. It explains how this studio works, and it's your instructions from now on.
5. Run `node tools/make-starter.mjs selftest` and tell me if it fails.
6. Read every book in `reference/books/` and write `reference/GAME-NOTES.md` as `CLAUDE.md` describes. Commit and push.
7. Go through `GAMES.md` with me: tell me what it lists, and I'll correct anything out of date.

Then tell me you're ready for a pitch.

---

## Each new game
Open a session on the studio repository and paste this. A new session each time is fine, because everything is saved in the repository.

```
New game.
Name: <working name, or "needs a name">
Synopsis: <a few sentences, however rough>
```

You can add anything else, such as "like *Invincible*", a player count, or a game it should feel like. The studio does the rest. It only stops to ask you to pick a name if the one you gave is taken or you asked for one.

When it hands you the zip and the kickoff prompt:
1. Create the empty repository it suggests. Another name is fine; the new chat fixes the links.
2. Start a new session with only that repository.
3. Attach the zip, then paste everything below the line in the kickoff prompt.

## Other things you can ask the studio
- **"New lesson: …"** adds it to the lessons, so every future game avoids it. It also tells you which existing games might want it.
- **"Review this book"** plus the PDF runs the full review procedure and gives you a review zip.
- **"Here's version 0.3 of …"** updates its notes on that game.
- **"Update the game list: …"** keeps track of names, status and repositories.

## What's in the kit
| Folder or file | What it is |
|---|---|
| `CLAUDE.md` | The studio's rules: the action, step by step (the chat reads this automatically) |
| `GAMES.md` | Your games: status and repository |
| `lessons/` | The design rules, review procedure and art checklist every new game starts with |
| `templates/` | The toolchain and the document templates a starter is made from |
| `tools/make-starter.mjs` | The script that stamps, tests and zips a starter |
| `examples/` | A finished example: the *Don't Get Gobble Gobbled* starter documents |
| `reference/` | Your rulebooks (`books/`), the studio's notes on them, and the *Heisty Spideys* balance and automation studies |
| `games/` | Each new game's starter, zip and kickoff prompt, saved as they're made |
