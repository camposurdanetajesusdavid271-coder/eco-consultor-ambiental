const chemicalData = {
    detergente: {
        name: "Detergentes con fosfatos",
        impact: "Los fosfatos aceleran la eutrofización en ríos y lagos, multiplicando algas que asfixian y destruyen la fauna acuática.",
        recipeTitle: "Detergente Ecológico de Ropa",
        basePrep: "Ralle 100g de jabón de coco neutro y disuélvalo en 2 litros de agua caliente. Agregue 4 cucharadas de bicarbonato de sodio.",
        baseApp: "Use 1/2 taza por carga regular de ropa.",
        modalta: {
            prep: "A la mezcla base, incorpore 1/2 taza de carbonato de sodio (sosa en polvo) para potenciar el desmanchado.",
            app: "Deje la ropa sumergida en la mezcla durante 30 minutos antes de iniciar el ciclo de lavado normal."
        }
    },
    solvente: {
        name: "Solventes de motores",
        impact: "Contienen compuestos aromáticos y destilados de petróleo pesados que saturan los suelos y son tóxicos para ecosistemas acuáticos.",
        recipeTitle: "Desengrasante Técnico Cítrico",
        basePrep: "Mezcle 1 taza de concentrado de d-limoneno (extracto de cáscara de naranja) con 2 tazas de agua.",
        baseApp: "Rocíe la zona, frote con un cepillo de cerdas duras y retire los residuos con un paño absorbente.",
        modalta: {
            prep: "Utilice el concentrado de d-limoneno puro, sin diluir en agua, y añada 2 cucharadas de jabón líquido neutro.",
            app: "Aplique directamente sobre la grasa pesada, deje actuar por 15 minutos, talle con fibra metálica y enjuague."
        }
    },
    desinfectante_comida: {
        name: "Desinfectantes industriales",
        impact: "Los amonios cuaternarios persistentes crean resistencia bacteriana y contaminan los mantos acuíferos urbanos.",
        recipeTitle: "Sanitizante Grado Alimenticio Segura",
        basePrep: "Mezcle partes iguales de agua destilada y alcohol isopropílico al 70%. Agregue 10 gotas de extracto de semilla de toronja.",
        baseApp: "Rocíe sobre las mesas o tablas de picar limpias y deje secar al aire por completo.",
        modalta: {
            prep: "Use una solución estabilizada de peróxido de hidrógeno (agua oxigenada) al 3% directamente en un atomizador opaco.",
            app: "Rocíe abundantemente la superficie con alta carga orgánica, permita que burbujee durante 5 minutos y limpie con un paño limpio."
        }
    },
    aerosol_pantallas: {
        name: "Aerosoles para electrónica",
        impact: "Liberan gases propulsores COVs que dañan la calidad del aire interior y sus latas presurizadas saturan los vertederos.",
        recipeTitle: "Limpia pantallas Antiestático",
        basePrep: "Mezcle 50% de agua destilada con 50% de alcohol isopropílico puro en un atomizador fino.",
        baseApp: "Rocíe siempre sobre un paño de microfibra (nunca directo a la pantalla) y limpie suavemente en círculos.",
        modalta: {
            prep: "A la mezcla de agua destilada y alcohol, añada 2 gotas de jabón líquido de castilla para romper las grasas rebeldes.",
            app: "Use dos paños de microfibra: uno humedecido con la mezcla para retirar las huellas y otro seco para pulir."
        }
    },
    acido_banos: {
        name: "Ácidos fuertes / Quitasarro",
        impact: "Corroen tuberías, acidifican el drenaje público y liberan vapores altamente irritantes para las vías respiratorias.",
        recipeTitle: "Removedor de Sarro Biodegradable",
        basePrep: "Caliente 1 taza de vinagre blanco concentrado y mézclela con 1/2 taza de jabón líquido para platos.",
        baseApp: "Aplique sobre los azulejos o grifos, espere 10 minutos y enjuague frotando ligeramente.",
        modalta: {
            prep: "Haga una pasta espesa utilizando 4 cucharadas de ácido cítrico en polvo, 2 cucharadas de bicarbonato y vinagre caliente.",
            app: "Cubra el sarro incrustado con la pasta. Deje actuar por 1 hora antes de tallar con fuerza y enjuagar."
        }
    }
};

