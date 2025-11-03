# Aniversario-e-classificacao
<img width="576" height="494" alt="image" src="https://github.com/user-attachments/assets/a1fdefad-adb3-4c00-8fff-09622dc8dbc3" />
<img width="889" height="568" alt="image" src="https://github.com/user-attachments/assets/aaad3849-05c4-4392-9104-0f4ae65ff936" />


###
Responsavel pela tranformação em anos de idade:
###
// Função para formatar data
function formatarData(dataString) {
    const data = new Date(dataString);
    const dia = String(data.getDate() + 1).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}
