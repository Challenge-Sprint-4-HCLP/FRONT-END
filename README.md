# HTML Challenge Sprint 4

> Plataforma web para gestão de agendamentos, com foco em experiência do usuário e organização operacional.

## Equipe

| Aluno | RM | Sala |
| ----- | -- | ---- |
| Leonardo Zerbinatti de Sales | 562992 | 1TDSPH |
| Lucas Tavares Dagrosa | 563424 | 1TDSPG |
| Henrique Gonçalves Pacheco Costa | 562086 | 1TDSPK |

## Índice

- [Visão Geral](#visão-geral)
- [Formação do Código](#formação-do-código)
- [Tecnologias Principais](#tecnologias-principais)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Fluxo do Usuário](#fluxo-do-usuário)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Padrões de Qualidade](#padrões-de-qualidade)
- [Como Executar Localmente](#como-executar-localmente)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Próximos Passos Sugeridos](#próximos-passos-sugeridos)
- [Referências Futuras](#referências-futuras)

## Visão Geral

O projeto entrega uma aplicação React + TypeScript construída com Vite, preparada para controlar o ciclo de vida de agendamentos, incluindo cadastro de usuários, visualização de histórico, lembretes e fluxos de reagendamento. A proposta central é oferecer um painel intuitivo que permita às equipes administrativas monitorar métricas rapidamente e aos usuários finais reservar horários com facilidade.

## Formação do Código

- **Componentização:** páginas em `src/pages` são responsáveis por orquestrar fluxos completos (por exemplo, `AppointmentForm` ou `Dashboard`). Componentes menores podem ser extraídos conforme a complexidade cresce.
- **Hooks e Gerenciamento de Estado:** hooks do React (`useState`, `useEffect`) organizam estados locais e efeitos colaterais, mantendo os componentes previsíveis. A arquitetura já está pronta para evoluir para soluções globais (Context API, Zustand, Redux) caso necessário.
- **Camada de Serviços:** arquivos em `src/api` encapsulam o consumo de dados. Hoje funcionam como mocks, mas servem de ponto único de integração com um backend real, reduzindo o acoplamento.
- **Tipagem Estrita:** o uso de TypeScript garante checagem estática, diminui erros em tempo de execução e documenta contratos entre componentes.
- **Estilização:** estilos globais vivem em `src/index.css` e `style.css`. A convenção incentiva classes semânticas e preparação para responsividade mobile-first.
- **Build e Otimização:** Vite proporciona hot module replacement rápido e bundling eficiente, enquanto os arquivos `tsconfig*.json` asseguram configurações consistentes para desenvolvimento e produção.

## Tecnologias Principais

- React 18 (biblioteca de UI declarativa)
- TypeScript 5 (tipagem estática e tooling avançado)
- Vite (ferramenta de build e dev server)
- CSS moderno (flexbox, variáveis, etc.)
- Node.js + npm (gerenciamento de dependências e scripts)

## Estrutura de Pastas

```
HTML Challenge Sprint 4/
├── src/
│   ├── api/                # mocks e serviços de dados
│   ├── pages/              # telas principais (Home, Dashboard, Login, etc.)
│   ├── App.tsx             # composição das rotas e layout base
│   ├── main.tsx            # ponto de entrada ReactDOM
│   └── index.css           # estilos globais
├── style.css               # estilos adicionais compartilhados
├── package.json            # scripts, dependências e metadados
├── tsconfig*.json          # configuração TypeScript
└── vite.config.ts          # ajustes de build e dev server
```

## Fluxo do Usuário

1. **Autenticação:** o usuário acessa `Login` para entrar no sistema. A lógica atual pode ser alimentada com dados mock e está pronta para integração real.
2. **Dashboard Geral:** após o login, o painel apresenta KPIs e atalhos para seções críticas (ex.: criação de agendamento, lembretes).
3. **Gestão de Agendamentos:** pelos módulos `AppointmentForm`, `RescheduleCancel` e `Reminders`, é possível criar, reagendar, cancelar e configurar notificações.
4. **Histórico:** em `History`, registros passados são listados, permitindo auditoria e análise.
5. **Administração de Usuários:** `UserManagement` auxilia na criação/edição de perfis internos, com filtros básicos e suporte a futuras regras de acesso.

## Funcionalidades Implementadas

- Cadastro e edição de agendamentos.
- Visualização de métricas gerais em dashboard.
- Histórico de consultas com possibilidade de filtragem.
- Reagendamento e cancelamento com feedback ao usuário.
- Lembretes configuráveis para reduzir absenteísmo.
- Painel de gerenciamento de usuários internos.

## Padrões de Qualidade

- **Responsividade:** componentes pensados para adaptação progressiva em telas menores; recomenda-se validar continuamente em diferentes breakpoints.
- **Acessibilidade:** estrutura semântica e possibilidade de evolução com atributos WAI-ARIA. Sugere-se auditoria com Lighthouse.
- **Organização de Código:** separação clara entre lógica (TS/JS), apresentação (CSS/JSX) e camada de dados.
- **Testabilidade:** arquitetura preparada para adoção de testes unitários (React Testing Library) e E2E (Playwright/Cypress).

## Como Executar Localmente

> Pré-requisitos: Node.js 18+ e npm instalados.

1. Clone o repositório ou baixe o pacote.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:5173` no navegador.

### Variáveis de Ambiente (opcional)

- Crie `.env.local` caso precise configurar endpoints reais, por exemplo:
  ```
  VITE_API_BASE_URL=https://api.seudominio.com
  ```

## Scripts Disponíveis

| Script | Descrição |
| ------ | --------- |
| `npm run dev` | Executa o servidor de desenvolvimento com hot reload. |
| `npm run build` | Gera a versão otimizada para produção. |
| `npm run preview` | Serve a build de produção para testes locais. |
| `npm run lint` *(quando configurado)* | Executa verificações estáticas de código. |

## Próximos Passos Sugeridos

- Integrar API real e migrar mocks para chamadas HTTP com tratamento de erros.
- Implementar autenticação segura (JWT, refresh tokens, rotas protegidas).
- Criar testes unitários e E2E cobrindo fluxos críticos.
- Refinar responsividade, acessibilidade e internacionalização.
- Automatizar deploy (CI/CD) para staging/produção.

## Referências Futuras

- Documentação React: <https://react.dev>
- Guia TypeScript: <https://www.typescriptlang.org/docs/>
- Vite: <https://vitejs.dev/guide/>
- Boas práticas de UX em agendamentos: pesquisas de mercado e guidelines de design para sistemas administrativos.

---

Projeto desenvolvido por Leonardo, Lucas e Henrique como parte do Sprint 4 do desafio HTML. O objetivo continua sendo evoluir a aplicação para um produto completo, seguro e escalável.
