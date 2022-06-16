import {useParams} from 'react-router-dom';
import Modelo from './Modelo';

//********************** MARCA FIAT ********************************** */

//imports argo
import argo_img1 from '../../../../images/fiat/argoimg1.jpg'
import argo_img2 from '../../../../images/fiat/central-multimidia.avif'
import argo_img3 from '../../../../images/fiat/volante-multifuncional.avif'
import argo_img4 from '../../../../images/fiat/tracao.jpg'
import argoFT from './fichastecnicas/argoft.pdf'
import argoHeader from "../../../../images/fiat/argoheader.jpg"
//imports cronos
import cronos_img1 from '../../../../images/fiat/cronosimg1.jpg'
import cronos_img2 from '../../../../images/fiat/cajaauto.jpg'
import cronos_img3 from '../../../../images/fiat/tapizadocronos.jpg'
import cronos_img4 from '../../../../images/fiat/motorcronos.jpg'
import cronosFT from './fichastecnicas/FichaTecnica_Cronos2B.pdf'
import cronosHeader from '../../../../images/fiat/Cronos2.jpg'
//imports ducato
import ducato_img1 from '../../../../images/fiat/fiat-ducato-shadow-edition.jpg'
import ducato_img2 from '../../../../images/fiat/ducato2.jpg'
import ducato_img3 from '../../../../images/fiat/ducato3.jpg'
import ducato_img4 from '../../../../images/fiat/ducato4.jpg'
import ducatoHeader from '../../../../images/fiat/banner_fiat_ducato.jpg'
import ducatoFT from './fichastecnicas/ficha-ducato-cargo.pdf'
//imports fiorino
import fiorino_img1 from '../../../../images/fiat/fio.jpg'
import fiorino_img2 from '../../../../images/fiat/fiorino2.webp'
import fiorino_img3 from '../../../../images/fiat/imagem6-medium.jpeg'
import fiorino_img4 from '../../../../images/fiat/fiorino3.jpg'
import fiorinoHeader from '../../../../images/fiat/forinobanner.jpg'
import fiorinoFT from './fichastecnicas/my22-fiat-fiorino.pdf'
//imports mobi
import mobi_img1 from '../../../../images/fiat/mobi1.jpg'
import mobi_img2 from '../../../../images/fiat/mobi2.png'
import mobi_img3 from '../../../../images/fiat/movi3.png'
import mobi_img4 from '../../../../images/fiat/mobi4.png'
import mobiHeader from '../../../../images/fiat/mobibanner.jpg'
import mobiFT from './fichastecnicas/Ficha-Tecnica_Mobi_004.pdf'
//imports strada
import strada_img1 from '../../../../images/fiat/strada1.jpg'
import strada_img2 from '../../../../images/fiat/strada2.jpg'
import strada_img3 from '../../../../images/fiat/strada3.jpg'
import strada_img4 from '../../../../images/fiat/strada4.jpg'
import stradaHeader from '../../../../images/fiat/stradabanner.jpg'
import stradaFT from './fichastecnicas/Ficha-Tecnica-NuevaStrada-MY21.pdf'
//imports toro
import toro_img1 from '../../../../images/fiat/toro1.jpg'
import toro_img2 from '../../../../images/fiat/toro2.jpg'
import toro_img3 from '../../../../images/fiat/toro3.jpg'
import toro_img4 from '../../../../images/fiat/toro4.png'
import toroHeader from '../../../../images/fiat/torobanner.jpg'
import toroFT from './fichastecnicas/Ficha-Tecnica-Fiat-Toro-MY21.pdf'
//imports uno
import uno_img1 from '../../../../images/fiat/uno1.jpg'
import uno_img2 from '../../../../images/fiat/uno2.jpg'
import uno_img3 from '../../../../images/fiat/uno3.png'
import uno_img4 from '../../../../images/fiat/uno4.png'
import unoHeader from '../../../../images/fiat/unobanner.jpg'
import unoFT from './fichastecnicas/ficha-tecnica-fiat-uno-way-2018pdf.pdf'
//imports taos
import taos_img1 from '../../../../images/fiat/taos1.jpg'
import taos_img2 from '../../../../images/fiat/taos2.webp'
import taos_img3 from '../../../../images/fiat/taos3.jpg'
import taos_img4 from '../../../../images/fiat/taos4.jpg'
import taosHeader from '../../../../images/fiat/taosbanner.jpg'
import taosFT from './fichastecnicas/ficha-tecnica-vw-taospdf.pdf'

