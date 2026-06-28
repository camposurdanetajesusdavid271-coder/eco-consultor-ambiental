
const baseDatosEntornos = {
    comercial: {
        cafeteria: {
            nombre: "Cafeterías",
            areas: [
                { id: "area_cocina_caf", nombre: "Área de Preparación y Cafeteras" },
                { id: "area_mesas_caf", nombre: "Zona de Barra y Mesas" },
                { id: "area_almacen_caf", nombre: "Almacén de Insumos Ligeros" }
            ],
            productos: [
                { id: "prod_desengrasante", nombre: "Desengrasante Industrial (Base Sosa Caústica)" },
                { id: "prod_amoniaco", nombre: "Limpiador Amoniacal Multiusos" }
            ]
        },
        restaurante: {
            nombre: "Restaurantes",
            areas: [
                { id: "area_cocina_rest", nombre: "Cocina Caliente y Planchas Pesadas" },
                { id: "area_comedor_rest", nombre: "Salón Principal de Comensales" },
                { id: "area_cavas_rest", nombre: "Cavas de Congelación y Refrigeración" }
            ],
            productos: [
                { id: "prod_desengrasante", nombre: "Desengrasante Industrial (Base Sosa Caústica)" },
                { id: "prod_cloro", nombre: "Hipoclorito de Sodio (Cloro Comercial)" }
            ]
        },
        panaderia: {
            nombre: "Panaderías",
            areas: [
                { id: "area_hornos_pan", nombre: "Zona de Hornos y Amasado" },
                { id: "area_exhibicion_pan", nombre: "Mostrador y Despacho al Público" }
            ],
            productos: [
                { id: "prod_amoniaco", nombre: "Limpiador Amoniacal Multiusos" }
            ]
        }
    },
    salud: {
        quirofano: {
            nombre: "Quirófanos",
            areas: [
                { id: "area_quirurgica_core", nombre: "Zona Quirúrgica Central (Mesa de Operaciones)" },
                { id: "area_lavado_quirurgico", nombre: "Estación de Lavado Pre-Operatorio" },
                { id: "area_esterilizacion", nombre: "Zona de Esterilización de Instrumental" }
            ],
            productos: [
                { id: "prod_glutaraldehido", nombre: "Glutaraldehído al 2%" },
                { id: "prod_amonio_cuaternario", nombre: "Amonio Cuaternario de 5ta Generación" }
            ]
        },
        laboratorio: {
            nombre: "Laboratorios",
            areas: [
                { id: "area_mesones_lab", nombre: "Mesones de Análisis y Reactivos" },
                { id: "area_muestras_lab", nombre: "Área de Centrifugado y Toma de Muestras" },
                { id: "area_lavado_material", nombre: "Fregaderos de Material de Vidrio" }
            ],
            productos: [
                { id: "prod_amonio_cuaternario", nombre: "Amonio Cuaternario de 5ta Generación" },
                { id: "prod_glutaraldehido", nombre: "Glutaraldehído al 2%" }
            ]
        },
        farmacia: {
            nombre: "Farmacias",
            areas: [
                { id: "area_mostrador_farm", nombre: "Atención al Cliente y Caja" },
                { id: "area_anaqueles_farm", nombre: "Estanterías de Almacenamiento de Medicamentos" }
            ],
            productos: [
                { id: "prod_amonio_cuaternario", nombre: "Amonio Cuaternario de 5ta Generación" }
            ]
        }
    },
    hogares: {
        apartamento: {
            nombre: "Apartamentos",
            areas: [
                { id: "area_bano_apto", nombre: "Cuarto de Baño Principal" },
                { id: "area_cocina_apto", nombre: "Cocina y Encimeras" },
                { id: "area_salas_apto", nombre: "Sala de Estar y Habitaciones" }
            ],
            productos: [
                { id: "prod_cloro", nombre: "Hipoclorito de Sodio (Cloro Comercial)" },
                { id: "prod_limpiador_pino", nombre: "Limpiador Desinfectante de Pino" }
            ]
        },
        residencia: {
            nombre: "Casas Residenciales",
            areas: [
                { id: "area_bano_casa", nombre: "Baños Residentes e Invitados" },
                { id: "area_cocina_casa", nombre: "Cocina e Isla Central" },
                { id: "area_lavanderia_casa", nombre: "Cuarto de Lavado y Lavadoras" },
                { id: "area_patio_casa", nombre: "Patios y Aceras Externas" }
            ],
            productos: [
                { id: "prod_cloro", nombre: "Hipoclorito de Sodio (Cloro Comercial)" },
                { id: "prod_acido_muriatico", nombre: "Ácido Muriático (Limpiador de pocetas)" }
            ]
        }
    },
    educacion: {
        escuela: {
            nombre: "Escuelas Primarias",
            areas: [
                { id: "area_aulas_esc", nombre: "Salones de Clase e Infantil" },
                { id: "area_banos_esc", nombre: "Módulos de Baños de Alumnos" },
                { id: "area_recreo_esc", nombre: "Patios de Recreo y Comedores" }
            ],
            productos: [
                { id: "prod_limpiador_pino", nombre: "Limpiador Desinfectante de Pino" },
                { id: "prod_cloro", nombre: "Hipoclorito de Sodio (Cloro Comercial)" }
            ]
        },
        universidad: {
            nombre: "Universidades",
            areas: [
                { id: "area_aulas_univ", nombre: "Auditorios y Aulas de Cátedra" },
                { id: "area_pasillos_univ", nombre: "Pasillos y Zonas Comunes de Tránsito" },
                { id: "area_biblioteca_univ", nombre: "Salas de Estudio y Biblioteca" }
            ],
            productos: [
                { id: "prod_cera_acrilica", nombre: "Cera Acrílica para Pisos de Alto Tránsito" },
                { id: "prod_amoniaco", nombre: "Limpiador Amoniacal Multiusos" }
            ]
        }
    }
};


