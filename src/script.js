const textos = [
    "Você é mais capaz do que imagina e está no caminho certo para alcançar seus objetivos. Cada pequeno passo que você dá hoje está construindo um futuro incrível. Confie no processo, continue aprendendo e, acima de tudo, acredite em si mesmo. O sucesso é a soma de esforço, paciência e determinação — e você tem tudo isso dentro de você.",
    "Cada dia é uma nova chance de se aproximar dos seus sonhos. Mesmo que o progresso pareça pequeno, lembre-se: cada passo à frente conta. Confie em si mesmo e nunca subestime o poder da sua dedicação!",
    "Você não precisa ser perfeito para começar, apenas comece. O aprendizado e a evolução acontecem ao longo do caminho. O importante é continuar avançando com coragem e determinação!",
    "Os maiores desafios trazem as maiores conquistas. Não desista, porque a força que você desenvolve ao superar dificuldades é o que vai te levar ao próximo nível. Acredite no seu potencial!",
    "Sonhos se tornam realidade quando você combina visão, esforço e paciência. Não tenha medo de errar, porque é assim que se cresce. Continue em frente e surpreenda-se com o que você pode alcançar!"
];

let ultimoIndex = -1;
function mensagemAleatoria() {
    const textoLista = textos;
    let indexDaLista;
    do {
        indexDaLista = Math.floor(Math.random() * textoLista.length);
    } while (indexDaLista === ultimoIndex);
    ultimoIndex = indexDaLista;
    document.getElementById("frases").innerHTML = textoLista[indexDaLista];
    console.log(textoLista[indexDaLista]);
}