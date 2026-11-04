document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("modulosContainer");
  const modal = document.getElementById("fichaModal");
  const modalBody = document.getElementById("modalBody");
  const modalTitle = document.getElementById("modalTitle");
  const btnClose = document.getElementById("btnCloseModal");
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".chip-btn");
  const btnTema = document.getElementById("btnTema");
  const barraProgreso = document.getElementById("barraProgreso");
  const textoProgreso = document.getElementById("textoProgreso");

  let currentFilter = "all";

  // Manejo de Modo Claro / Oscuro con localStorage
  const temaGuardado = localStorage.getItem("theme_indel") || "dark";
  document.documentElement.setAttribute("data-theme", temaGuardado);
  btnTema.textContent = temaGuardado === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro";

  btnTema.addEventListener("click", () => {
    const actual = document.documentElement.getAttribute("data-theme");
    const nuevo = actual === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nuevo);
    localStorage.setItem("theme_indel", nuevo);
    btnTema.textContent = nuevo === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
  });

  function actualizarProgresoGlobal() {
    let total = modulosData.length;
    let completados = 0;
    modulosData.forEach(m => {
      if (localStorage.getItem("repasado_" + m.id) === "true") {
        completados++;
      }
    });
    const porcentaje = total > 0 ? Math.round((completados / total) * 100) : 0;
    if (barraProgreso) barraProgreso.style.width = porcentaje + "%";
    if (textoProgreso) textoProgreso.textContent = `Progreso global del repaso: ${porcentaje}% (${completados} de ${total} módulos)`;
  }

  function normalizar(texto) {
    if (!texto) return "";
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function renderModulos() {
    if (!container) return;
    container.innerHTML = "";
    const searchTerm = normalizar(searchInput ? searchInput.value.trim() : "");

    const filtered = modulosData.filter((mod) => {
      const matchDocente = currentFilter === "all" || mod.docente === currentFilter;
      const matchSearch =
        normalizar(mod.nombre).includes(searchTerm) ||
        normalizar(mod.resumen).includes(searchTerm) ||
        mod.herramientas.some((h) => normalizar(h).includes(searchTerm));

      return matchDocente && matchSearch;
    });

    const contador = document.getElementById("contadorModulos");
    if (contador) contador.textContent = `Mostrando ${filtered.length} de ${modulosData.length} módulos`;

    if (filtered.length === 0) {
      container.innerHTML = `<p style="color:var(--mut); text-align:center; grid-column: 1/-1; padding:40px;">No se encontraron módulos que coincidan con la búsqueda.</p>`;
      return;
    }

    filtered.forEach((mod) => {
      const repasadoKey = "repasado_" + mod.id;
      const estaRepasado = localStorage.getItem(repasadoKey) === "true";

      const card = document.createElement("article");
      card.className = "card-modulo";
      card.innerHTML = `
        <div>
          <div class="docente-badge">⚡ ${mod.docente}</div>
          <h3>${mod.nombre}</h3>
          <p>${mod.resumen}</p>
        </div>
        <div>
          <div class="card-footer-actions">
            <label class="chk-repasado">
              <input type="checkbox" class="chk-estado" data-id="${mod.id}" ${estaRepasado ? "checked" : ""}>
              <span>Repasado</span>
            </label>
            <button class="btn-ver" data-id="${mod.id}">Ver Ficha y Quiz</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    actualizarProgresoGlobal();
  }

  if (searchInput) searchInput.addEventListener("input", renderModulos);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderModulos();
    });
  });

  if (container) {
    container.addEventListener("change", (e) => {
      if (e.target.classList.contains("chk-estado")) {
        const id = e.target.getAttribute("data-id");
        localStorage.setItem("repasado_" + id, e.target.checked);
        actualizarProgresoGlobal();
      }
    });

    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-ver")) {
        const id = e.target.getAttribute("data-id");
        const mod = modulosData.find((m) => m.id === id);
        if (mod) abrirFicha(mod);
      }
    });
  }

  function abrirFicha(mod) {
    if (!modalTitle || !modalBody || !modal) return;
    modalTitle.textContent = mod.nombre;
    
    // Generar HTML para múltiples preguntas de quiz (Banco de preguntas)
    let quizHTML = "";
    if (mod.quiz && Array.isArray(mod.quiz)) {
      mod.quiz.forEach((q, qIndex) => {
        let opcionesHTML = "";
        q.opciones.forEach((opcion, oIndex) => {
          opcionesHTML += `
            <button class="quiz-opcion" data-qindex="${qIndex}" data-correcta="${oIndex === q.correcta}">
              ${opcion}
            </button>
          `;
        });

        quizHTML += `
          <div class="quiz-pregunta-block mb-4 pb-3 border-bottom border-secondary" data-qblock="${qIndex}">
            <p style="font-size:0.98rem; margin-bottom:10px; font-weight:600;">Pregunta ${qIndex + 1}: ${q.pregunta}</p>
            <div class="opciones-grupo">${opcionesHTML}</div>
            <p class="quiz-feedback-single mt-2 font-weight-bold" style="font-size:0.9rem; min-height:20px;"></p>
          </div>
        `;
      });
    }

    modalBody.innerHTML = `
      <div class="modal-section">
        <h4>Resumen Ejecutivo</h4>
        <p style="color:var(--mut);">${mod.resumen}</p>
      </div>
      <div class="modal-section">
        <h4>Aprendizajes Clave</h4>
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
        <h4>Recursos y Evidencias Verificadas</h4>
        <ul>
          ${mod.recursos.map((r) => `<li><a href="${r.url}" target="_blank" rel="noopener" style="color:var(--cy);">${r.nombre}</a></li>`).join("")}
          <li><a href="${mod.evidencias}" target="_blank" rel="noopener" style="color:var(--gr);">Ver repositorio del proyecto</a></li>
        </ul>
      </div>
      <div class="quiz-box">
        <h4 style="color:var(--cy); margin-bottom:14px;">🧠 Banco de Preguntas del Módulo</h4>
        <div id="quizContainer">${quizHTML}</div>
      </div>
    `;

    const quizContainer = modalBody.querySelector("#quizContainer");

    quizContainer.addEventListener("click", (evt) => {
      const btnOpcion = evt.target.closest(".quiz-opcion");
      if (btnOpcion && !btnOpcion.disabled) {
        const bloque = btnOpcion.closest("[data-qblock]");
        const qIndex = parseInt(bloque.getAttribute("data-qblock"));
        const preguntaData = mod.quiz[qIndex];
        const esCorrecta = btnOpcion.getAttribute("data-correcta") === "true";
        const botones = bloque.querySelectorAll(".quiz-opcion");
        const feedback = bloque.querySelector(".quiz-feedback-single");

        botones.forEach(b => {
          b.disabled = true;
          if (b.getAttribute("data-correcta") === "true") {
            b.classList.add("correcta");
          } else {
            b.classList.add("incorrecta");
          }
        });

        if (esCorrecta) {
          feedback.style.color = "var(--gr)";
          feedback.textContent = "¡Correcto! 🎉 " + preguntaData.explicacion;
        } else {
          feedback.style.color = "var(--mg)";
          feedback.textContent = "Incorrecto. ❌ " + preguntaData.explicacion;
        }
      }
    });

    modal.showModal();
  }

  if (btnClose) btnClose.addEventListener("click", () => modal.close());
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }

  renderModulos();
});
