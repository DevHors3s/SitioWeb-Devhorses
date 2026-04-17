# Documento de Requisitos — Sección Demo Showcase

## Introducción

Esta funcionalidad agrega una nueva sección a la landing page de DevHorses titulada "Explora cómo podría verse tu negocio vendiendo online". La sección muestra demos interactivas de sitios web reales construidos por DevHorses, organizadas en tarjetas modernas con diseño premium estilo SaaS (Stripe/Framer). El objetivo es aumentar la conversión mostrando a los visitantes ejemplos tangibles de lo que pueden obtener, con llamadas a la acción directas hacia WhatsApp.

## Glosario

- **Demo_Showcase_Section**: Componente React que renderiza la sección completa de demos interactivas en la landing page.
- **Demo_Card**: Componente de tarjeta individual que muestra la información de una demo (nombre, categoría, descripción y botones de acción).
- **Demo_Data**: Estructura de datos que contiene la información de cada demo: nombre, categoría, descripción, URL de demo y URL de WhatsApp.
- **CTA_Block**: Bloque de llamada a la acción final ubicado debajo de la grilla de demos, con mensaje persuasivo y botón de WhatsApp.
- **Landing_Page**: Página principal (`page.tsx`) de DevHorses que contiene todas las secciones del sitio.
- **Language_Context**: Sistema de internacionalización existente que provee traducciones en español e inglés mediante el hook `useLanguage`.

## Requisitos

### Requisito 1: Integración de la sección en la landing page

**User Story:** Como visitante de DevHorses, quiero ver una sección de demos interactivas en la página principal, para poder explorar ejemplos reales de sitios web antes de contactar al equipo.

#### Criterios de Aceptación

1. THE Landing_Page SHALL render the Demo_Showcase_Section between the Testimonials section and the Contact section.
2. THE Demo_Showcase_Section SHALL maintain visual consistency with the existing dark theme (`bg-[#0A0F1C]`) and design language of the landing page.
3. THE Demo_Showcase_Section SHALL not modify, remove, or break any existing component or functionality of the Landing_Page.

### Requisito 2: Encabezado de la sección

**User Story:** Como visitante, quiero ver un título claro y atractivo en la sección de demos, para entender inmediatamente qué estoy viendo.

#### Criterios de Aceptación

1. THE Demo_Showcase_Section SHALL display a section badge, a main heading, and a subtitle.
2. THE Demo_Showcase_Section SHALL support bilingual text (español e inglés) through the Language_Context.
3. WHEN the section enters the viewport, THE Demo_Showcase_Section SHALL animate the heading elements with a fade-up entrance using Framer Motion.

### Requisito 3: Grilla responsiva de tarjetas de demo

**User Story:** Como visitante, quiero ver las demos organizadas en una grilla que se adapte a mi dispositivo, para poder explorarlas cómodamente desde cualquier pantalla.

#### Criterios de Aceptación

1. THE Demo_Showcase_Section SHALL display Demo_Card components in a responsive CSS grid layout.
2. WHILE the viewport width is less than 768px (mobile), THE grid SHALL display 2 columns.
3. WHILE the viewport width is 768px or greater (desktop), THE grid SHALL display 3 columns.
4. THE grid SHALL include consistent spacing between Demo_Card components.

### Requisito 4: Tarjeta de demo individual

**User Story:** Como visitante, quiero ver información clara y atractiva de cada demo, para poder decidir cuál explorar.

#### Criterios de Aceptación

1. THE Demo_Card SHALL display the demo name, category tag, and a brief description.
2. THE Demo_Card SHALL display a "Ver demo" button that opens the demo URL in a new browser tab using `target="_blank"` and `rel="noopener noreferrer"`.
3. THE Demo_Card SHALL display a "Quiero algo así" button that opens a WhatsApp conversation with a pre-filled message referencing the demo name.
4. THE Demo_Card SHALL use a dark card background with a subtle border, consistent with the existing GlowCard design language.
5. THE Demo_Card SHALL support bilingual labels through the Language_Context.

### Requisito 5: Efectos de hover en las tarjetas

**User Story:** Como visitante, quiero que las tarjetas respondan visualmente cuando paso el cursor, para tener una experiencia interactiva y premium.

