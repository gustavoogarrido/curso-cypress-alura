# Funcionalidade: Cadastro Correto

Este roteiro descreve os passos para testar o cenário feliz no cadastro de usuários, onde todos os campos são preenchidos corretamente.

## Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

# Funcionalidade: Cadastro Incorreto

Este roteiro descreve os passos para testar o cenário de falha no cadastro de usuários, onde campos obrigatórios são deixados em branco.

## Passos

1.  **Acessar a página de cadastro:**

    *   Acessar a URL da página de cadastro.
2.  **Deixar campos obrigatórios em branco:**

    *   Não preencher os campos de "email", "senha" e "confirmação de senha".
3.  **Clicar no botão "Cadastrar":**

    *   Simular o clique no botão de envio do formulário de cadastro.
4.  **Verificar mensagens de erro:**

    *   Verificar se as seguintes mensagens de erro são exibidas na tela:
        *   "É necessário informar um endereço de email"
        *   "Crie uma senha"
        *   "Repita a senha criada acima"

## Objetivo

Garantir que o sistema exiba mensagens de erro claras e visíveis quando o usuário tenta se cadastrar sem preencher todos os campos obrigatórios.