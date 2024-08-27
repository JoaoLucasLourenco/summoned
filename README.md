# Summoned
 
---

# RPG Frontend Training App

Este é um projeto focado no desenvolvimento de habilidades frontend utilizando Next.js, voltado para jogadores de RPG. O objetivo é criar uma aplicação web moderna e interativa que ofereça uma experiência envolvente para os usuários.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de páginas estáticas.
- **React Hooks**: Para gerenciamento de estados e funcionalidades reutilizáveis.
- **Tailwind**: Para estilização dos componentes.
- **usePagination Hook**: Um hook personalizado criado para gerenciar a paginação no fluxo de cadastro.

## Funcionalidades Implementadas

### 1. **Página de Login**

A página de login foi desenvolvida com foco em uma experiência de usuário fluida e intuitiva. O design é responsivo, garantindo uma boa usabilidade em diferentes dispositivos.

- **Campos de entrada** para e-mail e senha.
- **Validação de formulário - Falta implementar** básica para garantir que os campos sejam preenchidos corretamente.
- **Feedback visual - Falta implementar** em caso de erro no login.

#### Screenshot da Página de Login
![Login Page](frontend\public\loginUi.png)

### 2. **Página de Cadastro com Paginação**

O processo de cadastro foi dividido em etapas, utilizando o hook personalizado `usePagination` para gerenciar a navegação entre as páginas do formulário. Isso proporciona uma experiência de usuário mais suave e menos sobrecarregada.

- **Multistep Form**: O formulário de cadastro é dividido em etapas, tornando o processo mais organizado.
- **Validação de formulário** em cada etapa, garantindo que os dados sejam preenchidos corretamente antes de avançar para a próxima etapa e reduzindo o atrito do usuário.
- **Navegação fluida** entre as etapas do cadastro.

#### Screenshot da Página de Cadastro
![Cadastro Page Step 1 : Nome](frontend\public\registerUiName.png)
![Cadastro Page Step 2 : Email](frontend\public\registerUiEmail.png)
![Cadastro Page Step 3 : Senha](frontend\public\registerUiSenha.png)

## Próximos Passos

- **Integração com API**: Conectar as páginas de login e cadastro com uma API para autenticação e armazenamento de dados.
- **Dashboard**: Criar uma interface para que os jogadores possam gerenciar seus perfis e personagens.
- **Design e Estilização**: Melhorar o design visual, incluindo temas e personalização para jogadores de RPG.
- **Animações CSS**: Utilizar a biblioteca 
- **Funcionalidades Adicionais**: Implementar funcionalidades específicas para jogadores de RPG, como gerenciamento de personagens e aventuras.

## Como Executar o Projeto

Para rodar o projeto localmente:

1. Clone o repositório:
    ```bash
    git clone https://github.com/JoaoLucasLourenco/summoned.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4. Acesse a aplicação em:
    ```
    http://localhost:3000
    ```

## Contribuições

Contribuições são bem-vindas! Se você tem sugestões, melhorias ou novas ideias, sinta-se à vontade para abrir uma issue ou enviar um pull request.



---

