# Mascota DevHorses — rig v1

## Integración

- `src/components/DevHorsesMascot.tsx`: composición SVG de cuatro capas raster independientes y props vectoriales. Variantes `working` e `idle`, más los estados del diálogo existente.
- `src/hooks/useMascotInteraction.ts`: seguimiento local del cursor con amortiguación según tiempo transcurrido; saludo de 1,5 s con cooldown de 6,5 s. Toque/clic y foco de teclado reutilizan el botón accesible existente. No captura el scroll táctil.
- `src/components/HorseMascot.tsx`: adaptador del recorrido y los comentarios existentes.
- `src/app/mascot.css`: respiración del torso, inclinaciones de cabeza, tecleo independiente de brazos, saludo, reflejo cyan, pensamiento e iconos de tecnología espaciados.
- `src/components/ContactDock.tsx`: variante trabajando en el hero; conserva cierre, contacto, comentarios y restauración al volver al inicio.
- `src/app/layout.tsx`: carga los estilos. El componente precarga el atlas.

Abrir `http://localhost:3001/` tras `npm run build` y `npm run start -- --port 3001`. Comprobar hero, scroll, hover/toque, teclado, cierre y vuelta a Inicio. La variante se puede reutilizar como `<DevHorsesMascot variant="working" />` o `variant="idle"` sin crear páginas adicionales. Fuera del dock se debe envolver en un botón accesible para ofrecer la interacción equivalente por teclado.

## Recursos y registro

Generado con la herramienta integrada **imagegen**, usando las dos láminas adjuntas del usuario como referencias de identidad. No se utilizó la API por CLI. Los logos de sudadera y laptop usan el archivo auténtico existente `public/logo-icon.png`.

- Original RGBA con alpha real: `docs/mascot/devhorses-rig-source-v1.png`, 1254 × 1254, 1.296.392 bytes.
- Atlas servido: `public/mascot/devhorses-rig-v1.webp`, 1254 × 1254, 218.994 bytes. Solo recodificado a WebP, sin modificar diseño, dimensiones ni separar píxeles artificialmente; alpha preservado. Las cuatro ventanas SVG comparten la misma descarga.
- Ventana cabeza: `0 0 627 780`.
- Ventana torso: `646 227 574 531`.
- Ventana brazo lejano: `64 805 527 402`.
- Ventana brazo cercano: `666 805 526 402`.

El generador no respetó la cuadrícula equitativa pedida. Las ventanas registran las posiciones reales del resultado, sin recortar ni reescalar destructivamente el original. Cada ventana mantiene su relación de aspecto y su pivote propio.

## Límites reales

Las referencias originales son láminas PNG planas, no un rig editable. Se generó un nuevo atlas fiel a sus rasgos, con cabeza, torso y dos brazos independientes. La laptop, el pensamiento y los iconos son SVG nativo. No se mueve el raster completo para fingir movimientos de partes del cuerpo.

Los lentes opacos ocultan los ojos: no se implementó seguimiento de ojos ni parpadeo inventado. La sonrisa, los lentes, las orejas y la crin forman parte de una sola capa de cabeza y no tienen articulación independiente. La composición es un busto y no muestra cola. Para parpadeos reales, nuevas expresiones, orejas/crin articuladas o quitarse los lentes hace falta una segunda entrega de arte con capas registradas:

```
head/base + neck
ears/near + far (con base de cabeza completa debajo)
mane/back + fringe + cyan-lock
face/eyes-open + half + closed, brows, muzzle, smile
glasses/frame + lenses + reflections
torso/hoodie + hood + strings + logo
arms/near-upper + forearm + hoof; far-upper + forearm + hoof
tail/base + tip (solo si la composición la muestra)
```

No se han falsificado estas articulaciones mediante deformaciones de la imagen. El saludo mueve el brazo separado y añade un destello; no cambia la expresión raster de la cara.

Las animaciones se pausan fuera de pantalla, con pestaña oculta o mascota minimizada. `prefers-reduced-motion` muestra composición estática y desactiva seguimiento y saludo; el efecto respeta cambios de preferencia en caliente. No hay re-renderizados de React por frame ni listener global de movimiento del puntero.

## Validación de esta entrega

- `npm run build`: compilación y TypeScript correctos, 13 páginas generadas.
- `npm run lint`: sin errores.
- `node --test tests/horse-motion.test.mjs tests/horse-presence.test.mjs`: 12 pruebas correctas del recorrido y la presencia.
- Navegador: escritorio, tablet de 1024 × 900 y móvil de 390 × 844, sin desbordamiento horizontal; hero con texto y botones accesibles.
- Interacción: saludo de brazo separado, seguimiento local y retorno de mirada; pausa al minimizar; cierre → Inicio restaura presencia y scroll en cero; consola sin errores en la vista local.
- Movimiento reducido: reglas CSS y guards del hook revisados en código. El navegador de prueba no ofrece emulación de esta preferencia; no se afirma una prueba visual bajo esa configuración.

## Prompt utilizado (imagegen integrado)

Create a production-ready TRANSPARENT CHARACTER RIG ATLAS from these two supplied DevHorses reference boards. These references define the SAME character, preserve it faithfully: premium beautifully shaded cartoon lavender horse, dark violet layered mane with a broad electric cyan streak, friendly soft rounded pale lavender-pink muzzle, stylish BLACK SOLID rounded rectangular sunglasses with white diagonal reflections. Dark navy hoodie, cyan strings and cyan edge highlights. This is an asset extraction / character rig preparation task, NOT a redesign, not a presentation board. Output a large SQUARE transparent image divided into FOUR equal invisible quadrants; absolutely no backgrounds, frames, labels, text, scenery, halos, shadows on ground, laptop, or legs. Each part fits wholly inside its own quadrant with generous transparent padding, centered, and NO part crosses quadrant boundaries. TOP LEFT quadrant: complete isolated HEAD with both ears, full flowing mane, sunglasses, muzzle and SHORT neck stub, in exactly the 3/4 view working pose seen in the laptop illustration on the supplied reference (facing slightly toward viewer left); no hoodie, shoulders, arms, body. TOP RIGHT quadrant: isolated headless armless navy HOODIE TORSO, upper-body bust with full hood/collar, cyan drawstrings, rounded shoulders and chest down to waist, in a matching 3/4 orientation; neck opening empty, no head, no arms, no legs; leave chest plain with NO invented logo so an authentic logo can be placed in code. BOTTOM LEFT quadrant: one isolated complete bent hoodie-sleeved forearm and large lavender rounded hoof/hand with dark purple hoof end, in a relaxed typing pose pointing inward toward the RIGHT; round sleeve joint suitable for attaching to left side of torso; no torso/head. BOTTOM RIGHT quadrant: matching other isolated complete bent hoodie-sleeved forearm and lavender rounded hoof/hand, typing pose pointing inward toward LEFT; round sleeve joint suitable for attaching to right side. All four independent pieces must share the SAME drawing style, consistent lighting from cyan screen at lower left, coherent 3/4 perspective and large premium polished details. Shapes should have soft multi-tone shading, crisp violet outlines, smooth glossy black shades and expressive friendly smile like references. Head should use roughly 85% of its quadrant height and 80% width. Torso roughly 80% height/width; arms roughly 65% width. Transparent alpha everywhere outside each piece. No extra character views or complete assembled character. This atlas will be composed as independently animated layers in an SVG on the website.
