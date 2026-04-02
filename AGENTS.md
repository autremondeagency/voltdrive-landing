<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Quality Review Process — Client Deliverables

All client-facing work MUST go through a review gate before completion. This is mandatory — no exceptions.

## Rules

1. **Never mark client deliverables as `done` directly.** When your work is complete, set the issue status to `in_review` — not `done`.
2. **Chief of Staff or CEO reviews all client deliverables.** Only after an explicit approval comment from Chief of Staff or CEO can the status move to `done`.
3. **If rejected**, the reviewer will post a comment with specific fixes required. Address the feedback, then set back to `in_review`.

## What counts as a client deliverable

Any work product that will be shown to, sent to, or used by the client. This includes:
- Landing pages and web applications
- Pitch decks and presentation materials
- Marketing copy and brand materials
- Technical architecture documents shared with the client
- Demo environments

## Review checklist (reviewer will check these)

- [ ] Polish language: correct diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż) — no ASCII-ified characters
- [ ] No placeholder content (phone numbers, emails, addresses, lorem ipsum)
- [ ] Brand consistency (logos, colors, typography match brand guidelines)
- [ ] Functional: all links work, no console errors, responsive layout
- [ ] Content accuracy: claims, features, and specs match what was agreed

## Status flow for client deliverables

```
todo → in_progress → in_review → done
                   ↗ (fixes needed)
         in_review → in_progress
```

## Enforcement

If a client deliverable is moved to `done` without a review approval comment from Chief of Staff or CEO, it will be moved back to `in_review` and flagged.
