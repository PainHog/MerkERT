# Notes on Richard's games

Written 2026-10-29 from the rulebooks Richard attached: *Heisty Spideys* v4.8, *Don't Get Forked* v0.3, *Nine Lives Gang* v0.8, *Second Nature* v0.1 and *Nightwake* v0.1. The books aren't kept in this repository, so these notes are the studio's record of them. Update a section when Richard attaches a new version.

- **Reference only.** Never copy text from these books into a new game.
- **"First read" means not a review.** Only the "What the reviews found" items tied to `lessons/DESIGN-RULES.md` came from real reviews; the rest are observations from reading the book once.
- **Use these notes for** the identity flag, the engine question, series fit and name collisions with Richard's own games (see `CLAUDE.md`).

## At a glance

| Game | Book | Players | Ages | Length | Engine | Threat | `GAMES.md` entry |
|---|---|---|---|---|---|---|---|
| *Heisty Spideys* | v4.8, First Edition, 51 pp | 2–6 + Storyteller | 13+ | one heist a night (not stated) | d6 pool, 5–6 hits vs a count | the Alert, Limit 10→2 | *Heisty Spideys* |
| *Don't Get Forked* | v0.3 playtest copy, 34 pp | 3–5 + Storyteller | 12+ | 1–2 h a raid | trait die + Mask d6 / Monster d10 vs 6–12 | Suspicion + 12 Turns to dawn | *Don't Get Forked* |
| *Nine Lives Gang* | v0.8 draft, 50 pp | 3–5 + Storyteller | 8+ | 1–2 h a robbery | d6 pool, read the highest die | Broom and Cuddle meters + Prize Clock | *Nine Lives Gang* |
| *Second Nature* | v0.1 playtest draft, 52 pp | 3–5 + Storyteller | 10+ | 2–3 h a mission; campaign | d6 pool, 5–6 hits vs a count | Scent, Limit per group size | probably the Morph game (to confirm) |
| *Nightwake* | v0.1, 31 pp, no art | 3–5 + Storyteller | 12+ | about 3 h, one night | 5d6, 5–6 hits vs Guard 1–3 | no meter; four Hours to dawn | probably *Elemental Fighters* (to confirm) |

## Across the games

