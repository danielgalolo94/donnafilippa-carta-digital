# Donna Filippa · Carta digital — guía para continuar

> Documento de traspaso/continuidad del proyecto.  
> **Última actualización:** 2026-11-11  
> **Proyecto:** app cerrada para **Donna Filippa** (Villa Gesell) — carta digital con QR para clientes y panel simple para el dueño.  
> **Hecho por:** DG Soluciones IT (contacto: +54 9 11 4536-7458 · danielga@msn.com · @dgsolucionesok).

---

## 1. Resumen rápido

- **Objetivo:** que el cliente vea la carta escaneando un QR (sin app) y que el dueño actualice platos/precios fácilmente, con ajuste masivo por porcentaje.
- **Estado:** mockups navegables + demo web + propuesta PDF + video listos y publicados. Falta elegir dirección, cargar contenido real y definir puesta en marcha.
- **Importante:** es un producto **cerrado para este cliente** (se retiró de la web/repo todo lo referido a SaaS, planes y precios de producto).

## 2. Enlaces y publicación

- **Repo (público):** https://github.com/danielgalolo94/donnafilippa-carta-digital
- **Web (GitHub Pages, desde `master` / `docs`):** https://danielgalolo94.github.io/donnafilippa-carta-digital/
  - Estado verificado: Pages `built` (si alguna vez no carga tras cambios de visibilidad, reactivar Pages en `master` → `/docs`).
- **Rama:** `master` (remoto `origin`).
- **Cuenta gh usada:** `danielgalolo94`.

## 3. Qué está hecho

### 3.1 Producto / demo (4 direcciones)
Mockups responsive y navegables (carta del cliente, panel del dueño, pieza QR de mesa). Todas comparten el mismo panel/lógica:

| Dirección | Estilo | Archivo |
|---|---|---|
| **A · Trattoria** | Cálida, papel crema, serif, historia | `app/mockups/a-trattoria.html` (y `docs/demo/...`) |
| **B · Noche** | Oscura, fotos grandes, ámbar | `app/mockups/b-noche.html` |
| **C · Carta** | Clara/ordenada, verde botella, índice, A+/A− | `app/mockups/c-carta.html` |
| **D · De siempre** | Inspirada en el formato de la carta impresa real: crema, tinta oscura, rojo, títulos grandes centrados, renglones punteados | `app/mockups/d-de-siempre.html` |

- **Vistas por URL:** `?v=panel` abre panel; `?embed=1` oculta barra de revisión. Atributo raíz `data-view="carta|panel|qr"`.
- **Panel del dueño:** edición por categoría, ajuste de precios por **% por categoría y general**, **redondeo a $100**, **deshacer**, **publicar**, prender/apagar platos, preview, QR de mesa. (Datos en memoria del navegador en el mockup.)
- **Contenido de valor:** historia completa “Así comenzó nuestra historia…” (1986, Cabutti, Paseo 102 y Av. 3, reformas 1994, 7 premios “Dunas de Oro” 1996–2002, “Donna Filippa” 2012, 40 años) incluida en las 4 direcciones.
- **Fotos ilustrativas por categoría:** fondos en Entradas/Pizzas/Pastas/Postres (y asset de Carnes preparado) en `app/mockups/img/bg/` y `docs/demo/img/bg/`. Ver nota de origen en §6.
- **Datos:** 4 categorías / 14 ítems de **ejemplo**, precios ARS de ejemplo, horarios/teléfono de ejemplo. **No hay menú ni precios reales publicados.**
- **Branding:** logo real `assets/logo/filippa.png` y `app/mockups/img/logo-filippa.png`; pie “Hecho por DG Soluciones IT”; paleta/recursos en `assets/` y `branding/`.
- **QR:** generado con `segno`, apunta a `https://donnafilippa.vg/carta` (placeholder) en `app/mockups/img/qr-carta.svg|png`.

