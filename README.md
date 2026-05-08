<div align="center">
  <h1>Portfolio Blog (Sanity Studio)</h1>

  <img width="1919" height="879" alt="Image" src="https://github.com/user-attachments/assets/5bd722bd-56d6-4cb6-ae70-628c01f88400" />
</div>

This repository serves as the Headless CMS backend and administrative studio for the Portfolio Blog system. Built on Sanity, it defines the structured content schemas—ranging from projects and skills to author identity and site settings—that dynamically power the React frontend. It provides a clean, real-time editing interface to manage all portfolio data without touching the frontend code.

## Table of Contents
- [Schema Definitions](#schema-definitions)
- [Core Architectural Decisions](#core-architectural-decisions)
- [Getting Started](#getting-started)
- [Deployment & Sync](#deployment--sync)
- [Contact & Collaboration](#contact--collaboration)

## Schema Definitions
This studio contains custom document types mapped specifically to the frontend UI, with `Project` acting as a central relational entity.

**Global & Section Schemas**
- **Home**, **About**, **Contact**, **Blog Preview**: Manage layout content, hero messages, and section-specific textual data.
- **Brand**: Controls site identity, navigation metadata, and external social links.
- **Tech Stack**: Manages the master list of all technologies and developer proficiencies.
- **Custom Asset**: A reusable media schema to safely handle images or external video embeds (e.g. YouTube).

**Project Relationships**
- **Project**: The core parent document defining a portfolio item (Title, Slug, Thumbnail, Date, Repo Link).
- *Extensions (These reference a `Project` to build out its details page)*:
  - **Project Deep Dive**: A detailed explanation of the project's architecture, documentation, and live links.
  - **Project Technology**: Maps specific tech stack usages (language, tool, deployment) to a project.
  - **Project Images**: A media gallery linked to the project.
  - **Project Blog Entry**: Chronological development logs / daily blog entries tied to a specific project.

## Core Architectural Decisions

- **Type-Safe Schemas**: Every document type (Project, Blog, Images, etc...) is strictly mapped to the TypeScript interfaces in the frontend repository to ensure data integrity during ingestion.

- **Priority-Based Sorting**: Implemented a custom `priorityLevel` field in `project` to allow manual override of chronological sorting, ensuring high-impact projects maintain top-level visibility.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BenjiBenji20/portfolio-blog-studio.git
   cd portfolio-blog-studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development studio:**
   ```bash
   npm run dev
   ```
   *The studio will be available at `http://localhost:3333`.*

## Deployment & Sync

To deploy the schema updates to your live Sanity project, run:
```bash
npx sanity deploy
```
*Note: Make sure your `sanity.config.ts` and `sanity.cli.ts` have the correct `projectId` and `dataset` configured.*

## Contact & Collaboration

This system is designed to work in tandem with the React UI presentation layer.
- **Frontend React UI Repo**: [portfolio-blog](https://github.com/BenjiBenji20/portfolio-blog.git)

If you are interested in extending its features or identifying architectural improvements, feel free to reach out.
- **Email**: [benjicanones6@gmail.com](mailto:benjicanones6@gmail.com)

---

**License**: [MIT](LICENSE)
