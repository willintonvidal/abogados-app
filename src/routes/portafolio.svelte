<svelte:head>
    <title>Portafolio</title>
</svelte:head>
<style>
    img {
        width: 100%;
        border-radius: 20px;
    }
    h1{
        font-weight: bold;
    }
    li {
		list-style: none;
	}

	li::before {
		content:"●";
		color:#E6BA64;
		margin-right: 10px;
	}
</style>

<div>
    <br />
    <!-- <h1 class="text-center" >Nuestro portafolio de servicios</h1> -->
    <br />
    <div class="Entrada row">
        <div class="quienesomos col-md-4 bg-gradient-secondary">
            <h4 class="text-center">Quienes somos?</h4>
            <p>Profesionales asociados eficaces, comprometidos y siempre prestos a brindar un mejor servicio, innovando cada día con su equipo de trabajo para satisfacer la necesidad de cada cliente.
            </p>
        </div>
        <div class="Mision col-md-4">
            <h4 class="text-center">Misión</h4>
            <p>Prestar una ayuda eficaz, tendiente a innovar según lo requiera cada cliente, que nuestra firma sea sinónimo de confianza, calidad y compromiso.</p>
        </div>
        <div class="vision col-md-4">
            <h4 class="text-center">Visión</h4>
            <p>Nuestra inspiración la calidad y el compromiso con el Cauca y que podamos surgir como una de las firmas de abogados más importantes del país.</p>
        </div>
    </div>

    <h1 class="text-center">Nuestros servicios</h1>
            <div class="row align-items-center">
                <div class="col-md-6 align-middle">
                    <img src="fotos/1.jpeg" alt="">
                </div>
                <div class="col-md-6 align-middle">
                    <h4>Derecho Penal</h4>
                    <p>SOLUTION ABOGADOS DEFENSORES cuenta con el mejor equipo de trabajo, para el seguimiento de su proceso penal, independiente de la etapa en que se encuentre. El acompañamiento en todas la audiencias está enfatizando en el marco de la justicia premial, con nuestro equipo quienes tienen amplio conocimiento y destreza profesional para procurar la terminación anticipada del proceso, acompañando los procesos de negociación jurídica con el ente acusador por vía de preacuerdo, principio de oportunidad, argumentación y sustentación de la solicitud de preclusión o cesación de la acción penal de manera definitiva.  Nuestra cobertura se encuentra mayormente en el departamento del Cauca, centrado en el norte y el Valle Del Cauca.
                    </p>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-md-12">
                    <h5 class="text-center">Procesos contencioso penales</h5>
                </div>
                <div class="col-md-12">
                    <h5 class="text-center">Asistencia en audiencias preliminares</h5>
                </div>
            </div>
            <br />
            <!-- <div class="row">
                <div class="col-md-6">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Legalización de captura</a> 
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Formulación de la imputación</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Imposición medida de aseguramiento</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de internamiento preventivo (adolescentes)</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Sustitución medida de aseguramiento</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Revocatoria medida de aseguramiento</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de obtención de muestras que involucren al imputado</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de solicitud de medidas cautelares y suspensión del poder dispositivo</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de suspensión de registros obtenidos de manera fraudulenta</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de control posterior de registro y allanamiento</a> 
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de declaración de contumacia</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de declaración de persona ausente</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de solicitud de libertad por vencimiento de términos</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Solicitud de prueba anticipada</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de principio de oportunidad</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de legalización de la incautación con fines de comiso</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de medidas cautelares</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de prórroga de la medida de aseguramiento privativa de la libertad</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Audiencia de sustitución de la medida de aseguramiento privativa de la libertad</a>
                    </div>
                </div>
                
            </div> -->

            <div class="row">
                <div class="col-md-6">
                    <ul>
                        <li>Legalización de captura</li>
                        <li>Formulación de la imputación</li>
                        <li>Imposición medida de aseguramiento</li>
                        <li>Audiencia de internamiento preventivo (adolescentes)</li>
                        <li>Sustitución medida de aseguramiento</li>
                        <li>Revocatoria medida de aseguramiento</li>
                        <li>Audiencia de obtención de muestras que involucren al imputado</li>
                        <li>Audiencia de solicitud de medidas cautelares y suspensión del poder dispositivo</li>
                        <li>Audiencia de suspensión de registros obtenidos de manera fraudulenta</li>
                        <li>Audiencia de control posterior de registro y allanamiento</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul>
                        <li>Audiencia de declaración de contumacia</li>
                        <li>Audiencia de declaración de persona ausente</li>
                        <li>Audiencia de solicitud de libertad por vencimiento de términos</li>
                        <li>Solicitud de prueba anticipada</li>
                        <li>Audiencia de principio de oportunidad</li>
                        <li>Audiencia de legalización de la incautación con fines de comiso</li>
                        <li>Audiencia de medidas cautelares</li>
                        <li>Audiencia de prórroga de la medida de aseguramiento privativa de la libertad</li>
                        <li>Audiencia de sustitución de la medida de aseguramiento privativa de la libertad</li>
                    </ul>
                </div>
            </div>
            
                    <br>
                    <br>
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center">RECUPERACIÓN DE BIENES MUEBLES E INMUEBLES AFECTADOS EN UN PROCESO PENAL OBJETO DE INCAUTACION O OCUPACION.</h4>
                    </div>
                    <div class="col-md-6">
                        <h5>Bienes muebles: Recuperación de vehículos de carga (servicio público o servicio particular), carros, embarcaciones, motos.</h5>
                        <h5>Bienes inmuebles: casas, apartamentos, fincas, lotes, propiedades de grandes extensiones.</h5>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Audiencia de solicitud de entrega del vehículo o elementos de libre comercio.</li>
                            <li>Audiencia de solicitud de entrega definitiva del vehículo o elementos de libre comercio</li>
                            <li>Audiencia de devolución de bienes</li>                
                        </ul>
                    </div>
                </div>
                <br />
                <br>
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <h5 class="text-center">Asistencia a audiencias de conocimiento</h5>
                    </div>
                    <div class="col-md-6 align-middle">
                        <img src="fotos/3.jpeg" alt="">
                    </div>
                    <div class="col-md-6">
                        <ul class="text-left">
                            <li>Audiencia de formulación de acusación</li>
                            <li>Audiencia de verificación de preacuerdo</li>
                            <li>Definición de competencia</li>
                            <li>Impedimentos y recusaciones</li>
                            <li>Nulidades</li>
                            <li>Conflicto entre jurisdicciones</li>
                            <li>Audiencia preparatoria</li>
                            <li>Sanción por encubrimiento al deber de descubrimiento</li>
                            <li>Estipulaciones probatorias</li>
                            <li>Solicitud de decreto de pruebas comunes</li>
                            <li>Solicitud de exclusión probatoria</li>
                            <li>Audiencia de Juicio oral</li>
                            <li>Práctica de pruebas testimoniales</li>
                            <li>Impugnación de credibilidad de testigos</li>
                            <li>Prueba pericial</li>
                            <li>Prueba documental</li>
                            <li>Prueba de inspección judicial</li>
                            <li>Prueba de refutación</li>
                            <li>Prueba sobreviniente</li>
                            <li>Oposición</li>
                            <li>Congruencia</li>
                            <li>Sentido del fallo</li>
                            <li>Apelación</li>
                        </ul>
                    </div>
                </div>                
                <br />

                <div class="row align-items-center">
                    <div class="col-md-12">
                        <h5 class="text-center">Otras diligencias</h5>
                    </div>
                    <div class="col-md-6 align-center">
                        <ul>
                            <li>Reconocimiento de las victimas</li>
                            <li>Individualización de la pena</li>
                            <li>Procedimientos abreviados</li>
                            <li>Solicitud de preclusión</li>
                            <li>Allanamiento a cargos</li>
                            <li>Incidentes de reparación integral</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <img src="fotos/8.jpeg" alt="">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="text-center">Procedimientos ante juez de ejecución de penas y medidas de seguridad</h5>
                    </div>
                    <div class="col-md-12">
                        <h5 class="text-center">Procesos de responsabilidad penal en adolescentes</h5>
                    </div>
                </div>
                <br />
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center">SOLUTION ABOGADOS DEFENSORES también cuenta con conocimiento y habilidades para asesorar correctamente a sus clientes en las demás áreas del derecho, gracias a su completo equipo de trabajo, presto a brindar el mejor servicio.</h4>
                    </div>
                </div>
                <br>
                <br>
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <h4 class="text-center">DERECHO PROCESAL CIVIL</h4>
                    </div>
                    <div class="col-md-6 align-middle">
                        <h5 class="text-center">Procesos declarativos</h5>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Procesos verbales</li>
                            <li>Procesos Verbal sumario </li>
                            <li>Declaración de pertenencia</li>
                            <li>Deslinde y amojonamiento</li>
                            <li>Solicitud de prescripción </li>
                            <li>Resoluciones de compra venta</li>
                            <li>Responsabilidad civil contractual y extracontractual</li>
                            <li>Restitución de inmueble arrendado</li>
                            <li>Negligencia médica</li>
                        </ul>
                    </div>                    
                </div>
            
                <br />
                <div class="row align-items-center">
                    <div class="col-md-6 align-middle">
                        <h5 class="text-center">Procesos especiales </h5>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Procesos divisorios</li>
                            <li>Procesos monitorios</li>
                            <li>Expropiación</li>
                        </ul>    
                    </div>
                </div>
                
                
                <br />
                <div class="row align-items-center">
                    <div class="col-md-6 align-middle">
                        <h5 class="text-center">Ejecutivos</h5>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Ejecutivo singular</li>
                            <li>Ejecutivo hipotecario</li>
                            <li>Ejecutivo mixto</li>
                            <li>Cobro de cartera</li>
                        </ul>
                    </div>
                </div>
                    
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="text-center">Obligaciones de dar hacer y no Hacer</h5>
                    </div>
                    <div class="col-md-12">
                        <h5 class="text-center">Procesos liquidatarios</h5>
                    </div>
                </div>
                <br />

                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center">DERECHO DE FAMILIA</h4>
                    </div>
                    <div class="col-md-6">
                        <h5 class="text-center">Matrimonio civil </h5>
                    </div>
                    <div class="col-md-6">                        
                        <ul>
                            <li>Declaración de bienes</li>
                            <li>Capitulaciones</li>
                            <li>Divorcio</li>
                        </ul>        
                    </div>
                </div>

                <br />
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="text-center">Matrimonio católico</h5>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Capitulaciones</li>
                            <li>Cesación de efectos civiles</li>
                        </ul>
                    </div>
                </div>

                <br />
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="text-center">Procesos de alimentos </h5>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Fijación de cuota alimentaria</li>
                            <li>Modificación de cuota alimentaria</li>
                            <li>Levantamiento de cuota alimentaria</li>
                            <li>Ejecutivo de alimentos</li>
                        </ul>
                    </div>
                </div>
                
                <br />
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="text-center">Patria potestad</h5>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Impugnación de la Paternidad</li>
                            <li>Regulación de visitas</li>
                        </ul>
                    </div>
                </div>

                <br />
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="text-center">Sucesiones</h5>
                    </div>
                    <div class="col-md-12">
                        <h5 class="text-center">Adopciones</h5>
                    </div>
                </div>

                <br />

                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center">PROCESOS LABORALES</h4>
                    </div>
                </div>
                <br />

                <div class="row">
                    <div class="col-md-12">
                        <h5>Procesos ordinarios laborales</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Formalización contratos de trabajo</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Liquidación de obligaciones laborales</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Procesos de fuero sindical</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Asesoría de organizaciones sindicales</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Ejecutivos laborales</h5>
                    </div>
                </div>

                

                <div class="row">
                    <div class="col-md-6">
                        <h5>Pensión</h5>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>De vejez</li>
                            <li>Invalidez</li>
                            <li>Sobrevivientes</li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h5>Devolución de saldos</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Representación judicial en procesos laborales ordinarios, especiales, laboral administrativo.</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Reliquidación de pensiones</h5>
                    </div>
                </div>

                <br />
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center">DERECHO CONSTITUCIONAL</h4>
                    </div>
                    <!-- <div class="col-md-12">
                        <h5>Tutelas </h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Acciones de grupo</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Acción popular</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Recursos</h5>
                    </div> -->
                    <div class="col-md-12">
                        <ul>
                            <li>Tutelas</li>
                            <li>Acciones de grupo</li>
                            <li>Acción popular</li>
                            <li>Recursos</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center">DERECHO ADMINISTRATIVO</h4>
                    </div>
                    <!-- <div class="col-md-12">
                        <h5>Procesos de responsabilidad Del Estado en sus diferentes vertientes</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Asesoría en foto multas y multas de transito</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Acción de nulidad </h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Acción de grupo</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Acciones de nulidad y restablecimiento del derecho</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Acciones de reparación directa</h5>
                    </div>
                    <div class="col-md-12">
                        <h5>Trámites y reclamos ante entidades</h5>
                    </div> -->
                    <div class="col-md-12">
                        <ul>
                            <li>Procesos de responsabilidad Del Estado en sus diferentes vertientes</li>
                            <li>Asesoría en foto multas y multas de transito</li>
                            <li>Acción de nulidad</li>
                            <li>Acción de grupo</li>
                            <li>Acciones de nulidad y restablecimiento del derecho</li>
                            <li>Acciones de reparación directa</li>
                            <li>Trámites y reclamos ante entidades</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center">DERECHO COMERCIAL</h4>
                    </div>
                    <div class="col-md-12">
                        <ul>
                            <li>Constitución de sociedades anónimas colectivas de responsabilidad limitada comandita simple comandita por acciones II sociedad por acciones simplificada</li>
                        </ul>
                    </div>
                </div>
</div>