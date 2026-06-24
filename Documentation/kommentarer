/* RESET */

/* “box-sizing: border-box är en modell som gör att padding och border räknas inuti elementets width och height. Det gör layouten stabil och förutsägbar. Därför använder man det som global standard i moderna projekt.”

en alternativ modell: content-box vilket är webbläsarens default/standard = width: 300px;
padding: 20px;
border: 2px solid; 

den verkliga bredden= 300+40+4=344px

→ Elementet blir större än du tänkt → Layout spricker → Kolumner hoppar ner → Nybörjare blir frustrerade 2. border-box (det du använder) Här räknas padding och border inuti width. Samma kod: css width: 300px;
padding: 20px;
border: 2px solid;
Ger: Kod verklig bredd=300px 

“Varför använder du border-box?” Då kan du lägga till: “Det gör att width betyder det jag tror att det betyder. Jag slipper räkna med padding och border manuellt. Det gör responsiv design mycket enklare.” Om intervjuaren frågar: “När skulle du inte använda border-box?” Svara: “Nästan aldrig. Men om jag bygger en komponent som ska ha ett exakt content‑område,
t.ex. en canvas eller ett element där innehållets storlek är kritisk,
kan content-box vara relevant. Men det är ovanligt.”*/


/* 
1 “::before och ::after är pseudo‑element som låter mig lägga till innehåll i DOM:en via CSS,
utan att ändra HTML. De används ofta för dekorativa detaljer,
ikoner,
markörer och layout‑tricks.”

2 ::before och ::after är pseudo‑element. Det betyder: de är inte riktiga HTML‑element de skapas av CSS de sitter inuti det element du applicerar dem på before hamnar först,
after hamnar sist Men viktigast: 👉 De kräver alltid content: för att synas. Exempel: css .button::before {
    content: "→ "; 
}
Det här lägger till en pil framför texten i knappen.

3 Användningsområde:
✔ Dekorativa detaljer Som små linjer,
symboler,
pilar,
citattecken. ✔ Ikoner Du kan lägga in SVG‑ikoner eller unicode‑symboler. ✔ Bakgrundsformer Som färgblock,
skuggor,
overlays. ✔ Extra layoutlager Till exempel när du vill ha en highlight bakom text. ✔ Markörer Som “•” i listor eller “—” i rubriker. ✔ Tooltip‑pilar Den lilla triangeln under en tooltip är ofta ett ::after.

Exempel 1 — dekorativ linje under rubrik css h2::after {
    content: "";
    display: block;
    width: 40px;
    height: 3px;
    background: #4a90e2;
    margin-top: 8px;
}

Exempel 2 — citattecken i testimonials css blockquote::before {
    content: "“";
    font-size: 3rem;
    color: #ccc;
}

Exempel 3 — ikon före länk css a.external::after {
    content: "↗";
    margin-left: 4px;
}

5. Vanliga misstag (som du nu slipper) 
❌ Glömmer content: Pseudo‑element syns inte utan det. ❌ Försöker lägga in riktiga HTML‑taggar Det går inte. content: kan bara innehålla text eller bilder via url(). ❌ Glömmer position: relative på föräldern Om du ska positionera before/after absolut. */



/* HELPERS  */

/* =========================================
   TILLGÄNGLIGHET
   ========================================= */

/* .hidden
   - Tar bort element helt från layouten
   - Bra för att dölja saker temporärt
*/
/* .hidden {
    display: none !important; se om !important på rad 100
} */
/* 
✔ Vad det betyder Elementet försvinner helt från layouten Det tar ingen plats Det går inte att tabba till Skärmläsare läser det inte Det är som om elementet inte finns ✔ När man använder det Temporärt dölja något Visa/dölj sektioner med JavaScript Ta bort element som inte ska synas på vissa skärmar Dölja debug‑element ✔ Viktigt Det här är inte bra för inputs som ska vara klickbara via label. Därför har du en annan klass för det.

/* .hidden-input
   - Döljer input visuellt men behåller funktionalitet
   - Används för custom checkboxes, radio-knappar, etc.
*/

