document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("modulosContainer");
  const modal = document.getElementById("fichaModal");
  const modalBody = document.getElementById("modalBody");
  const modalTitle = document.getElementById("modalTitle");
  const btnClose = document.getElementById("btnCloseModal");
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".chip-btn");

  let currentFilter = "all";

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
        <button class="btn-ver" data-id="${mod.id}">Ver Ficha y Quiz</button>
      `;
      container.appendChild(card);
    });
  }

  searchInput.addEventListener("input", renderModulos);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderModulos();
    });
  });

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-ver")) {
      const id = e.target.getAttribute("data-id");
      const mod = modulosData.find((m) => m.id === id);
      if (mod) abrirFicha(mod);
    }
  });

  function abrirFicha(mod) {
    modalTitle.textContent = mod.nombre;
    
    // Generar opciones del quiz dinámicamente
    let opcionesHTML = "";
    mod.quiz.opciones.forEach((opcion, index) => {
      opcionesHTML += `
        <button class="quiz-opcion" data-correcta="${index === mod.quiz.correcta}" style="display:block; width:100%; text-align:left; background:rgba(255,255,255,0.05); border:1px solid var(--panel-border); color:var(--tx); padding:10px 14px; border-radius:8px; margin-bottom:8px; cursor:pointer; font-family:var(--fb); transition:all 0.2s;">
          ${opcion}
        </button>
      `;
    });

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
      <div class="modal-section" style="background:rgba(6,182,212,0.05); border:1px solid rgba(6,182,212,0.2); padding:16px; border-radius:12px; margin-top:16px;">
        <h4 style="color:var(--cy);">Quiz Rápido del Módulo</h4>
        <p style="font-size:0.95rem; margin-bottom:12px; color:#fff;">${mod.quiz.pregunta}</p>
        <div id="quizContainer">${opcionesHTML}</div>
        <p id="quizFeedback" style="font-weight:700; margin-top:10px; font-size:0.9rem; min-height:20px;"></p>
      </div>
    `;

    // Lógica interactiva del Quiz dentro del modal
    const quizContainer = modalBody.querySelector("#quizContainer");
    const feedback = modalBody.querySelector("#quizFeedback");

    quizContainer.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("quiz-opcion")) {
        const esCorrecta = evt.target.getAttribute("data-correcta") === "true";
        const botones = quizContainer.querySelectorAll(".quiz-opcion");
        
        botones.forEach(b => {
          b.disabled = true;
          if (b.getAttribute("data-correcta") === "true") {
            b.style.background = "rgba(16, 185, 129, 0.2)";
            b.style.borderColor = "#10b981";
          } else {
            b.style.background = "rgba(239, 68, 68, 0.1)";
            b.style.borderColor = "#ef4444";
          }
        });

        if (esCorrecta) {
          feedback.style.color = "#10b981";
          feedback.textContent = "¡Correcto! Has respondido bien el quiz de este módulo.";
        } else {
          feedback.style.color = "#ef4444";
          feedback.textContent = "Incorrecto. ¡Revisa los aprendizajes clave del módulo!";
        }
      }
    });

    modal.showModal();
  }

  btnClose.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  renderModulos();
});
