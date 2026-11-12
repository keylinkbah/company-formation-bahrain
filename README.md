# Keylink static website

This is the current landing page, not an older design. Upload the complete folder contents together; index.html, styles.css, app.js, lenis.min.js and assets are required. No package installation or build is needed. Images and Poppins fonts are local, and image illustrations remain labelled as illustrations in the page's limitations.

## Forms and controls
Both enquiry forms validate the required name, email and phone fields, then redirect to WhatsApp +973 3239 2277 with those details and the selected company type in a draft. The visitor must press Send in WhatsApp; form submission alone does not deliver the message. No details are stored by this static website. FAQ toggles, phone/email links, Calendly booking, section navigation and smart floating WhatsApp work without React. Smooth scrolling respects reduced-motion settings and native touch scrolling.

## GitHub Pages
1. Create a GitHub repository and upload ALL these files, including the assets and licenses folders and .nojekyll.
2. Under repository Settings → Pages, choose Deploy from a branch, select your main branch and / (root), then Save.
3. Open the final public HTTPS URL after GitHub finishes deployment. Relative asset paths support both username.github.io and repository subfolders.

## Search settings — set your final address
Your final GitHub/custom-domain address is not known yet, so this export deliberately does not canonicalize to the Lovable address or Keylink's main service page.
After you know the final address:
1. Add <link rel="canonical" href="YOUR-FINAL-PAGE-HTTPS-URL"> in index.html's head and <meta property="og:url" content="YOUR-FINAL-PAGE-HTTPS-URL">.
2. In the JSON-LD graph, set WebPage.url and WebSite.url to that final address and WebPage.@id to that address followed by #webpage. Keep the business's url pointing to its actual Keylink main website.
3. Replace the example URL in sitemap.xml.example with the final page address and rename it sitemap.xml. Add Sitemap: YOUR-ABSOLUTE-SITEMAP-URL to robots.txt. For repository subfolder sites, robots.txt must be hosted at the domain root to control crawling; submit the sitemap directly regardless.
4. Add a Google Search Console URL-prefix property for the exact final URL (or a domain property for a custom domain). Use Google's HTML verification file at the required published path, or its meta tag in index.html's head. Domain properties require the provided DNS record.
5. Redeploy, verify ownership, submit the sitemap URL and inspect the public page to request indexing.

Semantic HTML retains one H1, section headings, main/header/nav/footer landmarks, labelled forms, table captions/column scopes and accessible FAQ controls. The page contains matching ProfessionalService, WebSite, WebPage and Service structured data, without invented prices, reviews or guaranteed approvals. FAQ content is retained without adding FAQPage markup solely for SEO. Share-image tags are omitted instead of pointing at unsupported local-image URLs. Metadata and long-form text support discoverability but cannot guarantee indexing or ranking.

## Check after deployment
Confirm both forms open the correct WhatsApp draft on a phone, all pictures load, sections/FAQ work, the canonical points at the exact deployed page, and the verification file and sitemap are reachable. Test locally with python3 -m http.server 8000, then open http://localhost:8000.
