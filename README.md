# John Brazell — Portfolio

Static portfolio for gameplay development, technical game design, procedural generation, and research.

## Local preview

From the repository root, run:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`. No build step or package installation is required.

## Structure

- `index.html`: featured work, systems, research, selected prototypes, and contact.
- `case-studies/`: pacing/world generation and multiplayer/interaction articles.
- `assets/css/custom.css`: portfolio layout, typography, responsive styles, and accessibility overrides.
- `assets/js/portfolio.js`: pauses other clips when a visitor plays a video. Content and navigation also work without JavaScript.
- `assets/media/`: compressed gameplay clips, posters, research figures, and prototype thumbnails. See the media credits in that directory.

Videos use native controls, poster images, and `preload="none"`; they do not autoplay. Original development GIFs are retained in the existing assets but are not loaded by these pages.

The visual foundation is [Forty by HTML5 UP](https://html5up.net/forty), licensed under [CC BY 3.0](https://html5up.net/license). Template attribution is retained in the pages and original assets. Game artwork, research figures, and prototype media have their own authorship; see the media credits.
