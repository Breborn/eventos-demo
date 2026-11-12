/* QUINTA MIRADOR • Cotizador de Eventos & Galería Editorial */
const WA_EVENTOS = '56956823670';

const SPACES = [
  {
    name: 'El Invernadero de Cristal',
    cap: 'Banquete 220 pax • Cóctel 300 pax',
    desc: 'Salón vidriado con vigas a la vista, climatización frío/calor, pistas de baile y conexión directa al jardín iluminado.',
    specs: ['Aire & Calefacción', 'Acústica Pro', 'Suite Privada', 'Vista al Valle'],
    img: 'assets/salon_banquete.jpg',
  },
  {
    name: 'Jardín de Olivos & Bistró',
    cap: 'Ceremonia 300 pax • Cóctel Exterior',
    desc: 'Praderas niveladas con luces cálidas suspendidas, mesas imperiales de madera y altar natural para ceremonias al atardecer.',
    specs: ['Ceremonia Civil', 'Luces Bistró', 'Accesibilidad Universal', '90 Estacionamientos'],
    img: 'assets/hero_eventos.jpg',
  },
  {
    name: 'Quincho Lounge & Piscina',
    cap: 'Jornada Día 160 pax • Paseos / Empresas',
    desc: 'Pérgola contemporánea en piedra y madera con parrillas industriales, piscina amplia, camarines y zonas de sombra.',
    specs: ['Piscina Exclusiva', 'Parrillas & Barra', 'Camarines', 'Áreas Verdes'],
    img: 'assets/piscina_quincho.jpg',
  },
];

const PACKAGES = {
  matrimonios: [
    {
      id: 'solo_recinto_mat',
      tag: 'Solo Infraestructura',
      name: 'Arriendo Exclusivo Quinta',
      priceLabel: 'Desde $1.450.000 fijo',
      baseFixed: 1450000,
      perGuest: 0,
      items: ['Uso exclusivo de salones y jardines (10 hrs)', 'Estacionamientos con guardias privados', 'Suite de novios + camarines', 'Planta generadora de respaldo'],
    },
    {
      id: 'todo_incluido_mat',
      tag: 'Más Elegido • Todo Incluido',
      name: 'Boda Boutique Llave en Mano',
      featured: true,
      priceLabel: '$48.000 por invitado',
      baseFixed: 0,
      perGuest: 48000,
      items: ['Recinto completo + ceremonia al aire libre', 'Cóctel de bienvenida + cena 3 tiempos o estación', 'Mesas imperiales, cristalería y loza de diseño', 'Garzones, maîtresse y coordinación del día'],
    },
    {
      id: 'fin_semana_mat',
      tag: 'Experiencia Completa',
      name: 'Weekend Takeover',
      priceLabel: '$62.000 por invitado',
      baseFixed: 0,
      perGuest: 62000,
      items: ['Todo lo incluido en Boda Boutique', 'Montaje anticipado desde el viernes', 'Open bar durante 6 horas de fiesta', 'Almuerzo/piscina post-boda día domingo'],
    },
  ],
  empresas: [
    {
      id: 'jornada_corp',
      tag: 'Team Building / Fin de Año',
      name: 'Paseo Corporativo Full Day',
      featured: true,
      priceLabel: '$32.000 por persona',
      baseFixed: 0,
      perGuest: 32000,
      items: ['Quincho, piscina y praderas exclusivas (09:30–19:30)', 'Desayuno campestre de llegada', 'Almuerzo parrilla premium + bebestibles', 'Sonido ambiental y proyector en salón'],
    },
    {
      id: 'gala_corp',
      tag: 'Noche de Premiación',
      name: 'Cena Anual & Fiesta',
      priceLabel: '$42.000 por persona',
      baseFixed: 0,
      perGuest: 42000,
      items: ['Salón Invernadero de Cristal', 'Cóctel recepción + cena 3 tiempos', 'Escenario, micrófonos e iluminación', 'Servicio completo de garzones'],
    },
    {
      id: 'solo_recinto_corp',
      tag: 'Solo Recinto',
      name: 'Arriendo Jornada Empresa',
      priceLabel: '$1.100.000 fijo',
      baseFixed: 1100000,
      perGuest: 0,
      items: ['Exclusividad total de la quinta', 'Parrillas, freezer y cocina equipada', 'Piscina con salvavidas (opcional)', 'Mobiliario para hasta 180 pax'],
    },
  ],
  paseos: [
    {
      id: 'paseo_curso',
      tag: 'Familias & Colegios',
      name: 'Jornada Piscina & Quincho',
      priceLabel: '$950.000 fijo (hasta 120 pax)',
      baseFixed: 950000,
      perGuest: 0,
      items: ['Uso exclusivo piscina y gran quincho', 'Parrillas, refrigeradores y mesones', 'Cancha pasto y juegos infantiles', 'Estacionamiento privado cerrado'],
    },
    {
      id: 'cumple_cocktail',
      tag: 'Celebración Noche',
      name: 'Fiesta & Cóctel Privado',
      featured: true,
      priceLabel: '$28.000 por invitado',
      baseFixed: 0,
      perGuest: 28000,
      items: ['Salón o terraza bistró iluminada', 'Tablas gourmet + 6 bocados salados/dulces p/p', 'Barra de tragos de autor (3 por persona)', 'Mobiliario lounge y pista iluminada'],
    },
    {
      id: 'graduacion_all',
      tag: 'Colegios & Universidades',
      name: 'Gala de Graduación',
      priceLabel: '$39.000 por invitado',
      baseFixed: 0,
      perGuest: 39000,
      items: ['Pabellón de cristal + alfombra roja', 'Cena servida a la mesa + barra sin alcohol', 'DJ, iluminación robótica y seguridad', 'Sector de fotos iluminado'],
    },
  ],
};

