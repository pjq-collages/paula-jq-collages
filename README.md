# Paula JQ Collages

Build a minimal, white, static portfolio website for a French collage artist named "Paula JQ Collages". Reference for layout and mood: simonlevaloisbazer.com (screenshots attached). Language: French. No backend, no database, no authentication, no cart, no prices, no call-to-action buttons. Fully responsive.

HEADER (replaces the previous header description)

- Single horizontal bar, white background, no border, generous padding.

- Left to right: a small logo (height about 28px, file /logo.png in the

  public folder, links to home), then the nav, then the name "PJQ Collages"

  aligned to the far right (links to home).

- Nav items in this order: "Poster" (home "/") · "Carte postale" · "Dibond" ·

  "À propos" · "Contact". Small text, discreet, current page underlined.

- No Instagram or Pinterest icons in the header (they appear on the Contact

  page and in the footer instead).

- Mobile: logo at the left, name at the right, nav collapses into a hamburger

  menu.

DESIGN

- Header: artist name at the left (links to home), nav at the right, in this

  order: "Poster" (this is the home page "/") · "Carte postale" · "Dibond" ·

  "À propos" · "Contact". Instagram and Pinterest icons at the far right.

  Hamburger menu on mobile. The current page is underlined in the nav.

PAGES

1. Home "/" = collection Poster: responsive grid of the Poster artworks only

   (3 columns desktop, 2 tablet, 1 mobile). Image only, uniform ratio,

   title on hover. Each tile links to its artwork page.

2. "/carte-postale" and "/dibond": same grid layout, each showing only the

   artworks of its collection. If a collection has no artwork yet, show a

   short centered text: "Bientôt disponible."

3. "/oeuvre/:slug": large image, title, short description, technical details

   (paper, format), previous/next navigation within the same collection,

   and a back link to that collection's grid.

4. "/a-propos" and "/contact": as described before.

DATA

In src/data/works.ts, each work has an extra field

collection: "poster" | "carte-postale" | "dibond". The three collection pages

are generated from this field, so adding a work only means editing this file.

All 9 current works are in collection "poster" for now.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1f1ff85a-7e3c-4259-bdee-9f11d2a0e4ce).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