### 3.2 Materiales
- **Landing pública:** `docs/index.html` + `docs/site.css` (demo, video, cómo funciona, panel, propuesta PDF).
- **PDF propuesta (A4, 8 págs, lenguaje simple, con imágenes):** `presentacion/Donna-Filippa-Carta-Digital.pdf` y copia `docs/presentacion.pdf`. Fuente: `presentacion/presentacion.html`.
- **Video demo (~43 s, 1280×720, H.264, sin audio):** `video/demo.mp4` + `video/poster.jpg` (también en `docs/video/`). Escenario: `video/demo.html` (requiere HTTP same-origin para manipular iframes).
- **Vault:** `vault/00 Inicio.md`, `vault/01 Proyecto.md`, `progress.md`. (El índice del vault referencia notas 02–08/Diario que pueden no estar creadas aún.)
- **Capturas/referencias:** `referencias/capturas/` (QA, set `pdf-*`, etc.).

## 4. Estructura del proyecto (carpetas clave)

```
donnafilippa.vg/
├─ app/mockups/           # Fuente de los mockups (A-D), assets y panel
│  ├─ a-trattoria.html b-noche.html c-carta.html d-de-siempre.html index.html
│  ├─ assets/             # base.css, panel.css, panel.js (modelo y lógica)
│  └─ img/ (+ img/bg/)    # logos, fotos, QR, fondos de categoría
├─ docs/                  # Sitio publicado en GitHub Pages
│  ├─ index.html site.css saas.html (eliminada)
│  ├─ demo/               # copia de mockups para la web
│  ├─ video/ img/ presentacion.pdf
├─ presentacion/          # presentacion.html y PDF
├─ video/                 # demo.html, demo.mp4, poster.jpg (raw.webm excluido)
├─ assets/ branding/      # marca, paleta, fotos/logos base
├─ referencias/           # posts IG, capturas, QA
├─ vault/                 # notas del proyecto
├─ carta/                 # (LOCAL, gitignored) fotos del menú impreso real
├─ CONTINUAR.md progress.md .gitignore
```

## 5. Cómo ver y probar

- **Web publicada:** https://danielgalolo94.github.io/donnafilippa-carta-digital/
- **Local (mockups):** abrir `app/mockups/index.html` o las direcciones por `file://` (funcionan sin build; `?embed=1`, `?v=panel`).
- **Local (sitio/docs o video):** servir por HTTP (el video y iframes necesitan same-origin). Ejemplo PowerShell/Node:
  - Servidor simple: `node C:\Users\dg\AppData\Local\Temp\opencode\dfvg\serve.js "C:\Users\dg\OneDrive\Documentos\Proyectos\donnafilippa.vg" 8765` → http://127.0.0.1:8765/docs/index.html
- **Panel:** abrir cualquier dirección con `?v=panel` (o desde la demo). Probar: % en categoría (ej. Pizzas 10), aplicar a todo, deshacer, publicar, toggle de plato.
- **Regenerar video (si hace falta):** grabar `video/demo.html` con `agent-browser record` sobre HTTP y convertir con `ffmpeg` a `video/demo.mp4`.
- **Regenerar PDF:** imprimir `presentacion/presentacion.html` (Chrome headless A4) a `presentacion/Donna-Filippa-Carta-Digital.pdf` y copiar a `docs/presentacion.pdf`.

## 6. Contenido sensible y decisiones de publicación

- **`carta/` (LOCAL, NO en git):** contiene las fotos del menú impreso real del cliente. Está en `.gitignore` y **no debe subirse**.
- **Fondos ilustrativos (`img/bg/*.jpg`):** se derivaron/recortaron a partir de material de `carta/` como imágenes ilustrativas de categoría para el menú (a pedido del cliente). Las hojas completas del menú real no se publican.
- **No publicado por decisión:** SaaS, planes, precios de producto/suscripción, roadmap comercial, cobros. (Se eliminaron de `docs/` y del repo los archivos de estrategia SaaS que se habían creado.)
- **Excluido de git:** `carta/`, `video/raw.webm`, `presentacion/preview/` (ver `.gitignore`).
- **`referencias/capturas/`** sí está versionado (capturas de QA/diseño).