//********************** MARCA RENAULT ********************************** */

//imports sandero
import sandero_img1 from '../../../../images/fiat/sandero1.webp'
import sandero_img2 from '../../../../images/fiat/sandero2.webp'
import sandero_img3 from '../../../../images/fiat/sandero3.webp'
import sandero_img4 from '../../../../images/fiat/sandero4.webp'
import sanderoHeader from '../../../../images/fiat/sanderobanner.jpg'
import sanderoFT from './fichastecnicas/22bf9cb5b8.pdf'
//imports stepway
import stepway_img1 from '../../../../images/renault/stepway/stepway1.webp'
import stepway_img2 from '../../../../images/renault/stepway/stepway2.webp'
import stepway_img3 from '../../../../images/renault/stepway/stepway3.webp'
import stepway_img4 from '../../../../images/renault/stepway/stepway4.webp'
import stepwayHeader from '../../../../images/renault/stepway/stepway_header.webp'
import stepwayFT from '../../../../images/renault/stepway/stepway.pdf'
//imports logan
import logan_img1 from '../../../../images/renault/logan/logan1.webp'
import logan_img2 from '../../../../images/renault/logan/logan2.webp'
import logan_img3 from '../../../../images/renault/logan/logan3.webp'
import logan_img4 from '../../../../images/renault/logan/logan4.webp'
import loganHeader from '../../../../images/renault/logan/logan_header.webp'
import loganFT from '../../../../images/renault/logan/logan.pdf'
//imports kangoo
import kangoo_img1 from '../../../../images/renault/kangoo/kangoo1.webp'
import kangoo_img2 from '../../../../images/renault/kangoo/kangoo2.webp'
import kangoo_img3 from '../../../../images/renault/kangoo/kangoo3.webp'
import kangoo_img4 from '../../../../images/renault/kangoo/kangoo4.webp'
import kangooHeader from '../../../../images/renault/kangoo/kangoo_header.webp'
import kangooFT from '../../../../images/renault/kangoo/kangoo.pdf'
//imports captur
import captur_img1 from '../../../../images/renault/captur/captur1.webp'
import captur_img2 from '../../../../images/renault/captur/captur2.webp'
import captur_img3 from '../../../../images/renault/captur/captur3.webp'
import captur_img4 from '../../../../images/renault/captur/captur4.webp'
import capturHeader from '../../../../images/renault/captur/captur_header.webp'
import capturFT from '../../../../images/renault/captur/captur.pdf'
//imports koleos
import koleos_img1 from '../../../../images/renault/koleos/koleos1.webp'
import koleos_img2 from '../../../../images/renault/koleos/koleos2.webp'
import koleos_img3 from '../../../../images/renault/koleos/koleos3.webp'
import koleos_img4 from '../../../../images/renault/koleos/koleos4.webp'
import koleosHeader from '../../../../images/renault/koleos/koleos_header.webp'
import koleosFT from '../../../../images/renault/koleos/koleos.pdf'
//imports duster
import duster_img1 from '../../../../images/renault/duster/duster1.webp'
import duster_img2 from '../../../../images/renault/duster/duster2.webp'
import duster_img3 from '../../../../images/renault/duster/duster3.webp'
import duster_img4 from '../../../../images/renault/duster/duster4.webp'
import dusterHeader from '../../../../images/renault/duster/duster_header.webp'
import dusterFT from '../../../../images/renault/duster/duster.pdf'

//********************** MARCA XXX ********************************** */

//renegade
import renegadeFT from './fichastecnicas/FICHA-RENEGADE.pdf'
//compass
import CompassFT from './fichastecnicas/Jeep_Compass_Ficha_Tecnica_Naftera_MY22.pdf'
//c3
import c3FT from './fichastecnicas/Ficha-Tecnica-Citroen-C3.pdf'
//c4
import c4FT from './fichastecnicas/ficha-tecnica-nuevo-suv-c4-cactus.pdf'


