const form = document.getElementById('calc-form');
const tipoSelect = document.getElementById('tipoEmbalagem');
const groupVenc = document.getElementById('group-vencimento');
const resultado = document.getElementById('resultado-prazo');

if (tipoSelect && groupVenc) {
    tipoSelect.addEventListener('change', () => {
        if (tipoSelect.value === 'vazia') {
            groupVenc.style.display = 'none';
            document.getElementById('dataVencimento').value = '';
        } else {
            groupVenc.style.display = 'block';
        }
    });
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const dataCompraVal = document.getElementById('dataCompra').value;
        if (!dataCompraVal) {
            alert("Selecione a data da compra!");
            return;
        }
        
        const dataCompra = new Date(dataCompraVal);
        const hoje = new Date();
        hoje.setHours(0,0,0,0);
        let dataLimite, dias;

        if (tipoSelect.value === 'vazia') {
            dataLimite = new Date(dataCompra);
            dataLimite.setFullYear(dataLimite.getFullYear() + 1);
        } else {
            const dataVencVal = document.getElementById('dataVencimento').value;
            if (!dataVencVal) {
                alert("Selecione a data de vencimento!");
                return;
            }
            const dataVenc = new Date(dataVencVal);
            dataLimite = new Date(dataVenc);
            dataLimite.setMonth(dataLimite.getMonth() + 6);
        }

        dias = Math.ceil((dataLimite - hoje) / (1000 * 60 * 60 * 24));
        const dataFormatada = dataLimite.toLocaleDateString('pt-BR');

        resultado.className = 'resultado';
        resultado.classList.remove('hidden');

        if (dias < 0) {
            resultado.textContent = `⚠️ Prazo vencido há ${Math.abs(dias)} dia(s) em ${dataFormatada}. Devolva imediatamente!`;
            resultado.classList.add('erro');
        } else if (dias <= 30) {
            resultado.textContent = `⏰ Atenção! Vence em ${dias} dia(s) (Prazo limite: ${dataFormatada}). Organize a entrega!`;
            resultado.classList.add('atencao');
        } else {
            resultado.textContent = `✅ Regular. Tem até ${dataFormatada} para efetuar a devolução (${dias} dias restantes).`;
            resultado.classList.add('ok');
        }
    });
}