## 7. Pendiente / decisiones de Daniel (cliente)

- Elegir **1 de las 4 direcciones** (o mezcla). La **D** es la más fiel al formato impreso actual.
- ¿Pedidos por WhatsApp, solo carta, o ambos?
- ¿Idiomas? (es / pt / en).
- ¿Quién carga los platos reales y mantiene los precios?
- **Dominio definitivo** (hoy el QR usa `donnafilippa.vg/carta` como placeholder).
- Revisión visual final en dispositivos reales.

## 8. Próximos pasos sugeridos

1. **Definir dirección** y adaptar su estructura/secciones al contenido real del menú impreso (manteniendo el formato de descripción tal como en la carta), **sin publicar el contenido real** hasta que el cliente lo apruebe.
2. Cargar platos, descripciones, precios, horarios y datos reales (fotos reales de platos recomendadas).
3. Ajustes de producto: opción de pedido por WhatsApp, info útil (mapa/horarios/pagos), y lo que se defina.
4. Versión final: dominio, QR definitivo, piezas de mesa imprimibles, y deploy.
5. (Opcional, si hay saldo de generación) regenerar fotos de categoría con IA basadas en cada sección de la carta.
6. Completar notas del vault que falten (02 Marca, 03 Producto, 05 Plan, 06 Decisiones, 07 Mockups, 08 Accesos, Diario) si se quiere memoria detallada.

## 9. Qué más usa el sector (ideas útiles, no implementadas)

- **Alto impacto:** plato agotado “86” al instante; alérgenos/sellos (sin TACC, veg, etc.) y filtros; variantes/agregados y tamaños; menús por franja/temporada (verano/invierno); buscador/filtros; pedido/consulta por WhatsApp; promos/combos y destacados.
- **Confianza/operación:** horarios y datos reales, mapa, medios de pago; multiidioma (ES/PT/EN) para turismo; PDF/imprimible actualizado; analítica simple; historial/programación de cambios de precios; link en Google Perfil de Negocio.

## 10. Notas técnicas / convenciones

- **Stack mockups:** HTML/CSS/JS estático, sin build, sin módulos/fetch obligatorios; tipografías por Google Fonts (requiere conexión para verlas igual).
- **Panel:** `#panel` con `data-tpl="a|b|c|d"`; lógica/modelo en `assets/panel.js`, estilos en `assets/panel.css`, base compartida `assets/base.css`. Preview del celular usa `data-tpl` (hay estilos para a-d).
- **Barra de review:** `.reviewbar` con botones `[data-view]`; se oculta con `?embed=1`.
- **Accesibilidad ya considerada:** estructura semántica básica, opción de letra grande en C (A+/A−), foco visible y `prefers-reduced-motion` en la landing; revisar contraste y lector de pantalla en la versión final.
- **Testeo realizado (automático):** landing y demos A–D/panel sin scroll horizontal de página ni imágenes rotas en 390/820/1440 (aprox.); el índice sticky de D puede desbordar dentro de su propio carrusel (esperado). **Falta QA visual en dispositivos reales.**
- **Herramientas usadas en el entorno:** `agent-browser` para capturas/grabación/PDF, `ffmpeg` 9.0.2, Python (`Pillow`, `pymupdf/pypdf`, `numpy/scipy`) para procesamiento de imágenes/PDF.

## 11. Historial reciente de commits (referencia)

- `475d4de` Diseño: ajustes de landing (pasos, grilla 4 estilos, foco/motion) y pulido general
- `11251c3` Menú: fotos ilustrativas por categoría e historia completa de la casa
- `cf5449b` Limpiar estilos SaaS restantes en web
- `9165655` Quitar todo lo de SaaS y precios: app cerrada para cliente
- `a0ec077` Web: quitar sección SaaS de la publicación
- `32ddf2c` Commit inicial del proyecto publicado

---
*Para retomar: leer este archivo y `progress.md`, abrir la demo en `docs/index.html` o la web publicada, y continuar por §7–§8 según las decisiones del cliente.*
