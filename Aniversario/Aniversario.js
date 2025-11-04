 function calcularIdade() {
            const anoNascimento = document.getElementById('anoNascimento').value;
            const resultado = document.getElementById('resultado');
            const erro = document.getElementById('erro');
            const idadeValor = document.getElementById('idadeValor');

            // Limpar mensagens anteriores
            erro.classList.remove('show');
            resultado.classList.remove('show');

            // Validação
            if (!anoNascimento) {
                erro.textContent = '⚠️ Por favor, digite o ano de nascimento!';
                erro.classList.add('show');
                return;
            }

            const ano = parseInt(anoNascimento);
            const anoAtual = new Date().getFullYear();

            if (ano < 1900 || ano > anoAtual) {
                erro.textContent = '❌ Digite um ano válido entre 1900 e ' + anoAtual + '!';
                erro.classList.add('show');
                return;
            }

            // Calcular idade
            const idade = anoAtual - ano;

            // Mostrar resultado
            idadeValor.textContent = idade;
            resultado.classList.add('show');
        }

       