/* .hidden-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
} 

✔ Vad det betyder Inputen är fortfarande klickbar via sin label Den finns kvar i DOM:en Den är tillgänglig för skärmläsare Den kan få fokus Den fungerar som vanligt Men den syns inte ✔ Varför man gör så Det här är standard när man bygger: egna checkboxar egna radio‑knappar egna switchar egna filuppladdningsknappar Man gömmer den riktiga inputen och bygger en snygg “låtsas‑knapp” ovanpå. ✔ Varför inte display: none? För att: då går det inte att klicka på labeln då kan inte skärmläsare använda inputen då kan inte tangentbordet tabba till den Alltså: display:none förstör funktionalitete 

⭐ 3. Varför position: absolute? Det gör att inputen: inte tar plats i layouten kan ligga “ovanpå” eller “under” andra element inte påverkar flex/grid‑flödet Det är som att lägga den i ett eget lager. ⭐ 4. Varför opacity: 0? Det gör inputen osynlig,
men: den finns kvar den kan klickas den kan fokuseras den är tillgänglig Det är den bästa metoden för “visually hidden but accessible”. ⭐ 5. Varför pointer-events: none? Det gör att: inputen inte fångar klick direkt men labeln kan fortfarande aktivera den Det är perfekt för custom‑checkboxar där du klickar på en stylad ruta,
inte på själva inputen.*/


/* !important:  
Först: Varför din lärare ogillar !important Det är inte för att han är petig — det är för att han vill att du ska lära dig riktig CSS‑kontroll. När man använder !important betyder det ofta: “Jag vet inte varför min stil inte slår igenom” “Jag orkar inte felsöka specifiteten” “Jag tvingar CSS att lyda mig” Det är lite som att banka in en spik med en sten när man egentligen borde använda en hammare. Så hans poäng är: 👉 Om du använder !important som standardlösning,
 då har du inte förstått CSS‑specifitet. Och det är sant. 

 ⭐ Men… här är sanningen som alla riktiga utvecklare vet !important är inte dåligt i sig. Det är bara dåligt när det används istället för att förstå problemet. I verkliga projekt används !important: ✔ i utility‑klasser (t.ex. .hidden) ✔ i reset‑klasser ✔ i tillgänglighetsklasser ✔ i CSS‑ramverk (Bootstrap, Tailwind, Material UI) ✔ i overrides av tredjeparts‑komponenter ✔ i debugging ✔ i “force override” när man inte får ändra källkoden Så professionella utvecklare använder det — men medvetet. 

 ⭐ Nu till dina två exempel: Du använder !important i: css .hidden {
     display: none !important;
 }

 Och vet du vad? 👉 Det är helt rätt. Varför? .hidden är en utility class Den ska alltid vinna Den ska alltid dölja elementet Den ska fungera oavsett vad andra stilar säger Det är exakt samma sak som: .sr-only i tillgänglighets‑CSS .visually-hidden i Bootstrap .hidden i Tailwind Alla dessa använder !important. Det är alltså best practice. 
 
 ⭐ Så här tänker branschen (den nyanserade sanningen) ❌ Dåligt användande av !important För att “få det att funka” För att man inte förstår specifitet För att man inte orkar felsöka För att man skriver CSS i fel ordning ✔ Bra användande av !important Utility‑klasser (.hidden, .visually-hidden) Tillgänglighet Debugging Overrides av tredjeparts‑CSS När man medvetet vill ha högsta prioritet 
 
 ⭐ Hur du kan säga det i en intervju eller presentation Det här är ett perfekt svar: “Jag undviker !important i vanlig styling eftersom det gör CSS svårare att underhålla. Men i utility‑klasser som .hidden är det helt rätt,
 eftersom klassen ska ha högsta prioritet. Det viktiga är att använda det medvetet,
 inte som en nödlösning.” Det svaret visar: att du förstår specifitet att du förstår best practice att du kan resonera som en utvecklare */



 /* =========================================
   GRADIENT BORDER UTILITY
   ========================================= */

 /* .gradient-border-soft { det är denna klass som ska användas för att få denna och nästas effekt */
     /* position: relative;
     overflow: hidden; */
     /* krävs för rundade hörn */
     /* border-radius: var(--border-radius-md);
 } */