const baseDatosQuimicos = {
    prod_desengrasante: {
        nfpa: { salud: 3, inflamabilidad: 0, reactividad: 1, especial: "ALK" },
        riesgoBase: "Alta causticidad. Corrosivo severo para tejidos dérmicos y oculares por contacto directo.",
        alternativa: {
            ingredientes: [
                { ing: "Jabón Potásico", sci: "Oleato de Potasio", form: "C18H33KO2", prop: 45 },
                { ing: "Carbonato de Sodio", sci: "Carbonato Sódico", form: "Na2CO3", prop: 15 },
                { ing: "Agua Destilada", sci: "Óxido de Dihidrógeno", form: "H2O", prop: 40 }
            ],
            mecanismo: "El carbonato provee alcalinidad controlada (pH 9-10) disolviendo ácidos grasos libres, mientras el jabón potásico encapsula y emulsiona la suciedad.",
            ventaja: "Biodegradabilidad rápida en entornos acuáticos. Cero emanaciones de vapores orgánicos volátiles."
        }
    },
    prod_amoniaco: {
        nfpa: { salud: 2, inflamabilidad: 1, reactividad: 0, especial: "" },
        riesgoBase: "Irritación aguda de vías respiratorias superiores y membranas mucosas por inhalación de vapores alcalinos.",
        alternativa: {
            ingredientes: [
                { ing: "Vinagre Blanco", sci: "Ácido Acético Diluido al 5%", form: "CH3COOH", prop: 50 },
                { ing: "Alcohol Isopropílico", sci: "Isopropanol", form: "C3H8O", prop: 20 },
                { ing: "Agua Destilada", sci: "Óxido de Dihidrógeno", form: "H2O", prop: 30 }
            ],
            mecanismo: "Disolución ácida suave capaz de desestabilizar depósitos minerales, combinada con solvente orgánico de evaporación ultra rápida.",
            ventaja: "Sustituye por completo las emanaciones asfixiantes del amoníaco libre. Seguro para operarios asmáticos."
        }
    },
    prod_glutaraldehido: {
        nfpa: { salud: 3, inflamabilidad: 1, reactividad: 1, especial: "" },
        riesgoBase: "Fuerte agente fijador de proteínas y sensibilizante pulmonar crónico. Asociado directamente al asma ocupacional.",
        alternativa: {
            ingredientes: [
                { ing: "Peróxido de Hidrógeno", sci: "Peróxido de Hidrógeno (Concentrado al 4%)", form: "H2O2", prop: 70 },
                { ing: "Ácido Cítrico", sci: "Ácido Hidroxitricarboxílico", form: "C6H8O7", prop: 10 },
                { ing: "Agua Purificada", sci: "Óxido de Dihidrógeno", form: "H2O", prop: 20 }
            ],
            mecanismo: "Estrés oxidativo de espectro total. Los radicales libres hidroxilo desnaturalizan las capas lipídicas y el ARN/ADN microbiano sin dejar residuos estables.",
            ventaja: "Su única descomposición molecular residual resulta en Agua y Oxígeno gaseoso (H2O + O2)."
        }
    },
    prod_amonio_cuaternario: {
        nfpa: { salud: 2, inflamabilidad: 0, reactividad: 0, especial: "" },
        riesgoBase: "Fuerte impacto ecotóxico ecotoxicológico en cuencas de drenaje. Fomenta la resistencia antimicrobiana a largo plazo.",
        alternativa: {
            ingredientes: [
                { ing: "Ácido Láctico", sci: "Ácido 2-hidroxipropanoico", form: "C3H6O3", prop: 30 },
                { ing: "Etanol destilado", sci: "Alcohol Etílico al 70%", form: "C2H5OH", prop: 50 },
                { ing: "Agua Purificada", sci: "Óxido de Dihidrógeno", form: "H2O", prop: 20 }
            ],
            mecanismo: "Perturbación física de las membranas plasmáticas mediante acidificación citoplasmática e inducción de lisis osmótica.",
            ventaja: "Ingredientes derivados de procesos fermentativos agrícolas. Alta tasa de asimilación biológica planetaria."
        }
    },
    prod_cloro: {
        nfpa: { salud: 3, inflamabilidad: 0, reactividad: 1, especial: "OXY" },
        riesgoBase: "Riesgo extremo de desprendimiento de Gas Cloro (Cl2) altamente letal si se combina accidentalmente con ácidos domésticos.",
        alternativa: {
            ingredientes: [
                { ing: "Percarbonato de Sodio", sci: "Carbonato de Sodio Peroxidrato", form: "2Na2CO3·3H2O2", prop: 25 },
                { ing: "Bicarbonato de Sodio", sci: "Carbonato Ácido de Sodio", form: "NaHCO3", prop: 25 },
                { ing: "Agua Termal Activa", sci: "Óxido de Dihidrógeno Caliente", form: "H2O", prop: 50 }
            ],
            mecanismo: "Liberación controlada in-situ de oxígeno activo. Rompe cromóforos moleculares (manchas) y oxida las membranas fúngicas y bacterianas.",
            ventaja: "Evita la formación de trihalometanos orgánicos cancerígenos persistentes en las redes de alcantarillado público."
        }
    },
    prod_acido_muriatico: {
        nfpa: { salud: 3, inflamabilidad: 0, reactividad: 2, especial: "COR" },
        riesgoBase: "Ácido fuerte extremadamente corrosivo. Emite vapores de Cloruro de Hidrógeno (HCl) destructivos al inhalarse.",
        alternativa: {
            ingredientes: [
                { ing: "Ácido Cítrico de Grado Técnico", sci: "Ácido 2-hidroxipropano-1,2,3-tricarboxílico", form: "C6H8O7", prop: 30 },
                { ing: "Vinagre de Limpieza", sci: "Ácido Acético Concentrado al 10%", form: "CH3COOH", prop: 50 },
                { ing: "Agua Blanda", sci: "Óxido de Dihidrógeno libre de sales", form: "H2O", prop: 20 }
            ],
            mecanismo: "Disolución controlada por efecto de quelación y desplazamiento ácido. Disuelve incrustaciones calcáreas sin atacar metales bases.",
            ventaja: "Los efluentes no alteran agresivamente el pH general de las plantas de tratamiento biológico secundario."
        }
    },
    prod_limpiador_pino: {
        nfpa: { salud: 1, inflamabilidad: 2, reactividad: 0, especial: "" },
        riesgoBase: "Contiene disolventes derivados de refinamiento petrolero. Alta carga de VOCs que desmejoran el aire interior.",
        alternativa: {
            ingredientes: [
                { ing: "Aceite Esencial de Pino", sci: "Pinus sylvestris oil extract", form: "Terpenos mixtos", prop: 5 },
                { ing: "Jabón de Coco Base", sci: "Sales sódicas de ácidos de coco", form: "R-COO-Na", prop: 15 },
                { ing: "Agua", sci: "Óxido de Dihidrógeno", form: "H2O", prop: 80 }
            ],
            mecanismo: "Los terpenos puros de la resina actúan como solventes hidrofóbicos naturales, desprendiendo grasas ligeras.",
            ventaja: "Se prescinde en un 100% de los solventes de refinerías fósiles. Fragancia biogénica no alergénica."
        }
    },
    prod_cera_acrilica: {
        nfpa: { salud: 2, inflamabilidad: 1, reactividad: 0, especial: "" },
        riesgoBase: "Deposición de microplásticos y polímeros acrílicos no biodegradables sobre las superficies tratadas.",
        alternativa: {
            ingredientes: [
                { ing: "Cera de Carnauba Pura", sci: "Copernicia prunifera wax", form: "Ésteres alquílicos cerosos", prop: 20 },
                { ing: "Aceite de Linaza Clarificado", sci: "Aceite secante de Linum usitatissimum", form: "Triglicéridos insaturados", prop: 15 },
                { ing: "Agua Emulsionada", sci: "Vehículo acuoso con lecitina", form: "H2O + Emulsificante", prop: 65 }
            ],
            mecanismo: "Evaporación del vehículo hídrico seguida por polimerización oxidativa natural del aceite de linaza, sellado por carnauba rígida.",
            ventaja: "Película protectora transpirable, de degradación biológica orgánica completa, sin emisión de micropartículas plásticas."
        }
    }
};


