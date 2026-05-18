# Software House Website Design Spec

Date: 2026-05-18
Status: Draft approved for implementation planning after user review

## Goal

Build a professional website for a new software house. The website should act as the company's main digital identity, explain services clearly, build trust even with limited early portfolio, and convert visitors into qualified leads through a discovery call or project estimate request.

The first version should be polished, responsive, SEO-conscious, accessible, and easy to maintain without requiring a CMS.

## Target Audience

Primary audience:

- Business owners and teams that need a credible company profile website.
- SMEs and growing companies that need custom web applications or internal systems.
- Clients who want a reliable partner for maintenance, iteration, and post-launch support.

Secondary audience:

- Potential partners, freelancers, and collaborators who want to understand the company's capabilities.
- Technical prospects who want to see evidence of structured engineering and delivery discipline.

## Positioning

The website positions the company as a practical software house that turns business needs into credible websites and useful web systems.

Core message:

> We build websites and web systems that make businesses look credible, work more clearly, and convert opportunities into action.

The brand tone should be professional, confident, concise, and helpful. It should avoid sounding like a generic agency that can do everything. The service focus is:

- Company profile websites.
- Custom web applications and internal systems.
- Maintenance and growth retainers.

## Recommended Technical Approach

Use a custom frontend app for the first release.

Recommended stack:

- React + Vite for a fast modern frontend.
- Tailwind CSS for styling.
- Content stored in local structured files or simple component data.
- Static-first deployment suitable for Cloudflare Pages, Vercel, Netlify, or similar platforms.
- Contact CTA routed to WhatsApp, email, or a simple form handler later.

Reasoning:

- Faster to launch than a custom CMS.
- Better design control than a generic template.
- Good performance and SEO foundation.
- Low operational complexity.
- Easy to migrate content into WordPress, Strapi, or another CMS later if blog and portfolio volume grows.

## Site Map

The first version should include these routes or sections:

- Home
- Services
- Case Studies / Portfolio
- About / Team
- Pricing / Engagement Model
- Blog / Insights
- Contact
- Privacy Policy
- Terms

If implementation time needs to be reduced, Home can include summaries of Services, Case Studies, About, Pricing, Blog, and Contact while still reserving separate routes for deeper content.

## Home Page Structure

### 1. Navigation

Navigation items:

- Services
- Case Studies
- About
- Pricing
- Blog
- Contact

Primary CTA:

- "Jadwalkan Konsultasi" or "Minta Estimasi"

Navigation must be responsive, keyboard-accessible, and compact on mobile.

### 2. Hero

Purpose:

Immediately explain what the company does, who it helps, and what the visitor should do next.

Content:

- Specific headline.
- Supporting subheadline.
- Primary CTA: schedule consultation or request estimate.
- Secondary CTA: view services or case studies.
- Short trust signals such as stack, process, response promise, or project types.

Example headline:

> Kami membangun website dan sistem web yang membuat bisnis terlihat kredibel, proses lebih rapi, dan leads lebih mudah dikonversi.

Example subheadline:

> Dari company profile website sampai web app internal, kami merancang, membangun, dan mengoptimalkan aset digital yang siap dipakai untuk tumbuh.

### 3. Trust Signals

If real client logos or numbers are not available yet, use honest alternatives:

- Technology stack.
- Delivery process.
- Founder/team credentials.
- Demo projects or concept case studies.
- Quality promises such as responsive design, performance checks, and post-launch support.

Avoid fake logos, fake metrics, or invented client claims.

### 4. Problem Section

Explain 3-4 business problems the company solves:

- A business looks less credible online than it is in reality.
- Sales conversations repeat the same explanations because the website is unclear.
- Internal work is scattered across spreadsheets, chats, and manual processes.
- Existing websites are difficult to update, slow, or not optimized for leads.

### 5. Services Summary

Three primary service cards:

1. Company Profile Website
   - For companies that need a credible, conversion-ready business website.
   - Deliverables: sitemap, copy structure, responsive UI, SEO basics, contact CTA, launch support.

2. Custom Web App
   - For businesses that need dashboards, portals, booking systems, inventory workflows, admin tools, or internal systems.
   - Deliverables: discovery, scope, UI, frontend/backend implementation, QA, deployment.

3. Maintenance / Retainer
   - For teams that need continuous updates, fixes, monitoring, and iteration after launch.
   - Deliverables: monthly support, small improvements, bug fixing, reports, and technical advisory.

### 6. Featured Case Studies

If real case studies are not available, use transparent "concept project" or "sample engagement" entries.

Each case study should include:

- Problem.
- Solution.
- Role.
- Stack.
- Timeline.
- Outcome or intended outcome.
- Screenshots or visual preview.

The first implementation can include two sample entries:

- Business Website Relaunch.
- Internal Operations Dashboard.

### 7. Process

Process steps:

1. Discovery
2. Scope
3. Design
4. Build
5. QA
6. Launch
7. Support

Each step should be described in one short, practical sentence.

### 8. About Preview

Content:

- Short company story.
- Founder or team introduction.
- Working principles.
- Emphasis on clarity, realistic scope, reliable delivery, and maintainable systems.

### 9. FAQ

Initial FAQ topics:

- How long does a company profile website take?
- How much does a project usually cost?
- Can the site be updated after launch?
- Do clients own the source code and assets?
- Do you provide maintenance?
- Can you continue an existing project?

### 10. Final CTA

Purpose:

Convert visitors after they understand the offer.

Content:

- Short invitation to discuss the project.
- Button to contact via WhatsApp/email or open the contact form.
- Response expectation such as "Kami biasanya merespons dalam 1 hari kerja."

## Services Page