const modelos = [
  {id: 'argo', title: "No manejás, sentís. #FiatArgo", title2: 'FIAT ARGO', description: "La esencia italiana y el estilo del FIAT Argo se combinan para lograr deportividad y atractivo en este modelo.", thumbnail: [{img: argo_img1, desc: ''}, {img: argo_img2, desc: 'CENTRAL MULTIMEDIA DE 7"'}, {img: argo_img3, desc: 'VOLANTE MULTIFUNCIONAL'}, {img: argo_img4, desc: 'CONTROL DE TRACCIÓN Y ESTABILIDAD'}], header: argoHeader, ficha: [argoFT, "ficha_tec_argo"],},
  {id: 'cronos', title: "El más elegido por los Argentinos. #FiatCronos", title2: 'FIAT CRONOS', description: "Líneas de figura, diseño italiano, aspecto deportivo y atrevido que llama la atención en todos lados.", thumbnail: [{img: cronos_img1, desc: ''}, {img: cronos_img2, desc: 'CAJA AUTOMÁTICA'}, {img: cronos_img3, desc: 'TAPIZADO EN CUERO'}, {img: cronos_img4, desc: 'MOTOR 1.8DE 130CV'}], header: cronosHeader, ficha: [cronosFT, "ficha_tec_cronos"],},
  {id: 'ducato', title: "Listo para cualquier rutina. #FiatDucato", title2: 'FIAT DUCATO', description: "A bordo de la cabina del Fiat Ducato todo es nuevo. Con más espacio, comodidad, visibilidad al conducir y mucha practicidad para todos los ocupantes, conducir tu negocio va a ser mucho más agradable.", thumbnail: [{img: ducato_img1, desc: ''}, {img: ducato_img2, desc: ''}, {img: ducato_img3, desc: ''}, {img: ducato_img4, desc: ''}], header: ducatoHeader, ficha: [ducatoFT, "ficha_tec_ducato"],},
  {id: 'fiorino', title: "La confiabilidad de siempre. #FiatFiorino", title2: 'FIAT FIORINO', description: "El Fiorino creció en tamaño, logrando desde su estilo exterior un mayor «size impression», pero sin perder agilidad para moverse por los centros urbanos, su hábitat natural.", thumbnail: [{img: fiorino_img1, desc: ''}, {img: fiorino_img2, desc: 'ESPACIO PARA TODO LO QUE NECESITAS'}, {img: fiorino_img3, desc: 'RENOVADO PARA UN MAYOR CONFORT'}, {img: fiorino_img4, desc: 'LA CONFIABILIDAD DE SIEMPRE'}], header: fiorinoHeader, ficha: [fiorinoFT, "ficha_tec_fiorino"],},
  {id: 'mobi', title: "La agilidad que necesitas. #FiatMobi", title2: 'FIAT MOBI', description: 'El FIAT Mobi mantiene su esencia pero ahora renueva su parrilla delantera y algunos otros detalles en línea con el resto de los modelos de FIAT. Este city car también agrega novedades en el equipamiento como la central multimedia de 7" con conectividad Android Auto & Carplay.', thumbnail: [{img: mobi_img1, desc: ''}, {img: mobi_img2, desc: 'CENTRAL MULTIMEDIA CON CONEXIÓN A TU TELÉFONO'}, {img: mobi_img3, desc: 'UN INTERIOR QUE HACE LA DIFERENCIA'}, {img: mobi_img4, desc: 'VOLANTE CON TODOS LOS COMANDOS'}], header: mobiHeader, ficha: [mobiFT, "ficha_tec_mobi"],},
  {id: 'strada', title: "Como siempre, como nunca. #FiatStrada", title2: 'FIAT STRADA', description: "La Strada concilia el concepto de pick-up robusta, confiable y con excelente capacidad de carga con los atributos de confort y seguridad de un auto con espacio para 4 pasajeros en las versiones doble cabina.", thumbnail: [{img: strada_img1, desc: ''}, {img: strada_img2, desc: 'CAPACIDAD DE CARGA'}, {img: strada_img3, desc: 'CONFORT Y TECNOLOGÍA'}, {img: strada_img4, desc: 'ESPACIO INTERNO'}], header: stradaHeader, ficha: [stradaFT, "ficha_tec_strada"],},
  {id: 'toro', title: "Cargada de actitud. #FiatToro", title2: 'FIAT TORO', description: "La Pick Up Fiat Toro combina robustez, fuerza y potencia con un diseño y estilo únicos en el segmento. Robusta y elegante, con equipamiento superior en tecnología, confort y seguridad.", thumbnail: [{img: toro_img1, desc: ''}, {img: toro_img2, desc: 'CENTRAL MULTIMEDIA DE 7" CON NAVEGADOR SATELITAL'}, {img: toro_img3, desc: 'CAPACIDAD DE CARGA HASTA 1 TONELADA'}, {img: toro_img4, desc: 'TAPIZADO EN CUERO'}], header: toroHeader, ficha: [toroFT, "ficha_tec_toro"],},
  {id: 'uno', title: "", title2: 'FIAT UNO', description: "El Fiat Uno llama la atención. Además de su renovado diseño frontal –más moderno y lleno de personalidad–, el Uno cuenta con nuevos paragolpes y parrilla, que resaltan los contornos del modelo.", thumbnail: [{img: uno_img1, desc: ''}, {img: uno_img2, desc: 'VOLANTE MULTIFUNCION'}, {img: uno_img3, desc: 'PANTALLA LCE TÁCTIL DE 6,2" CON SENSOR DE ESTACIONAMIENTO'}, {img: uno_img4, desc: 'ANDA MUCHO, GASTA POCO'}], header: unoHeader, ficha: [unoFT, "ficha_tec_uno"],},
  {id: 'sandero', title: "El auto para todo lo que sos. #RenaultSandero", title2: 'RENAULT SANDERO', description: "Con un diseño completamente renovado, su nueva identidad lumínica, llantas diamantadas 16” y su caja CVT, el Renault SANDERO es el auto perfecto que se adapta a todo lo que sos.", thumbnail: [{img: sandero_img1, desc: ''}, {img: sandero_img2, desc: 'CAJA DE CAMBIOS CVT X-TRONIC'}, {img: sandero_img3, desc: 'MEDIA EVOLUTION EN UNA PANTALLA DE 7" TÁCTIL'}, {img: sandero_img4, desc: 'ESP Y HSA'}], header: sanderoHeader, ficha: [sanderoFT, "ficha_tec_sandero"],},
  {id: 'taos', title: "Tu próximo SUVW. #SUVWTaos", title2: 'SUVW Taos', description: "Taos está equipado con el moderno motor 250 TSI, con probada eficiencia que brinda todo el empuje necesario gracias a su torque y permitiendo además un menor consumo de combustible. ", thumbnail: [{img: taos_img1, desc: ''}, {img: taos_img2, desc: 'IQ.DRIVE: TECNOLOGÍA DE ASISTENCIA'}, {img: taos_img3, desc: 'PANTALLA TÁCTIL DE 8" DISCOVER MEDIA'}, {img: taos_img4, desc: 'TECHO SOLAR PANORAMICO'}], header: taosHeader, ficha: [taosFT, "ficha_tec_argo"],},
  {id: 'renegade', title: "Más que un SUV, un JEEP. #JeepRenegade", title2: 'JEEP RENEGADE', description: "Clásico estilo JEEP. Desde la icónica parrilla de siete ranuras hasta su potente presencia, el Jeep® Renegade es un vehículo siempre dispuesto y preparado para explorar nuevos caminos.", thumbnail: [{img: "https://karvi-certified-images-ar.s3.amazonaws.com/1VdBzivEabzNS9dQrr3qFIWb3RwE_LaJb.jpg", desc: ''}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2019/2019-Jeep-Renegade-Interior-4.1.jpg.img.1000.jpg", desc: 'EQUIPADO PARA LA AVENTURA'}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2019/2019-Jeep-Renegade-Interior-3.1.jpg.img.1000.jpg", desc: 'MANEJÁ CON TRANQUILIDAD'}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/1.jpg.img.500.jpg", desc: 'SISTEMA MULTIMEDIA UCONNECT TOUCH 5"'}], header: "https://www.iberocar.cl/wp-content/uploads/2021/03/banner_jeep_renegade.jpg", ficha: [renegadeFT, "ficha_tec_renegade"],},
  {id: 'compass', title: "El estilo de tu libertad. #JeepCompass", title2: 'JEEP COMPASS', description: "El nuevo Compass es aún más elegante y está diseñado para causar una gran impresión. Estrena renovados diseños de paragolpes y parrilla delantera, el badge T270 y llantas exteriores. La gran novedad son los nuevos faros delanteros y traseros con tecnología LED presentes en todas las versiones, que hacen que el nuevo Compass se destaque por fuera de lo común. ", thumbnail: [{img: "https://1.bp.blogspot.com/-XjZFdpTDHCk/YVTrYm7MwiI/AAAAAAAAnLM/AzWNL-QqONw_6gzGmX8kQ-GdPojubDd4gCLcBGAsYHQ/w1200-h630-p-k-no-nu/Jeep-Compass-2022.jpg", desc: ''}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/apac/jeep/en_in/allnewjeepcompass7thjan/new-compass-price-reveal-23Jan/overview/3-10.jpg.img.1000.jpg", desc: 'CONFORT Y ESTILO'}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/2-new.jpg.img.500.jpg", desc: 'SISTEMA MULTIMEDIA UCONNECT DE 8,4"'}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/1.jpg.img.500.jpg", desc: 'CAJA AUTOMATICA DE 6 VELOCIDADES'}], header: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/carrusel/1.jpg.img.1440.jpg", ficha: [CompassFT, "ficha_tec_compass"],},
  {id: 'c3', title: "Conquistando las calles con estilo y personalidad. #CitroenC3", title2: 'CITROEN C3', description: "El nuevo C3 unifica las características del hatchback con las de un SUV. Imponente con uno de los mayores despejes del suelo del segmento. Proporcionando bienestar a bordo, una posición de manejo inigualable y una excelente experiencia de conducción. El nuevo C3 te brinda lo mejor de los dos mundos. ", thumbnail: [{img: "https://s1.cdn.autoevolution.com/images/models/CITROEN_C3-Aircross-2021_main.jpg", desc: ''}, {img: "https://media.citroen.com.ar/image/80/4/audioyconectividad_1.357804.70.jpg?vers=1", desc: 'SISTEMA MULTIMEDIA DE 7"'}, {img: "https://media.citroen.com.ar/image/38/7/747x322-citroen-c3-gran-capacidad-1.30387.70.jpg", desc: 'GRAN CAPACIDAD, MODULARIDAD Y FÁCIL ACCESO'}, {img: "https://media.citroen.com.ar/image/80/5/audioyconectividad_2.357805.70.jpg?vers=1", desc: 'MIRRORSCREEN TAMBIEN MANEJABLE DESDE LOS MANDOS DEL VOLANTE'}], header: "https://www.sbwakefield.co.uk/media/images/51697992/50800515head-image.jpg", ficha: [c3FT, "ficha_tec_c3"],},
  {id: 'c4-cactus', title: "Bienvenido a la nueva generación SUV. #CitroenC4Cactus", title2: 'CITROEN C4 CACTUS', description: "El Nuevo CITROËN C4 CACTUS es una alternativa al segmento SUV que sienta las bases de un nuevo concepto de automóvil, ofreciendo más diseño, más confort y más tecnología.", thumbnail: [{img: "https://media.citroen.com.ar/image/12/2/diseno-provocador.350122.png?vers=1", desc: ''}, {img: "https://media.citroen.com.ar/image/90/5/espacio-interno.294905.70.png", desc: 'HABITABILIDAD Y VERSATILIDAD'}, {img: "https://media.citroen.com.ar/image/11/5/usp_techo-flotante-v2.350115.70.jpg?vers=1", desc: 'BARRAS DE TECHO FLOTANTES'}, {img: "https://media.citroen.com.ar/image/90/4/universo-interno.294904.70.png", desc: 'UNIVERSO INTERNO EXCLUSIVO Y TECNOLÓGICO'}], header: "https://tormo.com.ar/wp-content/uploads/2021/10/Citroe%CC%88n-C4-Cactus-X-SERIES-1-Tormo.jpeg", ficha: [c4FT, "ficha_tec_argo"],},
    {id: 'stepway', 
    title: "Sea cual sea el camino que elijas, estás a la altura. #RenaultStepway", 
    title2: 'RENAULT STEPWAY', 
    description: "Su gran despeje del suelo y sus nuevos faros C-Shape le otorgan una actitud intrépida que junto a las luces LED traseras, trazan una línea que resalta el movimiento. Un auto diseñado a la altura de lo que te propongas.", 
    thumbnail: [
      {img: stepway_img1, desc: ''}, 
      {img: stepway_img2, desc: 'Seguridad Pasiva'}, 
      {img: stepway_img3, desc: 'Nueva caja de cambios CVT X-Tronic'}, 
      {img: stepway_img4, desc: 'ESP Y HSA'}
    ], 
    header: stepwayHeader, 
    ficha: [stepwayFT, "ficha_tec_stepway"],
    },

    {id: 'logan', 
    title: "Sentite cómodo con tu momento. #RenaultLogan", 
    title2: 'RENAULT LOGAN', 
    description: "El diseño renovado, el gran espacio interior junto con un baúl suficientemente grande para todo lo que querés llevar, son algunas de las características que hacen al Renault LOGAN, el vehículo que te merecés.", 
    thumbnail: [
      {img: logan_img1, desc: ''}, 
      {img: logan_img2, desc: 'Panel de instrumentos optimizado'}, 
      {img: logan_img3, desc: 'Mantenete conectado'}, 
      {img: logan_img4, desc: 'Disfrutá de un viaje placentero'}
    ], 
    header: loganHeader, 
    ficha: [loganFT, "ficha_tec_logan"],
    },

    {id: 'kangoo', 
    title: "Recargado de proyectos. #RenaultKangoo", 
    title2: 'RENAULT KANGOO', 
    description: "Nuevo Renault KANGOO, pensado para viajar acompañado y compartir todo tipo de aventuras. En familia o con amigos, al campo o a la playa, el Kangoo está diseñado para que cada travesía sea única, no sólo en fines de semana o vacaciones. Con amplio espacio, también es un vehículo ideal para moverse cómodamente por la ciudad. Para ir al trabajo, llevar los chicos al colegio, hacer las compras en el supermercado o para disfrutar de salidas divertidas. Todos serán bienvenidos, todos viajarán cómodos en el nuevo Renault KANGOO.", 
    thumbnail: [
      {img: kangoo_img1, desc: ''}, 
      {img: kangoo_img2, desc: 'Multimedia, Cámara y sensores de estacionamiento'}, 
      {img: kangoo_img3, desc: 'Limitador y control de velocidad crucero'}, 
      {img: kangoo_img4, desc: 'Seguridad activa'}
    ], 
    header: kangooHeader, 
    ficha: [kangooFT, "ficha_tec_kangoo"],
    },

    {id: 'captur', 
    title: "Qué bueno verme ahí. #RenaultCaptur", 
    title2: 'RENAULT CAPTUR', 
    description: "Inspirado en el concept car del mismo nombre, Renault CAPTUR representa un nuevo lenguaje en términos de diseño: moderno y sofisticado.", 
    thumbnail: [
      {img: captur_img1, desc: ''}, 
      {img: captur_img2, desc: 'Múltiples espacios'}, 
      {img: captur_img3, desc: 'Cornering Lights'}, 
      {img: captur_img4, desc: 'Seguridad activa'}
    ], 
    header: capturHeader, 
    ficha: [capturFT, "ficha_tec_kangoo"],
    },

    {id: 'koleos', 
    title: "Conquistalo todo. #RenaultKoleos", 
    title2: 'NUEVA RENAULT KOLEOS', 
    description: "Un imponente estilo y una refinada elegancia se combinan para ampliar tus horizontes. La nueva Renault KOLEOS es una SUV que inspira respeto. Es amplia, robusta, con grandes llantas y gran distancia entre ejes. Sin importar la ruta o aventura que quieras emprender con la Renault KOLEOS podés conquistarlo todo.", 
    thumbnail: [
      {img: koleos_img1, desc: ''}, 
      {img: koleos_img2, desc: 'Central multimedia de 7”'}, 
      {img: koleos_img3, desc: 'Easy park assist'}, 
      {img: koleos_img4, desc: 'Todas las expresiones de confort'}
    ], 
    header: koleosHeader, 
    ficha: [koleosFT, "ficha_tec_koleos"],
    },

    {id: 'duster', 
    title: "Para la nueva temporada de tu vida. #RenaultDuster", 
    title2: 'RENAULT DUSTER', 
    description: "El RENAULT DUSTER llegó para que seas el protagonista de todas tus aventuras. Un SUV diseñado para disfrutar de la vida off road, nuevas experiencias y recorrer todos los rincones de nuestro país de una forma atrevida, conectada y con personalidad.", 
    thumbnail: [
      {img: duster_img1, desc: ''}, 
      {img: duster_img2, desc: 'Motor 1.3L TCe Turbo y caja CVT X-Tronic 8'}, 
      {img: duster_img3, desc: 'Exterior e interior renovados'}, 
      {img: duster_img4, desc: 'Nueva tecnología y conectividad'}
    ], 
    header: dusterHeader, 
    ficha: [dusterFT, "ficha_tec_duster"],
    },


]

const ModeloContainer = () => {
  const {modeloId} = useParams();

  return (
    <Modelo modelo={modelos.find(m => m.id === modeloId)}/>
  )
}

export default ModeloContainer