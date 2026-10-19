# Mascota DevHorses — poses completas v2

## Corrección de referencia

La referencia de identidad de la parte superior de las láminas no define la postura de trabajo. Esta entrega utiliza exclusivamente las cuatro poses de la fila inferior de la primera lámina; la fila de expresiones de la segunda lámina sirve como comprobación secundaria. Cada pose conserva su cabeza, expresión, torso, manos y accesorios en una sola ilustración coherente. El caballo trabajando inclina la cabeza hacia la laptop, con cuello corto y hombros recogidos.

El montaje v1 mezclaba una cabeza erguida con brazos, torso y laptop separados. Está sustituido y ya no se carga. Sus archivos se conservan como histórico.

## Archivos activos

Los símbolos inventados dentro del atlas quedan cubiertos por insignias SVG que cargan directamente el emblema auténtico existente `public/logo fondo oscuro.png`. Se aplica a la laptop y las tres sudaderas con símbolo visible. La insignia usa el archivo original sin redibujarlo; solo ajusta posición, escala y perspectiva. El atlas y las poses no se regeneran ni se modifican. Los emblemas forman parte del grupo de su pose y comparten su fundido y recorrido.

- `src/components/DevHorsesMascot.tsx`: cuatro ventanas SVG del atlas completo; no ensambla cabezas ni manos entre poses. Expone variantes `working` e `idle`.
- `src/app/mascot.css`: transiciones por opacidad entre poses, luz de pantalla, pensamiento, destellos e iconos. No gira, estira ni desplaza verticalmente el raster completo para fingir movimientos corporales.
- `src/hooks/useMascotInteraction.ts`: conserva interacción local, saludo de 1,5 s y cooldown de 6,5 s. Las coordenadas del cursor afectan a la luz ambiental; no giran una cabeza recortada.
- `src/components/HorseMascot.tsx`: adaptador del recorrido y comentarios existentes.
- `public/mascot/devhorses-poses-v2.webp`: atlas activo RGBA de 1254 × 1254, 335.348 bytes, con alpha real.
- `docs/mascot/devhorses-poses-source-v2.png`: original de generación conservado, sin edición destructiva.
- El recorrido, el cierre, la restauración a Inicio, el botón accesible y los contactos siguen en `ContactDock` y sus hooks existentes.

## Poses y animación

- `working`: composición completa del caballo mirando la laptop, con reflejo cyan e iconos discretos.
- `friendly`: expresión alegre con ojos cerrados y mano levantada de la segunda pose inferior. Se usa al saludar por hover, toque/clic o teclado y para comentarios alegres.
- `technology`: pose completa con lentes y mano señalando, para los demás comentarios.
- `resting`: cabeza inclinada sobre los brazos cruzados, acompañada por la nube de pensamiento.
- El recorrido del hero a la mascota flotante se conserva. Las transiciones entre ilustraciones usan un fundido de 300 ms, sin interpolar anatomías de distintas poses.
- La interacción táctil se activa al terminar el toque, sin capturar el desplazamiento.
- Pausa con pestaña oculta, fuera de pantalla o mascota minimizada. Movimiento reducido desactiva efectos y transiciones.

## Límites del recurso

Las poses son ilustraciones planas completas. No se afirma animación independiente de ojos, orejas, crin, respiración del torso ni manos tecleando. Se retiraron las articulaciones del montaje incorrecto para conservar la composición solicitada. Los efectos animados y el recorrido continúan activos.

Para añadir movimientos corporales reales se requieren capas **de cada pose concreta**, registradas en el mismo lienzo y a la misma escala: base completa de torso/cuello, cabeza con inclinación propia, orejas, crin, ojos/expresiones, brazos y manos, laptop, cola si se muestra. No deben reutilizarse piezas de la figura principal ni de otra pose.

## Reproducción y comprobaciones

Ejecutar `npm run build` y `npm run start -- --port 3001`, abrir `http://localhost:3001/`. En esta revisión se usó también el puerto 3002.

- `npm run build`: compilación y TypeScript correctos.
- `npm run lint`: correcto.
- `node --test tests/horse-motion.test.mjs tests/horse-presence.test.mjs`: 12 pruebas correctas.
- Revisión visual de la pose de trabajo y del saludo completo contra las poses inferiores.
- Preferencias de movimiento reducido revisadas en CSS y guards del hook; el navegador de prueba no ofrece emulación de esa preferencia.

## Generación y prompt

Herramienta integrada **imagegen**, con las dos imágenes adjuntas del usuario. Recodificación posterior a WebP mediante Sharp, conservando dimensiones y transparencia. No se utilizó CLI de generación ni se modificaron píxeles para reconstruir anatomía.

EDIT / faithful background extraction and upscale of the FOUR SMALL POSES IN THE BOTTOM ROW OF REFERENCE IMAGE 1 ONLY. Image 2's middle expressions row is a secondary fidelity check. IGNORE the large standing horse at the top, IGNORE the top headshot, IGNORE the website mockup, do not borrow their head, neck, body, proportions, or facial angle. The user explicitly rejected a previous mix of the large upright standing horse head with a laptop. Preserve the FOUR ORIGINAL lower-row poses as WHOLE COHERENT illustrations, with their original compact chibi proportions, SHORT neck, head tilt, face orientation, sunglasses angle, muzzle, sleeves and composition. Produce ONE transparent square production pose atlas, divided into a precise 2x2 grid of equal square cells, one complete pose wholly within each cell, at consistent visual scale with transparent padding, no frame/text/background/ground line. TOP LEFT: EXACT complete lower-left WORKING pose: horse with head bowed down and inclined to viewer left, face and sunglasses angled toward the laptop screen rather than looking straight at the viewer, compact short neck and hunched shoulders, dark hoodie, lavender hooves typing behind dark laptop on viewer LEFT with character on viewer RIGHT, a small cyan-purple tail curl on right as in reference. This must be the coherent working illustration from the lower-left card, not the standing character put behind a screen. TOP RIGHT: EXACT second lower-card COMPLICITY / JOY pose: short-neck bust, eyes smiling closed with NO sunglasses on the eyes, cheerful OPEN smile, ONE hoof raised with a digit pointing upward, other forearm resting low, matching original proportions. BOTTOM LEFT: EXACT third lower-card TECHNOLOGY pose: short-neck horse bust wearing black shades, ONE hoof pointing up to viewer RIGHT, friendly smile; remove the floating app panels so code can add them later. BOTTOM RIGHT: EXACT fourth lower-card RESTING pose: horse with head tilted gently down over two folded hooves, elbows supported, sunglasses on, compact relaxed bust, no laptop. Preserve lavender coat, layered dark-purple mane with cyan streak, solid stylish black sunglasses, soft cream lavender muzzle, black hoodie cyan drawstrings, and small white DevHorses horse emblem as shown. Preserve hand-drawn premium cartoon shading and outline quality, no redesign or 3D restyling, no standing bodies, no legs, no elongated necks, no added poses. Remove cyan exclamation marks and all environmental tech icons/backgrounds from these extracts; leave only the complete character and the laptop in the working pose, on TRUE transparent alpha. Keep the head, arms, torso and props of each specific pose together exactly as in that lower card. Do not combine parts between poses. Each character should occupy about 85% of its own cell width and height, entirely contained in that cell. No grid lines, decorative rings, borders, typography, labels or reference board remains.
