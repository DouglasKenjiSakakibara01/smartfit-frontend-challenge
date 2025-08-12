# DesafioSmartfit

Desafio de front-end da Smart Fit. O desafio foi feito utilizado o Angular na versão 20.1.4.

## Sobre o desafio 
O desafio está relacionado ao contexto de mudanças no período da pandemia,  onde existe uma necessidade de desenvolver uma página para buscar unidades abertas ou fechadas para consulta e reserva.

Neste desafio, foi implementado as seguintes funcionalidades de acordo com as regras de negócio definidas:

Funcionalidades
Carrega unidades através do arquivo JSON locations.json utilizando o método GET. 
- Busca por todas as unidades.
- Busca por unidades com filtros.
- Previsão do número de resultados encontrados.
- Listagem das unidades encontradas após a busca.

Regras de negócio
- Filtra unidades abertas ou fechadas.
- Filtra unidades por período de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando não há resultados.
- Valida e exibe os ícones corretos de acordo com o status da unidade.

## Execução
Para executar a aplicação localmente, siga os passos abaixo
1. Clone o projeto
```bash
git clone https://github.com/DouglasKenjiSakakibara01/smartfit-frontend-challenge.git
cd smartfit-frontend-challenge
````
2. Instale as dependências
```bash
npm install
```
3. Para rodar a aplicação   
```bash
ng serve
```