The Services page should explain each service in detail with outcomes, scope, deliverables, and fit.

For each service:

- Who it is for.
- Problems it solves.
- What is included.
- What is not included by default.
- Example deliverables.
- Suggested next step.

The page should avoid vague promises and instead make the buying decision easier.

## Case Studies Page

The Case Studies page should be honest about available proof.

If real projects exist:

- Use real client/project names only when permitted.
- Use anonymized descriptions for NDA work.
- Use `noindex` only for pages that should not appear in search and remain crawler-accessible for the directive.

If real projects are not ready:

- Label entries as "Concept Project" or "Sample Engagement".
- Focus on method, decision-making, UI quality, and technical thinking.
- Avoid representing concept work as paid client work.

## About Page

The About page should build trust.

Content:

- Company story.
- What the team believes about software delivery.
- Team/founder profiles.
- Values:
  - Clear scope before build.
  - Practical design.
  - Maintainable engineering.
  - Transparent communication.
  - Post-launch responsibility.

## Pricing / Engagement Page

Use engagement models rather than rigid pricing if exact pricing is not ready.

Suggested models:

1. Starter Website
   - For simple company profile websites.
   - Includes essential pages, responsive design, SEO basics, and contact CTA.

2. Business Website
   - For stronger brand presence, more content, blog setup, case studies, and conversion-focused pages.

3. Custom System
   - For web apps, dashboards, portals, and internal tools.
   - Requires discovery and custom estimate.

4. Monthly Retainer
   - For ongoing maintenance, fixes, content updates, and improvements.

Use "mulai dari" or "estimasi setelah discovery" if exact prices are not final.

## Blog / Insights

The blog should support SEO and authority. Initial article ideas:

- Checklist website company profile yang siap mendatangkan leads.
- Kapan bisnis perlu custom web app, bukan spreadsheet lagi.
- Cara audit website bisnis dari sisi kredibilitas, kecepatan, dan konversi.

Blog content should be people-first, practical, and written for the client's decision-making process.

## Contact Page

The Contact page should make conversion easy and accessible.

Fields:

- Name
- Company
- Email or WhatsApp
- Project type
- Budget range or engagement type
- Message

Requirements:

- Every input has a visible label.
- Focus states are clearly visible.
- Error messages are clear.
- Privacy note appears near the form.
- Alternative contact channels are visible.

Initial form behavior can be:

- Mailto/WhatsApp link with prefilled context, or
- Static form markup prepared for later backend integration.

## Legal Pages

Include simple starter pages:

- Privacy Policy
- Terms

Privacy Policy should explain:

- What contact data is collected.
- Why it is collected.
- How users can request deletion or correction.
- How third-party analytics or form tools may be used if added later.

Terms should explain:

- Website information is for general reference.
- Project work requires a separate written agreement or proposal.
- Intellectual property and payment details are governed by project agreements.

## Visual Direction

The design should feel like a modern professional software house:

- Clean, precise, and credible.
- Dense enough to feel useful, but not crowded.
- Strong typography and clear hierarchy.
- Neutral base colors with a confident accent color.
- Avoid generic agency gradients, oversized decorative blobs, and fake futuristic visuals.
- Use real interface-style visuals, process diagrams, code/product previews, or project mockups.

Recommended UI character:

- Professional SaaS/service-business feel.
- Compact cards for services and case studies.
- Clear navigation and CTA placement.
- Responsive mobile layout with no overlapping text.

## SEO Requirements

Each page should have:

- Unique page title.
- Unique meta description.
- One clear H1.
- Structured headings that match the page organization.
- Descriptive link text.
- Clean URLs.
- Sitemap-ready route structure.

Home SEO direction:

- Target terms around software house, jasa pembuatan website, custom web app, and maintenance website.
- Keep copy natural and useful, not keyword-stuffed.

## Accessibility Requirements

The website should follow practical accessibility basics:

- Semantic HTML landmarks.
- Keyboard-accessible navigation and form controls.
- Visible focus states.
- Labeled form fields.
- Sufficient color contrast.
- Alt text for meaningful images.
- No text overlap on mobile or desktop.
- Buttons and links have clear accessible names.

## Content Model

Store repeated content as structured data where practical:

- Services
- Case studies
- Process steps
- FAQ items
- Blog posts
- Pricing/engagement models
- Team profiles

This keeps the first version simple while making future CMS migration easier.

## Error Handling and Empty States

Contact form:

- Required fields should show clear validation messages.
- Submission success should explain what happens next.
- If backend submission is not implemented yet, CTA should use reliable WhatsApp/email fallback.

Portfolio:

- If real projects are not available, show concept projects transparently.
- Avoid empty-looking pages.

Blog:

- If only a few posts exist, show a compact insights section instead of an empty archive.

## Testing and Verification

Before calling implementation complete:

- Run build/type checks available in the project.
- Inspect desktop and mobile layouts in a browser.
- Check that navigation works.
- Check that all CTA links work.
- Check that form fields are labeled and focusable.
- Check that no text overlaps or overflows on common mobile widths.
- Confirm each page has sensible title and meta description.

## Out of Scope for Version 1

- Full CMS integration.
- Authentication dashboard.
- Payment processing.
- Client portal.
- Multi-language localization.
- Advanced analytics dashboard.
- Backend contact form storage unless added later.

These can be added after the main website is launched and the service positioning is validated.

## Implementation Readiness

This spec is ready to become an implementation plan once reviewed by the user.

The implementation plan should cover:

- Project scaffold.
- Routing and page structure.
- Content data files.
- UI system and responsive layout.
- SEO metadata.
- Contact CTA behavior.
- Legal page content.
- Build and browser verification.