const ALL_PACKAGES = [...PACKAGES.matrimonios, ...PACKAGES.empresas, ...PACKAGES.paseos];

const GALLERY = [
  { cat: 'banquete', img: 'assets/salon_banquete.jpg', cap: 'Montaje imperial nocturno en El Invernadero de Cristal' },
  { cat: 'jardin', img: 'assets/hero_eventos.jpg', cap: 'Golden hour con luces bistró y mesas en el jardín de olivos' },
  { cat: 'quincho', img: 'assets/piscina_quincho.jpg', cap: 'Quincho lounge y piscina para paseos de empresa y familias' },
];

const EXTRA_SERVICES = [
  { id: 'bar', name: 'Barra Libre / Coctelería', price: 450000 },
  { id: 'dj', name: 'DJ + Audio e Iluminación', price: 320000 },
  { id: 'ceremonia', name: 'Montaje Ceremonia Jardín', price: 240000 },
  { id: 'cabina', name: 'Cabina Fotos / Plataforma 360°', price: 220000 },
];

const state = {
  tab: 'matrimonios',
  gFilter: 'all',
  selectedPkgId: 'todo_incluido_mat',
  extras: new Set(['dj']),
};

const clp = (n) => '$' + Math.round(n).toLocaleString('es-CL');

function openLightbox(img, cap) {
  document.getElementById('lbImg').src = img;
  document.getElementById('lbCaption').textContent = cap;
  document.getElementById('lightbox').classList.add('open');
}

function renderSpaces() {
  document.getElementById('spacesGrid').innerHTML = SPACES.map(
    (s) => `
    <article class="space-card">
      <img src="${s.img}" alt="${s.name}" class="space-photo" data-lb-img="${s.img}" data-lb-cap="${s.name} — ${s.cap}">
      <div class="space-body">
        <span class="space-cap">${s.cap}</span>
        <h3 class="space-title">${s.name}</h3>
        <p class="space-desc">${s.desc}</p>
        <div class="cap-pills">${s.specs.map((sp) => `<span class="cap-pill">${sp}</span>`).join('')}</div>
      </div>
    </article>`
  ).join('');

  document.querySelectorAll('[data-lb-img]').forEach((el) => {
    el.addEventListener('click', () => openLightbox(el.dataset.lbImg, el.dataset.lbCap));
  });
}

