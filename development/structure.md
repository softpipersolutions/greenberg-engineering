# Project Structure Analysis

This report documents the current state of the Greenberg Engineering website codebase, detailing implemented pages, their constituent sections, and planned but currently unimplemented routes.

## ⚠️ Legend
- **[Implemented]**: Route exists and renders content (`page.tsx` exists).
- **[Planned / Not Implemented]**: Directory exists in `src/app` but contains no `page.tsx`, or is a known requirement not yet built.

---

## 1. Pages & Routes

### ✅ Implemented Pages

#### 1. **Home** (`/`)
- **File**: `src/app/page.tsx`
- **Sections**:
    - `Hero` (Intro/Landing)
    - `Manifesto` (Mission statement)
    - `Stats` (Key metrics)
    - **Sector Deep Dives**:
        - `Infrastructure`
        - `ESG`
        - `Systems`
        - `Skills`
        - `Safety`
    - `Projects` (Featured work)
    - `InfraQPreview` (Teaser for Infra-Q product)
    - `Testimonials`
    - `Contact`
    - `Footer`

#### 2. **About** (`/about`)
- **File**: `src/app/about/page.tsx`
- **Sections**:
    - **Header**: Custom "Our Mission" header (Inline)
    - `TeamGrid`: Leadership and team members
    - `Contact`
    - `Footer`

#### 3. **Infra-Q** (`/infra-q`)
- **File**: `src/app/infra-q/page.tsx`
- **Sections**:
    - `InfraQHero`: Product landing
    - `InfraQFeatures`: Key capabilities list
    - `InfraQRoadmap`: Development roadmap
    - `Contact`
    - `Footer`

#### 4. **Insights** (`/insights`)
- **File**: `src/app/insights/page.tsx`
- **Sections**:
    - `InsightsList`: List of whitepapers/articles
    - `Contact`
    - `Footer`

---

### 🚧 Planned / Not Implemented Routes
The following directories exist in `src/app` but do not currently have a `page.tsx` file, indicating they are not accessible routes yet.

#### **Company** (`/company`)
*Status: Structure exists, no pages.*
- `/company` (Root)
- `/company/about` (Note: `/about` exists at root, checks needed for redundancy)
- `/company/careers`
- `/company/contact`
- `/company/leadership`

#### **Sectors** (`/sectors`)
*Status: Single-page sections exist on Home, but dedicated detailed pages are not implemented.*
- `/sectors` (Root)
- `/sectors/esg`
- `/sectors/infrastructure`
- `/sectors/safety`
- `/sectors/skills`
- `/sectors/systems`

#### **Legal** (`/legal`)
*Status: Structure exists, no pages.*
- `/legal` (Root)
- `/legal/impressum`
- `/legal/privacy`
- `/legal/terms`

#### **Resources** (`/resources`)
*Status: Structure exists, no pages.*
- `/resources` (Root)
- `/resources/downloads`

#### **Dev** (`/dev`)
*Status: Internal/Development utility routes?*
- `/dev`

---

## 2. Component Architecture

### Section Components (`src/components/sections`)
Reusable blocks used to build the pages above.

| Component | Used In | Status |
|-----------|---------|--------|
| `Hero` | Home | ✅ Active |
| `Manifesto` | Home | ✅ Active |
| `Stats` | Home | ✅ Active |
| `Projects` | Home | ✅ Active |
| `InfraQPreview` | Home | ✅ Active |
| `Testimonials` | Home | ✅ Active |
| `Contact` | Home, About, Infra-Q, Insights | ✅ Active |
| `Footer` | All Pages | ✅ Active |
| `SectorCard` (UI) | Sector Sections | ✅ Active |
| `SectorPrism` (UI) | Sector Sections | ✅ Active |

### Sub-Section Modules
- **About**: `TeamGrid`
- **Infra-Q**: `InfraQHero`, `InfraQFeatures`, `InfraQRoadmap`
- **Insights**: `InsightsList`
- **Sectors**: `Infrastructure`, `ESG`, `Systems`, `Skills`, `Safety` (All used in Home)
