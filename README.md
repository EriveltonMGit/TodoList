# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Ignorar node_modules e a pasta de build
node_modules/
dist/

# Ignorar arquivos de variáveis de ambiente
.env
.env.local
.env.*.local

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Cache do Vite
.vite/

# Arquivos específicos do MacOS
.DS_Store

# Opcional: Ignorar arquivos específicos do editor e do sistema operacional
*.sublime-project
*.sublime-workspace
.vscode/
.idea/
Thumbs.db

# Opcional: Ignorar arquivos temporários ou gerados
*.tmp
*.temp

# Ignorar cache do SCSS, se aplicável
.sass-cache/
