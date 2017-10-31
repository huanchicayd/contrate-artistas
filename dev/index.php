<?php include('header.php') ?>

<div class="header-banner">
  <div class="container">
    <h1 class="header-banner__chamada">Mais de <strong class="header-banner__highlight-text">1.000 artistas disponíveis</strong> para o seu evento ser um sucesso!<br> Mais de para o seu evento ser um sucesso!</h1>

    <form class="header-banner__search-field">
      <input type="search" name="" value="" placeholder="Qual atração artística está buscando?" class="header-banner__search-input">
      <button type="button" name="button" class="header-banner__search-btn">Pesquisar</button>
    </form>

    <div class="header-banner__filtros">
      <a href="#" class="header_banner__filtros-option">
        <img src="images/filtro-show-icon.svg" alt="">
        Show
      </a>
      <a href="#" class="header_banner__filtros-option">
        <img src="images/filtro-ator-icon.svg" alt="">
        Ator
      </a>
      <a href="#" class="header_banner__filtros-option">
        <img src="images/filtro-atriz-icon.svg" alt="">
        Atriz
      </a>
      <a href="#" class="header_banner__filtros-option">
        <img src="images/filtro-celebridade-icon.svg" alt="">
        Celebridade
      </a>
      <a href="#" class="header_banner__filtros-option">
        <img src="images/filtro-comediante-icon.svg" alt="">
        Comediante
      </a>
      <a href="#" class="header_banner__filtros-option">
        <img src="images/filtro-vertodos-icon.svg" alt="">
        Todas
      </a>
    </div>
  </div>
</div>
<div class="home-content">
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="sidebar">
          <div class="sidebar-stats">
            <span class="sidebar-stats__number">302821</span> atrações artísticas
          </div>
          <div class="sidebar-search">
            <h3>Palavra-chave</h3>
            <form class="" action="index.html" method="post">
              <input type="search" name="" value="" placeholder="Campanha, Presença VIP...." class="sidebar-search__input">
            </form>
          </div>
          <div class="sidebar-categorias">
            <h3>Todas as categorias</h3>
            <form class="" action="index.html" method="post">
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Apresentador</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Apresentadora</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Ator</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Atriz</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Atleta</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Celebridade</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Comediante</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">DJ</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Infantil</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Jornalista</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Palestrante</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Show</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Teatro</label>
              </div>
              <div class="sidebar-categorias__checkbox">
                <input type="checkbox" name="" value="false">
                <label for="">Youtuber</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div>
          <div class="home-content__filtros">
            <button>
              <i class="icon-view-grid"></i>
            </button>
            <button>
              <i class="icon-view-list"></i>
            </button>
          </div>
          <div class="home-content__artista-wrap">
            <div class="artista-box">
              <div class="artista-box__profile">
                <img src="images/artista-img.jpg" alt="Nome do artista">
                <div class="artista-box__profile-info">
                  <h2 class="artista-box__profile-title">George Henrique e Rodrigo</h2>
                  <div class="artista-box__profile-tag">
                    <span>Show</span>
                  </div>
                </div>
              </div>
              <div class="artista-box__social-media">
                <a href="#">
                  <div class="artista-box__social-media__icon-wrap">
                    <i class="icon-facebook"></i>
                  </div>
                  5.5kk
                </a>
                <a href="#">
                  <div class="artista-box__social-media__icon-wrap">
                    <i class="icon-twitter"></i>
                  </div>
                  5.5kk
                </a>
                <a href="#">
                  <div class="artista-box__social-media__icon-wrap">
                    <i class="icon-instagram"></i>
                  </div>
                  5.5kk
                </a>
                <a href="#">
                  <div class="artista-box__social-media__icon-wrap">
                    <i class="icon-youtube-play"></i>
                  </div>
                  5.5kk
                </a>
              </div>
              <button type="button" name="button" class="artista-box__button">Orçamento</button>
            </div>
          </div>
        </div>
        <div class="home-ver-mais">
          [+] Ver mais
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 home-clientes">
        <h2>Nossos clientes</h2>
      </div>
    </div>
  </div>
</div>

<?php include('footer.php') ?>
