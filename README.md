<h5>Projeto-de-Acessibildade-Nicoly-Kimberly</h5> 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <p>CineMundo — Filmes</p>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>CineMundo</h1>
    <p>Projeto de Nicoly Kimberly</p>
  </header>

  <nav>
    <a href="#destaques">Destaques</a>
    <a href="#generos">Gêneros</a>
    <a href="#contato">Contato</a>
  </nav>

  <!-- Menu de acessibilidade -->
  <div id="acessibilidade" aria-label="Menu de acessibilidade">
    <button id="aumentar">A+</button>
    <button id="diminuir">A-</button>
    <button id="contraste">Contraste</button>
    <button id="topo">↑ Topo</button>
  </div>

  <main id="conteudo">
    <section id="destaques">
      <h2>Filmes em Destaque</h2>
      <div class="grid">
        <div class="card">🎥 O Poderoso Chefão</div>
        <div class="card">🌌 Interestelar</div>
        <div class="card">🦖 Jurassic Park</div>
        <div class="card">🦸 Vingadores: Ultimato</div>
      </div>
    </section>
    <section id="generos">
      <h2>Principais Gêneros</h2>
      <ul>
        <li>Ação e Aventura</li>
        <li>Comédia</li>
        <li>Drama</li>
        <li>Ficção Científica</li>
        <li>Animação</li>
      </ul>
    </section>
    <section id="contato">
      <h2>Contato</h2>
      <p>Quer sugerir um filme ou dar feedback? Envie uma mensagem!</p>
      <form>
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" name="nome" required><br><br>
        <label for="mensagem">Mensagem:</label><br>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>

  <footer>
    <p>CineMundo — Projeto desenvolvido por Nicoly Kimberly.</p>
  </footer>


</body>
</html>
