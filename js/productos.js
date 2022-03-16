

// Bolsos
const stockBolsos = [
    {id:11, tipo:"Homero", precio: 1500, img:`/assets/img/bolsos/Bolso-D-OH.png`, cantidad: 1, clase: "personalizado"},
    {id:12, tipo:"Homero", precio: 1500, img:`/assets/img/bolsos/Bolso-frente-D-OH.png`, cantidad: 1, clase: "personalizado"},
    {id:13, tipo:"Homero", precio: 1500, img:`/assets/img/bolsos/Homero1.png`, cantidad: 1,clase: "personalizado"},
    {id:14, tipo:"Sasuke", precio: 2000, img:`/assets/img/bolsos/Sasuke.png`, cantidad: 1,clase: "personalizado"},
    {id:15, tipo:"Seiga", precio: 2000, img:`/assets/img/bolsos/Seiga.png`, cantidad: 1,clase: "personalizado"},
    {id:16, tipo:"Camuflado-Naranja-Verde-Blanco", precio: 2000, img:`/assets/img/bolsos/Camuflado naranja-verde- blanco.jpg`, cantidad: 1,clase: "camuflado"},
    {id:17, tipo:"Camuflado-Verde fluor-Celeste-Negro", precio: 2000, img:`/assets/img/bolsos/Camuflado verde fluor - celeste - negro.jpg`, cantidad: 1,clase: "camuflado"},
    {id:18, tipo:"Camuflado-Verde-Marrón-Negro", precio: 2000, img:`/assets/img/bolsos/Camuflado verde- marron -negro.jpg`, cantidad: 1,clase: "camuflado"},
    {id:19, tipo:"Circulos", precio: 2000, img:`/assets/img/bolsos/Circulos grandes.jpg`, cantidad: 1,clase: "estampado"},
    {id:110, tipo:"Circulos", precio: 2000, img:`/assets/img/bolsos/Circulos grandess.jpg`, cantidad: 1,clase: "estampado"},
    {id:111, tipo:"Dibujos geométricos", precio: 2000, img:`/assets/img/bolsos/Dibujos geometricos.jpg`, cantidad: 1,clase: "estampado"},
    {id:112, tipo:"Estampado-Caro", precio: 2000, img:`/assets/img/bolsos/Estampado Caro.jpg`, cantidad: 1,clase: "estampado"},
    {id:113, tipo:"Étnico-Cyan-Rojo", precio: 2000, img:`/assets/img/bolsos/Etnico cyan-rojo 2.jpg`, cantidad: 1,clase: "estampado"},
    {id:114, tipo:"Étnico-Cyan-Rojo", precio: 2000, img:`/assets/img/bolsos/Etnico cyan-rojo.jpg`, cantidad: 1,clase: "estampado"},
    {id:115, tipo:"Étnico-Fronteras-Celeste", precio: 2000, img:`/assets/img/bolsos/Etnico fronteras celeste.jpg`, cantidad: 1,clase: "estampado"},
    {id:116, tipo:"Étnico-Fronteras-Marrón", precio: 2000, img:`/assets/img/bolsos/Etnico fronteras marron.jpg`, cantidad: 1,clase: "estampado"},
    {id:117, tipo:"Étnico-Negro", precio: 2000, img:`/assets/img/bolsos/Etnico negro.jpg`, cantidad: 1,clase: "estampado"},
    {id:118, tipo:"Étnico-Pasteles", precio: 2000, img:`/assets/img/bolsos/Etnico pasteles.jpg`, cantidad: 1,clase: "estampado"},
    {id:119, tipo:"Flor Sandalia", precio: 2000, img:`/assets/img/bolsos/Flor Sandalia.jpg`, cantidad: 1,clase: "estampado"},
    {id:120, tipo:"Flores Acuarela", precio: 2000, img:`/assets/img/bolsos/Flores acuarela.jpg`, cantidad: 1,clase: "estampado"},
    {id:121, tipo:"Flores Marina", precio: 2000, img:`/assets/img/bolsos/Flores marinas.jpg`, cantidad: 1,clase: "estampado"},
    {id:122, tipo:"Flores y Hojas", precio: 2000, img:`/assets/img/bolsos/Flores y hojas.jpg`, cantidad: 1,clase: "estampado"},
    {id:123, tipo:"Guarda geométrica", precio: 2000, img:`/assets/img/bolsos/Guarda geometrica azul.jpg`, cantidad: 1,clase: "estampado"},
    {id:124, tipo:"Hojas con rayas", precio: 2000, img:`/assets/img/bolsos/Hojitas con rayas.jpg`, cantidad: 1,clase: "estampado"},
    {id:125, tipo:"Hojas grandes", precio: 2000, img:`/assets/img/bolsos/Hojitas grandes.jpg`, cantidad: 1,clase: "estampado"},
    {id:126, tipo:"Hojas verdes", precio: 2000, img:`/assets/img/bolsos/Hojitas verdes.jpg`, cantidad: 1,clase: "estampado"},
    {id:127, tipo:"Gris-Naranja", precio: 2000, img:`/assets/img/bolsos/Liso Gris- naranja.jpg`, cantidad: 1,clase: "liso"},
    {id:128, tipo:"Negro-Verde", precio: 2000, img:`/assets/img/bolsos/Liso Negro - Verde.jpg`, cantidad: 1,clase: "liso"},
    {id:129, tipo:"Negro con cinta estampada", precio: 2000, img:`/assets/img/bolsos/Liso Negro con cinta estampada 1.jpg`, cantidad: 1,clase: "liso"},
    {id:130, tipo:"Negro con cinta estampada a rayas", precio: 2000, img:`/assets/img/bolsos/Liso Negro con cinta estampada a rayas 1.jpg`, cantidad: 1,clase: "liso"},
    {id:131, tipo:"Negro con cinta estampada a rayas", precio: 2000, img:`/assets/img/bolsos/Liso Negro con cinta estampada a rayas.jpg`, cantidad: 1,clase: "liso"},
    {id:132, tipo:"Negro con cinta estampada a cuadros", precio: 2000, img:`/assets/img/bolsos/Liso Negro con cinta estampada cuadros.jpg`, cantidad: 1,clase: "liso"},
    {id:133, tipo:"Negro con cinta estampada", precio: 2000, img:`/assets/img/bolsos/Liso Negro con cinta estampada.jpg`, cantidad: 1,clase: "liso"},
    {id:134, tipo:"Negro", precio: 2000, img:`/assets/img/bolsos/Liso Negro.jpg`, cantidad: 1,clase: "liso"},
    {id:135, tipo:"Mandala azul", precio: 2000, img:`/assets/img/bolsos/Mandala azul.jpg`, cantidad: 1,clase: "estampado"},
    {id:136, tipo:"Mandala-Flor-Arcoiris", precio: 2000, img:`/assets/img/bolsos/Mandala flor arco iris.jpg`, cantidad: 1,clase: "estampado"},
    {id:137, tipo:"Mandala fuscia", precio: 2000, img:`/assets/img/bolsos/Mandala Fucsia.jpg`, cantidad: 1,clase: "estampado"},
    {id:138, tipo:"Mandala geométrica", precio: 2000, img:`/assets/img/bolsos/Mandala geometrico.jpg`, cantidad: 1,clase: "estampado"},
    {id:139, tipo:"Mandala naranja", precio: 2000, img:`/assets/img/bolsos/Mandala Naranja.jpg`, cantidad: 1,clase: "estampado"},
    {id:140, tipo:"Verde-Azul-Celeste", precio: 2000, img:`/assets/img/bolsos/Rayas horizontal azul-verde-celeste.jpg`, cantidad: 1,clase: "rayas"},
    {id:141, tipo:"Gris-Fuscia-Cyan", precio: 2000, img:`/assets/img/bolsos/Rayas horizontal gris- fucsia-cyan.jpg`, cantidad: 1,clase: "rayas"},
    {id:142, tipo:"Naranja-Naranja Claro-Blanco", precio: 2000, img:`/assets/img/bolsos/Rayas horizontal naranja-naranja claro-blanco.jpg`, cantidad: 1,clase: "rayas"},
    {id:143, tipo:"Rombos", precio: 2000, img:`/assets/img/bolsos/Rombos.jpg`, cantidad: 1,clase: "estampado"}
    
]