const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');
const exportPdfBtn = document.getElementById('export-pdf-btn');
const impactList = document.getElementById('impact-list');
const recipeList = document.getElementById('recipe-list');
const historyList = document.getElementById('history-list');
const reportMetaInfo = document.getElementById('report-meta-info');
const chemicalCheckboxes = document.querySelectorAll('input[name="chemical"]');

window.addEventListener('DOMContentLoaded', loadHistory);

generateBtn.addEventListener('click', () => {
    const selectedChemicals = Array.from(chemicalCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    if (selectedChemicals.length === 0) {
        alert('Por favor, selecciona al menos un residuo químico para evaluar su sustitución.');
        return;
    }

    const profile = document.getElementById('profile-select').value;
    const dateStr = new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
    
    reportMetaInfo.innerHTML = `<strong>Establecimiento:</strong> ${profile} | <strong>Fecha de Auditoría:</strong> ${dateStr}`;

    impactList.innerHTML = '';
    recipeList.innerHTML = '';

    const reportItems = [];

    selectedChemicals.forEach(chemKey => {
        const data = chemicalData[chemKey];
        const dirtVar = document.querySelector(`select[name="dirt-${chemKey}"]`).value;
        const freqVar = document.querySelector(`select[name="freq-${chemKey}"]`).value;

        let finalPrep = data.basePrep;
        let finalApp = data.baseApp;
        let isHigh = false;

        if (dirtVar === 'alta' && data.modalta) {
            finalPrep = data.modalta.prep;
            finalApp = data.modalta.app;
            isHigh = true;
        }

        reportItems.push({ name: data.name, isHigh });

        const li = document.createElement('li');
        li.innerHTML = `<strong>${data.name}:</strong> ${data.impact} <span class="badge">Frecuencia: ${freqVar}</span>`;
        impactList.appendChild(li);

        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe-item';
        recipeDiv.innerHTML = `
            <h4>Sustituto para ${data.name} ${isHigh ? '<span class="badge-high">Alta Suciedad</span>' : ''}</h4>
            <p><strong>Fórmula:</strong> ${data.recipeTitle}</p>
            <p><strong>Preparación:</strong> ${finalPrep}</p>
            <p><strong>Aplicación:</strong> ${finalApp}</p>
        `;
        recipeList.appendChild(recipeDiv);
    });

    saveToHistory({ profile, date: dateStr, items: reportItems });

    step1.classList.add('hidden');
    setTimeout(() => {
        step2.classList.remove('hidden');
    }, 150);
});

exportPdfBtn.addEventListener('click', () => {
    const element = document.getElementById('pdf-content');
    const opt = {
        margin:       10,
        filename:     'Guia_Transicion_Ecologica.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});

resetBtn.addEventListener('click', () => {
    chemicalCheckboxes.forEach(cb => cb.checked = false);
    document.getElementById('profile-select').selectedIndex = 0;
    
    step2.classList.add('hidden');
    setTimeout(() => {
        step1.classList.remove('hidden');
    }, 150);
});

function saveToHistory(report) {
    let history = JSON.parse(localStorage.getItem('ecoAudits')) || [];
    history.unshift(report);
    if(history.length > 6) history.pop(); 
    localStorage.setItem('ecoAudits', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    let history = JSON.parse(localStorage.getItem('ecoAudits')) || [];
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-msg">No hay reportes guardados aún.</p>';
        return;
    }

    historyList.innerHTML = '';
    history.forEach(audit => {
        const card = document.createElement('div');
        card.className = 'history-card glass-item';
        card.innerHTML = `
            <div class="card-meta"><strong>${audit.profile}</strong></div>
            <div class="card-date">${audit.date}</div>
            <div class="card-details">${audit.items.length} químico(s) evaluado(s).</div>
        `;
        historyList.appendChild(card);
    });
}