const domSelectSector = document.getElementById('sector-seleccion');
const domSelectEntorno = document.getElementById('tipo-entorno-seleccion');
const domContenedorAreas = document.getElementById('contenedor-seleccion-multiple-areas');
const domSelectProducto = document.getElementById('producto-comercial-seleccion');
const domFormulario = document.getElementById('formulario-analisis');
const domPanelConfig = document.getElementById('panel-configuracion');
const domPanelReporte = document.getElementById('panel-reporte-resultados');
const domBotonReiniciar = document.getElementById('boton-reiniciar-sistema');
const botonesSiguiente = document.querySelectorAll('.btn-siguiente');

// Cambio de Sector Global
domSelectSector.addEventListener('change', function() {
    const sectorElegido = this.value;
    
    domSelectEntorno.innerHTML = '<option value="" disabled selected>-- Seleccione Tipo Específico --</option>';
    domContenedorAreas.innerHTML = '<p class="estado-vacio">Seleccione un tipo de negocio para desplegar las áreas.</p>';
    domSelectProducto.innerHTML = '<option value="" disabled selected>-- Primero configure el entorno y áreas --</option>';
    domSelectProducto.disabled = true;

    if (sectorElegido && baseDatosEntornos[sectorElegido]) {
        domSelectEntorno.disabled = false;
        const negocios = baseDatosEntornos[sectorElegido];
        for (const key in negocios) {
            const opcion = document.createElement('option');
            opcion.value = key;
            opcion.textContent = negocios[key].nombre;
            domSelectEntorno.appendChild(opcion);
        }
    } else {
        domSelectEntorno.disabled = true;
    }
});


