<?php include('header.php') ?>

<main class="artistas-especifica">
    <section class="artistas-especifica__artista">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="breadcrumb">
                        Você está em: <a href="index.php">Home</a> <span class="breadcrumb__arrow"></span>
                        <span class="breadcrumb__actual-page breadcrumb__active02">George Henrique e Rodrigo</span>
                    </div>
                    <div class="section-title__primary section-title__primary--flex artistas-especifica__section-title">
                        <h2 class="section-title__title">George Henrique e Rodrigo</h2>
                        <span class="tags">
                            <a href="#">Show</a>
                            <a href="#">Sertanejo</a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-4">
                    <button class="btn-primary artistas-especifica__header-btn">Contato</button>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-8">
                    <div class="artista-video__social-media">
                        <div class="artista-video__social-media__wrap">
                            <div class="artista-video__social-media__circle">
                                <i class="icon-facebook"></i>
                            </div>
                            <p>5kk</p>
                        </div>
                        <div class="artista-video__social-media__wrap">
                            <div class="artista-video__social-media__circle">
                                <i class="icon-twitter"></i>
                            </div>
                            <p>5kk</p>
                        </div>
                        <div class="artista-video__social-media__wrap">
                            <div class="artista-video__social-media__circle">
                                <i class="icon-instagram"></i>
                            </div>
                            <p>5kk</p>
                        </div>
                        <div class="artista-video__social-media__wrap">
                            <div class="artista-video__social-media__circle">
                                <i class="icon-youtube-play"></i>
                            </div>
                            <p>5kk</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-md-12" data-js="artista-especifica-form-wrap">
                     <div class="artistas-especifica__form">
                        <div class="form-box artistas-especifica__form-box">
                            <div class="artistas-especifica__form__header">
                                <div class="artistas-especifica__form__title">
                                    <h3>Solicite um orçamento</h3>
                                </div>
                                <div class="artistas-especifica__form__info">
                                    <p>
                                        Atendimento<br>de excelência
                                    </p>
                                </div>
                            </div>
                            <p class="artistas-especifica__form-box__text">Pedidos de orçamentos enviados até às 17 horas, poderão ser respondidos no mesmo dia.</p>
                            <form action="" class="form-box__form">
                                <div class="form-box__wrap">
                                    <input type="text" id="nome" data-js="form-input" class="form-box__input" required autocomplete="off">
                                    <label for="nome" data-js="form-label" class="form-box__label">
                                        Nome
                                    </label>
                                    <span class="form-box__bar "data-js="active"></span>
                                </div>

                                <div class="form-box__wrap" data-js="form-input-wrap">
                                    <input type="email" id="email" data-js="form-input" class="form-box__input" required autocomplete="off">
                                    <label for="email" data-js="form-label" class="form-box__label">
                                        E-mail
                                    </label>
                                    <span class="form-box__bar " data-js="active"></span>
                                </div>

                                <div class="form-box__wrap" data-js="form-input-wrap">
                                    <input type="phone" id="telefone" data-js="form-input" class="form-box__input" required autocomplete="off">
                                    <label for="telefone" data-js="form-label" class="form-box__label">
                                        Telefone
                                    </label>
                                    <span class="form-box__bar " data-js="active"></span>
                                </div>

                                <div class="form-group__select-wrap">
                                    <div class="form-box__wrap" data-js="form-input-wrap">
                                        <input type="text" id="tipo-evento" data-js="form-input__select-tipo" class="form-box__input-tipo form-box__input form-box__input--select" readonly required autocomplete="off">
                                        <label for="tipo-evento" data-js="form-label" class="form-box__label">
                                            Tipo de evento
                                        </label>
                                        <span class="form-box__bar " data-js="active"></span>
                                    </div>
                                    <div class="form-box__select-menu form-box__select form-box__select-tipo">
                                        <a href="#">Particular (Sou pessoa física)</a>
                                        <a href="#">Corporativo (Sou pessoa jurídica)</a>
                                        <a href="#">Bilheteria (Sou produtor)</a>
                                        <a href="#">Não há evento (Sou fã)</a>
                                        <a href="#">Não há evento (Sou da acessoria de imprensa)</a>
                                    </div>
                                </div>

                                <div class="form-box__wrap" data-js="form-input-wrap">
                                    <input type="text" id="data-evento" data-js="form-input" class="form-box__input" required autocomplete="off">
                                    <label for="data-evento" data-js="form-label" class="form-box__label">
                                        Data do evento
                                    </label>
                                    <span class="form-box__bar " data-js="active"></span>
                                </div>

                                <div class="form-group__select-wrap">
                                    <div class="form-box__wrap" data-js="form-input-wrap">
                                        <input type="text" id="cidade" data-js="form-input__select-cidade" class="form-box__input-cidade form-box__input form-box__input--select" readonly required autocomplete="off">
                                        <label for="cidade" data-js="form-label" class="form-box__label">
                                            Cidade
                                        </label>
                                        <span class="form-box__bar" data-js="active"></span>
                                    </div>
                                    <div class="form-box__select-menu form-box__select form-box__select-cidade">
                                        <a href="#">Rio de Janeiro</a>
                                        <a href="#">São Paulo</a>
                                        <a href="#">Bahia</a>
                                        <a href="#">Santa Catarina</a>
                                        <!-- Carregar dinamicamente os Estados -->
                                    </div>
                                </div>

                                <div class="form-group__select-wrap">
                                    <div class="form-box__wrap" data-js="form-input-wrap">
                                        <input type="text" id="estado" data-js="form-input__select-estado" class="form-box__input-estado form-box__input form-box__input--select" readonly required autocomplete="off">
                                        <label for="estado" data-js="form-label" class="form-box__label">
                                            Estado
                                        </label>
                                        <span class="form-box__bar" data-js="active"></span>
                                    </div>
                                    <div class="form-box__select-menu form-box__select form-box__select-estado">
                                        <a href="#">RJ</a>
                                        <a href="#">SP</a>
                                        <a href="#">BA</a>
                                        <a href="#">SC</a>
                                        <!-- Carregar dinamicamente os Estados -->
                                    </div>
                                </div>

                                <div class="form-box__wrap" data-js="form-input-wrap">
                                    <textarea class="form-box__input" name="" id="" required autocomplete="off"></textarea>
                                    <label for="" data-js="form-label" class="form-box__label">
                                        Descrição
                                    </label>
                                    <span class="form-box__bar " data-js="active"></span>
                                </div>

                                <button class="btn-primary">Orçamento</button>
                            </form>
                        </div>
                     </div>
                </div>
                <div class="col-xl-6 offset-xl-1 col-lg-6 col-md-12">
                    <div class="artista-video__wrap">
                        <div class="artista-video__video-wrap">
                            <video src="" class="artista-video__video"></video>
                            <div class="artista-video__video-play"></div>
                        </div>
                        <div class="artista-video__related-videos">
                            <div class="artista-video__related-videos__item">a</div>
                            <div class="artista-video__related-videos__item">b</div>
                            <div class="artista-video__related-videos__item">c</div>
                            <div class="artista-video__related-videos__item">d</div>
                        </div>
                    </div>
                    <div class="artista-sobre__texto">
                         <h4>Sobre o artista</h4>
                         <p>
                            Há seis anos surgia no mercado fonográfico uma dupla promissora com demonstração de irreverência logo de início, podemos ver isso na inusitada escolha de um posto de gasolina como cenário do primeiro DVD. Ali dava mostras de que George Henrique e Rodrigo marcariam presença. Mas não foi só esta a grande marca da dupla, desde então, emplacaram quatro sucessos em todo o Brasil... <a href="#" class="content-link">Ver mais</a>
                         </p>
                    </div>
                    <div class="artista-sobre__orcamento">
                        <button class="btn-primary artista-sobre__orcamento-button" data-js="btn-orcamento">Solicitar Orçamento</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="artistas-especifica__outras-opcoes">
                        <h4 class="artistas-especifica__outras-opcoes__title">
                            Veja outras opções que a Contrate Artistas selecionou para você!
                        </h4>
                        <p class="artistas-especifica__outras-opcoes__text">
                            Consultoria, comodidade e segurança na Contratação de artistas. Tudo para seu evento ser um sucesso! Não arrisque ter imprevistos
                            com a atração principal do seu evento. Busque quem sabe e conhece. Busque Contrate Artistas. <a href="#" class="content-link">Saiba mais</a>
                        </p>
                        <div class="artistas-especifica__outras__box-artistas home-content__artista-wrap-vertical">
                            <a href="artista_especifica.php" class="artista-box__link artista-box-vertical artista-box-vertical__five-blocks artista-box-vertical__dupla">
                                <div class="artista-box">
                                    <div class="artista-box__profile">
                                        <div class="artista-box__profile__image">
                                            <img src="images/artista-img.jpg" alt="Nome do artista">
                                        </div>
                                        <div class="artista-box__profile-info">
                                            <h2 class="artista-box__profile-title">George Henrique e Rodrigo</h2>
                                            <div class="artista-box__profile-tag">
                                                <span>Show</span>
                                                <span>Comediante</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="artista-box__social-media">
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-facebook"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-twitter"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-instagram"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-youtube-play"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                    </div>
                                    <button type="button" name="button" class="btn-primary artista-box__button">Orçamento</button>
                                </div>
                            </a>
                            <a href="artista_especifica.php" class="artista-box__link artista-box-vertical artista-box-vertical__five-blocks artista-box-vertical__dupla">
                                <div class="artista-box">
                                    <div class="artista-box__profile">
                                        <div class="artista-box__profile__image">
                                            <img src="images/artista-img.jpg" alt="Nome do artista">
                                        </div>
                                        <div class="artista-box__profile-info">
                                            <h2 class="artista-box__profile-title">George Henrique e Rodrigo</h2>
                                            <div class="artista-box__profile-tag">
                                                <span>Show</span>
                                                <span>Comediante</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="artista-box__social-media">
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-facebook"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-twitter"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-instagram"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-youtube-play"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                    </div>
                                    <button type="button" name="button" class="btn-primary artista-box__button">Orçamento</button>
                                </div>
                            </a>
                            <a href="artista_especifica.php" class="artista-box__link artista-box-vertical artista-box-vertical__five-blocks artista-box-vertical__dupla">
                                <div class="artista-box">
                                    <div class="artista-box__profile">
                                        <div class="artista-box__profile__image">
                                            <img src="images/artista-img.jpg" alt="Nome do artista">
                                        </div>
                                        <div class="artista-box__profile-info">
                                            <h2 class="artista-box__profile-title">George Henrique e Rodrigo</h2>
                                            <div class="artista-box__profile-tag">
                                                <span>Show</span>
                                                <span>Comediante</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="artista-box__social-media">
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-facebook"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-twitter"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-instagram"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-youtube-play"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                    </div>
                                    <button type="button" name="button" class="btn-primary artista-box__button">Orçamento</button>
                                </div>
                            </a>
                            <a href="artista_especifica.php" class="artista-box__link artista-box-vertical artista-box-vertical__five-blocks artista-box-vertical__dupla">
                                <div class="artista-box">
                                    <div class="artista-box__profile">
                                        <div class="artista-box__profile__image">
                                            <img src="images/artista-img.jpg" alt="Nome do artista">
                                        </div>
                                        <div class="artista-box__profile-info">
                                            <h2 class="artista-box__profile-title">George Henrique e Rodrigo</h2>
                                            <div class="artista-box__profile-tag">
                                                <span>Show</span>
                                                <span>Comediante</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="artista-box__social-media">
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-facebook"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-twitter"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-instagram"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-youtube-play"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                    </div>
                                    <button type="button" name="button" class="btn-primary artista-box__button">Orçamento</button>
                                </div>
                            </a>
                            <!-- <a href="artista_especifica.php" class="artista-box__link artista-box-vertical artista-box-vertical__five-blocks">
                                <div class="artista-box">
                                    <div class="artista-box__profile">
                                        <div class="artista-box__profile__image">
                                            <img src="images/artista-img.jpg" alt="Nome do artista">
                                        </div>
                                        <div class="artista-box__profile-info">
                                            <h2 class="artista-box__profile-title">George Henrique e Rodrigo</h2>
                                            <div class="artista-box__profile-tag">
                                                <span>Show</span>
                                                <span>Comediante</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="artista-box__social-media">
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-facebook"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-twitter"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-instagram"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                        <div class="artista-box__social-media__wrap">
                                            <div class="artista-box__social-media__icon-wrap">
                                                <i class="icon-youtube-play"></i>
                                            </div>
                                            5.5kk
                                        </div>
                                    </div>
                                    <button type="button" name="button" class="btn-primary artista-box__button">Orçamento</button>
                                </div>
                            </a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="galeria-fotos__nossos-clientes artistas-especifica__galeria-fotos">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section-title__primary section-title--center">
                        <h2 class="section-title__title">Nossos clientes</h2>
                    </div>
                    <div class="nossos-clientes__slider">
                        <a href="#" class="nossos-clientes__item">
                            <img src="images/coca-logo.png" alt="">
                        </a>
                        <a href="#" class="nossos-clientes__item">
                            <img src="images/coca-logo.png" alt="">
                        </a>
                        <a href="#" class="nossos-clientes__item">
                            <img src="images/coca-logo.png" alt="">
                        </a>
                        <a href="#" class="nossos-clientes__item">
                            <img src="images/coca-logo.png" alt="">
                        </a>
                        <a href="#" class="nossos-clientes__item">
                            <img src="images/coca-logo.png" alt="">
                        </a>
                        <a href="#" class="nossos-clientes__item">
                            <img src="images/coca-logo.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="nossos-servicos artistas-especifica__nossos-servicos">
        <div class="section-title__primary section-title--center">
            <h2 class="section-title__title">Nossos serviços</h2>
        </div>
        <div class="nossos-servicos__wrap">
            <div class="nossos-servicos__corporativo">
                <div class="nossos-servicos__content-left">
                    <h3>Corporativo</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis delectus dolore necessitatibus ipsam quidem voluptatibus
                        ut quod, eaque maiores facere saepe deleniti quasi consectetur soluta, at est aliquam, excepturi
                        vitae!
                    </p>
                    <button class="btn-primary nossos-servicos__btn">Saiba mais</button>
                </div>
            </div>
            <div class="nossos-servicos__particular">
                <div class="nossos-servicos__content-right">
                    <h3>Particular</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptates velit mollitia, inventore est officiis explicabo
                        fugiat, ipsa tempora ut, quo odio. Praesentium dolor illo ullam perferendis, modi magnam pariatur!
                    </p>
                    <button class="btn-primary nossos-servicos__btn">Saiba mais</button>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include('footer.php') ?>