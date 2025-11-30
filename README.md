# 🚀 SuperTemplate React (Vite + Shadcn UI)

## O Guia Definitivo para seus Projetos.

Um boilerplate **robusto**, **acessível** e **animado**, configurado com **React 19**, **Vite 7**, **Tailwind CSS v3** e **Shadcn UI**.

![Licença](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-19.0-blue)
![Vite](https://img.shields.io/badge/vite-7.0-purple)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3.4-cyan)

---

Este template não é apenas um ponto de partida; é uma solução completa. Ele destaca as funcionalidades exclusivas que implementamos (Acessibilidade, i18n, Animações) e serve como um guia perfeito para quem for usar este template em projetos de produção.

## ✨ Funcionalidades

Este template vem recheado de funcionalidades prontas para produção:

### ⚡ Core

*   **Vite 7** + **React 19** + **TypeScript** (Configuração estrita).

### 🎨 UI & Design

*   **Shadcn UI**: Componentes instalados e configurados (`/src/components/ui`).
*   **Tailwind CSS**: Variáveis CSS para temas claro/escuro.
*   **Ícones**: Lucide React + React Icons.

### ♿ Acessibilidade Avançada (A11y)

*   Menu de preferências flutuante.
*   Filtros para **Daltonismo** (Protanopia, Deuteranopia, etc).
*   Fonte amigável para **dislexia** (OpenDyslexic toggle).
*   Ajuste de **tamanho de fonte** dinâmico.

### 🌍 Internacionalização (i18n)

*   Suporte nativo a **PT-BR**, **EN** e **ES**.
*   Persistência de idioma no `LocalStorage`.

### ✨ Animações

*   **AOS (Animate On Scroll)**: Elementos surgem ao rolar a tela.
*   **React Rewards**: Confetes e balões para interações de sucesso.

### 🛠 Utilitários

*   Gerenciamento de datas com `date-fns`.
*   Formulários com `react-hook-form` + `zod`.
*   Toasts/Notificações com `sonner`.

## 📦 Tech Stack

As principais bibliotecas incluídas no `package.json`:

| Categoria | Bibliotecas |
| :--- | :--- |
| Core | `react`, `react-dom`, `vite`, `typescript` |
| Estilos | `tailwindcss`, `postcss`, `autoprefixer`, `tailwind-merge`, `clsx`, `tailwindcss-animate` |
| UI Components | `@radix-ui/*`, `shadcn-ui`, `lucide-react`, `react-icons` |
| Forms | `react-hook-form`, `@hookform/resolvers`, `zod` |
| Animações | `aos`, `react-rewards`, `framer-motion`, `tw-animate-css` |
| Utils | `date-fns`, `lodash`, `axios`, `sonner` |
| Charts | `recharts` |
| Drag & Drop | `@dnd-kit/core`, `@hello-pangea/dnd` |

## 🚀 Como Começar

Siga os passos abaixo para ter o projeto rodando localmente.

### 1. Clonar o Repositório

Use este template para criar seu novo projeto:

```bash
git clone https://github.com/seu-usuario/seu-template-react.git nome-do-projeto
cd nome-do-projeto
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Rodar o Servidor de Desenvolvimento

```bash
npm run dev
```

O projeto estará rodando em `http://localhost:5173`.

## 📂 Estrutura de Pastas

A estrutura de pastas principal para o desenvolvimento:

```text
src/
├── components/
│   ├── providers/       # Contextos (Preferences, Theme)
│   ├── ui/              # Componentes Shadcn (Button, Card, Input...)
│   ├── site-header.tsx  # Cabeçalho global
│   ├── site-footer.tsx  # Rodapé global
│   ├── settings-menu.tsx # Menu de Acessibilidade
│   └── ...
├── lib/
│   └── utils.ts         # Utilitário 'cn' para classes
├── styles/              # (Opcional) Estilos globais extras
├── App.tsx              # Página principal (Tech Demo)
├── main.tsx             # Ponto de entrada
└── index.css            # Tailwind directives e Variáveis CSS
```

## 📝 Checklist para Novos Projetos

Ao iniciar um projeto novo a partir deste template, lembre-se de:

1.  **Atualizar o `package.json`**: Mude o `name`, `version` e `description`.
2.  **Limpar o `App.tsx`**: O arquivo atual é uma demonstração técnica. Remova as seções de "Hero", "Features" e "Tech Stack" para começar seu layout.
3.  **Configurar Variáveis de Ambiente**: Crie um arquivo `.env` se for usar serviços externos como Firebase ou Stripe.
4.  **Título e Favicon**: Atualize no `index.html`.

## 🎨 Personalização

### Mudando as Cores (Tema)

O projeto usa variáveis CSS no arquivo `src/index.css`. Para mudar a cor primária (atualmente azul/slate), altere os valores de `--primary`:

```css
/* src/index.css */
:root {
  /* Exemplo: Mudando para Roxo */
  --primary: 262.1 83.3% 57.8%;
  --primary-foreground: 210 40% 98%;
  /* ... */
}
```

### Adicionando Componentes Shadcn

Como o ambiente já está configurado, basta rodar o comando para adicionar novos componentes:

```bash
npx shadcn@latest add nome-do-componente
# Exemplo: npx shadcn@latest add menubar
```

## 🤝 Contribuição

Sinta-se à vontade para abrir [issues](https://github.com/seu-usuario/seu-template-react/issues) ou [pull requests](https://github.com/seu-usuario/seu-template-react/pulls) para melhorar este template base.

## 📄 Licença

Este projeto está sob a [Licença MIT](https://opensource.org/licenses/MIT).
