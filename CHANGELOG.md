# Changelog — devhorses.com

Registro de los cambios hechos sobre el sitio, organizados por sesión de trabajo.

---

## 2026-09-09 — Auditoría de lanzamiento (SEO, legal, seguridad, accesibilidad)

El usuario trajo un checklist completo de "qué debería tener una web antes de salir a producción". Se auditó el código real contra cada punto y se resolvieron los siguientes:

- **Metadata única por página**: `/servicios`, `/proyectos` y `/nosotros` antes heredaban el mismo `title`/`description`/`canonical` de la home. Ahora cada una tiene el suyo, y cada página tiene exactamente un `<h1>` semántico (visible en `/nosotros`, `sr-only` en `/servicios` y `/proyectos` para no tocar el diseño animado existente).
- **Datos estructurados (JSON-LD)**: nuevo componente `JsonLd.tsx` con schema `ProfessionalService` (nombre, URL, logo, email, teléfono, dirección, redes) en todo el sitio — antes no había ningún dato estructurado.
- **Formulario accesible**: los 3 campos reales de contacto (nombre, email, mensaje) ahora tienen `htmlFor`/`id` conectando cada `<label>` con su `<input>`/`<textarea>` — antes solo estaban pegados visualmente, sin asociación real para lectores de pantalla.
- **Política de Privacidad real**: nueva página en `/politica-de-privacidad` (responsable, datos recopilados, finalidad, terceros usados — Resend/Cloudflare/Vercel —, retención y derechos ARCO según la Ley 29733 + su Reglamento). El link "Privacidad" del footer dejó de ser `href="#"`. Se sacó el link "Términos" porque el sitio no vende ni reserva nada online — no aplica.
- **Migración a `next/image`**: las 6 imágenes `<img>` planas del sitio (logos del Navbar/Footer, tarjetas flotantes del Hero, paneles de Proyectos, screenshots del SaaS Showcase, thumbnails de Demos) pasaron a `next/image` para optimización automática de formato y tamaño.
- **Headers de seguridad**: `next.config.ts` ahora envía en cada respuesta `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security` y una `Content-Security-Policy` ajustada a lo que el sitio realmente carga (incluye Cloudflare Turnstile). Verificado que Turnstile sigue funcionando bajo la nueva CSP.
- **Página 404 personalizada**: reemplaza la genérica de Next.js, con el mismo lenguaje visual del sitio y accesos rápidos a inicio / WhatsApp.
- **Libro de Reclamaciones**: evaluado, construido por completo (formulario + API + envío por email) y luego **descartado a pedido del usuario** — no aplica porque devhorses.com no vende ni cobra nada online (es solo contacto/cotización). Queda documentado como pendiente a futuro si el modelo de negocio cambia.
- **Aclaración Search Console vs. Analytics**: se explicó que tener Search Console conectado (ya hecho) no reemplaza a Google Analytics 4 — son herramientas distintas (indexación/búsqueda vs. comportamiento real de visitantes). GA4 queda pendiente para una sesión futura.

### Clientes reales agregados
- **Dental Tello** (clínica odontológica, Los Olivos, Lima) y **Business Beans** (agroexportadora de legumbres) se sumaron como casos de cliente completos en `/proyectos`, y reemplazaron la demo del gimnasio en las tarjetas flotantes del Hero — el Hero ahora muestra únicamente proyectos reales (Dental Tello, Apu Garden Lodge, Selekta Food, Business Beans).

---

## 2026-08-04 — SaaS Showcase, fixes del rediseño, ajustes finales de copy

Entre sesiones, el sitio recibió un rediseño visual completo por fuera de este canal (nuevo sistema de diseño "Estudio Cinemático": Montserrat, paleta azul noche + acento cyan, animaciones editoriales, Lenis para scroll suave). Se auditó ese rediseño a fondo y se resolvió lo siguiente:

