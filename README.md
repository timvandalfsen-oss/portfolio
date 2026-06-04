# Portfolio — Tim van Dalfsen

Een statische portfolio-website (één pagina) die drie zelfgebouwde AI-projecten toont:

1. **Volautomatische BTC-handelsbot** — API-integratie met handelsplatformen (CCXT, REST, websockets).
2. **Geautomatiseerde workout-planner** — rommelige PDF's uit de mail normaliseren naar gestructureerde data.
3. **Puzzel-app (PWA)** — een complete app gebouwd en live gezet via GitHub Pages.

Pure HTML/CSS/JavaScript, geen build-step. Alle paden zijn relatief, dus de site werkt direct op GitHub Pages.

## Lokaal bekijken

Open `index.html` rechtstreeks in de browser, of start een mini-webserver in deze map:

```powershell
cd C:\ClaudeDesk\portfolio
python -m http.server 8080
```

Ga daarna naar http://localhost:8080.

## Mappen

```
portfolio/
├── index.html        # de hele pagina (NL teksten — vrij aan te passen)
├── css/styles.css    # dark thema, responsive, lightbox
├── js/main.js        # lightbox, scroll-reveal, jaartal
├── assets/           # alle afbeeldingen/screenshots
└── README.md
```

## Teksten aanpassen

De inhoudelijke teksten staan in `index.html`. Zoek op `PLACEHOLDER` voor de stukken die zijn bedoeld om
zelf te herschrijven (o.a. de intro in de hero en de "Hoe ik met AI werk"-sectie). De rest — uitleg per
project, "wat ik heb geleerd" en de verbeterpunten — is alvast ingevuld als concept.

Belangrijke gegevens om te controleren:
- E-mail: `Tim_van_dalfsen@hotmail.com`
- GitHub: `timvandalfsen-oss`
- **LinkedIn:** nog invullen (placeholder-link in de contact-sectie, `data-placeholder` markering).

## Afbeeldingen vervangen / bijwerken

Alle beelden staan in `assets/`. Vervang een bestand met dezelfde naam om het op de site te verversen.
De BTC-charts zijn kopieën uit `trader/reports/`; de dashboard-screenshot is gemaakt van het live
dashboard op poort 8055; de puzzel-screenshots komen van de live app.

## Online zetten via GitHub Pages

```powershell
cd C:\ClaudeDesk\portfolio
git init
git add .
git commit -m "Eerste versie portfolio"
# Maak op github.com een lege repo aan, bijv. 'portfolio', en koppel:
git remote add origin https://github.com/timvandalfsen-oss/portfolio.git
git branch -M main
git push -u origin main
```

Daarna op GitHub: **Settings → Pages → Source: Deploy from branch → `main` / root → Save**.
Binnen ~1 minuut staat de site op:

```
https://timvandalfsen-oss.github.io/portfolio/
```

Die URL kun je in je sollicitatie plakken.
