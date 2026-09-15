# John Brazell — Portfolio

Static portfolio for gameplay development, technical game design, procedural generation, and research.

## Local preview

From the repository root, run:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`. No build step or package installation is required.

## Structure

- `index.html`: complete system descriptions and demonstrations, generation timings, tools/telemetry, connected I3D/CoG research, rapid prototypes, and contact.
- `case-studies/`: compatibility pages that send old article links to the matching landing-page section, including evaluation/tools/animation fragments. Text links remain available without JavaScript.
- `assets/css/custom.css`: portfolio layout, typography, responsive styles, and accessibility overrides.
- `assets/js/portfolio.js`: loads the YouTube trailer with muted autoplay and initializes independent muted playback for local clips. Content, navigation, and the trailer's YouTube link also work without JavaScript.
- `assets/media/`: compressed gameplay clips, posters, research figures, and prototype thumbnails. See the media credits in that directory.

Local videos use native controls, posters, and `autoplay muted loop playsinline`, with `preload="metadata"`. They replace the development GIFs, which are retained but not loaded by these pages. Browser autoplay restrictions may require manual play.

The trailer requests muted autoplay with an explicit referrer policy and the actual page origin. Preview over HTTP, not `file://`: YouTube error 153 indicates missing referrer/client identification, which may also be stripped by privacy tools or embedded browsers. Adjacent YouTube and Steam links remain available. The landing page uses `custom.css` directly; the original template styles and assets are retained for attribution/history.

Generation timings are representative recorded development runs from September 2, 2026, in the Godot 4.6.3 editor on a Ryzen 7 4800H / GTX 1660 Ti / 16 GB DDR4 / Windows 11 machine. Workloads and scope are shown with the figures. They are not statistical averages. The research MAE figures describe the ten-session CoG evaluation and are separate from these performance checks.

The Godot perception prototype is awaiting a public release and is not linked. The current public prototype entries are Unreal AI Demo and MinoTower Defense. Resume source files, paper manuscripts, raw logs, and private planning notes are maintained outside this public repository.

The visual foundation is [Forty by HTML5 UP](https://html5up.net/forty), licensed under [CC BY 3.0](https://html5up.net/license). Template attribution is retained in the pages and original assets. Game artwork, research figures, and prototype media have their own authorship; see the media credits.
