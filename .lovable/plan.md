# Plano: HTML standalone para AngoWeb (Sitejet Builder)

O Sitejet Builder (motor do AngoWeb) não possui um "código de partilha" que importe um site externo automaticamente. A forma fiável de levar este site para lá é gerar **um único ficheiro HTML autocontido** com todas as imagens embutidas em Base64, e colar o seu conteúdo num bloco **"HTML Personalizado / Código"** dentro do Sitejet.

## O que vou entregar

1. **`utchileza-angoweb.html`** — ficheiro único contendo:
   - Todas as secções actuais do site (Hero, Sobre, Serviços, Serviços Certificados com sector petrolífero, Diferenciais, Projectos, Mensagem do Director, Contacto, Footer).
   - CSS inline (sem dependências externas).
   - Todas as imagens (`hero-architecture`, `surveying`, `crane`, `heavy-machinery`, `skyscraper`, `petroleo-plataforma`, logo, etc.) convertidas para Base64 e embutidas em `<img src="data:image/jpeg;base64,...">`.
   - Botão flutuante de WhatsApp para `+244 923 978 800`.
   - Tipografia carregada via Google Fonts CDN (única dependência externa, necessária para manter o visual).

2. **Instruções de colagem no Sitejet/AngoWeb**, incluindo:
   - Como adicionar o widget **"Código Personalizado" / "HTML"** numa página em branco.
   - Onde colar o conteúdo (`<body>` interno vs ficheiro completo).
   - Como definir a página como "página inteira" sem o cabeçalho/rodapé do template do AngoWeb, se desejado.

## Como vou produzir o ficheiro

- Script Node em `/tmp/build_angoweb.mjs` que:
  - Lê os componentes em `src/components/site/*` e monta o HTML estático equivalente.
  - Lê cada imagem em `src/assets/`, converte para Base64 e injecta inline.
  - Minifica o CSS resultante.
- Saída final em `/mnt/documents/utchileza-angoweb.html` com tag `<presentation-artifact>` para download.

## Limitações a comunicar ao utilizador

- O ficheiro será grande (≈ 3–6 MB) por causa das imagens Base64 — normal para esta abordagem.
- Animações JS complexas do site original ficam simplificadas (apenas CSS).
- Edição posterior dentro do Sitejet será limitada a texto/HTML — não terá os blocos visuais nativos do AngoWeb.

Após a sua aprovação, gero o ficheiro e envio o link de download.
