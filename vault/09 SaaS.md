# 09 · Pasar la carta a SaaS

> Investigación hecha el 11/11/2026 sobre competidores reales en Argentina y guías del sector gastronómico.
> Objetivo: que lo que hoy es un mockup para Donna Filippa se convierta en un producto que se venda solo, a muchos locales.

---

## 1. Resumen ejecutivo

Hoy tenemos **una carta digital muy bien hecha para un cliente**. Para que sea SaaS faltan cuatro cosas, en este orden:

1. **Multi-local** (cada restaurant con su cuenta, su carta y su link).
2. **Alta sola** (entrar, cargar la carta y publicar sin que intervengamos).
3. **Cobro automático** (suscripción con Mercado Pago + prueba gratis).
4. **Una razón para pagar todos los meses** (no el QR: el QR es gratis en todos lados).

El diferencial no puede ser "carta con QR". Tiene que ser: **actualizar precios en masa por porcentaje, en segundos, sin saber de sistemas** — que es exactamente el dolor de un país con inflación y de un restaurant con 80 platos.

---

## 2. Benchmark real (noviembre 2026)

| Servicio | Precio ARS/mes | Cómo cobra | Qué incluye | Debilidad |
|---|---|---|---|---|
| **MenuDig** | $20.000 | Plan único, IVA incl., Mercado Pago, 14 días sin tarjeta | Ilimitado, QR PNG, fotos, alérgenos, menús por horario, URL propia | Producto nuevo, poca marca |
| **SoyMenu** | $20.000 | Armado gratis en 24 h, sin permanencia | Carta digital + carga hecha por ellos | Sin pedidos |
| **Carta Digital QR** | $15.000 / $25.000 / $45.000 | Por cantidad de platos (30 / 100 / 500). Pago anticipado 1, 6 o 12 meses **con precio congelado** | Excel import, variantes, adicionales, encuestas | Cobra por plato → caro al crecer |
| **Qcarta** (Perú) | desde S/ 29,90 | 7 días gratis | Carrito + pedido a WhatsApp, **sin comisión** | No es AR |
| **Encarta** (España) | 30 € | Mensual | Alérgenos por plato, web incluida | No es AR |
| **Shopify + apps** | USD 150–300 total | Base + apps + comisión | Muy flexible | Stack de 5 plugins, lento, caro |
| **Toast / Square** | USD 0–165 + hardware + comisión | Ecosistema cerrado | POS fuerte | No sirve para vender solo la carta |

**Lecturas clave**

- El precio de referencia en Argentina es **$20.000/mes todo incluido**. Por encima de $25.000 hay que justificarlo con pedidos o con varias sucursales.
- **Nadie cobra por cantidad de platos con éxito**: el que lo hace queda caro justo cuando el cliente crece. Mejor ilimitado.
- **14 días sin tarjeta** es el estándar. Bajar la fricción de entrada es lo que mueve la aguja.
- **Congelar precio a 6/12 meses** es una jugada muy argentina y muy inteligente: le das previsibilidad al cliente y cobrás por adelantado (caja para nosotros).
- El armado de la carta **hecho por nosotros** (SoyMenu) es un servicio que el mercado ya acepta. Es margen alto y baja el abandono.

---

## 3. Qué significa "SaaS" en este proyecto

No es "una web con login". Es esto:

| Pieza | Hoy | Para ser SaaS |
|---|---|---|
| Cuentas | 1 cliente hardcodeado | Registro, login, recuperar clave, invitados |
| Datos | JSON en el navegador | Base multi-local con `tenant_id` en todo |
| Cartas | 3 plantillas fijas | Plantillas + colores/logo/fotos del cliente |
| Links | `file:///...` | `slug.dg.ar` o dominio propio con SSL |
| Cobro | — | Suscripción MP + trial + factura |
| Soporte | WhatsApp de Daniel | Base de conocimiento + videos de 40 s |
| Métricas | — | Escaneos, platos vistos, clics a WhatsApp |

**Regla de oro:** si para dar de alta un cliente hay que tocar código, no es SaaS. Es una agencia. La agencia escala con horas; el SaaS escala con producto.

---

## 4. Recomendaciones del sector gastronómico

Ordenadas por impacto real en un local (no por lo lindo que suena).

### 4.1 Las cinco que definen si sirve o no

1. **Plato agotado en un toque ("86")**
   Es lo primero que pide un encargado. A las 21:30 se acabó la burrata: se apaga y desaparece de la carta, sin borrarla. Vuelve mañana con un clic.

2. **Modificadores y variantes**
   Tamaño (chica/grande), agregados (+muzzarella, +huevo), "sin cebolla", "a punto". Sube el ticket promedio y evita que el mozo explique todo de nuevo.

3. **Menús por horario**
   Desayuno, almuerzo, cena, happy hour. Se activan solos a la hora que se define. Un local de Villa Gesell cambia de carta en verano y en invierno.

