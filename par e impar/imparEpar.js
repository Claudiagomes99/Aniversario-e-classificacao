 function verificarParImpar() {
            const numeroInput = document.getElementById('numero').value;
            const resultado = document.getElementById('resultado');
            const numeroValor = document.getElementById('numeroValor');
            const textoResultado = document.getElementById('textoResultado');
            const icon = document.getElementById('icon');
            const explicacao = document.getElementById('explicacao');

            // Validação
            if (numeroInput === '') {
                resultado.className = 'resultado show erro';
                numeroValor.textContent = 'Ops!';
                textoResultado.textContent = 'Digite um número';
                explicacao.textContent = 'Por favor, insira um número no campo acima.';
                return;
            }

            const numero = parseInt(numeroInput);

            // Verificação de número válido
            if (isNaN(numero)) {
                resultado.className = 'resultado show erro';
                numeroValor.textContent = 'Erro!';
                textoResultado.textContent = 'Número inválido';
                explicacao.textContent = 'Por favor, digite um número válido.';
                return;
            }

            // Forçar reanimação
            resultado.classList.remove('show');
            setTimeout(() => {
                resultado.classList.add('show');
            }, 10);

            // Verificar se é par ou ímpar
            numeroValor.textContent = numero;

            if (numero % 2 === 0) {
                // É PAR
                resultado.className = 'resultado show par';
                textoResultado.textContent = 'É PAR!';
                
                if (numero === 0) {
                    explicacao.textContent = 'Zero é considerado um número par, pois é divisível por 2 (0 ÷ 2 = 0).';
                } else {
                    explicacao.textContent = `${numero} é divisível por 2, resultando em ${numero / 2}. Por isso é um número par!`;
                }
            } else {
                // É ÍMPAR
                resultado.className = 'resultado show impar';
                textoResultado.textContent = 'É ÍMPAR!';
                explicacao.textContent = `${numero} não é divisível por 2 de forma exata. A divisão resulta em ${(numero / 2).toFixed(1)}, por isso é um número ímpar!`;
            }
        }


        // Limpar resultado ao digitar
        document.getElementById('numero').addEventListener('input', function() {
            const resultado = document.getElementById('resultado');
            if (this.value === '') {
                resultado.classList.remove('show');
            }
        });