- **Richard's proven engines** (offer these against building new in the engine question):
  1. **The d6 success pool** (*Heisty Spideys*): Attribute + Skill in d6s, each 5–6 a hit, Difficulty is hits needed, half is a Partial, Silk Points to push. *Second Nature* reuses it with simpler bands; *Nightwake* uses a fixed five dice against a Guard.
  2. **Trait die plus Mask or Monster** (*Don't Get Forked*): a risk choice on every roll. The engine a "Don't Get…" sibling would share.
  3. **The highest-die pool** (*Nine Lives Gang*): 1–3 Flop, 4–5 Scrape, 6 Clean, two 6s Purrfect; the approach steers which of two meters fills.
  4. **The Guard fight** (*Nightwake*): five dice against a Guard; a miss costs Vigour but pays Chi. Combat only.
- **Shared house style:**
  - Part One for players, Part Two for the Storyteller, then ready-made scenarios labelled Easy, Standard and Hard;
  - an At the Table or Quick Reference page and a character sheet;
  - Fraunces, Alegreya and Alegreya Sans in four of the five books (also the starter toolchain's fonts);
  - "a roll's result comes first", a cap on bonus dice, no opposed rolls (*Heisty Spideys* aside), and threats run by d6 tables or fixed numbers.
- **Names already used in Richard's books** (check every new pitch against these and each game's "Terms" list):
  - **Used twice already:** the Hunt (*Second Nature*'s enemy, a *Nightwake* phase), Clash, Harm, a character named Priya (*Second Nature*, *Nightwake*); Push (*Nine Lives Gang*, *Second Nature*); Edge (*Second Nature*, *Nightwake*); Good Dog (*Don't Get Forked*'s Werewolf, *Second Nature*'s Shepherd Dog); Ghost (a *Heisty Spideys* role, a *Don't Get Forked* Entity); Shortcut (a perk in both); Prize, Distract and "scooped" (*Heisty Spideys*, *Nine Lives Gang*); Perk (three games).
  - **Close titles:** *Second Nature*'s "Night of the Waking" against *Nightwake*.
- **Credits:** only *Heisty Spideys* prints the AI-assistance line `CLAUDE.md` requires. *Don't Get Forked*, *Nine Lives Gang*, *Second Nature* and *Nightwake* don't, and the illustrated ones have no art or map credit either.
- **Foundry companions:** *Heisty Spideys* (PainHog/SpideyHeist), *Nightwake* (domoorestudio.com) and *Nine Lives Gang* (mentioned, not named).
- **Gaps that keep coming back** (first read, across books):
  - **A21:** party-size claims with no per-size numbers (*Nine Lives Gang*, *Nightwake*, *Second Nature*).
  - **A9:** options the shipped scenarios never use (every book).
  - **A5:** a spend that turns free at the limit (*Heisty Spideys*, *Don't Get Forked*, *Nine Lives Gang*, *Second Nature*).
  - **A27–A29:** no premades or tie-breaks, sheets too small, no round card (*Heisty Spideys*, *Nine Lives Gang*).
  - **Simulation:** only *Heisty Spideys* (the studies) and *Nightwake* (its own figures) print win and loss rates.

---

## *Heisty Spideys* (v4.8)

- **Premise:** House spiders pull comic heists in human buildings while the cat, the vacuum and the humans wake up.
- **Players and length:** 2–6 players plus a Storyteller (ST). Ages 13+. Session length not stated.
  - Heists are labelled "for a first session" and so on, so one heist seems to fill a night.
  - Played on a square grid. Play uses d6s only; creation uses d10 and 2d6.
  - Foundry companion: PainHog/SpideyHeist.
- **Core roll / engine:**
  - Roll Attribute + Skill in d6s; each 5–6 is a Success. Difficulty is the number of Successes needed: 1 Trivial … 5 Absurd.
  - **Partial** (at least half, rounded up): it works, with a complication. The default is +1 Alert, or a cost of the same size, never both.
  - **Failure:** no progress, +1 Alert, and an engaged threat hits.
  - **Critical** (double the Difficulty): a bonus and Alert −1, at final Difficulty 3+ only.
  - **Botch:** a pool at 0 or below rolls one die. On 1–3 it's a Failure with Alert +2.
  - **Bonus cap:** +2 dice from Assists, Perks, Signature Moves and intel. Silk dice don't count toward it.
  - **Assist:** one helper per roll, using their Action. They roll one Skill (1–3 dice), and each Success adds a die.
  - **Push:** Silk Reroll (2 SP) rerolls up to 3 missed dice. Silk Clutch (3 SP) turns your own Failure into a Success, with Alert +1.
  - **Opposed roll:** the creature's Successes + 1 becomes your Difficulty, and its roll never Partials. Humans never roll.
  - **Group check:** the Alert rises once, by the worst result.
  - **A turn:** move plus one Action. The crew acts first, then the threats.
- **Threat tracks and clocks:**
  - **The Alert:** starts at 0, and only a Critical lowers it. The location sets the Limit: Easy 10, Standard 8, Hard 6, Absurd 4, Legendary 2.
    - +1 for a failure, a Partial, being briefly spotted, or a Clutch.
    - +2 for a Botch, a confirmed alert, a spider going Out, or a Loud Failure.
    - Each active creature adds +X per round.
    - One event, one trigger, the largest.
  - **Bands:** Calm 0–2. Stirring 3–4 (Stealth +1). Active 5–6 (threats wake). Lockdown 7+ (all rolls +1).
  - **Full Alert** (at the Limit): the meter locks, an untaken objective is lost, and the crew can only escape. A failed roll in a Full Alert Escape means that spider is caught.
  - **Vitality:** Unharmed → Rattled → Hurt (half Speed) → Critical → Out, at −1, −2 and −3 dice. To shrug off a hit, roll BODY + Endurance against the attack.
  - **Clocks:** a Mid-Heist Complication (d6) at the third round on one obstacle; the ST ends the obstacle after five rounds. No dawn and no turn limit.
- **Character options:**
  - **Attributes:** BODY, WIT, NERVE, GRACE. 12 Skills.
  - **Species (ability):**
    - Jumping (Did You See That Jump?!)
    - Orb Weaver (Everything Connects)
    - Wolf (Run It Again)
    - Cellar (Contortionist)
    - Spitting (Precision Application)
    - Crab (Wait, Was That There Before?)
  - **Crew Roles, with Signature Move and Perks (pick 2):**
    - **Face** (That's Not What Happened): Silver Tongue, Read the Room, Plausible Deniability, Fast Talk, Actually I Planned This, Familiar Face.
    - **Ghost** (Phase Through): Silk Trail, Dead Drop, Soundless, Second-Story Spider, Ghost Protocol, I Was Never Here.
    - **Tinkerer** (I Made a Thing): Jury-Rig, Spider-Sense… Sort Of, Overclock, Field Repair, Trap Architect, I See How This Works.
    - **Bruiser** (Make a Scene): Take the Hit, Unfazed, Thunderous Entrance, Negotiating Position, Silk Grapple, That All You Got?
    - **Lookout** (I Called It): Early Warning, Tactical Feed, Pattern Recognition, Contingency, Escape Routes, Counter-Surveillance.
    - **Wheelman** (I Know a Way): Always a Way Out, Shortcut, Don't Look Down, Passenger, Drafting, Abort Abort.
    - **Grifter** (You're Looking at the Wrong Spider): Method Actor, Double Bluff, Planted Evidence, Quick Change, The Long Con, Smoke and Mirrors.
  - **Flaws** (one, d10): Arachnophobe Magnet, Overconfident, Loud, Dramatic, Allergic to Dust, Compulsive Planner, Butterfingers, Fear of Vacuums, Easily Distracted, Show-Off.
- **Signature mechanics:**
  - **Silk Points:** start at WIT + NERVE + 1, with no refill during a heist.
    - Spends: a die (1), a line (1), Reroll (2), Web Structure (2), Improvise (2), Clutch (3).
    - Shared by the crew, once per heist: Damage Control (3), Not Part of the Plan (4).
    - Earned back: Flaw Moment, Spectacular Failure, Creative Species Use, Brilliant Plan.
  - **Waiting Web:** a caught spider's backup arrives at the next obstacle, Rattled, with half Silk.
  - **Five phases:**
    - Score.
    - Planning: Casing, and Preparations, each with a complication.
    - Heist: 3–4 obstacles, two rolls each.
    - Escape: 1–2 obstacles, one roll each, at least one without Athletics.
    - Debrief: a win pays 2/3/5/6/8 Advancement Points (Easy to Legendary).
  - **An unknown obstacle** in every heist.
  - **An honest grid:** one square = one spider; cover −2.
  - **Loot tiers:** Crumb, Trinket, Prize, Treasure, The Big Score.
- **Structure of the book:** 51 pages.
  - Part One (ch. 1–12) holds the player rules. Part Two (ch. 13–21) is for the ST.
  - Part Two includes the Obstacle Toolkit and 11 creatures: House Cat, House Dog, Vacuum, Curious Child, Guard Spider, Corn Snake, Alert Parrot, The Rat, The Exterminator, Goldfish, Human.
  - **Five heists**, each with a map, intel and E1/E2 Escape obstacles:
    - The Cookie Situation (Easy 10)
    - The Office After Hours (Standard 8)
    - The Pet Store Problem (Standard 8)
    - The Library Job (Hard 6)
    - The Restaurant Rush (Hard 6)
  - Random creation tables, a 2-page Quick Reference and a character sheet. No location generator.
- **Terms this game owns:** the Alert, Full Alert, Lockdown, Silk Points, Silk Clutch, silk sled, Waiting Web, Flaw Moment, Signature Move, Crew Role, the Score, Casing, the unknown obstacle, Mid-Heist Complication, Vitality, Advancement Points.
- **What the reviews found:**
  - **A3:** in v4.5, Criticals lowered the Alert half the time. v4.8 limits the drop to Difficulty 3+.
  - **A8:** the Spitting Spider's jam and the Bypass skipped rolls. Both were fixed.
  - **Balance study** (`reference/studies/heisty-balance.md` §12):
    - wins Easy 90.7%, Standard 78.8%, Hard 59.1%;
    - Criticals 25.7%, Failures 7.5%, Hard losses 1.9%.
  - **First-read observations (mine, not a review):**
    - **A5:** Alert costs are free at Full Alert.
    - **A16:** "Partial" and "Critical" each have two meanings.
    - **A9:** Disguise and several creatures go unused in the five heists.
    - **A8:** Phase Through and Contortionist still skip rolls.
    - **A21:** no per-size adjustments.
    - **A27:** no premade spiders.
    - **A28:** the sheet has no use boxes.
    - **A29:** no round card for the ST.
- **Worth reusing:** the d6 engine with half-Difficulty Partials; opposition as Successes + 1; the +2 cap; one shared meter whose Limit is the difficulty; one event, one rise; spend-only Silk with earn-backs; the Waiting Web; the five-phase heist; the stall clock; the scenario and stat-block formats.

## *Don't Get Forked* (v0.3)

- **Premise:** classic monsters from a castle in the woods sneak into a costumed town on Lantern Night to fill the castle's yearly shopping list before dawn, then outrun the pitchfork mob.
- **Players and length:** 3–5 players plus a Storyteller (GM); 1–2 hours a raid; ages 12+; horror-comedy, not gory. Raids stand alone (optional campaign).
- **Core roll / engine:** trait die + Mask d6 or Monster d10, added, against Difficulty 6/8/10/12. Five traits (Brawn, Nimble, Sly, Charm, Wits) hold one each of d12–d4.
  - Monster higher than the trait die = "the Monster shows": Suspicion +2 whatever the result. Monster forced while carrying furniture and in the final flight.
  - Success: meet the Difficulty. Cost (1–2 short): it works, and the Storyteller picks Suspicion +1, drop an item, lose a Turn or a smaller next die. Trouble (3+ short): fail, Suspicion +1, caught if watched. Critical: Success on doubles; a charge back (two Successes in a chase).
  - One raise per roll from any source; steps down stack; clamp d4–d12. An unlisted trait that's a stretch is at +2.
  - 3 charges a raid; overdraw at 0 for Suspicion +2 on top. Helping spends your charge on a friend's roll, not your action. No push, reroll or opposed rolls.
- **Threat tracks and clocks:**
  - **Suspicion** (shared, never lowered): Limit 9/10/13 by label (8/9 with five players on Easy/Standard). Fed by Trouble, the Monster, loud ways, Costs, Tells (d6 4–6 on first arrival at a watched place), carried furniture each Turn, overdraws. One roll, one rise; a local chase rises once, at its end. At the Limit: everyone free goes into the final flight, Suspicion stops.
  - **12 Turns**, then dawn forces the final flight.
  - **Lead:** local chase 1→4, cornered at 0, 6 rounds max, mob 8 + half Suspicion (max 11) fixed at the start. Final flight 2→5 (6 Hard), mob 10/11/11, no round cap stated. A d6 "ground" names two traits each round; groups use the majority rule.
  - **Weakness:** smaller trait die in chases from round 1 (Always) or 3 (Soon).
- **Character options:** eight premade Entities, no duplicates; each has a signature, a Gift (1 of 3), a Perk (1 of 3), a Castle Duty, a Weakness and a Tell, with defaults marked.
  - Dracula: Mesmerize; Bat, Mist, Wolf; Hypnotic Eyes, Old Money, Wall-Crawler.
  - Frankenstein's Creature: Brute Force; Mountain Stride, Hovel Watcher, Book-Learned; Strong Back, Tireless, Built to Last.
  - The Mummy: Ancient Lore; Royal Bearing, Just a Costume, Old Curse; Patience of Ages, Keeper of Treasures, Fear the Curse.
  - The Werewolf: Good Dog; Keen Nose, Through the Hedge, Howl; Night Runner, Shortcut, Fetch.
  - The Invisible Man: Unseen; Through the Gap, Poltergeist, Work It Out; Out of Sight, Hidden Pockets, Light Step.
  - A Ghost: Through the Wall; Chill, Whisper, Fade; Spectral, Rattle, Already Dead.
  - A Witch: Hedge Spell; Broomstick, Black Cat, A Potion for That; Familiar's Warning, Fly by Night, Wise Woman.
  - Jekyll & Hyde (two dice layouts): The Draught; Doctor's Bag, Pillar of Society, Trample; Practiced Hand, Steady Nerves, Brute Strength.
  - Weaknesses: Garlic, Cold Iron (Always); Fire, A Loose Thread, Hounds, Flour, Rowan, A Familiar Face (Soon).
  - Castle Duties (unique, picked after hearing the list): Cook, Gardener, Librarian, Butler, Handyman, Tailor; a raise where your item kind is.
  - Four ability kinds: raise; swap trait; risk-free Monster; "approach of your own" (unlisted trait at −2, only you pass).
- **Signature mechanics:**
  1. Mask or Monster on every roll.
  2. Shared Suspicion tipping into a whole-party final flight.
  3. Lead-track chases with a rolled ground and timed Weaknesses.
  4. A shopping list by item kind, plus a Bulky/Huge furniture piece for a Grand Year that slows moves and ticks Suspicion.
  5. The lock-up: rescue frees all; each Entity left behind costs a result step; everyone held is Forked.
- **Structure of the book:** 34 pages, marked playtest copy, public-domain stand-in art. Part One (ch. 1–7): The Game, The Entities, Rolling the Dice, The Raid, Suspicion, Chases and Getting Forked, How the Year Went (tiers, epilogues, campaign upgrades). Part Two: 8 Building a Town (d20 location and obstacle tables, 2d6 shopping list, d6 furniture, customs and villagers); 9 Three Towns (example of play; Puddlecombe, Thistlewick, Gallowsmere with maps). Entity Sheet; At the Table.
- **Terms this game owns:** Entities, The Eight, Lantern Night, the Mask, the Monster, Suspicion/the Limit, Tell, Gift, Perk, Castle Duty, charges, overdraw, approach of your own, loud way, watched, the way out, the lock-up, slipping free, local chase, final flight, the hunt, the Lead, the ground, majority rule, forked; Grand Year/Win/Partial/Bust/Forked; Success/Cost/Trouble; the three town names.
- **What the reviews found** (my first read of v0.3, not a review):
  - A2 chase spiral: one rise per chase, fixed mob Difficulty, 6-round cap. Appears fixed.
  - A4 capture beat forked: everyone held now = Forked. Appears fixed; giving up before any roll raises nothing, so check surrender near the Limit.
  - A5 free overdraws: final-flight overdraw costs a step down, but from your next roll, so one on the last roll looks free. Mostly fixed.
  - A8 Spectral: now only group ways in, not while carrying. Narrowed; Thistlewick's hatter still gives the Ghost an item with no roll. Still has it.
  - A9: all shipped furniture is Bulky, so Strong Back is dead. Still has it. Five players on Easy (4 items) always leave a dead Duty.
  - A11 Ghost's pass: chapters agree. Appears fixed.
  - A21: unique Duties; five-player Limit −1 on Easy/Standard; nothing for three. Partly fixed.
  - A22 dawn: still 12 Turns; the example has both essentials by Turn 3. Probably still has it.
  - A26: inside obstacles banned from ways in; Difficulty-12 ceiling. Appears fixed.
  - A27: dice colours, 0 = 10, roll-off. Fixed, but default Duties collide (Dracula/Ghost Butler; Mummy/Jekyll Librarian).
  - Likely from this game too: A15 (now stated, fixed), A17 (example still takes the Monster in a chase; can't tell), A18 (capture cost now stated; mostly fixed), A24 (final flight uncapped; partly).
  - Part D: no AI-assistance credit; artwork placeholders.
- **Worth reusing:** the trait-plus-risk-die roll; one shared threat track with one roll, one rise; Lead-track chases with the majority rule; premades with three picks and defaults; four ability kinds; help with a resource, not an action; d20 location generators with a ceiling; result tiers; capture and rescue. **A series sibling would share:** a "Don't Get [fate]" title that names the worst result; a holiday-night comedy one-shot; the dark engraved cover with bold serif capitals; the roll and the threat-to-final-flight arc.

## *Nine Lives Gang* (v0.8)

- **Premise:** Street cats break into a house after something a human just carried in (food, a toy or a box), and must get it and every cat out without being caught.
- **Players and length:** 3–5 players, each playing one cat, plus a Storyteller. Ch11 says a gang of one or two plays as three. 1–2 hours a robbery; ages 8+.
- **Core roll / engine:** a pool of d6; read the highest die.
  - **Dice:** approach (1–4), +1 Knack, +1 per helper (max +2; helping costs the helper's Action, and the helper doesn't roll), +1 for spending a Cattitude. **Max 5.**
  - **Take away:** 1 for Tricky or 2 for Hard; the pet's rating; and, on Sneaky or Sweet rolls, the top watcher's Attention (0–2).
  - **At 0 dice or fewer:** roll 2 and keep the lower; Scrape at best.
  - **Results:** 1–3 **Flop** (fails, noise) · 4–5 **Scrape** (works, noise) · 6 **Clean** · two 6s **Purrfect** (no Mood step, +1 Cattitude).
  - **Push:** once per roll, reroll the non-6s for 1 Cattitude or 1 Mood step.
  - **Group action:** one roll, and the Mood moves once.
- **Threat tracks and clocks:**
  - **The Mood:** **Broom** and **Cuddle** meters, each filling to the house's **Patience** (4–7; +1 with three cats, −1 with five). Only seen rolls count:
    - Clean or Scrape: 1 step (Sweet fills Cuddle, the rest fill Broom; a Sneaky Clean adds nothing).
    - Flop: 2 steps on the fuller meter.
    - Kids double Cuddle steps.
    - +1 Broom without a roll when a mess or the disturbed prize is found, or when a Searching human sees a cat.
  - **Broom full, Shoo!:** the cat is chased out of the nearest working entrance, which then shuts.
  - **Cuddle full, Scooped!:** the cat is Held. The holder rolls a d6 each round: keep cuddling, shut it in the Den, or put it out.
  - **After either:** the cat drops what it carries. The prize goes back to its Clock spot with its steps undone. That meter empties, and Patience drops 1 for good (floor 2).
  - **Prize Clock:** the rounds when the prize is put down, moved and gone (round 8–13; +2 with three cats). **Lights Out** falls at the end of the second round after "gone", and any cat still inside is adopted.
  - **Results:**
    - Clean Getaway: the prize is out or all eaten, and nobody is left behind.
    - Messy Getaway: someone is left behind, or half the portions are eaten.
    - Busted: anything less.
- **Character options:**
  - **Approaches:** Sneaky, Sweet, Savage and Streetwise, rated 3/2/1/1. The 3 is the role: Shadow, Charmer, Muscle or Brains.
  - **Instincts:** two of eight, each a Knack plus a temptation: Curious, Knocker, Box Sitter, Hunter, Lap Cat, Foodie, Climber, Scrapper.
  - **Body:** **Lean** (fits Tight gaps) or **Chonky** (carries Medium alone, +1 to wriggle free).
  - **Cattitude:** 2 (3 in a gang of three), max 5, lost at the end of the robbery.
  - **Lives:** 9, used in campaigns.
  - **Ready-made Bin Lid Gang:** Two-Bin Tilly, Big Biscuit, Velvet, Marmalade Mags, Pip.
- **Signature mechanics:**
  1. Seen isn't caught; seen *doing* something fills the Mood, and the approach steers which meter. The worst catch is adoption, and nobody gets hurt.
  2. **Temptations:** giving in earns +1 Cattitude, a free instinct act with no roll, and the first turn. Resisting costs 1.
  3. **A self-running house:**
     - d6 routines for humans and pets;
     - noise pulls the nearest human within two rooms;
     - Searching humans hunt cats;
     - each Distract on the same human costs a die more;
     - traits Kid, Dozes, Busy, Headphones;
     - dog, house cat, parrot, robot vacuum.
  4. **The prize:**
     - steps to reach it, which stay done for the gang;
     - sizes Small, Medium and Large against Tight, Normal and Big ways;
     - hauling a Medium or Large prize is always a roll;
     - food is eaten in portions per cat.
- **Structure of the book:** 50 pages in four parts.
  - The Gang (Ch1–3) and The Robbery (Ch4–10).
  - Running the House:
    - a 9-step round checklist;
    - Making a House, a checklist plus difficulty "knobs";
    - The Block, a campaign with Rep and approach raises.
  - Five houses, each with a map, a Prize Clock and three- and five-cat numbers:
    - Chicken at Number 12 (Easy; Patience 4);
    - Okafors' Big Box (Standard; Patience 7; a Large box);
    - Grandpa Wendell's Catnip Mouse (Standard; Patience 7);
    - Birthday Cake (Hard; Patience 6);
    - Chef Marchetti's Salmon (Hard; Patience 6).
  - Cat Sheet, House Tracker and Quick Reference.
- **Terms this game owns:** Cattitude, Purrfect, Flop/Scrape/Clean, Push, Knack, Lean/Chonky, the Mood, Broom, Cuddle, Patience, Shoo!, Scooped!, Held, Shut In, the Den, Searching, Lives, Prize Clock, Lights Out, Clean/Messy Getaway, Busted, The Block, Rep, and the cat names.
  - *Heisty Spideys* also uses "Prize", Distract and "scooped up", and also has a parrot and a vacuum.
  - **Trademark flag:** "Nine Lives" against 9Lives cat food.
  - **Cat Burglars** (GAMES.md) shares the premise, but the book never mentions it. Ask Richard how they relate.
- **What the reviews found** (all still in v0.8):
  - A1: lowered Patience can equal the other meter's level, and the book doesn't say whether that meter is now full.
  - A6: Push beats buying a die.
  - A8: give-ins are free Distracts and hides, and they also pay Cattitude.
  - A9: Chonky; no house has a Tight inside way.
  - A11: does every catch reset the prize, or only the carrier's?
  - A12: the end rule is true before round 1.
  - A13: entrances run out.
  - A15: temptation against a dog's Charge; Distracted against a human holding a cat.
  - A17: the Ch1 example breaks the Prize Clock: Mr Pell answers a noise in the round he put the chicken down.
  - A19: Busted rates upside down (Standard 25–35%, Hard 1–7%).
  - A21: the claim that three or five players do about as well was false.
  - A23: eating half the food counts as a getaway, so the Hard food houses are nearly unlosable.
  - A26: the house checklist isn't a generator.
  - A28: the tracker has 3 resident rows; the Birthday Cake has 5 residents.
- **My first read:**
  - The tracker stops at round 16; three cats at the Okafors' reach round 17 (A28).
  - There's no round card (A29).
  - Cattitude expires at the end, so late spends are free (A5).
  - A Shoo taken on purpose resets Broom to 0 (A3).
  - Purrfect comes up 1 in 36 on 2 dice and 1 in 14 on 3, against A19's 15–25%.
  - There's no tie-break for ready-made cats (A27).
  - Part D: no AI credit, and the Foundry companion isn't named.
- **Worth reusing:**
  - the capped highest-die pool;
  - a Push paid in either Cattitude or a Mood step;
  - two meters steered by approach;
  - temptations (after fixing A8);
  - the house turn;
  - a Prize Clock for each scenario;
  - the knobs table.

## *Second Nature* (v0.1)

- **Premise:** Kids who can each turn into one real animal sneak into places run by the Gilded Hunt, a secret society of rich townsfolk who bind animal gifts into gold Trophies. They free, wreck or steal before the Hunt catches their Scent.
- **Players and length:** 3–5 players plus a Storyteller, who never rolls. Ages 10+; the characters are 11–15. One mission per 2–3 hour session. A campaign is six missions, then the Last Hunt.
- **Core roll / engine:**
  - **The roll:** d6s equal to your approach rating (0–4) in your current form, plus bonus dice. Each 5–6 is a hit, and the Difficulty (usually 1–4) is the number of hits needed.
    - Fail = no hits.
    - Partial = at least one hit, but fewer than needed.
    - Success = enough hits.
    - Critical = a Success with two or more 6s.
  - **Cap:** at most +2 dice and −1 Difficulty per roll, from all sources; penalties have no cap.
  - **Wild** (start with 4; unspent Wild is lost): 1 each to Shift, Push (reroll every miss, once, outside the Cap), Help (+1 die, no action, counts towards the Cap) or Patch Up. Edges: a team pool of at most 2.
  - No opposed rolls; the result comes first.
  - **Reuse:** it reuses the *Heisty Spideys* d6 pool (5–6 counts) with simpler bands, and every core item in DESIGN-RULES "What worked" except a risk choice on every roll. The two-6s Critical matches *Nightwake*.
- **Threat tracks and clocks:**
  - **Scent:** 0 up to a Limit set per player count (5–8 in the shipped missions). It never goes down, and anything past the Limit is lost.
    - +1 for a point-obstacle Partial or Fail;
    - +1 once for a group obstacle that had any Partial or Fail, and +1 for every round after the third;
    - +1 at the end of a Clash (+2 if it reached round 4, someone went Down, or someone shifted);
    - +1 for a shift the Hunt sees;
    - a poor scouting roll, or an Exposed character in a campaign, starts the mission at Scent 1;
    - Partials in the Escape are free.
  - **On the Trail** (half the Limit): Escape obstacles are at +1 Difficulty.
  - **The Hunt is Up** (at the Limit): the Masters arrive, and any Fail means Taken.
  - **Other clocks:** a Clash lasts at most 4 rounds. There is no turn limit.
  - **Campaign:** the Hunt track runs 0–6. A Costly Win adds 1 and a Loss 2; at 6 the Last Hunt comes early. A Taken character becomes a Trophy within two missions unless rescued.
- **Character options:**
  - **Approaches:** Sneak, Force, Move, Sense, Wits (Wits is 0 in animal form).
  - **Frames and animals (animal perk):**
    - Big Cats: Jaguar (Night Rosettes), Snow Leopard (Ambush), Cheetah (Burst).
    - Canines: Coyote (Pack), Shepherd Dog (Good Dog), Red Fox (Wily).
    - Birds: Peregrine Falcon (Keen Eyes), Barn Owl (Silent Wings), Raven (Clever Beak).
    - Critters: House Mouse (Tiny), Brown Rat (Gnaw), Grey Squirrel (Leaper).
    - Heavies: Bison (Shaggy Coat), Moose (Antler Sweep), Hippopotamus (Charge).
    - Reptiles: Alligator (Lurker), Python (Coil), Komodo Dragon (Taste the Air).
  - **Human perks:** Football Player, Hide-and-Seek Champ, Track Star, Scout, Brainiac, Gamer, Team Captain, Animal Whisperer, Swim Team, Gymnast, Night Owl, Drama Kid.
  - **Also:** a Mark, and Growth at 2, 4 and 6 (+1 Wild, a second perk, +1 to a human rating, or Wild Sense).
- **Signature mechanics:**
  - Two sets of ratings and one animal for life. A shift costs 1 Wild and an action; between obstacles, one shift doesn't use your action. There's no time limit, and anything you're holding drops when you shift.
  - Place tags (Dark, High, Narrow, Water, Open, Crowd, Locked) against each frame's Strengths (+1 die) and Weaknesses (+1 Difficulty).
  - Point and group obstacles in a fixed mission shape.
  - Threats never roll. Each has a Difficulty, a Toughness and a Harm: Beater 2/2/1, Hound 2/3/1, Trapper 2/2/1, Huntsman 3/4/2. Any threat nobody rolled against hurts someone.
  - Nobody dies: Hurt, then Down, then Taken (and rescued later). Exposed and Stuck add to it.
- **Structure of the book:** 52 pages.
  - Part One, Ch. 1–8: the player rules.
  - Part Two, Ch. 9–12: for the Storyteller, including the town of Wrenfield and Making Missions.
  - Part Three: five missions, with Limits for 3/4/5 players:
    - Pemberton's Pets: Easy, 7/6/5;
    - The Zoo After Dark: Standard, 8/8/8;
    - The Old Mill: Standard, 7/7/6;
    - The Trophy Gala: Hard, 6/6/6;
    - The Lodge on the Hill: Hard, 7/7/7.
  - Part Four: six ready-made characters, At the Table, a Character Sheet, a Mission Tracker and a Round Card.
- **Terms this game owns:**
  - Bonded; the Wild and the Old Wild; the Night of the Waking.
  - The Gilded Hunt: Masters, Huntsmen, Beaters, Hounds, Trappers.
  - Trophies, the Last Hunt and the Callhorn.
  - Scent, On the Trail, the Hunt is Up, Clash, Mark, Exposed, Stuck, Taken, Costly Win.
  - Wrenfield, Thornhill and Lady Cordelia Vane.
  - **Shared with Richard's other books, so not its own:** Push (*Nine Lives Gang*), Edge (also a *Nightwake* technique) and Hurt. "The Waking" sits close to *Nightwake*.
  - **Distance from *Animorphs*:** "shift", never "morph"; one animal for life; no gadget; no mind-speech; no time limit; human villains. Echoes that remain: a secret enemy among respectable adults, and a zoo.
- **What the reviews found:** Not reviewed by the studio yet. My first-read observations, not a review:
  - **A9/A6:** Crowd appears only in The Trophy Gala (p. 41), so Drama Kid and Good Dog matter in one mission of five, while Night Owl (Dark) applies everywhere. Canines' ratings equal or beat Reptiles' on every approach (p. 8).
  - **A11/A16:** the Scent box (p. 16) says nothing else raises Scent, yet leaves out the rise after round 3. "harm" (to threats), "Harm" (a threat's stat) and "Hurt" (to you) are easy to confuse.
  - **A12/A15:** if the objective is done and then everyone is Taken, p. 17 and p. 21 don't settle Costly Win or Loss.
  - **A8:** going Down at a group obstacle gets you up past it (p. 20).
  - **A5:** Scent past the Limit is lost (p. 16), so Partials at obstacles cost nothing once the Hunt is Up.
  - **A18:** "always be rescued" (p. 20) against the full-moon deadline (p. 22).
  - **A19–A21:** missions are called tested thousands of times (p. 33), but no win or loss rates are printed. The campaign is unsimulated (p. 23). Three missions use one Limit for every group size.
  - **A26:** Making Missions (pp. 32–33) is a checklist, not a validated generator.
  - **A27:** the perk roll uses a "first" and a "second" die, and the book doesn't say how to tell them apart (p. 9).
  - **Part D:** no AI-assistance or art credit (p. 2).
- **Worth reusing:**
  - The Cap, Push and Help block, with its odds table (p. 12).
  - A Scent clock with Limits per group size, and the Hunt is Up as a change of phase rather than a loss.
  - Tags matched against Strengths and Weaknesses, with a Spotlights box in each mission.
  - The mission table format, and the Round Card.

## *Nightwake* (v0.1)

- **Premise:** The night every clock stops, five ordinary people wake to the five Chinese elements (Wu Xing) and must break the Unmade's Anchors and its Heart before dawn. Almost certainly GAMES.md's *Elemental Fighters*, renamed; the enemy is "the Unmade", not "The Darkness".
- **Players and length:** 3–5 players and a Storyteller, ages 12+. One standalone night: about 3 hours of play after 30–40 minutes' setup (20 with ready-made fighters). Seven d6 per player (five, plus two bonus dice in another colour).
- **Core roll / engine:**
  - Roll 5d6; each 5 or 6 is a hit, against the enemy's Guard (1–3). No opposed rolls.
  - Meet the Guard: safe. Miss it: lose the enemy's Harm in Vigour, then gain 1 Chi (not if Down). Either way, damage is hits plus bonuses.
  - Critical: Guard met with two or more 6s: +1 damage, +1 Chi.
  - Bonus dice (Chi die, Help, Quick perk): +2 at most. Help costs 1 Chi but not an action.
  - Rerolls come only from Tide and Lucky. No push-your-luck, no Mask/Monster choice.
  - "A roll's result comes first." No rolls outside fights.
  - Kin to Heisty Spideys' 5-or-6 pool, with a fixed five dice.
  - Vigour 10/7/6 for 3/4/5 fighters; Chi starts at 2, max 5.
- **Threat tracks and clocks:** no meter; only clocks.
  - **Hours (4):** each Anchor fight, Respite or long fight costs one; then the Heart.
  - **Long fight:** an Anchor fight past round 4 costs another Hour; with none left, dawn comes a round early.
  - **Round 7:** Anchor fights end (the Warden holds), and so does the First Clash.
  - **Anchors standing:** with four Hours and five Anchors, one always survives. Each adds 4 × fighters to the Heart's Toughness (base 5 × fighters, 6 × with five).
  - **Dawn:** end of Heart round 7 (6 if an Hour is owed). At dawn, Heart at half or less: Driven off. Above half, or everyone Down: Loss.
  - In fights, each standing Still heals its master 1 per round; a Call adds 2.
- **Character options:** four picks, no two fighters sharing any.
  - Elements: Wood (Renewal), Fire (Blaze), Earth (Bulwark), Metal (Edge), Water (Tide).
  - Styles: Brawler, Guardian, Sweeper, Counter, Flow, Breath.
  - Perks: Tough, Medic, Lucky, Quick, Stubborn, Trained.
  - Awakenings: Ascendant, Unbreakable, Wellspring, Tempest, Seal, Harmony.
  - Ready-made: Dani Okafor, Marcus Bell, Jun Park, Priya Raman, Sam Whitlock.
- **Signature mechanics:**
  - **Feeding ring:** +1 damage when the previous action came from the fighter before you in cycle order.
  - **Shells:** the element that overcomes a Warden's Shell ignores it and breaks it. Every night has one Anchor per element.
  - **Misses pay Chi:** misses earn Chi for dice, Help, techniques and the Awakening.
  - **Fight or rest:** each Hour, an Anchor or a full-Vigour Respite.
  - **Awakening:** once a night, 3 Chi, 3 rounds (Seal 2). It opens when someone first goes Down, or at the Heart.
  - **Rules-run enemies:** a d6 Surge table (Crush, Sweep, Drain, Call). Difficulty changes only the Heart.
- **Structure of the book:** 31 pages, no art yet.
  - Part One, "Awaken" (Ch. 1–5): the rules, with a glossary.
  - Part Two, "The Unmade" (Ch. 6–9): the enemies, running the night, a ready-made night ("The Night the Clocks Stopped") and d6 generators.
  - Sheets: Fighter Sheet, Night Sheet, At the Table.
- **Terms this game owns:**
  - Nightwake, the Unmade, Stills, Swarm, Warden, Shell, Anchor, the Heart, the Hunt, Hour, Respite, long fight, First Clash, feeding, Guard, Vigour, Chi, Surge, Awakening, Driven off, and the option names above.
  - Shared with *Second Nature*: "the Hunt", "Clash", "Harm", a Priya.
- **What the reviews found:** Not reviewed by the studio yet. The book (Ch. 6) reports simulated wins of about 90/75/58 in 100 nights and outright losses of about 1/9/21 (Easy/Standard/Hard); the studio hasn't checked them. First-read observations, not a review:
  - **A21:** Ch. 6 says 3, 4 and 5 fighters land within a few points, the claim that proved false in Nine Lives Gang.
  - **A22:** dawn binds (9–21 nights in 100 end Driven off); no figures show the round-4 and round-7 clocks ever bite.
  - **A5/A15:** Guardian's 2-Chi gain is unclear once other protections apply (Ch. 2). Guardian plus Unbreakable may earn Chi for free.
  - **A9:** Sweeper does nothing in the First Clash, or once the pack is gone.
  - **A16/A28:** "Flow" is both a style and Water's keyword, and "Stills still Swarm" reads badly. The rules say "each pack", but the Night Sheet has one pack box.
  - **A27:** self-built fighters take setup to 30–40 minutes.
  - **Part D:** the credits lack the AI line.
- **Worth reusing:**
  - The Guard roll, where a miss trades damage for Harm and pays Chi.
  - Bonus dice in a second colour, so the cap polices itself.
  - The Hunt clock (four Hours, five targets) and the size table.
  - Counters that give every element a target, the feeding ring, and d6-driven enemies.


---

## Games with no book on file

- ***Cat Burglars*:** starter delivered; no book attached. Same premise as *Nine Lives Gang* (cats robbing houses); how the two relate isn't recorded.
- ***Don't Get Gobble Gobbled*:** starter delivered 2026-10-26; the finished starter documents are in `examples/dont-get-gobble-gobbled/`.