// Mates
const stockMates = [
    {id:21, tipo:"Mate azul", precio:500, img:`/assets/img/mates/mate azul.jpg`, cantidad: 1, clase:"vidrio"},
    {id:22, tipo:"Mate blanco", precio: 500, img:`/assets/img/mates/mate blanco.jpg`,cantidad: 1, clase:"vidrio"},
    {id:23, tipo:"Mate caramelo", precio: 500, img:`/assets/img/mates/mate caramelo.jpg`, cantidad: 1, clase:"vidrio"},
    {id:24, tipo:"Mate carmin", precio: 500, img:`/assets/img/mates/mate carmin.jpg`, cantidad: 1, clase:"vidrio"},
    {id:25, tipo:"Mate de plástico azul", precio: 500, img:`/assets/img/mates/Mate de plastico azul.jpg`, cantidad: 1, clase:"plastico"},
    {id:26, tipo:"Mate de plástico celeste", precio: 500, img:`/assets/img/mates/Mate de plastico celeste.jpg`, cantidad: 1, clase:"plastico"},
    {id:27, tipo:"Mate de  plástico fucsia", precio: 500, img:`/assets/img/mates/Mate de plastico fucsia.jpg`, cantidad: 1, clase:"plastico"},
    {id:28, tipo:"Mate de plástico lila claro", precio: 500, img:`/assets/img/mates/Mate de plastico lila claro.jpg`, cantidad: 1, clase:"plastico"},
    {id:29, tipo:"Mate de plástico lila", precio: 500, img:`/assets/img/mates/Mate de plastico lila.jpg`, cantidad: 1, clase:"plastico"},
    {id:210, tipo:"Mate de plástico rosa chicle", precio: 500, img:`/assets/img/mates/Mate de plastico rosa chicle.jpg`, cantidad: 1, clase:"plastico"},
    {id:211, tipo:"Mate de plástico rosa claro", precio: 500, img:`/assets/img/mates/Mate de plastico rosa claro.jpg`, cantidad: 1, clase:"plastico"},
    {id:212, tipo:"Mate de plástico rosa", precio: 500, img:`/assets/img/mates/Mate de plastico rosa.jpg`, cantidad: 1, clase:"plastico"},
    {id:213, tipo:"Mate de plástico terracota", precio: 500, img:`/assets/img/mates/Mate de plastico terracota.jpg`, cantidad: 1, clase:"plastico"},
    {id:214, tipo:"Mate de plástico turqueza", precio: 500, img:`/assets/img/mates/Mate de plastico turqueza.jpg`, cantidad: 1, clase:"plastico"},
    {id:215, tipo:"Mate de plástico verde agua", precio: 500, img:`/assets/img/mates/Mate de plastico verde agua.jpg`, cantidad: 1, clase:"plastico"},
    {id:216, tipo:"Mate de plástico verde hoja sacayerba", precio: 500, img:`/assets/img/mates/Mate de plastico verde hoja sacayerba.jpg`, cantidad: 1, clase:"plastico"},
    {id:217, tipo:"Mate de plástico verde manzana", precio: 500, img:`/assets/img/mates/Mate de plastico verde manzana.jpg`, cantidad: 1, clase:"plastico"},
    {id:218, tipo:"Mate de plástico verde", precio: 500, img:`/assets/img/mates/Mate de plastico verde.jpg`, cantidad: 1, clase:"plastico"},
    {id:219, tipo:"Mate de plástico violeta", precio: 500, img:`/assets/img/mates/Mate de plastico violeta.jpg`, cantidad: 1, clase:"plastico"},
    {id:220, tipo:"Mate fucsia", precio: 500, img:`/assets/img/mates/mate fucsia.jpg`, cantidad: 1, clase:"vidrio"},
    {id:221, tipo:"Mate marrón claro", precio: 500, img:`/assets/img/mates/mate marron claro.jpg`, cantidad: 1, clase:"vidrio"},
    {id:222, tipo:"Mate marrón oscuro", precio: 500, img:`/assets/img/mates/mate marron oscuro.jpg`, cantidad: 1, clase:"vidrio"},
    {id:223, tipo:"Mate naranja", precio: 500, img:`/assets/img/mates/mate naranja.jpg`, cantidad: 1, clase:"vidrio"},
    {id:224, tipo:"Mate negro", precio: 500, img:`/assets/img/mates/mate negro.jpg`, cantidad: 1, clase:"vidrio"},
    {id:225, tipo:"Mate rojo", precio: 500, img:`/assets/img/mates/mate rojo.jpg`, cantidad: 1, clase:"vidrio"},
    {id:226, tipo:"Mate verde agua", precio: 500, img:`/assets/img/mates/mate verde agua.jpg`, cantidad: 1, clase:"vidrio"},
];