4. **Alérgenos y sellos**
   Ley 27.642 (etiquetado frontal) y Ley 26.588 (celiaquía): el cliente espera ver "sin TACC", "vegano", "contiene frutos secos". Es obligación y, además, es el filtro que más se usa.

5. **Actualización de precios en masa**
   Ya lo tenemos y es el corazón del producto. Falta: **programar el aumento por fecha** ("desde el 1/12 +8%") e **historial** ("quién cambió qué y cuándo").

### 4.2 Las que hacen que el cliente lo recomiende

6. **Pedido por WhatsApp con carrito** — sin comisión, como Qcarta. Es el canal que el cliente ya usa. No competís con PedidosYa en logística: competís en comisión cero.
7. **Multiidioma (es / pt / en)** — Villa Gesell recibe turismo brasileño y argentino. Un botón y la carta cambia de idioma.
8. **Fotos que cargan rápido** — compresión automática, WebP/AVIF, CDN. En temporada la red del centro se satura.
9. **Analítica simple** — "tu carta se abrió 1.240 veces este mes; el plato más visto fue Fugazzeta; 87 personas tocaron WhatsApp". Eso es lo que justifica la cuota.
10. **Google** — link de la carta en Google Business Profile + datos estructurados `Menu`/`MenuItem`. Tráfico gratis que casi nadie usa.
11. **PDF de la carta actualizada** — el cliente que todavía quiere papel lo imprime desde el panel. Mata la objeción "yo necesito la carta impresa".
12. **Piezas de mesa listas para imprimir** — el QR con el logo, en A5 y en tent card. Se las damos hechas: es parte del servicio y fideliza.

### 4.3 Para más adelante (no en el MVP)

13. Integración con POS (Fudo, Bistrosoft, Tango, Woki) para no cargar dos veces.
14. Multi-sucursal con carta central y precios por local.
15. Reservas, fidelidad, cupones.
16. Kiosco / autopedido en mesa.

**Lo que NO haríamos:** app nativa (el QR abre el navegador, listo), delivery propio, facturación electrónica completa, hardware.

---

## 5. Producto por etapas

### Etapa 1 — "Vendible" (4 a 6 semanas)

- Multi-local + registro/login + roles (dueño, encargado).
- Editor actual, pero guardando en base (no en el navegador).
- 3 plantillas + logo, colores y fotos por cliente.
- Publicar / deshacer / historial de cambios.
- Link público `slug.dg.ar` + QR descargable (PNG y SVG).
- Ajuste por % general y por categoría + redondeo.
- Alta guiada de 4 pasos + "cargamos tu carta por vos" (servicio pago).

**Criterio de aceptación:** un restaurant que nunca nos vio puede estar publicado en menos de 30 minutos, sin hablar con nosotros.

### Etapa 2 — "Que valga la cuota" (4 a 6 semanas)

- Agotados en un toque.
- Modificadores y variantes.
- Menús por horario.
- Alérgenos y sellos.
- Multiidioma.
- Analítica básica.
- Suscripción Mercado Pago + trial 14 días + mails automáticos.

### Etapa 3 — "Que no se vaya" (6 a 8 semanas)

- Pedido por WhatsApp con carrito.
- Programar aumentos por fecha.
- PDF de carta + piezas de mesa.
- Google Business + datos estructurados.
- Multi-sucursal.
- Integración POS (una, la que pida el mercado: probablemente Fudo).

---

## 6. Modelo de negocio

### Planes propuestos

| Plan | Precio | Para quién | Incluye |
|---|---|---|---|
| **Carta** | $19.900/mes | 1 local, carta simple | Ilimitado, 3 plantillas, QR, alérgenos, multiidioma, 1 usuario |
| **Carta + Pedidos** | $29.900/mes | Local con delivery/take away | Todo + carrito WhatsApp, horarios, 3 usuarios, analítica |
| **Cadena** | $49.900/mes | 2 a 5 locales | Todo + carta central, roles, reportes, dominio propio |

- **Prueba:** 14 días sin tarjeta (estándar del mercado).
- **Anual:** 10 meses al precio de hoy (2 meses gratis) → caja y precio congelado.
- **Temporada (Villa Gesell):** pausa de hasta 3 meses por año sin perder la carta.
- **Alta asistida:** $35.000 única (cargamos la carta, sacamos fotos, armamos el QR). Gratis en plan anual.
- **Add-ons:** dominio propio, fotos profesionales, traducción, impresión de piezas.

### Por qué el alta asistida es clave

- Es el 70% del trabajo de onboarding y el 90% de las cancelaciones tempranas ("no tuve tiempo de cargarla").
- Se cobra una vez, deja margen y hace que el cliente vea valor el día 1.
- Baja el churn de los primeros 60 días, que es donde se muere un SaaS de este tipo.

### Números que hay que vigilar

| Métrica | Meta |
|---|---|
| Activación (carta publicada en 48 h) | > 80% |
| Locales que editan al menos 1 vez por mes | > 60% (si no editan, no les sirve) |
| Churn mensual | < 3% |
| Costo de infra por local | < USD 2 |
| Margen bruto | > 85% |
| NPS | > 50 |

