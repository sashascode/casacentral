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




const modelos = [
  {id: 'argo', title: "No manejás, sentís. #FiatArgo", title2: 'FIAT ARGO', description: "La esencia italiana y el estilo del FIAT Argo se combinan para lograr deportividad y atractivo en este modelo.", thumbnail: [{img: argo_img1, desc: ''}, {img: argo_img2, desc: 'CENTRAL MULTIMEDIA DE 7"'}, {img: argo_img3, desc: 'VOLANTE MULTIFUNCIONAL'}, {img: argo_img4, desc: 'CONTROL DE TRACCIÓN Y ESTABILIDAD'}], header: argoHeader, ficha: [argoFT, "ficha_tec_argo"],},
  {id: 'cronos', title: "El más elegido por los Argentinos. #FiatCronos", title2: 'FIAT CRONOS', description: "Líneas de figura, diseño italiano, aspecto deportivo y atrevido que llama la atención en todos lados.", thumbnail: [{img: cronos_img1, desc: ''}, {img: cronos_img2, desc: 'CAJA AUTOMÁTICA'}, {img: cronos_img3, desc: 'TAPIZADO EN CUERO'}, {img: cronos_img4, desc: 'MOTOR 1.8DE 130CV'}], header: cronosHeader, ficha: [cronosFT, "ficha_tec_cronos"],},
  {id: 'ducato', title: "Listo para cualquier rutina. #FiatDucato", title2: 'FIAT DUCATO', description: "A bordo de la cabina del Fiat Ducato todo es nuevo. Con más espacio, comodidad, visibilidad al conducir y mucha practicidad para todos los ocupantes, conducir tu negocio va a ser mucho más agradable.", thumbnail: [{img: ducato_img1, desc: ''}, {img: ducato_img2, desc: ''}, {img: ducato_img3, desc: ''}, {img: ducato_img4, desc: ''}], header: ducatoHeader, ficha: [ducatoFT, "ficha_tec_ducato"],},
  {id: 'fiorino', title: "La confiabilidad de siempre. #FiatFiorino", title2: 'FIAT FIORINO', description: "El Fiorino creció en tamaño, logrando desde su estilo exterior un mayor «size impression», pero sin perder agilidad para moverse por los centros urbanos, su hábitat natural.", thumbnail: [{img: fiorino_img1, desc: ''}, {img: fiorino_img2, desc: 'ESPACIO PARA TODO LO QUE NECESITAS'}, {img: fiorino_img3, desc: 'RENOVADO PARA UN MAYOR CONFORT'}, {img: fiorino_img4, desc: 'LA CONFIABILIDAD DE SIEMPRE'}], header: fiorinoHeader, ficha: [fiorinoFT, "ficha_tec_fiorino"],},
  {id: 'mobi', title: "La agilidad que necesitas. #FiatMobi", title2: 'FIAT MOBI', description: 'El FIAT Mobi mantiene su esencia pero ahora renueva su parrilla delantera y algunos otros detalles en línea con el resto de los modelos de FIAT. Este city car también agrega novedades en el equipamiento como la central multimedia de 7" con conectividad Android Auto & Carplay.', thumbnail: [{img: mobi_img1, desc: ''}, {img: mobi_img2, desc: 'CENTRAL MULTIMEDIA CON CONEXIÓN A TU TELÉFONO'}, {img: mobi_img3, desc: 'UN INTERIOR QUE HACE LA DIFERENCIA'}, {img: mobi_img4, desc: 'VOLANTE CON TODOS LOS COMANDOS'}], header: mobiHeader, ficha: [mobiFT, "ficha_tec_mobi"],},
  {id: 'strada', title: "No manejás, sentís. #FiatArgo", title2: 'FIAT ARGO', description: "La esencia italiana y el estilo del FIAT Argo se combinan para lograr deportividad y atractivo en este modelo.", thumbnail: [{img: argo_img1, desc: ''}, {img: argo_img2, desc: 'CENTRAL MULTIMEDIA DE 7"'}, {img: argo_img3, desc: 'VOLANTE MULTIFUNCIONAL'}, {img: argo_img4, desc: 'CONTROL DE TRACCIÓN Y ESTABILIDAD'}], header: argoHeader, ficha: [argoFT, "ficha_tec_argo"],},
  {id: 'toro', title: "No manejás, sentís. #FiatArgo", title2: 'FIAT ARGO', description: "La esencia italiana y el estilo del FIAT Argo se combinan para lograr deportividad y atractivo en este modelo.", thumbnail: [{img: argo_img1, desc: ''}, {img: argo_img2, desc: 'CENTRAL MULTIMEDIA DE 7"'}, {img: argo_img3, desc: 'VOLANTE MULTIFUNCIONAL'}, {img: argo_img4, desc: 'CONTROL DE TRACCIÓN Y ESTABILIDAD'}], header: argoHeader, ficha: [argoFT, "ficha_tec_argo"],},
  {id: 'uno', title: "No manejás, sentís. #FiatArgo", title2: 'FIAT ARGO', description: "La esencia italiana y el estilo del FIAT Argo se combinan para lograr deportividad y atractivo en este modelo.", thumbnail: [{img: argo_img1, desc: ''}, {img: argo_img2, desc: 'CENTRAL MULTIMEDIA DE 7"'}, {img: argo_img3, desc: 'VOLANTE MULTIFUNCIONAL'}, {img: argo_img4, desc: 'CONTROL DE TRACCIÓN Y ESTABILIDAD'}], header: argoHeader, ficha: [argoFT, "ficha_tec_argo"],},
  {id: 'sandero', title: "No manejás, sentís. #FiatArgo", title2: 'FIAT ARGO', description: "La esencia italiana y el estilo del FIAT Argo se combinan para lograr deportividad y atractivo en este modelo.", thumbnail: [{img: argo_img1, desc: ''}, {img: argo_img2, desc: 'CENTRAL MULTIMEDIA DE 7"'}, {img: argo_img3, desc: 'VOLANTE MULTIFUNCIONAL'}, {img: argo_img4, desc: 'CONTROL DE TRACCIÓN Y ESTABILIDAD'}], header: argoHeader, ficha: [argoFT, "ficha_tec_argo"],},
  {id: 'taos', title: "No manejás, sentís. #FiatArgo", title2: 'FIAT ARGO', description: "La esencia italiana y el estilo del FIAT Argo se combinan para lograr deportividad y atractivo en este modelo.", thumbnail: [{img: argo_img1, desc: ''}, {img: argo_img2, desc: 'CENTRAL MULTIMEDIA DE 7"'}, {img: argo_img3, desc: 'VOLANTE MULTIFUNCIONAL'}, {img: argo_img4, desc: 'CONTROL DE TRACCIÓN Y ESTABILIDAD'}], header: argoHeader, ficha: [argoFT, "ficha_tec_argo"],},
]

const ModeloContainer = () => {
  const {modeloId} = useParams();

  return (
    <Modelo modelo={modelos.find(m => m.id === modeloId)}/>
  )
}

export default ModeloContainer