/* 
 .gradient-border-soft::before {
     content: "";
     position: absolute;
     inset: 0;
     padding: 4px; */
     /* border-bredd
     border-radius: inherit;
     background: var(--border-gradient-soft);
     -webkit-mask:
         linear-gradient(#fff 0 0) content-box,
         linear-gradient(#fff 0 0);
     -webkit-mask-composite: xor;
     mask-composite: exclude;
     z-index: -1;
     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
 }

 ⭐ 1. Vad klassen gör (översikt) .gradient-border-soft skapar en gradient‑border utan att använda border-image. I stället använder den: ett pseudo‑element (::before) masking (CSS mask) padding som “border‑bredd” inherit border-radius för att matcha hörnen Det är en modern,
 robust och snygg metod. 
 ⭐ 2. Behöver du lägga två klasser på elementet? Nej. Du behöver bara skriva: html <div class="gradient-border-soft">… innehåll … </div>Varför? 👉 För att pseudo‑elementet ::before är kopplat till samma klass. När du lägger .gradient-border-soft på ett element så aktiveras både: huvudklassen pseudo‑elementet Automatiskt. Du behöver alltså inte lägga .gradient-border-soft::before i HTML — det är CSS som skapar det. 
 ⭐ 3. Hur det fungerar (rad för rad) A) Huvudklassen css .gradient-border-soft {
     position: relative;
     overflow: hidden;
     border-radius: var(--border-radius-md);
 }

 ✔ position: relative;
 Gör att pseudo‑elementet kan positioneras absolut inuti elementet. ✔ overflow: hidden;
 Gör att gradienten inte sticker ut utanför rundade hörn. ✔ border-radius: var(--border-radius-md);
 Ger rundade hörn — och pseudo‑elementet ärver detta.

 B) Pseudo‑elementet css .gradient-border-soft::before {
     content: "";
     position: absolute;
     inset: 0;
     padding: 4px;
     border-radius: inherit;
     background: var(--border-gradient-soft);
     -webkit-mask:
         linear-gradient(#fff 0 0) content-box,
         linear-gradient(#fff 0 0);
     -webkit-mask-composite: xor;
     mask-composite: exclude;
     z-index: -1;
     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
 }

 ✔ content: ""
 Skapar pseudo‑elementet. ✔ position: absolute;
 inset: 0;
 Får det att täcka hela elementet. ✔ padding: 4px;
 Det här är border‑bredden. Det är ett smart trick: padding skapar ett “hål” i mitten. ✔ border-radius: inherit;
 Matchar hörnen exakt. ✔ background: var(--border-gradient-soft);
 Själva gradienten. ✔ Masking (det magiska) Det här är den viktiga delen: css -webkit-mask: linear-gradient(#fff 0 0) content-box,
 linear-gradient(#fff 0 0);
 -webkit-mask-composite: xor;
 mask-composite: exclude;
 Det betyder: “Skapa två lager: ett innerlager och ett ytterlager” “Ta bort mitten” “Lämna bara ramen kvar” Det är så du får en gradient‑border utan att fylla hela bakgrunden. ✔ z-index: -1;
 Lägger pseudo‑elementet bakom innehållet. 
 ⭐ 4. Hur du använder klassen i praktiken Exempel html <div class="gradient-border-soft"><h3>Mitt projekt</h3><p>Beskrivning av projektet.</p></div>Det är allt. 
 ⭐ 5. Vanliga frågor Behöver jag lägga både .gradient-border-soft och .gradient-border-soft::before i HTML? ❌ Nej. Pseudo‑elementet skapas automatiskt av CSS. Kan jag ändra border‑bredden? Ja — ändra padding: i pseudo‑elementet. Kan jag ändra färgerna? Ja — ändra --border-gradient-soft. Kan jag använda den på knappar,
 kort,
 sektioner? Ja — på allt som har en bakgrund. */




/* 
UTILITIES

 .flow>* {
     margin-top: 1rem;
 }
 .flow-lg>* {
     margin-top: 2rem;
 }

 .flow-vertical>*+* {
     margin-top: 1rem;
 }

 de här tecknen (> *, >*, >*+*) är kluriga tills man ser hur de fungerar visuellt.

 ⭐ Först: spelar mellanslag någon roll? JA. I CSS‑selektorer är mellanslag betydelsefulla.>* och>* betyder exakt samma sak>*+* och>*+* betyder exakt samma sak Mellanslag är bara för läsbarhet. Det viktiga är symbolerna,
 inte whitespace. 
 ⭐ 1.> — child combinator Det betyder: 👉 “Välj direkta barn till ett element.” Exempel: css .container>* {
     margin-top: 1rem;
 }

 Det betyder: välj alla element som ligger ett steg ner i hierarkin inte barnbarn inte djupare nivåer HTML: html <div class="container"><p>Direkt barn</p>< !-- matchar --><div><p>Inte direkt barn</p>< !-- matchar inte --></div></div>
 ⭐ 2. * — universal selector Det betyder: 👉 “Välj ALLA element.” Så: css>* betyder: 👉 “Alla direkta barn.” 
 ⭐ 3.>*+* — syskon‑kombination för spacing Det här är en supervanlig utility‑selektor. Den betyder: 👉 “Välj alla direkta barn som har ett syskon före sig.” Med andra ord: hoppa över första barnet ge spacing mellan alla efterföljande element Exempel: css .flow>*+* {
     margin-top: 1rem;
 }

 Det betyder: första elementet i .flow får ingen margin alla element efter det får margin‑top Det är exakt så man bygger vertikal spacing i moderna design‑system. HTML: html <div class="flow"><h2>Första elementet</h2>< !-- ingen margin --><p>Andra elementet</p>< !-- margin-top --><p>Tredje elementet</p>< !-- margin-top --></div>

 ⭐ 4.>*+* — samma sak,
 bara utan mellanslag CSS ignorerar whitespace i selektorer. Så:>*+*>*+*>*+*>*+* Alla betyder exakt samma sak. Men: ✔ med mellanslag → lättare att läsa ✔ utan mellanslag → funkar men är svårare att förstå 
 ⭐ 5. Varför används>*+* så ofta? För att det är: skalbart förutsägbart bättre än att lägga margin på varje element bättre än att lägga margin på sista elementet Det är en del av “stack layout”‑mönstret. 
 ⭐ 6. Hur du kan förklara detta i en teknisk intervju Du kan säga: “>* väljer alla direkta barn.>*+* väljer alla direkta barn som kommer efter ett annat barn. Det är ett vanligt sätt att skapa vertikal spacing utan att lägga margin på första elementet.” Det är ett perfekt svar.  */

