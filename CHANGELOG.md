# Changelog

All notable changes to the Ploy-Note project (AFFiNE fork) are documented in this file.

---

## [Unreleased]

### Removed
- **Favorites sidebar section** removed from desktop and mobile navigation
  - `NavigationPanelFavorites` and `NavigationPanelMigrationFavorites` removed from sidebar
  - `favorite` table dropped from `AFFiNE_WORKSPACE_USERDATA_DB_SCHEMA`
  - `FavoriteStore` converted to no-op stub (star icons on docs still render but are inert)

---

## Previous Changes (from git history)

### Added
- Spaces module as first-class knowledge containers (`feat(spaces)`)
- Space-scoped Memory + Claude AI Chat (`feat(spaces)`)
- Dump Zone — capture inbox + screenshot OCR (`feat(dump)`)
- Sub-Spaces, Workspace Chat, AI Search, Doc Gen, Cross-Space Connections, Dump Auto-Org (`feat: complete vision`)
- Seed sample workspace data on first load (`feat: seed`)
- Makefile for project build/run commands

### Fixed
- Use `find$()` instead of `find$({})` — empty where matched nothing
- Retry DB polling for seed + use `create()` for docProperties
- Remove localStorage guard — seed whenever spaces table is empty
- Delay seed to ensure DB is ready before checking spaces
- Use `globalStyle` for `dropZoneText` small selector (vanilla-extract)
- Use `globalStyle` for `typingDots` span selectors (vanilla-extract)

### Removed
- iOS, Android, and mobile app support (`chore: remove iOS/Android`)
- Inherited AFFiNE CI/CD, deployments, helm charts, and Docker configs
