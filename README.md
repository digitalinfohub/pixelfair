# PixelFair — Every Indie Game Deserves to Be Seen

A static, responsive indie-game discovery website built with HTML, CSS and JavaScript only.
All page-specific CSS is embedded in each HTML file via `<style>` tags; interactive logic is
embedded via `<script>` tags. The single shared data file `games-data.js` holds local example
data (no API, no database, no backend, no Python).

## Pages
index.html · games.html · game.html?slug=… · blog.html · blog-article.html?slug=… · about.html ·
submit-game.html · contact.html · faq.html · community-guidelines.html · developer-guidelines.html ·
accessibility-statement.html · copyright-policy.html · privacy-policy.html · cookie-policy.html ·
cookie-settings.html · terms-and-conditions.html · advertising-policy.html · disclaimer.html · 404.html

## Forms & email workflow
Both forms validate in-browser then open the visitor's own email app via a prefilled
`mailto:services@digitalinfohub.net` message. Nothing is transmitted or stored by the site,
and no false "sent" confirmation is ever shown. Secondary address: artifyspace@icloud.com.

## Deployment note
Replace the placeholder canonical/OG domain `https://pixelfair.example` with your real
production domain (head sections of each page + robots.txt + sitemap.xml) when hosting.