- **Bug de CSS crítico**: clases custom (`.btn-accent`, `.btn-ghost`) declaradas sin `@layer` en `globals.css` le ganaban a *cualquier* utilidad de Tailwind (`hidden`, `md:flex`, `md:hidden`) sin importar el breakpoint — esto rompía el botón "Cotizar gratis" en mobile (se mostraba enorme) y duplicaba un botón fantasma en desktop en `/proyectos`. Se resolvió envolviendo esas clases en `@layer components`.
- **`/nosotros` desactualizado**: seguía con la paleta vieja (`#0A0F1C` hardcodeado, cyan/purple) mientras el resto del sitio ya tenía el nuevo sistema. Reescrito con los mismos tokens de diseño (`bg`, `ink`, `muted`, `accent`, `font-display`, `eyebrow`).
- **Colores del equipo restaurados**: a pedido del usuario, se volvió a los colores diferenciados por persona (cyan/rosa/violeta/esmeralda/naranja) en las tarjetas del equipo, sobre el layout nuevo.
- **Limpieza**: se eliminaron 4 componentes huérfanos que ya nadie importaba (`TechTicker.tsx`, `GlowCard.tsx`, `GlowButton.tsx`, `CyberButton.tsx`) y un "24h" hardcodeado que sobrevivió al cambio de copy anterior.
- **Nueva sección: SaaS Showcase** — sección dedicada al sistema de gestión hotelera que DevHorses construyó para Apu Garden Lodge (mapa de cuartos en vivo, reservas conectadas, cargos y frigobar, voucher, reportes en tiempo real, roles por equipo). Incluye mockup de navegador interactivo con tabs, tilt 3D al mouse, crossfade entre capturas reales del sistema, y una foto real del sistema en uso desde un celular. Paleta dorada/carbón propia, distinta al resto del sitio, para que se sienta como "producto dentro del producto".
- **Reordenamiento**: la sección del SaaS pasó a mostrarse primero (justo después del Hero) tanto en la Home como en `/proyectos`, por delante de Servicios/Proceso.
- **Fix de hover jank**: la cursiva (`italic`) en hover de los títulos de Servicios y Proceso se aplicaba de golpe a los 500ms (justo cuando el resto de la animación ya había terminado), por ser una propiedad CSS no animable mezclada en un `transition-all`. Se resolvió excluyendo `font-style` de la transición.
- **OG image corregido**: la imagen que aparecía al compartir el link (WhatsApp, etc.) tenía una proporción incorrecta y salía recortada/con zoom. Se regeneró a 1200×630 con el logo nuevo del cliente, centrado.
- **Copy**: título del Hero del SaaS ajustado a "el sistema operativo de su hotel"; nombres de testimonios actualizados (Americo Monteza, Sara Gutierrez); nombre de la diseñadora del equipo corregido a Aixa Vasquez.
- **Apu Garden Lodge actualizado**: nuevo dominio propio (`apu-garden-lodge.com`), nueva imagen, descripción actualizada mencionando el sistema de gestión conectado.

---

## 2026-06-05 — 2026-06-08 — Dominio, formulario y SEO base

- **Dominio propio**: `devhorses.com` configurado — Vercel conectado a Cloudflare DNS (CNAME apex + `www`, autorización automática de Vercel↔Cloudflare).
- **Formulario de contacto migrado**: de Web3Forms a **Resend**, con una API route (`/api/contact`) que envía un email con diseño propio desde `contacto@devhorses.com`.
- **Seguridad del formulario**: Cloudflare Turnstile (captcha invisible) + rate limiting por IP (máx. 3 envíos/hora) + honeypot — las tres capas verificadas en servidor.
- **Favicon**: reemplazado por el logo de DevHorses; eliminado el `favicon.ico` por defecto de Vercel que tenía prioridad sobre el nuevo ícono.
- **Copy del sitio**: "tiendas online" → "aplicaciones"; "RESPUESTA EN 24H" → "RESPUESTA INMEDIATA" en Hero, badge, trust bar y textos de contacto (ES + EN).
- **SEO técnico base**: `sitemap.xml` y `robots.txt` (App Router de Next.js), metadata mejorado con keywords, Open Graph y Twitter cards.
- **Google Search Console**: sitio verificado y sitemap enviado.

---

## Cliente Selekta Food

Agregado como caso de cliente real (agroexportación + IA) en `ProjectsSection`, con testimonio propio, thumbnail y descripción en ES/EN.

---

## Notas para el futuro

- **Google Analytics 4**: pendiente. Search Console mide indexación/búsqueda; GA4 mediría comportamiento real de visitantes (de dónde vienen, qué clickean, conversiones). Falta crear la propiedad en analytics.google.com y pasar el `G-XXXXXXX`.
- **Libro de Reclamaciones**: no aplica hoy (el sitio no vende ni cobra online). Revisar si el modelo de negocio cambia a e-commerce/reservas pagadas.
- **Vulnerabilidades de dependencias**: GitHub reporta ~83 vulnerabilidades vía Dependabot en el repo (mayormente en devDependencies). No se abordó en esta sesión — revisar con `npm audit` cuando haya tiempo dedicado.