domSelectEntorno.addEventListener('change', function() {
    const sectorElegido = domSelectSector.value;
    const entornoElegido = this.value;
    
    domContenedorAreas.innerHTML = '';
    domSelectProducto.innerHTML = '<option value="" disabled selected>-- Seleccione Producto Químico --</option>';

    if (sectorElegido && entornoElegido && baseDatosEntornos[sectorElegido][entornoElegido]) {
        const datos = baseDatosEntornos[sectorElegido][entornoElegido];
        
        datos.areas.forEach(area => {
            const label = document.createElement('label');
            label.className = 'item-checkbox-area glass-checkbox'; 
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = area.id;
            checkbox.dataset.nombre = area.nombre;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(' ' + area.nombre));
            domContenedorAreas.appendChild(label);
        });

        domSelectProducto.disabled = false;
        datos.productos.forEach(prod => {
            const opcion = document.createElement('option');
            opcion.value = prod.id;
            opcion.textContent = prod.nombre;
            domSelectProducto.appendChild(opcion);
        });
    }
});


botonesSiguiente.forEach(boton => {
    boton.addEventListener('click', function() {
        const destinoId = this.getAttribute('data-destino');
        const pasoActual = this.closest('.tarjeta-control');

        if (pasoActual.id === 'paso-1') {
            if (!domSelectSector.value || !domSelectEntorno.value) {
                alert("Por favor seleccione un sector y un tipo de entorno específico válido antes de continuar.");
                return;
            }
        }
        if (pasoActual.id === 'paso-2') {
            const areasSeleccionadas = document.querySelectorAll('#contenedor-seleccion-multiple-areas input[type="checkbox"]:checked');
            if (areasSeleccionadas.length === 0) {
                alert("Debe seleccionar al menos un área de trabajo operativa para avanzar.");
                return;
            }
        }
        if (pasoActual.id === 'paso-3') {
            if (!domSelectProducto.value) {
                alert("Por favor identifique el vector químico convencional a sustituir.");
                return;
            }
        }

        pasoActual.classList.remove('paso-activo');
        pasoActual.classList.add('paso-oculto');
        
        const elementoDestino = document.getElementById(destinoId);
        elementoDestino.classList.remove('paso-oculto');
        
        setTimeout(() => {
            elementoDestino.classList.add('paso-activo');
        }, 10);
    });
});


domFormulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const sectorVal = domSelectSector.options[domSelectSector.selectedIndex].text;
    const entornoVal = domSelectEntorno.options[domSelectEntorno.selectedIndex].text;
    const productoVal = domSelectProducto.value;
    const productoTxt = domSelectProducto.options[domSelectProducto.selectedIndex].text;
    
    const checkboxesAreas = document.querySelectorAll('#contenedor-seleccion-multiple-areas input[type="checkbox"]:checked');
    let nombresAreas = [];
    checkboxesAreas.forEach(cb => nombresAreas.push(cb.dataset.nombre));

    const valTrafico = document.getElementById('indice-trafico').value;
    const valSustrato = document.getElementById('estado-sustrato').value;
    const valFrecuencia = document.getElementById('frecuencia-limpieza').value;

    let multiplicadorMasa = 1.0;
    let factorSeveridad = 0;

    if (valTrafico === 'intenso') { factorSeveridad += 2; multiplicadorMasa *= 1.5; }
    else if (valTrafico === 'moderado') { factorSeveridad += 1; multiplicadorMasa *= 1.2; }
    
    if (valSustrato === 'incrustacion') { factorSeveridad += 3; multiplicadorMasa *= 2.0; }
    else if (valSustrato === 'organico') { factorSeveridad += 2; multiplicadorMasa *= 1.4; }
    
    if (valFrecuencia === 'mensual') { factorSeveridad += 2; multiplicadorMasa *= 1.8; }
    else if (valFrecuencia === 'semanal') { factorSeveridad += 1; multiplicadorMasa *= 1.2; }

    const datosQuimico = baseDatosQuimicos[productoVal];
    if (!datosQuimico) return;
    
    document.getElementById('metadatos-reporte-salida').innerHTML = `
        <p><strong>Ubicación:</strong> ${sectorVal} > ${entornoVal}</p>
        <p><strong>Áreas:</strong> ${nombresAreas.join(', ')}</p>
        <p><strong>Reemplazando:</strong> ${productoTxt}</p>
        <p><strong>Condiciones:</strong> Tráfico ${valTrafico} / Estado: ${valSustrato} / Ciclo: ${valFrecuencia}</p>
    `;

    document.getElementById('nodo-valor-salud').textContent = datosQuimico.nfpa.salud;
    document.getElementById('nodo-valor-inflamabilidad').textContent = datosQuimico.nfpa.inflamabilidad;
    document.getElementById('nodo-valor-reactividad').textContent = datosQuimico.nfpa.reactividad;
    document.getElementById('nodo-valor-especial').textContent = datosQuimico.nfpa.especial || 'N/A';

    let advertenciaHTML = `<strong>Análisis de Riesgo Técnico:</strong> ${datosQuimico.riesgoBase}`;
    if (factorSeveridad < 3 && datosQuimico.nfpa.salud >= 2 && valFrecuencia === 'diaria') {
        advertenciaHTML += `<br><br><span style="color: #ff6b6b; font-weight:bold;">⚠️ ALERTA DE CONFIGURACIÓN AGUDA:</span> Se ha detectado un ciclo operativo diario ("limpiar sobre limpio") usando un químico severidad ${datosQuimico.nfpa.salud}. Esto fomenta una acumulación ambiental de residuos innecesaria y sobreexposición del personal técnico.`;
    }
    document.getElementById('contenedor-advertencia-contextual').innerHTML = advertenciaHTML;

    const cuerpoTabla = document.getElementById('cuerpo-tabla-ingredientes');
    cuerpoTabla.innerHTML = '';
    let masaBaseTotal = 1000 * multiplicadorMasa; 
    
    datosQuimico.alternativa.ingredientes.forEach(ing => {
        const masaCalculada = (masaBaseTotal * (ing.prop / 100)).toFixed(1);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${ing.ing}</strong><br><small class="texto-secundario"><i>${ing.sci}</i></small></td>
            <td style="font-family: monospace;">${ing.form}</td>
            <td>${ing.prop}%</td>
            <td><span class="texto-resalte-verde">${masaCalculada} g</span></td>
        `;
        cuerpoTabla.appendChild(tr);
    });

    document.getElementById('contenedor-reaccion-quimica').innerHTML = `<p>${datosQuimico.alternativa.mecanismo}</p>`;
    document.getElementById('contenedor-ventaja-ambiental').innerHTML = `<p>${datosQuimico.alternativa.ventaja}</p>`;

    domPanelConfig.style.display = 'none';
    domPanelReporte.classList.remove('visualizacion-oculta');
});


domBotonReiniciar.addEventListener('click', function() {
    domFormulario.reset();
    
    domSelectEntorno.innerHTML = '<option value="" disabled selected>-- Primero elija un sector global --</option>';
    domSelectEntorno.disabled = true;
    domContenedorAreas.innerHTML = '<p class="estado-vacio">Seleccione un tipo de negocio para desplegar las áreas.</p>';
    domSelectProducto.innerHTML = '<option value="" disabled selected>-- Primero configure el entorno y áreas --</option>';
    domSelectProducto.disabled = true;
    
    document.querySelectorAll('.tarjeta-control').forEach(paso => {
        paso.classList.remove('paso-activo');
        paso.classList.add('paso-oculto');
    });
    const primerPaso = document.getElementById('paso-1');
    primerPaso.classList.remove('paso-oculto');
    primerPaso.classList.add('paso-activo');

    domPanelReporte.classList.add('visualizacion-oculta');
    domPanelConfig.style.display = 'flex';
});


const btnToggleTema = document.getElementById('btn-toggle-tema');
const iconoLuna = btnToggleTema.querySelector('.icono-luna');
const iconoSol = btnToggleTema.querySelector('.icono-sol');

btnToggleTema.addEventListener('click', () => {
  
    if (document.body.classList.contains('tema-claro')) {
        document.body.classList.remove('tema-claro');
        document.body.classList.add('tema-oscuro');
        
        iconoLuna.style.display = 'none';
        iconoSol.style.display = 'inline';
    } else {
        document.body.classList.remove('tema-oscuro');
        document.body.classList.add('tema-claro');
        
       
        iconoSol.style.display = 'none';
        iconoLuna.style.display = 'inline';
    }
});