/* 
 ⭐ 7. Vill du att jag går igenom fler selektorer? Jag kan förklara::not():has():is():where():first-child vs :first-of-type~(general sibling)+(adjacent sibling)

 förstår dem i din egen kod kan förklara dem i en teknisk intervju känner dig trygg med hur och när de används Vi går igenom::not():has():is():where():first-child vs :first-of-type+(adjacent sibling)~(general sibling) Allt på ett sätt som matchar din stil och nivå. ⭐ 1. :not() — “välj allt utom detta” Det här är en negativ selektor. ✔ Vad den gör Den väljer element som inte matchar något. Exempel: css nav a:not(.cta) {
     color: var(--text-muted);
 }

 Det betyder: 👉 “Välj alla länkar i nav utom de som har klassen .cta.” När du använder den när du vill styla alla utom ett fåtal när du vill undvika att skriva långa listor av undantag när du vill skapa generella regler men hoppa över specialfall ⭐ 2. :has() — “välj element som innehåller något” Det här är CSS framtidens superkraft. Den fungerar som en “parent selector”. ✔ Vad den gör Den väljer ett element baserat på vad som finns inuti det. Exempel: css .card:has(img) {
     padding-top: 0;
 }

 Det betyder: 👉 “Välj alla .card som innehåller en bild.” När du använder den när du vill styla föräldern beroende på barn när du vill skapa avancerade UI‑regler när du vill undvika JavaScript för enkla logiker OBS:has() stöds i moderna browsers (Chrome, Edge, Safari),
 men inte i äldre. ⭐ 3. :is() — “förenkla långa selektorer” Det här är en selektor‑gruppare. ✔ Vad den gör Den låter dig skriva flera alternativ i en och samma selektor. Exempel: css:is(h1, h2, h3) {
     font-family: var(--heading-font);
 }

 Det betyder: 👉 “Välj h1,
 h2 och h3 — men skriv det snyggt.” När du använder den när du vill undvika upprepning när du vill skriva mer läsbar CSS när du vill gruppera element som delar stil

 ⭐ 4. :where() — “som :is(),
 men med noll specifitet” Det här är en låg‑specifitets‑version av :is(). ✔ Vad den gör Precis som :is(),
 men: 👉 Den påverkar inte specifiteten. Det gör den perfekt för utility‑CSS. Exempel: css .container :where(h1, h2, h3) {
     margin-block: 0;
 }

 När du använder den när du vill gruppera selektorer utan att öka specifiteten när du bygger design‑system när du vill att regler ska vara lätta att skriva över ⭐ 5. :first-child vs :first-of-type Det här är en klassiker i intervjuer. ✔ :first-child Väljer elementet som är första barnet i sin förälder,
 oavsett typ. css p:first-child {
     color: red;
 }

 Matchar bara om p är det allra första elementet i containern. ✔ :first-of-type Väljer första p‑elementet,
 även om det inte är först i ordningen. css p:first-of-type {
     color: red;
 }

 Matchar alltid första p,
 även om det finns en h2 före. När du använder dem:first-child → när ordningen spelar roll:first-of-type → när typen spelar roll ⭐ 6.+— adjacent sibling (direkt syskon) Det betyder: 👉 “Välj element som kommer direkt efter ett annat.” Exempel: css h2+p {
     margin-top: 0;
 }

 Det betyder: välj p som kommer precis efter en h2 men inte andra p längre ner ⭐ 7.~— general sibling (alla syskon efter) Det betyder: 👉 “Välj alla syskon som kommer efter,
 oavsett avstånd.” Exempel: css h2~p {
     color: gray;
 }

 Det betyder: alla p som kommer efter h2 även om det finns andra element emellan */



