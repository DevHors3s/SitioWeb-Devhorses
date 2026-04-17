# Plan de Implementación: Sección Demo Showcase

## Visión General

Implementar la sección Demo Showcase para la landing page de DevHorses. Se crea un componente cliente `DemoShowcase.tsx` con 6 tarjetas de demo, animaciones Framer Motion, soporte i18n completo (es/en), efectos hover premium, y un bloque CTA con botón de WhatsApp. Se integra en `page.tsx` entre Testimonials y Contact.

## Tareas

- [x] 1. Agregar claves de traducción al LanguageContext
  - [x] 1.1 Extender el tipo `Translations` con las nuevas claves de demo
    - Agregar al tipo `Translations` en `src/context/LanguageContext.tsx`: `demo_badge`, `demo_title`, `demo_subtitle`, `demo_1_name`, `demo_1_category`, `demo_1_desc`, `demo_2_name`, `demo_2_category`, `demo_2_desc`, `demo_3_name`, `demo_3_category`, `demo_3_desc`, `demo_4_name`, `demo_4_category`, `demo_4_desc`, `demo_5_name`, `demo_5_category`, `demo_5_desc`, `demo_6_name`, `demo_6_category`, `demo_6_desc`, `demo_btn_view`, `demo_btn_want`, `demo_cta_title`, `demo_cta_btn`
    - _Requisitos: 9.1_

  - [x] 1.2 Agregar traducciones en español (`es`) para todas las claves de demo
    - Incluir textos para: badge ("DEMOS INTERACTIVAS"), título, subtítulo, nombres de las 6 demos (Gimnasio FitPro, Pastelería Dulce Arte, Parrilla & Brasas, MV Abogados, Apu Garden Lodge, Tienda RetailPro), categorías (Fitness, Gastronomía, Servicios Profesionales, Hospedaje, E-commerce), descripciones, botones ("Ver demo", "Quiero algo así"), y CTA ("¿Te gustaría algo así para tu negocio?", "Hablemos por WhatsApp")
    - _Requisitos: 9.2_

  - [x] 1.3 Agregar traducciones en inglés (`en`) para todas las claves de demo
    - Incluir equivalentes en inglés para todas las claves agregadas en 1.2
    - _Requisitos: 9.2_

- [x] 2. Crear el componente DemoShowcase con tarjetas
  - [x] 2.1 Crear `src/components/DemoShowcase.tsx` con la interfaz `DemoData` y el array de 6 demos
    - Archivo `"use client"` con interfaz `DemoData` (`id`, `nameKey`, `categoryKey`, `descriptionKey`, `demoUrl`, `gradient`) usando `keyof Translations`
    - Definir el array `demosData` dentro del componente con las 6 demos y sus URLs reales, gradientes y claves de traducción
    - _Requisitos: 7.1, 7.2, 7.3, 10.1, 10.4_

  - [x] 2.2 Implementar el encabezado de la sección (badge, título, subtítulo)
    - Badge con icono de lucide-react, título con gradiente, subtítulo descriptivo
    - Usar `t()` para todos los textos, animación `motion.div` con `whileInView` fade-up y `viewport={{ once: true }}`
    - _Requisitos: 2.1, 2.2, 2.3_

  - [x] 2.3 Implementar la grilla responsiva CSS
    - Grid con `grid-cols-2 md:grid-cols-3` y spacing consistente (`gap-4 md:gap-6`)
    - Mapear `demosData` renderizando `DemoCard` para cada demo
    - _Requisitos: 3.1, 3.2, 3.3, 3.4_

  - [x] 2.4 Implementar la función interna `DemoCard`
    - Renderizar nombre (`t(demo.nameKey)`), categoría como badge (`t(demo.categoryKey)`), descripción (`t(demo.descriptionKey)`)
    - Botón "Ver demo" con `window.open(demoUrl, '_blank')` y `rel="noopener noreferrer"`
    - Botón "Quiero algo así" que abre WhatsApp (`https://wa.me/51999999999?text=...`) con mensaje pre-llenado incluyendo el nombre de la demo
    - Fondo oscuro `bg-[#0B1121]`, borde `border-slate-800`, consistente con GlowCard
    - Textos bilingües via `t()` para labels de botones
    - _Requisitos: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 2.5 Agregar efectos hover a DemoCard
    - `box-shadow` elevado en hover, `scale(1.02)` con `transform`, transición `duration-300`
    - Usar clases Tailwind para `transition-all`, `hover:shadow-...`, `hover:scale-[1.02]`
    - _Requisitos: 5.1, 5.2, 5.3_

  - [x] 2.6 Agregar animaciones de entrada con Framer Motion
    - Cada `DemoCard` envuelta en `motion.div` con `initial={{ opacity: 0, y: 30 }}`, `whileInView={{ opacity: 1, y: 0 }}`
    - Stagger con `transition={{ delay: index * 0.1 }}`
    - `viewport={{ once: true }}` para animar solo una vez
    - _Requisitos: 6.1, 6.2, 6.3_

- [x] 3. Implementar el bloque CTA final
  - Renderizar debajo de la grilla de demos dentro de `DemoShowcase`
  - Heading persuasivo bilingüe usando `t("demo_cta_title")`
  - Botón de WhatsApp con `t("demo_cta_btn")` que abre conversación con mensaje genérico de consulta
  - Animación fade-up con `motion.div` y `viewport={{ once: true }}`
  - _Requisitos: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 4. Integrar DemoShowcase en page.tsx
  - Importar `DemoShowcase` desde `../components/DemoShowcase`
  - Insertar `<DemoShowcase />` entre `<Testimonials />` y `<Contact />` en `src/app/page.tsx`
  - Verificar que no se modifica ni rompe ningún componente existente
  - _Requisitos: 1.1, 1.2, 1.3, 10.2, 10.3_

- [x] 5. Checkpoint — Verificar integración completa
  - Asegurar que el proyecto compila sin errores (`npm run build`)
  - Verificar que todas las claves de traducción están tipadas correctamente
  - Asegurar que no hay dependencias nuevas (solo Framer Motion, lucide-react, Tailwind, React)
  - Preguntar al usuario si tiene dudas o ajustes

- [ ]* 6. Escribir tests unitarios para DemoShowcase
  - Verificar que se renderizan exactamente 6 tarjetas
  - Verificar que cada tarjeta muestra nombre, categoría y descripción
  - Verificar que los botones "Ver demo" tienen los `href` correctos con `target="_blank"`
  - Verificar que los botones "Quiero algo así" generan URLs de WhatsApp válidas
  - Verificar que el bloque CTA se renderiza con botón de WhatsApp
  - Verificar que el cambio de idioma actualiza todos los textos
  - _Requisitos: 4.1, 4.2, 4.3, 7.1, 8.1, 9.3_

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- El checkpoint asegura validación incremental antes de continuar
- No se requieren property-based tests (componente puramente presentacional)
