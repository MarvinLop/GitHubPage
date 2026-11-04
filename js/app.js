document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("modulosContainer");
  const modal = document.getElementById("fichaModal");
  const modalBody = document.getElementById("modalBody");
  const modalTitle = document.getElementById("modalTitle");
  const btnClose = document.getElementById("btnCloseModal");
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".chip-btn");

  let currentFilter = "all";

  // Función para renderizar tarjetas
  function renderModulos() {
    container.innerHTML = "";
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filtered = modulosData.filter((mod) => {
      const matchDocente = currentFilter === "all" || mod.docente === currentFilter;
      const matchSearch =
        mod.nombre.toLowerCase().includes(searchTerm) ||
        mod.resumen.toLowerCase().includes(searchTerm) ||
        mod.herramientas.some((h) => h.toLowerCase().includes(searchTerm));

      return matchDocente && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<p style="color:var(--mut); text-align:center; grid-column: 1/-1; padding:40px;">No se encontraron módulos que coincidan con la búsqueda.</p>`;
      return;
    }

    filtered.forEach((mod) => {
      const card = document.createElement("article");
      card.className = "card-modulo";
      card.innerHTML = `
        <div>
          <div class="docente-badge">⚡ ${mod.docente}</div>
          <h3>${mod.nombre}</h3>
          <p>${mod.resumen}</p>
        </div>
        <button class="btn-ver" data-id="${mod.id}">Ver Ficha Completa</button>
      `;
      container.appendChild(card);
    });
  }

  // Escuchar búsqueda y filtros
  searchInput.addEventListener("input", renderModulos);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderModulos();
    });
  });

  // Modal interactivo
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-ver")) {
      const id = e.target.getAttribute("data-id");
      const mod = modulosData.find((m) => m.id === id);
      if (mod) abrirFicha(mod);
    }
  });

  function abrirFicha(mod) {
    modalTitle.textContent = mod.nombre;
    modalBody.innerHTML = `
      <div class="modal-section">
        <h4>Resumen</h4>
        <p style="color:var(--mut);">${mod.resumen}</p>
      </div>
      <div class="modal-section">
        <h4>Lo Aprendido</h4>
        <ul>${mod.aprendizajes.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="modal-section">
        <h4>Instrumentos de Evaluación</h4>
        <div class="tags">${mod.instrumentos.map((inst) => `<span class="tag">${inst}</span>`).join("")}</div>
      </div>
      <div class="modal-section">
        <h4>Programas y Herramientas</h4>
        <div class="tags">
          ${mod.programas.map((prog) => `<span class="tag" style="border-color:var(--mg);">${prog}</span>`).join("")}
          ${mod.herramientas.map((h) => `<span class="tag" style="border-color:var(--cy);">${h}</span>`).join("")}
        </div>
      </div>
      <div class="modal-section">
        <h4>Recursos y Evidencias</h4>
        <ul>
          ${mod.recursos.map((r) => `<li><a href="${r.url}" target="_blank" style="color:var(--cy);">${r.nombre}</a></li>`).join("")}
          <li><a href="${mod.evidencias}" target="_blank" style="color:var(--gr);">Ver evidencia del proyecto</a></li>
        </ul>
      </div>
    `;
    modal.showModal();
  }

  btnClose.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  // Carga inicial
  renderModulos();
});
