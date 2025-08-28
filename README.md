# StomaHub View

## Front-end da aplicação StomaHub

Estrutura de diretórios deste repositório

![structure](https://github.com/user-attachments/assets/1d12f05c-6287-4c8a-8667-1f1e3b46b085)

Passos para execução em ambiente de desenvolvimento:
  - npm i -y
    (pode ser necessario instalar manualmente o uuid)
    -npm i uuid
  - npm run dev

Para rodar o json-server, use:
  - npx json-server --watch db.json


Comando para execução do storybook:
  - npm run storybook

Comando para execuçao de testes unitários:
  - npm run test

Comando para execução de testes e2e:

  - npx playwright install
  - npx playwright test tests/{nome_do_arquivo}
          Exemplo: npx playwright test tests/{navbar.spec.tsx}
    
Comando para buildar e rodar com service work
  -npx vite build
  -npx serve dist -s


