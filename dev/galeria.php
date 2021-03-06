<?php include('header.php') ?>

<main>
    <section class="galeria-fotos">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="breadcrumb">
                        Você está em: <a href="index.php">Home</a> <span class="breadcrumb__arrow"></span> <span class="breadcrumb__actual-page breadcrumb__active02">Galeria</span>
                    </div>
                    <div class="section-title__primary">
                        <h2 class="section-title__title">Galeria de fotos</h2>
                    </div>
                    <div class="galeria-fotos__filtros">
                        <div class="galeria-fotos__filtros__geral">
                            <a href="#">Corporativo</a>
                            <a href="#">Particular</a>
                            <a href="#">Institucional</a>
                            <a href="#">Todos</a>
                        </div>

                        <!-- Esse pedaço só aparece depois do usuário escolher uma das opções acima -->
                        <!-- <div class="galeria-fotos__filtros__especifico">
                            <a href="#">Shows</a>
                            <a href="#">Presenças VIPS</a>
                            <a href="#">Eventos corporativos</a>
                        </div> -->
                        <!--  -->
                        
                    </div>
                    <div class="galeria-fotos__masonry-wrap">
                        <div class="galeria-fotos__masonry">
                            <a href="images/galeria-fotos_img01.jpg" data-fancybox="corporativo" data-src="#hidden-content" href="javascript:;" class="galeria-fotos__small-block">
                                <img src="images/galeria-fotos_img01.jpg" alt="">
                                <div class="galeria-fotos__overlay overlay-particular">
                                    <div class="galeria-fotos__overlay__content">
                                        <h4>
                                            Título do evento
                                        </h4>
                                        <p>Show</p>
                                    </div>
                                </div>
                            </a>
                            <a href="images/galeria-fotos_img01.jpg" data-fancybox="corporativo" data-src="#hidden-content" href="javascript:;" class="galeria-fotos__small-block">
                                <img src="images/galeria-fotos_img01.jpg" alt="">
                                <div class="galeria-fotos__overlay overlay-institucional">
                                    <div class="galeria-fotos__overlay__content">
                                        <h4>
                                            Título do evento
                                        </h4>
                                        <p>Show</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="galeria-fotos__small-block">
                                <img src="images/galeria-fotos_img01.jpg" alt="">
                                <div class="galeria-fotos__overlay">
                                    <div class="galeria-fotos__overlay__content">
                                        <h4>
                                            Título do evento
                                        </h4>
                                        <p>Show</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="galeria-fotos__large-block">
                                <img src="images/galeria-fotos_img01.jpg" alt="">
                                <div class="galeria-fotos__overlay">
                                    <div class="galeria-fotos__overlay__content">
                                        <h4>
                                            Título do evento
                                        </h4>
                                        <p>Show</p>
                                    </div>
                                </div>
                            </a>
                            <div class="galeria-fotos__col">
                                <a href="#" class="galeria-fotos__small-block galeria-fotos__vertical--block">
                                    <img src="images/galeria-fotos_img01.jpg" alt="">
                                    <div class="galeria-fotos__overlay">
                                        <div class="galeria-fotos__overlay__content">
                                            <h4>
                                                Título do evento
                                            </h4>
                                            <p>Show</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="galeria-fotos__small-block galeria-fotos__vertical--block">
                                    <img src="images/galeria-fotos_img01.jpg" alt="">
                                    <div class="galeria-fotos__overlay">
                                        <div class="galeria-fotos__overlay__content">
                                            <h4>
                                                Título do evento
                                            </h4>
                                            <p>Show</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="ver-mais">
                        <a href="#">[+] Veja mais</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="galeria__image-wrap" style="display: none;" id="hidden-content">
            <div class="galeria__image-container">
                <div class="galeria__image__photo">
                    <img src="images/galeria-fotos_img01.jpg" alt="">
                </div>
                <div class="galeria__image__caption">
                    <div class="galeria__image__caption-header">
                        <h4>Corporativo</h4>
                        <h5>Evento XPTO</h5>
                        <p>15 de maio de 2017</p>
                    </div>
                    <div class="galeria__image__caption-description">
                        <p>
                            [Descrição curta] Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora provident quidem atque obcaecati odit delectus excepturi, impedit officiis incidunt perferendis velit quos fugiat doloremque itaque consequuntur praesentium veniam, corrupti dolor.
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <div class="galeria__image-wrap" style="display: none;" id="hidden-content">
            <div class="galeria__image-container">
                <div class="galeria__image__photo">
                    <img src="images/galeria-fotos_img01.jpg" alt="">
                </div>
                <div class="galeria__image__caption">
                    <div class="galeria__image__caption-header">
                        <h4>Corporativo</h4>
                        <h5>Evento XPTO</h5>
                        <p>15 de mais de 2018</p>
                    </div>
                    <div class="galeria__image__caption-description">
                        <p>
                            [Descrição curta] Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora provident quidem atque obcaecati odit delectus excepturi,
                            impedit officiis incidunt perferendis velit quos fugiat doloremque itaque consequuntur praesentium veniam,
                            corrupti dolor.
                        </p>
        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="galeria-fotos__nossos-clientes">
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
    <section class="nossos-servicos">
        <div class="section-title__primary section-title--center">
            <h2 class="section-title__title">Nossos serviços</h2>
        </div>
        <div class="nossos-servicos__wrap">
            <div class="nossos-servicos__corporativo">
                <div class="nossos-servicos__content-left">
                    <h3>Corporativo</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis delectus dolore necessitatibus ipsam quidem voluptatibus ut quod, eaque maiores facere saepe deleniti quasi consectetur soluta, at est aliquam, excepturi vitae!
                    </p>
                    <button class="btn-primary nossos-servicos__btn">Saiba mais</button>
                </div>
            </div>
            <div class="nossos-servicos__particular">
                <div class="nossos-servicos__content-right">
                    <h3>Particular</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptates velit mollitia, inventore est officiis explicabo fugiat, ipsa tempora ut, quo odio. Praesentium dolor illo ullam perferendis, modi magnam pariatur!
                    </p>
                    <button class="btn-primary nossos-servicos__btn">Saiba mais</button>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include('footer.php') ?>