function renderPackages() {
  const list = PACKAGES[state.tab];
  document.getElementById('packagesGrid').innerHTML = list
    .map(
      (p) => `
    <article class="pkg-card ${p.featured ? 'featured' : ''}">
      <span class="pkg-tag">${p.tag}</span>
      <h3 class="pkg-name">${p.name}</h3>
      <div class="pkg-price">${p.priceLabel}</div>
      <ul class="pkg-list">${p.items.map((it) => `<li>✓ ${it}</li>`).join('')}</ul>
      <button type="button" class="btn ${state.selectedPkgId === p.id ? 'btn-bronze' : 'btn-dark'}" data-pick-pkg="${p.id}">
        ${state.selectedPkgId === p.id ? '✓ Cargado en Cotizador' : 'Cotizar este Formato ➔'}
      </button>
    </article>`
    )
    .join('');

  document.querySelectorAll('[data-pick-pkg]').forEach((b) => {
    b.addEventListener('click', () => {
      state.selectedPkgId = b.dataset.pickPkg;
      document.getElementById('evPackage').value = state.selectedPkgId;
      renderPackages();
      updateQuote();
      document.getElementById('cotizador').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderGallery() {
  const items = state.gFilter === 'all' ? GALLERY : GALLERY.filter((g) => g.cat === state.gFilter);
  document.getElementById('galleryGrid').innerHTML = items
    .map(
      (g) => `
    <div class="g-item" data-g-img="${g.img}" data-g-cap="${g.cap}">
      <img src="${g.img}" alt="${g.cap}">
      <div class="g-cap">${g.cap}</div>
    </div>`
    )
    .join('');
  document.querySelectorAll('[data-g-img]').forEach((el) => {
    el.addEventListener('click', () => openLightbox(el.dataset.gImg, el.dataset.gCap));
  });
}

function renderExtrasCheckboxes() {
  document.getElementById('evExtrasList').innerHTML = EXTRA_SERVICES.map((ex) => {
    const on = state.extras.has(ex.id);
    return `
      <div class="ex-check ${on ? 'active' : ''}" data-ex-id="${ex.id}">
        <span>${on ? '☑️' : '⬜'} ${ex.name}</span>
      </div>`;
  }).join('');
  document.querySelectorAll('[data-ex-id]').forEach((el) => {
    el.addEventListener('click', () => {
      const id = el.dataset.exId;
      if (state.extras.has(id)) state.extras.delete(id);
      else state.extras.add(id);
      renderExtrasCheckboxes();
      updateQuote();
    });
  });
}

function updateQuote() {
  const guests = parseInt(document.getElementById('evGuests').value, 10) || 120;
  document.getElementById('evGuestsLabel').textContent = `${guests} personas`;

  const pkg = ALL_PACKAGES.find((p) => p.id === state.selectedPkgId) || ALL_PACKAGES[1];
  const baseCost = pkg.baseFixed > 0 ? pkg.baseFixed : pkg.perGuest * guests;
  const exSelected = EXTRA_SERVICES.filter((e) => state.extras.has(e.id));
  const exCost = exSelected.reduce((s, e) => s + e.price, 0);
  const total = baseCost + exCost;

  const evType = document.getElementById('evType').value;
  const evDate = document.getElementById('evDate').value || 'Por definir';
  const client = document.getElementById('evClient').value.trim() || 'Anfitrión';
  const notes = document.getElementById('evNotes').value.trim();

  document.getElementById('sumEvType').textContent = evType;
  document.getElementById('sumEvGuests').textContent = `${guests} personas`;
  document.getElementById('sumEvModality').textContent = pkg.name;
  document.getElementById('sumEvBase').textContent = clp(baseCost);
  document.getElementById('sumEvExCount').textContent = String(exSelected.length);
  document.getElementById('sumEvExtras').textContent = clp(exCost);
  document.getElementById('sumEvTotal').textContent = clp(total);

  const exText = exSelected.length ? exSelected.map((e) => e.name).join(', ') : 'Solo modalidad base';
  const msg =
    `¡Hola Quinta Mirador! 👋 Soy *${client}* y quiero cotizar fecha para un evento:\n\n` +
    `🎪 *Tipo:* ${evType}\n` +
    `📅 *Fecha tentativa:* ${evDate}\n` +
    `👥 *Invitados aprox.:* ${guests} personas\n` +
    `✨ *Formato:* ${pkg.name}\n` +
    `🎶 *Adicionales:* ${exText}\n` +
    `💰 *Referencia estimada:* ${clp(total)}\n` +
    (notes ? `📝 *Notas:* ${notes}\n` : '') +
    `\n¿Tienen disponibilidad para esa fecha y podemos coordinar visita?`;

  document.getElementById('sendEvWaBtn').href = `https://wa.me/${WA_EVENTOS}?text=${encodeURIComponent(msg)}`;
  window.__currentEvMsg = msg;
}

function init() {
  const pkgSel = document.getElementById('evPackage');
  pkgSel.innerHTML = ALL_PACKAGES.map((p) => `<option value="${p.id}">${p.name} (${p.priceLabel})</option>`).join('');
  pkgSel.value = state.selectedPkgId;

  const d = new Date(Date.now() + 60 * 86400000);
  document.getElementById('evDate').value = d.toISOString().split('T')[0];

  document.querySelectorAll('#packageTabs .pill').forEach((b) => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#packageTabs .pill').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      state.tab = b.dataset.tab;
      renderPackages();
    });
  });

  document.querySelectorAll('#galleryFilters .pill').forEach((b) => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#galleryFilters .pill').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      state.gFilter = b.dataset.gfilter;
      renderGallery();
    });
  });

  ['evType', 'evDate', 'evGuests', 'evPackage', 'evClient', 'evNotes'].forEach((id) => {
    document.getElementById(id).addEventListener('input', () => {
      if (id === 'evPackage') state.selectedPkgId = document.getElementById('evPackage').value;
      updateQuote();
    });
  });

  document.getElementById('copyEvBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(window.__currentEvMsg || '');
    const btn = document.getElementById('copyEvBtn');
    btn.textContent = '✓ ¡Resumen copiado!';
    setTimeout(() => (btn.textContent = '📋 Copiar resumen para WhatsApp'), 2000);
  });

  const lb = document.getElementById('lightbox');
  document.getElementById('lbClose').addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', (e) => {
    if (e.target === lb) lb.classList.remove('open');
  });

  const mToggle = document.getElementById('mobileToggle');
  const mMenu = document.getElementById('mobileMenu');
  mToggle.addEventListener('click', () => mMenu.classList.toggle('open'));
  document.querySelectorAll('.m-link').forEach((a) => a.addEventListener('click', () => mMenu.classList.remove('open')));

  renderSpaces();
  renderPackages();
  renderGallery();
  renderExtrasCheckboxes();
  updateQuote();
}

document.addEventListener('DOMContentLoaded', init);
