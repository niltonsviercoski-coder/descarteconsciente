const perguntas = [
    { t: "Qual o prazo para devolver embalagens vazias?", o: ["6 meses", "1 ano", "2 anos", "Imediato"], c: 1, e: "O prazo legal é de até 1 ano a partir da data da compra." },
    { t: "Quantas vezes deve-se repetir a tríplice lavagem?", o: ["1", "2", "3", "4"], c: 2, e: "São 3 lavagens no total, adicionando água e agitando 30s em cada uma." },
    { t: "O que fazer após a última lavagem?", o: ["Guardar intacta", "Perfurar", "Queimar", "Enterrar"], c: 1, e: "Perfurar impede a reutilização indevida da embalagem." },
    { t: "Onde devolver as embalagens?", o: ["Em qualquer lugar", "No local da nota fiscal", "No posto de saúde", "Na prefeitura"], c: 1, e: "Deve-se devolver no centro indicado na nota de compra." }
];

let atual = 0, acertos = 0, respondida = false;

const pTexto = document.getElementById('pergunta-texto');
const oLista = document.getElementById('opcoes-lista');
const feedback = document.getElementById('feedback-msg');
const btnProx = document.getElementById('btn-proximo');
const pFill = document.getElementById('progress-fill');
const qBox = document.getElementById('quiz-container');
const qResult = document.getElementById('quiz-resultado');
const pFinal = document.getElementById('pontuacao-final');
const mFinal = document.getElementById('mensagem-final');
const btnRefazer = document.getElementById('btn-refazer');

function carregarPergunta() {
    if (!pTexto || !oLista) return;
    respondida = false;
    feedback.classList.add('hidden');
    btnProx.classList.add('hidden');
    
    const p = perguntas[atual];
    pTexto.textContent = `${atual + 1}. ${p.t}`;
    
    if (pFill) pFill.style.width = `${((atual) / perguntas.length) * 100}%`;
    
    oLista.innerHTML = '';
    p.o.forEach((opcao, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opcao;
        btn.addEventListener('click', () => validarResposta(idx, btn));
        oLista.appendChild(btn);
    });
}

function validarResposta(escolha, btn) {
    if (respondida) return;
    respondida = true;
    
    const p = perguntas[atual];
    Array.from(oLista.children).forEach(b => b.disabled = true);
    
    if (escolha === p.c) {
        acertos++;
        btn.classList.add('certa');
        feedback.textContent = `✅ Correto! ${p.e}`;
        feedback.style.background = '#d3f9d8';
        feedback.style.color = '#2b8a3e';
    } else {
        btn.classList.add('errada');
        oLista.children[p.c].classList.add('certa');
        feedback.textContent = `❌ Incorreto. ${p.e}`;
        feedback.style.background = '#ffe3e3';
        feedback.style.color = '#c92a2a';
    }
    feedback.classList.remove('hidden');
    
    btnProx.textContent = atual < perguntas.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado';
    btnProx.classList.remove('hidden');
}

if (btnProx) {
    btnProx.addEventListener('click', () => {
        atual++;
        if (atual < perguntas.length) carregarPergunta();
        else finalizar();
    });
}

function finalizar() {
    if (qBox && qResult && pFinal && mFinal) {
        qBox.classList.add('hidden');
        qResult.classList.remove('hidden');
        if (pFill) pFill.style.width = '100%';
        pFinal.textContent = `${acertos}/${perguntas.length} acertos`;
        
        if (acertos === perguntas.length) {
            mFinal.textContent = "🏆 Excelente! Você domina o descarte correto!";
        } else if (acertos >= perguntas.length * 0.5) {
            mFinal.textContent = "👍 Bom trabalho! Revise os pontos que errou.";
        } else {
            mFinal.textContent = "⚠️ Precisa estudar mais as normas do Sistema Campo Limpo.";
        }
    }
}

if (btnRefazer) {
    btnRefazer.addEventListener('click', () => {
        atual = 0; acertos = 0;
        if (qResult) qResult.classList.add('hidden');
        if (qBox) qBox.classList.remove('hidden');
        carregarPergunta();
    });
}

if (pTexto) carregarPergunta();