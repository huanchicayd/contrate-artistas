<?php include('header.php') ?>

<main class="home-content">
    <section class="home-banner">
        <div class="container">
            <h1 class="home-banner__chamada">
                Mais de <strong class="home-banner__highlight-text">1.000 artistas disponíveis</strong> para o seu evento ser um sucesso!
            </h1>
            <form class="home-banner__search-field">
                <input type="search" name="" value="" placeholder="Qual atração artística está buscando?" class="home-banner__search-input">
                <button type="button" name="button" class="btn-primary home-banner__search-btn">Pesquisar</button>
            </form>
            <div class="home-banner__filtros">
                <a href="#" class="home_banner__filtros-option">
                    <img src="images/filtro-show-icon.svg" alt="">
                    Show
                </a>
                <a href="#" class="home_banner__filtros-option">
                    <img src="images/filtro-ator-icon.svg" alt="">
                    Ator
                </a>
                <a href="#" class="home_banner__filtros-option">
                    <img src="images/filtro-atriz-icon.svg" alt="">
                    Atriz
                </a>
                <a href="#" class="home_banner__filtros-option">
                    <img src="images/filtro-celebridade-icon.svg" alt="">
                    Celebridade
                </a>
                <a href="#" class="home_banner__filtros-option">
                    <img src="images/filtro-comediante-icon.svg" alt="">
                    Comediante
                </a>
                <a href="#" class="home_banner__filtros-option">
                    <img src="images/filtro-vertodos-icon.svg" alt="">
                    Todas
                </a>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <aside class="sidebar">
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
                                <input type="checkbox" name="" value="false" id="check-apresentador" class="styled-checkbox">
                                <label for="check-apresentador">Apresentador</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-apresentadora" class="styled-checkbox">
                                <label for="check-apresentadora">Apresentadora</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-ator" class="styled-checkbox">
                                <label for="check-ator">Ator</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-atriz" class="styled-checkbox">
                                <label for="check-atriz">Atriz</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-atleta" class="styled-checkbox">
                                <label for="check-atleta">Atleta</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-celebridade" class="styled-checkbox">
                                <label for="check-celebridade">Celebridade</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-comediante" class="styled-checkbox">
                                <label for="check-comediante">Comediante</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-dj" class="styled-checkbox">
                                <label for="check-dj">DJ</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-infantil" class="styled-checkbox">
                                <label for="check-infantil">Infantil</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-jornalista" class="styled-checkbox">
                                <label for="check-jornalista">Jornalista</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-palestrante" class="styled-checkbox">
                                <label for="check-palestrante">Palestrante</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-show" class="styled-checkbox">
                                <label for="check-show">Show</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-teatro" class="styled-checkbox">
                                <label for="check-teatro">Teatro</label>
                            </div>
                            <div class="sidebar-categorias__checkbox">
                                <input type="checkbox" name="" value="false" id="check-apresentador" class="styled-checkbox">
                                <label for="">Youtuber</label>
                            </div>
                        </form>
                    </div>
                </aside>
            </div>
            <div class="col-lg-8 offset-lg-1">
                <section>
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
                        <button type="button" name="button" class="btn-primary artista-box__button">Orçamento</button>
                        </div>
                    </div>
                    <div class="home-ver-mais">
                        <a href="#">[+] Ver mais</a>
                    </div>
                </section>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <section class="home-clientes">
                    <h2>Nossos clientes</h2>
                    <div class="home-clientes__slider">
                        <img src="" alt="">Alguma coisa 1
                    </div>
                </section>
            </div>
        </div>
    </div>
</main>

<?php include('footer.php') ?>
