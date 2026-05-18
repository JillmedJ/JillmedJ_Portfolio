🟦 CSS/
Det här är din huvudmapp för all styling.
Du har delat upp den i tre nivåer — och det är EXAKT hur proffs gör.

🟩 1. components/
Här ligger CSS som hör till specifika delar av sidan.

Exempel:

nav.css → bara navigationen

hero.css → bara hero‑sektionen

cards.css → bara korten

footer.css → bara footern

buttons.css → bara knappar

forms.css → bara formulär

👉 Tänk så här:

“Om jag ändrar något här ska det bara påverka EN sektion.”

Det här gör att du slipper gigantiska CSS‑filer som blir röriga.


🟧 2. designs/
Det här är ditt designsystem.
Det är här du bestämmer:

färger

spacing‑skalor

typsnitt

typografi

Det här är inte styling för specifika sektioner.
Det är grundregler som hela sidan bygger på.

✔ colors.css
→ färgvariabler, brand‑färger, neutrals

✔ spacing.css
→ spacing‑skalor (t.ex. --space-sm, --space-md)

✔ typography.css
→ typsnitt, font‑sizes, line‑height, rubrikskalor

👉 Tänk så här:

“Om jag ändrar något här ska det påverka hela designen.”


🟨 3. global-utils/
Det här är dina verktyg.
De är inte design.
De är inte komponenter.
De är inte layout.

De är hjälpmedel.

✔ reset.css
→ nollställer browserns standard‑CSS
→ gör att allt ser likadant ut i alla webbläsare

✔ helpers.css
→ små utility‑klasser
→ .flex-center, .text-center, .margin-top, .hidden, etc.

✔ debug.css
→ allt som hjälper dig se layouten
→ outlines, grid‑visning, overflow‑check

👉 Tänk så här:

“Det här är min verktygslåda.”


🟦 styles.css
Det här är din huvudfil som importerar allt annat.

Den ska INTE innehålla styling.
Den ska bara innehålla:

css
@import "global-utils/reset.css";
@import "global-utils/helpers.css";
@import "designs/colors.css";
@import "designs/spacing.css";
@import "designs/typography.css";
@import "components/nav.css";
@import "components/hero.css";
@import "components/cards.css";
@import "components/footer.css";
👉 Tänk så här:

“styles.css är min spellista — den spelar upp alla andra filer.”

🟪 Images/
→ alla bilder
→ loggor
→ bakgrunder
→ hero‑bilder
→ ikoner

Bra att du har en egen mapp.

🟫 Videos/
→ samma sak, fast för video

🟩 index.html
→ din huvudsida
→ här ska du ha en ren, tydlig struktur
→ inga långa inline‑stilar
→ inga onödiga divar

🟩 index.js
→ om du vill lägga till interaktivitet senare
→ men du behöver inte röra den nu

🟩 README.md
→ dokumentation
→ bra för GitHub
→ visar att du jobbar professionellt