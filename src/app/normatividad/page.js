"use client";
import { motion } from "framer-motion";
import Head from 'next/head';
import Navbar from '@/component/navbar';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import {
    ChevronRight, Shield, FileText, User, Lock, Database,
    Phone, AlertTriangle, CheckCircle, ExternalLink, List
} from "lucide-react";
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';

export default function InternetSano() {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Internet Sano | PSI</title>
                <meta name="description" content="Política de protección contra la pornografía infantil de PSI - Proveedor de Telecomunicaciones S.A.S." />
                <link rel="icon" href="/logo.png" />
            </Head>

            <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="sticky top-0 z-50">
                <Navbar />
            </motion.div>

            {/* Encabezado */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative py-16 bg-gradient-to-r from-[#0e6493] to-[#073a57] text-white"
            >
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
                        <Shield size={40} className="text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Internet Sano</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Política de protección contra la pornografía infantil
                    </p>
                </div>
            </motion.section>

            {/* Contenido principal */}
            <div className="relative py-16 bg-gradient-to-b from-white to-blue-50">
                {/* Fondo sutil */}
                <div className="absolute inset-0">
                    <div className="bg-gradient-to-b from-white to-blue-50 w-full h-full opacity-80"></div>
                </div>
                <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/3.svg')] before:bg-cover before:bg-center before:opacity-20"></div>

                <div className="relative container mx-auto px-6 md:px-8">
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-10">
                        {/* Introducción */}
                        <div className="mb-10">
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center mb-8"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-[#0e6493] mr-5">
                                    <FileText size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#0e6493]">Introducción</h2>
                                    <div className="w-20 h-1 bg-[#e31e25] mt-2"></div>
                                </div>
                            </motion.div>

                            <p className="text-gray-700 mb-6">
                                <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong>, consciente de los esfuerzos encaminados por el Ministerio de Tecnologías
                                de la Información y las Comunicaciones de la República de Colombia, respecto de la responsabilidad que le concierne a las empresas
                                en torno al tema de la explotación infantil en Internet, genera políticas institucionales en donde involucra a sus empleados,
                                desarrollando además mensajes de: prevención, denuncia, e informativos institucionales.
                            </p>

                            <p className="text-gray-700">
                                En cumplimiento con la Ley 679 de 2001, con el Decreto 1524 de 2004, y Decreto Único Reglamentario del Sector de Tecnologías de la
                                Información 1078 de 2015, <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong>, contempla en su Manual de Políticas de Habeas Data,
                                el manejo y aprovechamiento de redes globales de información y la protección contra la pornografía infantil. Su objetivo principal es
                                prevenir la divulgación de material pornográfico infantil a través de nuestras redes y equipos de cómputo bajo la administración directa
                                de nuestro personal, con el fin de prevenir el acceso a cualquier tipo de material pornográfico infantil.
                            </p>
                        </div>

                        {/* Canales de denuncia */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-10"
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-[#0e6493] mr-5">
                                    <AlertTriangle size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#0e6493]">Canales de Denuncia</h2>
                                    <div className="w-20 h-1 bg-[#e31e25] mt-2"></div>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-6">
                                <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong> pone a disposición la información y canales para la denuncia:
                            </p>

                            <div className="space-y-6">
                                {/* Ministerio de Comunicaciones */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">Ministerio De Comunicaciones</h3>
                                    <div className="space-y-3">
                                        <p className="text-gray-700">
                                            <strong>Pacto de Cero Tolerancia con la Pornografía Infantil en Internet</strong>
                                        </p>
                                        <div className="flex items-center">
                                            <ExternalLink size={18} className="text-[#0e6493] mr-2" />
                                            <a href="http://www.mintic.gov.co/portal/604/w3-article-14513.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#0e6493] hover:underline">
                                                http://www.mintic.gov.co/portal/604/w3-article-14513.html
                                            </a>
                                        </div>
                                        <p className="text-gray-700">
                                            "Cero tolerancia con la pornografía infantil en Internet": Ministro TIC, encontrará diferentes enlaces que le permitirán hacer su denuncia.
                                        </p>
                                        <div className="flex items-center">
                                            <ExternalLink size={18} className="text-[#0e6493] mr-2" />
                                            <a href="http://www.mintic.gov.co/portal/604/w3-article-13040.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#0e6493] hover:underline">
                                                http://www.mintic.gov.co/portal/604/w3-article-13040.html
                                            </a>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone size={18} className="text-[#0e6493] mr-2" />
                                            <span className="text-gray-700">01-800-0914014 / 01-800-0912667</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CONTRA LA PORNOGRAFÍA INFANTIL */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">CONTRA LA PORNOGRAFÍA INFANTIL</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Phone size={18} className="text-[#0e6493] mr-2" />
                                            <span className="text-gray-700">01 800 0912667</span>
                                        </div>
                                        <div className="flex items-center">
                                            <ExternalLink size={18} className="text-[#0e6493] mr-2" />
                                            <a href="http://www.dignidadinfantil.gov.co"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#0e6493] hover:underline">
                                                http://www.dignidadinfantil.gov.co
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Fiscalía General De La Nación */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">Fiscalía General De La Nación</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Phone size={18} className="text-[#0e6493] mr-2" />
                                            <span className="text-gray-700">01 800 0912280</span>
                                        </div>
                                        <div className="flex items-center">
                                            <ExternalLink size={18} className="text-[#0e6493] mr-2" />
                                            <a href="http://www.fiscalia.gov.co/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#0e6493] hover:underline">
                                                http://www.fiscalia.gov.co/
                                            </a>
                                        </div>
                                        <div className="flex items-center">
                                            <Database size={18} className="text-[#0e6493] mr-2" />
                                            <span className="text-gray-700">Email: contacto@fiscalia.gov.co</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Dirección Central De Policía Judicial – DIJIN */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">Dirección Central De Policía Judicial – DIJIN</h3>
                                    <div className="space-y-3">
                                        <p className="text-gray-700">Grupo Investigativo Delitos Informáticos</p>
                                        <p className="text-gray-700">Carrera 77A # 45-61 Barrio Modelia</p>
                                        <div className="flex items-center">
                                            <Phone size={18} className="text-[#0e6493] mr-2" />
                                            <span className="text-gray-700">PBX: 426 6900 Ext. 6301-6302</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone size={18} className="text-[#0e6493] mr-2" />
                                            <span className="text-gray-700">Directo: 4266300</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Database size={18} className="text-[#0e6493] mr-2" />
                                            <span className="text-gray-700">Email: adelinfo@dijin.policia.gov.co</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Instituto Colombiano De Bienestar Familiar */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">Instituto Colombiano De Bienestar Familiar</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Phone size={18} className="text-[#0e6493] mr-2" />
                                            <span className="text-gray-700">01 8000 918080 o (1)6605520, (1)6605530, (1)6605540</span>
                                        </div>
                                        <p className="text-gray-700">de 7:00 a.m. a 9:00 p.m. de lunes a domingo</p>
                                        <div className="flex items-center">
                                            <ExternalLink size={18} className="text-[#0e6493] mr-2" />
                                            <a href="http://wwww.icbf.gov.co"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#0e6493] hover:underline">
                                                http://wwww.icbf.gov.co
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Normatividad */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-10"
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-[#0e6493] mr-5">
                                    <Lock size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#0e6493]">Normatividad</h2>
                                    <div className="w-20 h-1 bg-[#e31e25] mt-2"></div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Ley 679 de 2001 */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">LEY 679 DE 2001 (agosto 3)</h3>
                                    <p className="text-gray-700 mb-4">
                                        Diario Oficial No. 44.509 del 4 de agosto de 2001 por medio de la cual se expide un estatuto para prevenir y contrarrestar
                                        la explotación, la pornografía y el turismo sexual con menores, en desarrollo del artículo 44 de la Constitución.
                                    </p>
                                    <a href="/ley-679-2001.pdf"
                                        download
                                        className="inline-flex items-center text-[#0e6493] hover:underline">
                                        <FileText size={18} className="mr-2" />
                                        Descargue aquí ley 679 de 2001
                                    </a>
                                </div>

                                {/* DECRETO 067 DE 2003 */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">DECRETO NÚMERO 067 DE 2003 (enero 15)</h3>
                                    <p className="text-gray-700 mb-4">
                                        Diario Oficial 45. 066 17-01-2003 Ministerio de Comunicaciones que el 24 de julio de 2002 se expidió el Decreto 1524 de 2002,
                                        el cual tiene por objeto reglamentar el artículo 5° de la Ley 679 de 2001, con el fin de establecer las medidas técnicas y
                                        administrativas destinadas a prevenir el acceso de menores de edad a cualquier modalidad de información pornográfica contenida
                                        en Internet o en las distintas clases de redes informáticas a las cuales se tenga acceso mediante redes globales de información.
                                    </p>
                                    <a href="/decreto-067-2003.pdf"
                                        download
                                        className="inline-flex items-center text-[#0e6493] hover:underline">
                                        <FileText size={18} className="mr-2" />
                                        Descargue aquí decreto número 067 de 2003 (enero 15)
                                    </a>
                                </div>

                                {/* DECRETO 1524 DE 2002 */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">DECRETO NÚMERO 1524 DE 2002 (julio 24)</h3>
                                    <p className="text-gray-700 mb-4">
                                        Publicado el 31 de julio de 2002 MINISTERIO DE COMUNICACIONES por el cual reglamenta el artículo 5° de la Ley 679 de 2001,
                                        que de conformidad con lo dispuesto por el artículo 44 de la Constitución Política, los niños serán protegidos contra toda forma
                                        de abandono, violencia física o moral, secuestro, venta, abuso sexual, explotación laboral o económica y trabajos riesgosos.
                                    </p>
                                    <a href="/decreto-1524-2002.pdf"
                                        download
                                        className="inline-flex items-center text-[#0e6493] hover:underline">
                                        <FileText size={18} className="mr-2" />
                                        Descargue aquí decreto número 1524 de 2002
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Recomendaciones de Seguridad */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-[#0e6493] mr-5">
                                    <CheckCircle size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#0e6493]">Recomendaciones de Seguridad</h2>
                                    <div className="w-20 h-1 bg-[#e31e25] mt-2"></div>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-6">
                                El control parental es una característica especialmente útil para padres y responsables educativos que desean impedir que niños o adolescentes
                                puedan acceder a páginas Web inapropiadas. Estos son algunos de estos mecanismos de filtrado:
                            </p>

                            <div className="space-y-6">
                                {/* Software K9 Web Protection */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">Software K9 Web Protection</h3>
                                    <p className="text-gray-700 mb-4">
                                        Es un software gratuito de control parental para instalar en la computadora y proporciona herramientas para que los padres controlen
                                        el contenido no deseado y brinden un Internet seguro para su familia e hijos.
                                    </p>
                                    <a href="/k9-instalacion.pdf"
                                        download
                                        className="inline-flex items-center text-[#0e6493] hover:underline">
                                        <FileText size={18} className="mr-2" />
                                        Ver Instalación
                                    </a>
                                </div>

                                {/* Software Qustodio */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">Software Qustodio</h3>
                                    <p className="text-gray-700 mb-4">
                                        Es un software que se instala en todos los dispositivo de acceso como móviles, tabletas y ordenadores. Los padres pueden usar la aplicación
                                        de control parental de Qustodio o ingresar a la página web para ver la actividad de tus hijos en tiempo real.
                                    </p>
                                    <a href="/qustodio-instalacion.pdf"
                                        download
                                        className="inline-flex items-center text-[#0e6493] hover:underline">
                                        <FileText size={18} className="mr-2" />
                                        Ver Instalación
                                    </a>
                                </div>

                                {/* Control Parental con Windows 7 */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-[#0e6493] mb-3">Control Parental con Windows 7</h3>
                                    <p className="text-gray-700 mb-4">
                                        Instalando en su ordenador Windows Live Protección Infantil se puede controlar el tiempo de uso del computador, los programas que se podrán
                                        o no utilizar, limitar los tipos de juegos que serán permitidos, bloquear sitios web, entre otros.
                                    </p>
                                    <a href="/windows7-control-parental.pdf"
                                        download
                                        className="inline-flex items-center text-[#0e6493] hover:underline">
                                        <FileText size={18} className="mr-2" />
                                        Ver Instalación
                                    </a>
                                </div>
                            </div>

                            {/* Configuración de navegadores */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-[#0e6493] mb-6">Configuración de Navegadores</h3>

                                <div className="space-y-8">
                                    {/* Internet Explorer */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0e6493] mb-4 flex items-center">
                                            <List size={20} className="mr-2" />
                                            INTERNET EXPLORER
                                        </h4>
                                        <ol className="list-decimal list-outside ml-6 text-gray-700 space-y-2">
                                            <li>DA CLIC EN HERRAMIENTAS (ICONO EN LA ESQUINA SUPERIOR DERECHA) U OPRIMIR LA COMBINACIÓN DE TECLAS ALT+X.</li>
                                            <li>DESPLAZARSE HASTA OPCIONES DE INTERNET Y LUEGO A LA PESTAÑA SEGURIDAD.</li>
                                            <li>ELIGE LA ZONA DE SEGURIDAD SITIOS RESTRINGIDOS Y DAR CLIC EN SITIOS.</li>
                                            <li>INGRESAR EL ENLACE O URL DE LA PÁGINA QUE DESEA BLOQUEAR Y DAR CLIC EN AGREGAR.</li>
                                            <li>PARA MAYOR PROTECCIÓN ACTIVE LA CASILLA HABILITAR EL MODO PROTEGIDO.</li>
                                            <li>FINALMENTE CLIC EN APLICAR Y LUEGO ACEPTAR.</li>
                                        </ol>
                                    </div>

                                    {/* Firefox */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0e6493] mb-4 flex items-center">
                                            <List size={20} className="mr-2" />
                                            FIREFOX
                                        </h4>
                                        <ol className="list-decimal list-outside ml-6 text-gray-700 space-y-2">
                                            <li>INSTALE EL COMPLEMENTO PARA FIREFOX PROCON LATTE CONTENT FILTER QUE SE ENCUENTRA EN ESTE ENLACE Y REINICIE EL NAVEGADOR.</li>
                                            <li>DA CLIC EN EL MENÚ ☰ (ESQUINA SUPERIOR DERECHA) Y SELECCIONA COMPLEMENTOS.</li>
                                            <li>EN EXTENSIONES VAYA A LA SECCIÓN PROCON LATTE PARA VERIFICAR QUE ESTÉ INSTALADO/ACTIVO Y LUEGO EN MÁS.</li>
                                            <li>AL FINAL DE LA PÁGINA DAR CLIC SOBRE PREFERENCIAS DE PROCON LATTE Y ESTABLECER CONTRASEÑA.</li>
                                            <li>EN EL MENÚ IZQUIERDO SE ENCUENTRA LA OPCIÓN LISTA NEGRA DONDE USTED PODRÁ DENEGAR EL ACCESO A LOS SITIOS WEB CUYA DIRECCIÓN O CONTENIDO COINCIDA CON LAS PALABRAS QUE USTED DIGITE.</li>
                                            <li>ADEMÁS INCLUYE LA OPCIÓN LISTA DE PALABROTAS QUE LE PERMITE CENSURAR CIERTAS PALABRAS EN LOS SITIOS WEB.</li>
                                        </ol>
                                    </div>

                                    {/* Chrome */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0e6493] mb-4 flex items-center">
                                            <List size={20} className="mr-2" />
                                            CHROME
                                        </h4>
                                        <ol className="list-decimal list-outside ml-6 text-gray-700 space-y-2">
                                            <li>DA CLIC EN PERSONALIZA Y CONTROLA GOOGLE CHROME (ICONO EN LA ESQUINA SUPERIOR DERECHA).</li>
                                            <li>DESPLAZARSE HASTA CONFIGURACIÓN. IR AL FINAL DE LA PÁGINA Y DA CLIC SOBRE CONFIGURACIÓN AVANZADA.</li>
                                            <li>SELECCIONE PRIVACIDAD Y SEGURIDAD Y ELEGIR CONFIGURACIÓN DE CONTENIDO.</li>
                                            <li>INGRESA EN IMÁGENES, EN LA SECCIÓN BLOQUEAR CLIC EN AÑADIR.</li>
                                            <li>EN LA PANTALLA QUE APARECE INGRESAR EL ENLACE O URL DE LA PÁGINA QUE DESEA BLOQUEAR.</li>
                                            <li>FINALMENTE CLIC EN AÑADIR.</li>
                                            <li>REALIZA ESTE MISMO PROCESO INGRESANDO EN CONFIGURACIÓN DE CONTENIDO → JAVASCRIPT.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="border-t border-gray-200 pt-6 mt-10">
                            <p className="text-gray-500 text-sm text-center">
                                INTERNET SANO – PSI Telecomunicaciones de Colombia ltda.
                            </p>
                            <p className="text-gray-500 text-sm text-center">
                                Última actualización: Marzo 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón de descarga */}
            <div className="bg-white py-12 text-center">
                <a href="/internet-sano-politica.pdf" download className="inline-flex items-center px-6 py-3 bg-[#0e6493] text-white font-medium rounded-md hover:bg-[#073a57] transition-colors">
                    <FileText size={20} className="mr-2" />
                    Descargar política completa
                </a>
            </div>
             <footer className="bg-gray-800 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                          {/* Logo */}
                          <div className="mb-2">
                            <img src="/psi.png" alt="PSI Fibra" className="w-32 md:w-40" />
                          </div>
                        </div>
            
            
                        <div>
                          <h4 className="text-lg font-bold mb-4">Servicios</h4>
                          <ul className="space-y-2">
                            <li><a href="/fibra" className="text-gray-300 hover:text-white">Internet Fibra Óptica</a></li>
                            <li><a href="/television" className="text-gray-300 hover:text-white">Televisión HD</a></li>
                            <li><a href="/fibra" className="text-gray-300 hover:text-white">Paquetes</a></li>
                            <li><a href="/empresa" className="text-gray-300 hover:text-white">Empresas</a></li>
                          </ul>
                        </div>
            
                        <div>
                          <h4 className="text-lg font-bold mb-4">Soporte</h4>
                          <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Centro de Ayuda</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contacto</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Reporte de Problemas</a></li>
                          </ul>
                        </div>
            
                        <div>
                          <h4 className="text-lg font-bold mb-4">Empresa</h4>
                          <ul className="space-y-2">
                            <li><a href="/empresa" className="text-gray-300 hover:text-white">Sobre PSI</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Normatividad</a></li>
                            <li><a href="/tratamiento" className="text-gray-300 hover:text-white">Tratamiendo de datos</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
                          </ul>
                        </div>
                      </div>
            
                      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
                        <p>&copy; {new Date().getFullYear()} PSI Fibra. Todos los derechos reservados.</p>
                      </div>
                    </div>
                  </footer>
            
                  <FloatingWhatsApp
                        phoneNumber="+573184550936"
                        accountName="PSI"
                        avatar="/logo.png"
                        darkMode={true}
                        statusMessage="Normalmente responde en 1 hora"
                        chatMessage="¡Hola!, ¿en qué te podemos ayudar?"
                        placeholder="Escribe un mensaje"
                        notification={true}
                        chatboxHeight={340}
                      />
                  <FloatingSocial />
                  <Boton />
        </div>
    );
}