#### Criterios de Aceptación

1. WHEN the user hovers over a Demo_Card, THE Demo_Card SHALL increase its elevation with a box-shadow effect.
2. WHEN the user hovers over a Demo_Card, THE Demo_Card SHALL apply a slight scale transform (approximately 1.02–1.05).
3. WHEN the user hovers over a Demo_Card, THE Demo_Card SHALL transition all hover effects smoothly with a duration between 200ms and 500ms.

### Requisito 6: Animaciones de entrada

**User Story:** Como visitante, quiero que las tarjetas aparezcan con animaciones suaves al hacer scroll, para percibir una experiencia profesional y moderna.

#### Criterios de Aceptación

1. WHEN a Demo_Card enters the viewport, THE Demo_Card SHALL animate with a fade-up entrance using Framer Motion.
2. THE Demo_Showcase_Section SHALL apply staggered animation delays to each Demo_Card so they appear sequentially.
3. THE Demo_Showcase_Section SHALL trigger entrance animations only once per page load (using `viewport={{ once: true }}`).

### Requisito 7: Datos de las demos

**User Story:** Como propietario de DevHorses, quiero que la sección muestre exactamente las 6 demos que he seleccionado, para presentar mi mejor trabajo a los visitantes.

#### Criterios de Aceptación

1. THE Demo_Showcase_Section SHALL render exactly 6 Demo_Card components with the following demo URLs:
   - `https://demo-gimnasio-eight.vercel.app/`
   - `https://demo-restaurante-pasteleria.vercel.app/`
   - `https://demo-restaurante-carnes.vercel.app/`
   - `https://mv-abogados.vercel.app/`
   - `https://apu-garden-lodge.vercel.app/`
   - `https://demo-retail.vercel.app/`
2. THE Demo_Data SHALL include a name, category, description, and demo URL for each of the 6 demos.
3. THE Demo_Data SHALL be defined as a typed array within the component, following the same pattern used in ProjectsSection.

### Requisito 8: Bloque CTA final

**User Story:** Como visitante que ha visto las demos, quiero una llamada a la acción clara al final de la sección, para poder contactar fácilmente a DevHorses si me interesa un sitio similar.

#### Criterios de Aceptación

1. THE CTA_Block SHALL be rendered below the demo grid within the Demo_Showcase_Section.
2. THE CTA_Block SHALL display a persuasive heading text ("¿Te gustaría algo así para tu negocio?" / "Would you like something like this for your business?").
3. THE CTA_Block SHALL display a WhatsApp button that opens a conversation with a pre-filled general inquiry message.
4. THE CTA_Block SHALL support bilingual text through the Language_Context.
5. WHEN the CTA_Block enters the viewport, THE CTA_Block SHALL animate with a fade-up entrance.

### Requisito 9: Internacionalización

**User Story:** Como visitante que habla inglés, quiero ver la sección de demos en mi idioma, para entender el contenido sin barreras.

#### Criterios de Aceptación

1. THE Demo_Showcase_Section SHALL add all new translation keys to the existing Language_Context `Translations` type.
2. THE Demo_Showcase_Section SHALL provide Spanish (`es`) and English (`en`) translations for: section badge, heading, subtitle, demo names, demo categories, demo descriptions, button labels, and CTA text.
3. WHEN the user toggles the language, THE Demo_Showcase_Section SHALL update all visible text immediately without page reload.

### Requisito 10: Compatibilidad técnica

**User Story:** Como desarrollador de DevHorses, quiero que la nueva sección siga las convenciones del proyecto existente, para mantener el código limpio y mantenible.

#### Criterios de Aceptación

1. THE Demo_Showcase_Section SHALL be implemented as a client component (`"use client"`) in a new file `src/components/DemoShowcase.tsx`.
2. THE Demo_Showcase_Section SHALL use only dependencies already present in the project: Framer Motion, lucide-react, Tailwind CSS v4, and React.
3. THE Demo_Showcase_Section SHALL use Tailwind CSS utility classes exclusively for styling, without custom CSS files.
4. THE Demo_Showcase_Section SHALL be typed with TypeScript, including an interface for the Demo_Data structure.
