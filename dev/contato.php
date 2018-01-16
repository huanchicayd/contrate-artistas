<?php include('header.php') ?>

<main class="contato">
    <section class="contato__banner">
        
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="breadcrumb contato__breadcrumb">
                        Você está em: Home >
                        <span class="breadcrumb__actual-page breadcrumb__active02">Contato</span>
                    </div>
                    <div class="section-title__primary">
                        <h2 class="section-title__title">Solta a voz!</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-7">
                    <div class="contato__text">
                        <h4>Sinta-se livre para conectar-se conosco!</h4>
                        <p>
                            Estaremos prontos para atendê-lo e ajudá-lo a encontrar a atração perfeita para o seu evento.
                        </p>
                    </div>
                    <div class="form-box contato__form-box">
                        <form action="" class="form-box__form">
                            <div class="form-box__wrap">
                                <input type="text" id="name" data-js="form-input" class="form-box__input" required autocomplete="false" pattern="[A-z]{3,}" title="Você deve inserir letras. Deve ser mais de dois caracteres">
                                <label for="name" class="form-box__label">
                                    Nome
                                </label>
                                <span class="form-box__bar"></span>
                            </div>
                            <div class="form-box__wrap">
                                <input type="email" id="email" data-js="form-input" class="form-box__input" required autocomplete="false" pattern="[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                                <label for="email" class="form-box__label">
                                    Email
                                </label>
                                <span class="form-box__bar"></span>
                            </div>
                            <div class="form-box__wrap">
                                <input type="text" id="phone" data-js="form-input" class="form-box__input" required autocomplete="false" pattern="([0-9]{2})[0-9]{4,6}[0-9]{3,4}$">
                                <label for="phone" class="form-box__label">
                                    Telefone
                                </label>
                                <span class="form-box__bar"></span>
                            </div>
                            <div class="form-box__wrap">
                                <textarea name="" id="desc_evento" data-js="form-input" class="form-box__input" required autocomplete="false"></textarea>
                                <label for="desc_evento" class="form-box__label form-box__label-textarea">
                                    Descrição do evento
                                </label>
                                <span class="form-box__bar"></span>
                            </div>
                            <button type="submit" class="btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
                <div class="col-xl-3 offset-xl-2">
                    <div class="contato__social">
                        <a href="#">
                            <i class="icon-facebook"></i>
                        </a>
                        <a href="#">
                            <i class="icon-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="icon-youtube-play"></i>
                        </a>
                        <a href="#">
                            <i class="icon-linkedin"></i>
                        </a>
                    </div>
                    <div class="contato__endereco">
                        <img src="images/pin.svg" alt="" class="contato__icons">
                        <h5 class="contato__endereco__title">Endereço</h5>
                        <address class="contato__endereco__texto">
                             Av das Americas 3333, sl. 202.<br>
                             Barra da Tijuca - Rio de Janeiro, RJ<br> 
                             CEP 22631-003
                        </address>
                    </div>
                    <div class="contato__telefone">
                        <img src="images/phone.svg" alt="" class="contato__icons">
                        <h5 class="contato__telefone__title">Telefones</h5>
                        <p class="contato__telefone__texto">
                            (21) 3185-8766<br>
                            (21) 3049-4910
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="contato__email-img">
                        <img src="images/email.svg" alt="" class="contato__icons">
                    </div>
                </div>
            </div>
            <div class="contato__email">
                <div class="row">
                    <div class="col-xl-3">
                        <div class="contato__email__box">
                            <h5 class="contato__email__title">CEO</h5>
                            <p class="contato__email__text">
                                Michel Kneit <br>
                                michel@contrateartistas.com.br
                            </p>
                        </div>
                        <div>
                            <h5 class="contato__email__title">Produção</h5>
                            <p class="contato__email__text">
                                producao@contrateartistas.com.br
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <h5 class="contato__email__title">Comercial</h5>
                        <p class="contato__email__text contato__email__text--break">
                            Luciana Ramos - Sócia Diretora<br>
                            luciana@contrateartistas.com.br
                        </p>
                        <p class="contato__email__text">
                            Bia da Matta<br>
                            bia@contrateartistas.com.br
                        </p>
                    </div>
                    <div class="col-xl-3">
                        <div class="contato__email__box">
                            <h5 class="contato__email__title">Prefeituras</h5>
                            <p class="contato__email__text">
                                Maria Fernanda Creuza<br>
                                mariafernanda@contrateartistas.com.br
                            </p>
                        </div>
                        <div>
                            <h5 class="contato__email__title">Financeiro</h5>
                            <p class="contato__email__text">
                                financeiro@contrateartistas.com.br
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="contato__email__box">
                            <h5 class="contato__email__title">Jurídico</h5>
                            <p class="contato__email__text">
                                juridico@contrateartistas.com.br
                            </p>
                        </div>
                        <div>
                            <h5 class="contato__email__title">Acessoria de imprensa</h5>
                            <p class="contato__email__text">
                                assessoria@contrateartistas.com.br
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contato__nossos-clientes">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="nossos-servicos">
        <div class="section-title__primary section-title--center">
            <h2 class="section-title__title">Nossos serviços</h2>
        </div>
        <div class="nossos-servicos__wrap">
            <div class="nossos-servicos__corporativo">
                <div class="nossos-servicos__content-left">
                    <h3>Corporativo</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis delectus dolore necessitatibus ipsam quidem voluptatibus
                        ut quod, eaque maiores facere saepe deleniti quasi consectetur soluta, at est aliquam, excepturi vitae!
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