/* 
 GRID */

 /* =========================================
3) GRID-SYSTEM
========================================= */

 /* Två kolumner */
 /* .grid-2 {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: 2rem;
 }
 ✔ Vad den gör Delar upp ytan i två lika breda kolumner Oavsett skärmstorlek Gap=avstånd mellan kolumner och rader ✔ När du använder den När du vill ha exakt två kolumner T.ex. i About‑sektionen (innan du gjorde din specialvariant) ✔ Intervjusvar “grid-template-columns: repeat(2, 1fr) skapar två lika stora kolumner.” */

 /* Tre kolumner */
 /* .grid-3 {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 2rem;
 }
 ✔ Vad den gör Tre lika breda kolumner Oavsett skärmstorlek ✔ När du använder den När du vill ha tre kort bredvid varandra T.ex. projektkort,
 tjänster,
 features ✔ Intervjusvar “grid-3 är en fast layout med tre kolumner,
 bra för desktop.” */

 /* Auto-fit grid (responsivt) */
 /* default: 1 kolumn på mobil */

 /* Grid-variant för About-sektionen */
 /* .grid-about-2 {
     display: grid;
     gap: 3rem;
     grid-template-columns: 1fr; */
     /* Mobil */
 /* }
 ✔ Vad den gör 1 kolumn på mobil (Du har en media query som gör den till 2 kolumner på desktop) ✔ Varför du gjorde den För att About‑sektionen behövde exakt två kolumner på desktop Men 1 kolumn på mobil Och du ville inte ändra .grid-auto-mobile eftersom den används på fler ställen ✔ Intervjusvar “grid-about-2 är en specialvariant för en specifik sektion. Den är isolerad för att inte påverka andra delar av layouten.”


 .grid-auto-mobile {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr; */
    /* default: 1 kolumn på mobil */
 /* }

 ✔ Vad den gör 1 kolumn som default (mobil) I din media query → 3 kolumner på tablet/desktop ✔ När du använder den När du vill ha förutsägbara tre kolumner på desktop Men enkel läsbarhet på mobil ✔ Intervjusvar “grid-auto-mobile är en mobil‑först grid som går från 1 kolumn till 3 kolumner vid 768px.” */




/* 
 TOKENS 
 (COLORCS)

 variabler vs designvariabler -> semantiska variabler <3 : ) 

 ⭐ 1 --yellow-100 är själva variabeln

 ⭐ 2. Men: färgskalor är råmaterial,
 inte färdiga design‑variabler Det du har gjort är att skapa ett färgtema: --yellow-100=ljus bakgrund --yellow-200=highlight --yellow-300=accent --yellow-400=stark accent --yellow-500=mörk accent --yellow-600=djup guld --yellow-700=antik guld Det är jättebra — men det är inte de variabler du bör använda direkt i din styling.

 ⭐ 3. Det du egentligen vill ha är semantiska variabler
 semantiska variabler: (ex.) --bg-main: var(--yellow-100);
--bg-card: var(--yellow-200);
--text-main: var(--yellow-700);
--accent: var(--yellow-400);
--accent-hover: var(--yellow-500);
--border-color: var(--yellow-300);

⭐ 4. Varför semantiska variabler är bättre ✔ Du kan byta färgtema utan att ändra 200 ställen Du ändrar bara: css --bg-main: var(--yellow-100);
till: css --bg-main: var(--blue-100);

⭐ 5. Så här bygger du ett bra system (rekommenderat för din portfolio) Steg 1: Definiera färgskalor (det har du gjort)
Steg 2: Skapa semantiska variabler
Steg 3: Använd bara de semantiska variablerna i din styling
⭐ 6. Så här kan du förklara det i en teknisk intervju “Jag använder två nivåer av CSS‑variabler. Först definierar jag färgskalor,
t.ex. --yellow-100. Sedan skapar jag semantiska variabler som --bg-main och --accent. Det gör att jag kan byta tema eller färgpalett utan att ändra hela koden.” */