const stockEstuches = [
    {id:31, tipo:"Bolso para tabla. Amarillo-Verde", precio: 2500, cantidad:1, clase:"bolsa",img:"/assets/img/estuches/Bolsa para tablas Amarillo-verde.jpg"},
    {id:32, tipo:"Bolso para tabla. Blanco-Amarillo", precio: 2500, cantidad:1, clase:"bolsa",img:"/assets/img/estuches/Bolsa para tablas Blanco-amarillo.jpg"},
    {id:33, tipo:"Bolso para tabla. Blanco Dorado", precio: 2500, cantidad:1, clase:"bolsa",img:"/assets/img/estuches/Bolsa para tablas Blanco-dorado.jpg"},
    {id:34, tipo:"Bolso para tabla. Blanco-Fucsia", precio: 2500, cantidad:1, clase:"bolsa",img:"/assets/img/estuches/Bolsa para tablas Blanco-Fucsia.jpg"},
    {id:35, tipo:"Estuche Espiga. Azul-Amarillo", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/Estuche Espiga  azul -azul amarillo.jpg"},
    {id:36, tipo:"Estuche Espiga. Azul-Gris-Amarillo", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/Estuche Espiga  azul -gris amarillo.jpg"},
    {id:37, tipo:"Estuche Bastone. Negro", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuche-bastones-fondo-negro.png"},
    {id:38, tipo:"Estuche Bastone. Marrón claro", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuche-bastones-marron-claro.png"},
    {id:39, tipo:"Estuche Bastone. Marrón claro y oscuro", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuche-bastones-marron-claro-y-oscuro.png"},
    {id:310, tipo:"Estuche. Digital-Amarillo", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuches-para-tablas-digital-amarillo.png"},
    {id:311, tipo:"Estuche. Digital-Bordo", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuches-para-tablas-digital-bordo.png"},
    {id:312, tipo:"Estuche. Digital-Celeste", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuches-para-tablas-digital-celeste.png"},
    {id:313, tipo:"Estuche. Dgital-Verde", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuches-para-tablas-digital-verde.png"},
    {id:314, tipo:"Estuche. Digital-Verde y bordó", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuches-para-tablas-digital-verde-y-bordo.png"},
    {id:315, tipo:"Estuche. Triángulos amarillos", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuche-triangulos-amarillos.png"},
    {id:316, tipo:"Estuche. Triángulos amarillos", precio: 2500, cantidad:1, clase:"estuche",img:"/assets/img/estuches/estuche-triangulos-amarillos-1.png"}

];

const stockLatas = [
    {id:41, tipo:"Latas. Amarillo", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas amarillo.jpg"},
    {id:42, tipo:"Latas. Azul", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas azul.jpg"},
    {id:43, tipo:"Latas. Blanco", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas blanco.jpg"},
    {id:44, tipo:"Latas. Celeste", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas Celeste.jpg"},
    {id:45, tipo:"Latas. Fucsia", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas fucsia.jpg"},
    {id:46, tipo:"Latas. Lila", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas Lila.jpg"},
    {id:47, tipo:"Latas. Naranja", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas Naranja.jpg"},
    {id:48, tipo:"Latas. Rojo", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas Rojo.jpg"},
    {id:49, tipo:"Latas. Verde agua", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas verde agua.jpg"},
    {id:410, tipo:"Latas. Verde musgo", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas verde musgo.jpg"},
    {id:411, tipo:"Latas. Verde negras", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latas verde negras.jpg"},
    {id:412, tipo:"Latas. Marrón", precio:500, cantidad:1, clase:"vegetal", img:"/assets/img/latas/latasmarron.jpg"}
];

