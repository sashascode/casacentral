import {useParams} from 'react-router-dom';
import Modelo from './Modelo';
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
//imports sandero
import sandero_img1 from '../../../../images/fiat/sandero1.webp'
import sandero_img2 from '../../../../images/fiat/sandero2.webp'
import sandero_img3 from '../../../../images/fiat/sandero3.webp'
import sandero_img4 from '../../../../images/fiat/sandero4.webp'
import sanderoHeader from '../../../../images/fiat/sanderobanner.jpg'
import sanderoFT from './fichastecnicas/22bf9cb5b8.pdf'
//imports taos
import taos_img1 from '../../../../images/fiat/taos1.jpg'
import taos_img2 from '../../../../images/fiat/taos2.webp'
import taos_img3 from '../../../../images/fiat/taos3.jpg'
import taos_img4 from '../../../../images/fiat/taos4.jpg'
import taosHeader from '../../../../images/fiat/taosbanner.jpg'
import taosFT from './fichastecnicas/ficha-tecnica-vw-taospdf.pdf'


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
]

const ModeloContainer = () => {
  const {modeloId} = useParams();

  return (
    <Modelo modelo={modelos.find(m => m.id === modeloId)}/>
  )
}

export default ModeloContainer