# Aniversario-e-classificacao
Responsavel pela transformação em anos de idade:


 // Calcular idade
 const idade = anoAtual - ano;

 <img width="737" height="560" alt="image" src="https://github.com/user-attachments/assets/276bed44-5fc5-4444-ae5d-3331767b4096" />



 Responsavel por ordenar impar ou par:



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




 <img width="809" height="605" alt="image" src="https://github.com/user-attachments/assets/040411c2-7b78-4214-9301-de087a3df87b" />
