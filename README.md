# NOVA ID — DIGITAL IDENTITY STUDIO
### Digital College Identity Card Generator

> **Design Philosophy**: *"Quiet Futurism"* — combining premium editorial typography, university credential aesthetics, subtle holographic light refraction, and interactive 3D spatial depth.

---

## 🎓 Academic Concepts Demonstrated

This project was engineered to provide clear, concrete implementations of essential React frontend architecture concepts:

### 1. Controlled Forms
- **Source of Truth**: Every form input across Identity, Academics, Contact, and Appearance is strictly governed by React state (`formData`).
- **Synchronous Two-Way Binding**: Synthetic change events (`handleInputChange`) immediately update state, guaranteeing zero DOM desynchronization.
- **Files**: `src/components/common/InputField.jsx`, `src/components/common/SelectField.jsx`, `src/components/builder/IdentityTab.jsx`

### 2. Props (Unidirectional Data Flow)
- **Top-Down Propagation**: Parent container `App.jsx` distributes state values and callback handlers downward to child display components.
- **Pure Presentation**: `CardFront.jsx`, `CardBack.jsx`, `QRVisual.jsx`, and `CompletionRing.jsx` receive immutable props without directly mutating root state.
- **Files**: `src/App.jsx` ➔ `src/components/card/*` & `src/components/builder/*`

### 3. State Management
- **Centralized State Coordinator**: Root state manages `formData`, active holographic theme (`activeTheme`), light/dark environment lighting (`themeMode`), floating notifications (`toasts`), and evaluator inspector toggle.
- **Local Component State**: Dedicated `useState` hooks for 3D card flip status (`isFlipped`), active builder tab (`activeTab`), and drag-and-drop hover indicators.
- **Files**: `src/App.jsx`, `src/components/card/DigitalIDCard.jsx`

### 4. Reusable Components
- **Modular Component Library**:
  - `Button`: Supports variants (`primary`, `secondary`, `accent`, `subtle`), sizes (`sm`, `md`), and custom Lucide icons.
  - `InputField` & `SelectField`: Built-in label tracking, required indicators, and synchronized status indicators.
  - `Toast`: Non-intrusive floating feedback notifications.
  - `HolographicFoil`: Reusable mouse-tracking specular glare overlay.
- **Files**: `src/components/common/*`

### 5. Dynamic Rendering & Derived Computation
- **Dynamic Monogram Initials**: Parses full name into 2-character initials (e.g. `Roshitha Gandla` ➔ `RG`) when no photo is uploaded.
- **Dynamic Skill Tags**: Splits comma-separated strings (`React, JavaScript, AI`) into interactive capsules in real-time.
- **Procedural Deterministic QR Visual**: Derives an SVG matrix block and machine-readable barcode based on the student's ID and department.
- **Orbital Completeness Meter**: `useMemo` dynamically computes non-empty required fields and displays percentage ($0\% - 100\%$) alongside an `IDENTITY READY ✦` badge.
- **Files**: `src/components/card/CardFront.jsx`, `src/components/card/QRVisual.jsx`, `src/components/builder/CompletionRing.jsx`

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### Installation & Development
```bash
# Clone or navigate to the directory
cd "Nova ID"

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

### Production Build
```bash
npm run build
```

---

## 🎨 Design System: "Quiet Futurism"

- **Primary Background**: Deep Ink `#0B0E0D`
- **Secondary Surface**: Graphite `#151A18`
- **Primary Typography**: Warm Ivory `#F3EFE5`
- **Secondary Typography**: Muted Stone `#9EA49D`
- **Accent 1**: Oxidized Copper `#B87952`
- **Accent 2**: Mineral Green `#6F8877`
- **Accent 3**: Smoky Lilac `#9B8FAE`
- **Interactive Highlight**: Pale Electric Cyan `#9BD7D5`

### 3 Curated Identity Themes
1. **Aurora**: Mineral green micro-grid, emerald holographic refraction, and biometric aura.
2. **Archive**: Graphite and oxidized copper accents, editorial serif typography, and archival museum markings.
3. **Monolith**: Obsidian black with smoky lilac and pale electric cyan laser-foil borders.

---

## 🖨️ Physical Print & PDF Isolation
Pressing **"Print / PDF"** activates dedicated `@media print` rules:
- Suppresses web UI chrome, headers, builders, and buttons.
- Centers both the Front and Back of the credential side-by-side with high-resolution vector crop marks.

---

## 📁 Project Architecture

```
Nova ID/
├── public/
│   └── favicon.svg                # Bespoke geometric identity mark
├── src/
│   ├── components/
│   │   ├── academic/
│   │   │   └── ConceptInspector.jsx  # Viva examiner concept guide
│   │   ├── builder/
│   │   │   ├── AcademicTab.jsx       # Academic credentials & dynamic skill chips
│   │   │   ├── AppearanceTab.jsx     # Themes (Aurora, Archive, Monolith) & Lighting
│   │   │   ├── CompletionRing.jsx    # Circular orbital SVG progress meter
│   │   │   ├── ContactTab.jsx        # Institutional email, phone, campus
│   │   │   ├── IdentityBuilder.jsx   # Segmented builder container
│   │   │   ├── IdentityTab.jsx       # Personal profile & photo upload
│   │   │   └── PhotoUploader.jsx     # Instant drag-and-drop photo parser
│   │   ├── card/
│   │   │   ├── CardBack.jsx          # Mag stripe, signature, QR visual, terms
│   │   │   ├── CardFront.jsx         # Biometrics, chip, initials, verified badge
│   │   │   ├── DigitalIDCard.jsx     # 3D mouse tracking & 180° flip container
│   │   │   ├── HolographicFoil.jsx   # Specular reflection shader
│   │   │   └── QRVisual.jsx          # Procedural 2D matrix & barcode
│   │   ├── common/
│   │   │   ├── Button.jsx            # Multi-variant button system
│   │   │   ├── InputField.jsx        # Controlled input with indicator
│   │   │   ├── SelectField.jsx       # Controlled select component
│   │   │   └── Toast.jsx             # Auto-dismissing notification toasts
│   │   └── layout/
│   │       ├── Header.jsx            # Telemetry, status beacon, action triggers
│   │       └── Hero.jsx              # Editorial headline & orbital lines
│   ├── data/
│   │   └── showcaseData.js           # Roshitha Gandla showcase identity & defaults
│   ├── styles/
│   │   ├── card.css                  # 3D perspective transforms & holographic CSS
│   │   ├── main.css                  # Quiet Futurism layouts & responsive rules
│   │   ├── print.css                 # Print isolation & physical crop marks
│   │   └── variables.css             # Color tokens & theme parameters
│   ├── App.jsx                       # Root state coordinator
│   └── main.jsx                      # React entry point
└── package.json
```
