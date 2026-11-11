/* ===========================================================
   Panel "Carta digital" — markup compartido por los 3 mockups
   Uso: <div id="panel" data-tpl="a"></div> + panel.js
   Modelo: categorías -> platos. Ajuste de precios por % por
   categoría y general. Todo se refleja en la vista previa.
   =========================================================== */
(function () {
  var I = {
    carta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5V5.5"/><path d="M8 7h8M8 10.5h5"/></svg>',
    cat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 19H4.5A1.5 1.5 0 0 1 3 17.5z"/></svg>',
    pal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.5-1.6-1.7-1.6-3 0-1 .9-1.7 2-1.7h1.9A4.7 4.7 0 0 0 21 9.8C21 6 16.9 3 12 3Z"/><circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.2" fill="currentColor" stroke="none"/><circle cx="7.5" cy="13.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    qr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4H9M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15M9 20H5.5A1.5 1.5 0 0 1 4 18.5V15"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>',
    cfg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M4.5 7.5l2 1.2M17.5 15.3l2 1.2M4.5 16.5l2-1.2M17.5 8.7l2-1.2"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.6"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14"/></svg>',
    print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M7 9V4h10v5M7 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="7" y="14" width="10" height="6" rx="1"/></svg>'
  };

  /* ---------------- modelo ---------------- */
  var data = {
    cats: [
      { id: 'empezar', name: 'Para empezar', on: true, items: [
        { n: 'Empanada criolla', d: 'Carne cortada a cuchillo, huevo y aceituna', p: 2900, img: 'empanadas.jpg', tag: 'Clásico', cls: 'a', on: true },
        { n: 'Empanada de jamón y queso', d: 'Masa fina, bien jugosa', p: 2900, img: 'empanadas.jpg', tag: 'Clásico', cls: 'a', on: true },
        { n: 'Fainá a la piedra', d: 'Bien alta, con mucho queso', p: 3400, img: 'plato.jpg', tag: 'Veg', cls: 'g', on: true },
        { n: 'Burrata con tomates asados', d: 'Albahaca fresca y aceite de oliva', p: 9800, img: 'salon.jpg', tag: 'Nuevo', cls: '', on: false }
      ]},
      { id: 'pizzas', name: 'Pizzas a la piedra', on: true, items: [
        { n: 'Muzzarella', d: 'Salsa de tomate, muzzarella de primera y orégano', p: 16900, img: 'pizza.jpg', tag: 'La de siempre', cls: 'a', on: true },
        { n: 'Fugazzeta', d: 'Cebolla, muzzarella y un toque de orégano', p: 18900, img: 'casa.jpg', tag: 'Veg', cls: 'g', on: true },
        { n: 'Napolitana', d: 'Tomate, ajo, perejil y muzzarella', p: 18400, img: 'pizza.jpg', tag: 'Clásico', cls: '', on: true },
        { n: 'Donna Filippa', d: 'Jamón crudo, rúcula, burrata y oliva', p: 23500, img: 'historia.jpg', tag: 'De la casa', cls: '', on: true },
        { n: 'Calabresa', d: 'Salame, morrón y huevo', p: 19900, img: 'pizza.jpg', tag: 'Picante', cls: 'a', on: true }
      ]},
      { id: 'pastas', name: 'Pastas caseras', on: true, items: [
        { n: 'Ñoquis de papa', d: 'Fileto o cuatro quesos, amasados cada mañana', p: 15900, img: 'tartas.jpg', tag: 'Veg', cls: 'g', on: true },
        { n: 'Sorrentinos de jamón y queso', d: 'Con crema de tomates secos', p: 17400, img: 'pasta-sintacc.jpg', tag: 'Sin TACC', cls: 'g', on: true },
        { n: 'Tagliatelle al ragú', d: 'Cocción lenta de cuatro horas', p: 18900, img: 'pasta-sintacc.jpg', tag: 'De la casa', cls: '', on: true }
      ]},
      { id: 'postres', name: 'Postres', on: true, items: [
        { n: 'Tiramisú de la casa', d: 'Receta de la nonna, con café', p: 7400, img: 'plato.jpg', tag: 'Clásico', cls: 'a', on: true },
        { n: 'Flan con dulce de leche', d: 'Con crema batida', p: 6200, img: 'plato.jpg', tag: 'Veg', cls: 'g', on: true }
      ]}
    ]
  };

  var state = { tpl: 'a', undo: null };

  function money(n) { return Number(n).toLocaleString('es-AR'); }
  function allItems() { return data.cats.reduce(function (a, c) { return a.concat(c.items); }, []); }
  function findCat(id) { return data.cats.filter(function (c) { return c.id === id; })[0]; }
  function total() { return allItems().length; }
  function hidden() { return allItems().filter(function (i) { return !i.on; }).length; }

  /* ---------------- markup ---------------- */
  function catRow(c) {
    return '<div class="dg-cat-row">' +
      '<span class="dg-cat-dot" aria-hidden="true"></span>' +
      '<span class="dg-cat-name"><b>' + c.name + '</b><small>' + c.items.length + ' platos</small></span>' +
      '<label class="dg-pct"><input type="number" inputmode="decimal" step="1" min="-90" max="300" placeholder="0" value="" data-pct="' + c.id + '" aria-label="Porcentaje para ' + c.name + '"><span>%</span></label>' +
      '<button class="dg-btn sm" data-act="apply" data-cat="' + c.id + '">Aplicar</button>' +
      '<label class="dg-sw"><input type="checkbox"' + (c.on ? ' checked' : '') + ' data-catvis="' + c.id + '" aria-label="Mostrar categoría ' + c.name + '"><span></span></label>' +
    '</div>';
  }

  function row(cat, it, idx) {
    var key = cat.id + ':' + idx;
    return '<div class="dg-row' + (it.on ? '' : ' off') + '">' +
      '<span class="dg-grip" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<img class="dg-thumb" src="img/' + it.img + '" alt="">' +
      '<div class="dg-name"><b>' + it.n + '</b><small>' + it.d + '</small></div>' +
      '<span class="dg-tag ' + it.cls + '">' + it.tag + '</span>' +
      '<span class="dg-price"><span>$</span><input value="' + money(it.p) + '" inputmode="numeric" data-price="' + key + '" aria-label="Precio de ' + it.n + '"></span>' +
      '<label class="dg-sw"><input type="checkbox"' + (it.on ? ' checked' : '') + ' data-toggle="' + key + '" aria-label="Disponible: ' + it.n + '"><span></span></label>' +
      '<button class="dg-kebab" aria-label="Más opciones">⋯</button>' +
    '</div>';
  }

  function catCard(c) {
    return '<section class="dg-card" id="cat-' + c.id + '">' +
      '<div class="dg-card-head"><h3>' + c.name + '</h3>' +
      '<span class="n">' + c.items.length + '</span>' +
      (c.on ? '' : '<span class="dg-tag a">Oculta</span>') +
      '<button class="add">' + I.plus + 'Agregar plato</button></div>' +
      c.items.map(function (it, i) { return row(c, it, i); }).join('') +
      '<button class="dg-newrow">' + I.plus + 'Nuevo plato en ' + c.name.toLowerCase() + '</button>' +
    '</section>';
  }

  function pvItem(it) {
    return '<div class="dg-pv-item"><span>' + it.n + '</span><span>' + money(it.p) + '</span></div>';
  }

  function phone(tpl) {
    var cats = data.cats.filter(function (c) { return c.on; }).map(function (c) {
      return '<div class="dg-pv-cat">' + c.name + '</div>' +
        c.items.filter(function (i) { return i.on; }).slice(0, 3).map(pvItem).join('');
    }).join('');
    return '<div class="dg-phone" data-tpl="' + tpl + '"><div class="dg-phone-in"><span class="notch"></span>' +
      '<div class="dg-pv-hero"><img src="img/logo-filippa.png" alt=""><small>DESDE 1986 · VILLA GESELL</small></div>' +
      '<div class="dg-pv-body">' + cats + '</div>' +
      '<div class="dg-pv-bar"><i></i><i></i><i></i><i></i></div>' +
    '</div></div>';
  }

  function shell() {
    return '<div class="dg-panel">' +
      '<aside class="dg-side">' +
        '<div class="dg-brand"><img src="img/logo-filippa.png" alt=""><div><b>Carta digital</b><small>Panel del dueño</small></div></div>' +
        '<nav class="dg-nav">' +
          '<a class="on" href="#" data-noop>' + I.carta + '<span class="txt">Carta</span><span class="badge" id="nav-count">' + total() + '</span></a>' +
          '<a href="#cats" data-noop>' + I.cat + '<span class="txt">Categorías</span></a>' +
          '<a href="#" data-noop>' + I.pal + '<span class="txt">Diseño</span></a>' +
          '<a href="#" data-noop>' + I.qr + '<span class="txt">QR y mesa</span></a>' +
          '<div class="sep"></div>' +
          '<a href="#" data-noop>' + I.cfg + '<span class="txt">Ajustes</span></a>' +
        '</nav>' +
        '<div class="dg-side-foot"><b>DG Soluciones <i>IT</i></b><br>Panel de carta digital<br><span class="tier">PLAN CARTA · ACTIVO</span></div>' +
      '</aside>' +
      '<div class="dg-main">' +
        '<header class="dg-top">' +
          '<div class="dg-crumb">Carta <span>/</span> <b>Platos y precios</b></div>' +
          '<div class="dg-actions">' +
            '<span class="dg-state" id="dg-state">Publicado hace 2 días</span>' +
            '<button class="dg-btn ghost" data-act="preview">' + I.eye + 'Ver carta</button>' +
            '<button class="dg-btn primary" data-act="publish">' + I.up + 'Publicar cambios</button>' +
          '</div>' +
        '</header>' +
        '<div class="dg-body">' +
          '<div>' +
            '<section class="dg-card dg-cats" id="cats">' +
              '<div class="dg-card-head"><h3>Categorías</h3><span class="n">' + data.cats.length + '</span>' +
                '<span class="dg-head-note">Ajustá una categoría entera por %</span>' +
                '<button class="add">' + I.plus + 'Nueva categoría</button></div>' +
              '<div class="dg-kpis">' +
                '<div><b>' + total() + '</b><span>platos</span></div>' +
                '<div><b>' + data.cats.length + '</b><span>categorías</span></div>' +
                '<div><b>' + hidden() + '</b><span>ocultos</span></div>' +
                '<div class="dg-kpi-note">El % se aplica al precio actual y redondea a $100.</div>' +
              '</div>' +
              '<div class="dg-cat-list">' + data.cats.map(catRow).join('') + '</div>' +
              '<div class="dg-bulk">' +
                '<span class="dg-bulk-label">' + I.up + 'Aumento a toda la carta</span>' +
                '<label class="dg-pct"><input type="number" inputmode="decimal" step="1" placeholder="0" data-pct="__all" aria-label="Porcentaje para toda la carta"><span>%</span></label>' +
                '<button class="dg-btn sm primary" data-act="apply" data-cat="__all">Aplicar a todo</button>' +
                '<button class="dg-btn sm" data-act="undo" disabled>Deshacer</button>' +
              '</div>' +
            '</section>' +
            '<div id="dg-list">' + data.cats.map(catCard).join('') + '</div>' +
          '</div>' +
          '<aside class="dg-rail">' +
            '<div>' +
              '<div class="dg-mini-title"><span class="dot"></span>Así lo ve el cliente</div>' +
              '<div id="dg-phone-host">' + phone(state.tpl) + '</div>' +
            '</div>' +
            '<div class="dg-qr">' +
              '<img src="img/qr-carta.svg" alt="QR de la carta">' +
              '<b>El mismo QR, para siempre</b>' +
              '<small>Imprimilo una vez. Cambiás la carta y el QR no cambia.</small>' +
              '<div class="row"><button class="dg-btn">' + I.dl + 'PNG</button><button class="dg-btn" data-act="qrtent">' + I.print + 'Mesa</button></div>' +
            '</div>' +
            '<div class="dg-note">' + I.info + '<span>Los cambios se publican en 2 minutos. Mientras tanto, el cliente sigue viendo la carta anterior.</span></div>' +
          '</aside>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ---------------- acciones ---------------- */
  function rerenderList() {
    var host = document.getElementById('dg-list');
    if (host) host.innerHTML = data.cats.map(catCard).join('');
    var hostCats = document.querySelector('.dg-cat-list');
    if (hostCats) hostCats.innerHTML = data.cats.map(catRow).join('');
    var kpis = document.querySelectorAll('.dg-kpis b');
    if (kpis.length) { kpis[0].textContent = total(); kpis[1].textContent = data.cats.length; kpis[2].textContent = hidden(); }
    var nav = document.getElementById('nav-count');
    if (nav) nav.textContent = total();
    refreshPreview();
  }

  function refreshPreview() {
    var host = document.getElementById('dg-phone-host');
    if (host) host.innerHTML = phone(state.tpl);
  }

  function toast(msg, undoable) {
    var t = document.querySelector('.dg-toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'dg-toast';
      document.body.appendChild(t);
    }
    t.innerHTML = '<span>' + msg + '</span>' + (undoable ? '<button data-act="undo">Deshacer</button>' : '');
    t.classList.add('show');
    var ub = t.querySelector('[data-act="undo"]');
    if (ub) ub.addEventListener('click', function () { undo(); t.classList.remove('show'); });
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove('show'); }, 5200);
  }

  function applyPct(catId, pct) {
    if (!pct || isNaN(pct)) { toast('Poné un porcentaje distinto de 0.'); return; }
    var cats = catId === '__all' ? data.cats : [findCat(catId)];
    if (!cats[0]) return;
    var snapshot = JSON.stringify(data.cats);
    var count = 0;
    cats.forEach(function (c) {
      c.items.forEach(function (it) {
        it.p = Math.round(it.p * (1 + pct / 100) / 100) * 100;
        count++;
      });
    });
    state.undo = snapshot;
    var und = document.querySelector('[data-act="undo"]');
    if (und) und.disabled = false;
    rerenderList();
    var label = catId === '__all' ? 'toda la carta' : cats[0].name;
    toast((pct > 0 ? '+' : '') + pct + '% en ' + label + ' · ' + count + ' precios actualizados', true);
  }

  function undo() {
    if (!state.undo) return;
    data.cats = JSON.parse(state.undo);
    state.undo = null;
    var und = document.querySelector('[data-act="undo"]');
    if (und) und.disabled = true;
    rerenderList();
    toast('Listo, volvimos a los precios anteriores.');
  }

  /* ---------------- boot ---------------- */
  function boot() {
    var host = document.getElementById('panel');
    if (!host) return;
    state.tpl = host.getAttribute('data-tpl') || 'a';
    host.innerHTML = shell();

    host.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act]');
      if (!btn) return;
      var act = btn.getAttribute('data-act');
      if (act === 'apply') {
        var catId = btn.getAttribute('data-cat');
        var input = host.querySelector('[data-pct="' + catId + '"]');
        applyPct(catId, input ? parseFloat(input.value) : NaN);
        if (input) input.value = '';
      } else if (act === 'undo') {
        undo();
      } else if (act === 'publish') {
        var st = document.getElementById('dg-state');
        if (st) st.textContent = 'Publicado recién';
        toast('Carta publicada. El QR ya muestra los cambios.');
      } else if (act === 'preview') {
        var b = document.querySelector('.reviewbar button[data-view="carta"]');
        if (b) b.click();
      } else if (act === 'qrtent') {
        var q = document.querySelector('.reviewbar button[data-view="qr"]');
        if (q) q.click();
      }
    });

    host.addEventListener('change', function (e) {
      var t = e.target;
      if (t.hasAttribute('data-toggle')) {
        var k = t.getAttribute('data-toggle').split(':');
        var cat = findCat(k[0]);
        if (cat && cat.items[+k[1]]) {
          cat.items[+k[1]].on = t.checked;
          t.closest('.dg-row').classList.toggle('off', !t.checked);
          refreshPreview();
        }
      }
      if (t.hasAttribute('data-catvis')) {
        var c = findCat(t.getAttribute('data-catvis'));
        if (c) { c.on = t.checked; rerenderList(); }
      }
    });

    host.addEventListener('input', function (e) {
      var t = e.target;
      if (!t.hasAttribute('data-price')) return;
      var k = t.getAttribute('data-price').split(':');
      var cat = findCat(k[0]);
      if (!cat || !cat.items[+k[1]]) return;
      var raw = parseInt(String(t.value).replace(/[^\d]/g, ''), 10);
      if (isNaN(raw)) return;
      cat.items[+k[1]].p = raw;
      refreshPreview();
    });

    host.addEventListener('blur', function (e) {
      var t = e.target;
      if (!t.hasAttribute || !t.hasAttribute('data-price')) return;
      var k = t.getAttribute('data-price').split(':');
      var cat = findCat(k[0]);
      if (cat && cat.items[+k[1]]) t.value = money(cat.items[+k[1]].p);
    }, true);

    host.addEventListener('click', function (e) {
      var a = e.target.closest('[data-noop]');
      if (a) e.preventDefault();
    });

    /* switcher de vistas de la barra de revisión */
    var bar = document.querySelector('.reviewbar');
    var nav = bar && bar.querySelector('nav');
    if (nav) {
      nav.addEventListener('click', function (e) {
        var b = e.target.closest('button[data-view]');
        if (!b) return;
        setView(b.getAttribute('data-view'));
      });
    }
    var initial = new URLSearchParams(location.search).get('v');
    if (initial) setView(initial);
    else setView(document.documentElement.getAttribute('data-view') || 'carta');

    function setView(v) {
      document.documentElement.setAttribute('data-view', v);
      if (nav) {
        Array.prototype.forEach.call(nav.querySelectorAll('button'), function (x) {
          x.setAttribute('aria-selected', String(x.getAttribute('data-view') === v));
        });
      }
      window.scrollTo({ top: 0 });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
