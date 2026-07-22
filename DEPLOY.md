# Deploy — GitHub → Node.js → cPanel (manual)

Fluxo recomendado para publicar o site em `https://www.utchileza.ao/`.

## 1. GitHub

O código do projecto está sincronizado automaticamente pela Lovable com o repositório GitHub ligado (menu `+` → GitHub). Cada alteração feita no editor é comitada.

Verificações já garantidas no repo:
- `package.json` com script `npm run build`
- `.nvmrc` a fixar **Node 20**
- `.gitignore` a excluir `node_modules/` e `dist/`
- `public/.htaccess` incluído no build (copiado para `dist/.htaccess`)
- `vite.config.ts` com `base: "./"` → caminhos relativos, funciona em qualquer subpasta

## 2. Node.js (build local ou em CI)

Requisitos: **Node 20+** e **npm 10+**.

```bash
git clone https://github.com/<owner>/<repo>.git utchileza
cd utchileza
npm ci          # instala exactamente o que está no lockfile
npm run build   # gera a pasta dist/
```

No fim, a pasta `dist/` contém:
```
dist/
├── index.html
├── .htaccess           ← SPA fallback + HTTPS + cache
├── favicon.ico
├── robots.txt
└── assets/
    ├── index-*.js
    ├── index-*.css
    └── *.jpg / *.png
```

## 3. cPanel — upload manual

1. Entre no cPanel → **Gestor de Ficheiros** → `public_html/`.
2. Apague o conteúdo antigo (ou faça backup).
3. Faça upload de **todo o conteúdo da pasta `dist/`** (não a pasta em si — os ficheiros directamente dentro de `public_html/`).
4. Confirme que o `.htaccess` foi enviado (ficheiros ocultos → activar "Show Hidden Files" no cPanel).
5. Aceda a `https://www.utchileza.ao/` — deve carregar imediatamente.

### Rotas SPA (`/sobre`, `/servicos`, `/projectos`)
Funcionam automaticamente graças ao SPA fallback no `.htaccess`. Se receber 404, confirme que o módulo `mod_rewrite` do Apache está activo (está por defeito na AngoWeb).

## Erros comuns e resolução

| Erro | Causa | Solução |
|------|-------|---------|
| Página em branco | `base` errado no Vite | Já resolvido: `base: "./"` |
| 404 em `/sobre` | `.htaccess` não subiu | Reenviar mostrando ficheiros ocultos |
| MIME type `text/html` para `.js` | Apache sem MIME | `.htaccess` já define |
| Node.js Selector falha | Versão antiga | Este site é **estático** — não precisa de correr Node no cPanel, apenas servir `dist/` |

## Nota importante

O site é **100 % estático** depois do build. **Não é necessário** activar a aplicação Node.js do cPanel — Node só é usado na fase de build (passo 2). O cPanel apenas serve os ficheiros HTML/CSS/JS/imagens.