---

## 7. Cómo se vende (Villa Gesell primero)

1. **Los 10 locales de la cuadrilla.** No vendemos "a Argentina": vendemos a 10 restaurantes que se conocen entre sí. La prueba social es local.
2. **Entrar antes de temporada.** Octubre–noviembre: el dueño está preparando el verano y tiene cabeza para esto. En enero no atiende ni el teléfono.
3. **Demo personalizada, no genérica.** Le mandamos por Instagram un link con **su propia carta ya cargada** (nombre, platos, precios reales). Tarda 20 minutos y convierte muchísimo más que un video.
4. **Alianza con imprentas y proveedores.** La imprenta que hoy le imprime la carta es el mejor vendedor: le ofrecemos comisión o precio mayorista.
5. **Referidos:** un mes gratis por cada local que trae.
6. **Precio de lanzamiento** para los primeros 10: $14.900/mes de por vida (o 2 años). Ancla el mercado y genera casos.

---

## 8. Lo técnico que hay que resolver sí o sí

- **Multi-tenant:** `tenant_id` en todas las tablas, permisos por fila, y un solo despliegue para todos.
- **Borrador vs publicado:** el dueño edita tranquilo y publica cuando quiere. Con historial y "volver atrás".
- **Imágenes:** subida, recorte, compresión y CDN. Una carta con 40 fotos no puede pesar 40 MB.
- **Velocidad:** la carta pública tiene que abrir en menos de 2 segundos con 4G. Sin JS innecesario, sin fuentes de más.
- **Dominio y SSL automático** por cliente (`carta.donnafilippa.vg` o el dominio que ya tienen).
- **Backups diarios** y restauración probada. Un restaurant no perdona perder la carta en plena temporada.
- **Auditoría:** quién cambió qué precio y cuándo (sirve para discusiones con el personal).
- **Cobros:** Mercado Pago Suscripciones + webhooks + reintentos + comprobante. Facturación: exportación para el contador en la v1; integración ARCA más adelante.
- **Legal:** Términos, Política de Privacidad (Ley 25.326), y consentimiento si se guardan datos de comensales.

---

## 9. Riesgos y cómo se mitigan

| Riesgo | Qué pasa | Mitigación |
|---|---|---|
| **Commoditización** | Google, Meta y PedidosYa regalan una carta | Vender gestión + precios masivos + pedidos, no "un QR" |
| **Estacionalidad** | En invierno se cae el uso | Plan temporada + anual + vender también en Buenos Aires |
| **Precio** | "$20.000 es mucho para una carta" | Comparar con el costo de reimprimir 30 cartas por cambio |
| **Soporte** | Cada cliente llama por todo | Onboarding asistido, videos de 40 s, FAQ, horario de soporte claro |
| **Dependencia de una persona** | Todo lo hace Daniel | Documentar en este vault, plantillas, checklist de alta |
| **Cliente que no edita** | Paga 3 meses y se va | Alerta interna si no edita en 45 días → llamada |

---

## 10. Roadmap 90 días

| Semanas | Foco | Resultado |
|---|---|---|
| 1–2 | Multi-tenant, auth, editor en base | Se puede crear un local nuevo sin tocar código |
| 3–4 | Plantillas, imágenes, QR, dominio, publicación | Carta real publicada en un link |
| 5–6 | Alta guiada + cobro MP + trial + mails | Se puede vender sin intervención |
| 7–8 | Agotados, alérgenos, menús por horario | Producto que aguanta el día a día |
| 9–10 | Analítica, multiidioma, PDF de carta | Aparecen las razones para renovar |
| 11–12 | 5 locales piloto en Villa Gesell + ajustes | Precio y discurso validados con clientes reales |

**Antes de escribir una línea:** validar con 5 dueños que pagarían $20.000/mes por esto. Si 3 dicen que sí, se construye. Si no, se ajusta el precio o el alcance.

---

## 11. Lo que hay que decidir

- [ ] ¿Producto propio de DG o marca blanca para otros que vendan?
- [ ] ¿Precio de lanzamiento $14.900 o directo $19.900?
- [ ] ¿Alta asistida obligatoria los primeros 20 clientes? (recomendado: sí)
- [ ] ¿Villa Gesell solamente la primera temporada, o también Mar de las Pampas / Pinamar?
- [ ] ¿Dominio del producto? (`cartadg.ar`, `menudg.ar`, `lacartadigital.ar`…)

---

## 12. Fuentes consultadas

- MenuDig — precios y funciones: menudig.com.ar/precios
- SoyMenu — carta digital Argentina: soymenu.com.ar
- Carta Digital QR — planes AR e internacionales: cartadigitalqr.ar/precios-y-planes.php
- Qcarta — pedidos a WhatsApp sin comisión: qcarta.com
- Encarta Digital — alérgenos por plato: encartadigital.com
- Rovela — guía de compra de software de menús 2026 (modificadores, agotados, datos estructurados, velocidad)
