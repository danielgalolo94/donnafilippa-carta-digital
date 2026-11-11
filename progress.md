# Progreso · Donna Filippa

> Última actualización: 2026-11-11

## Estado actual
Proyecto listo para presentar y publicar como sitio estático con demo interactiva.

## Hecho
- **Marca y referencias:** branding extraído de Instagram, paleta, historia (1986, Dunas de Oro, Donna Filippa desde 2012), fotos de referencia.
- **Mockups (4 direcciones, responsive, navegables):**
  - A · Trattoria (cálida, papel crema)
  - B · Noche (oscura, antojable)
  - C · Carta (clara, legible, A+/A−)
  - D · **De siempre** (inspirada en el formato de la carta impresa real del local: crema, rojo de acento, títulos grandes centrados). **No incluye menú ni precios reales.**
- **Panel del dueño:** edición por categoría, ajuste por % por categoría y general, redondeo a $100, deshacer, publicar, prender/apagar platos, preview, QR de mesa.
- **QA automática:** sin scroll horizontal en 390/820/1180-1440; +10%/undo/toggle/publicar/lector funcionando; sin imágenes rotas ni errores de consola en lo verificado.
- **PDF:** `presentacion/Donna-Filippa-Carta-Digital.pdf` (A4, 8 páginas, con imágenes, lenguaje simple).
- **Video demo:** `video/demo.mp4` (1280×720, ~43 s, H.264) generado desde `video/demo.html`.
- **SaaS:** investigación de mercado AR y estrategia en `vault/09 SaaS.md` y página pública `docs/saas.html`.
- **Sitio público:** carpeta `docs/` con landing, demo interactiva, video, PDF y estrategia (pensado para GitHub Pages).
- **Seguridad de contenido:** la carta real del cliente (`carta/`) se excluye del repo vía `.gitignore`. La dirección D toma solo la estética del menú impreso, con platos y precios de ejemplo.

## Pendiente de Daniel (decisiones)
- Elegir 1 de las 4 direcciones (o mezcla).
- ¿Pedidos por WhatsApp, solo carta, o ambos?
- ¿Idiomas? (es / pt / en).
- ¿Quién carga los platos reales y mantiene los precios?
- Dominio definitivo.

## Próximos pasos (build real / SaaS)
- Validar con 5 dueños el valor de ~$20.000/mes antes de construir SaaS.
- Multi-local, auth y editor en base (no en navegador).
- Carta pública por link + QR definitivo, imágenes optimizadas y CDN.
- Alta guiada + cobro Mercado Pago + trial 14 días.
- Agotados en un toque, alérgenos, menús por horario, multiidioma, analítica.

## Notas
- Todo el material es de ejemplo salvo el branding/fotos de Instagram usadas como referencia y el formato visual del menú impreso (sin su contenido). La inversión y plazos se definen en reunión.
- QA visual final recomendada en dispositivos reales (el entorno no permite inspección visual humana).
