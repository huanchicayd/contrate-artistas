<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#000000">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="robots" content="nofollow">
    <!-- SEO Meta tags -->
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="web_author" content="Natio Criativo">
    <!--Social: Facebook-->
    <meta property="og:locale" content="pt_BR">
    <meta property="og:url" content="">
    <meta property="og:title" content="">
    <meta property="og:site_name" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="/imagem.jpg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="600">
    <meta property="og:type" content="website">
    <!-- Social: Google+ / Schema.org  -->
    <meta itemprop="name" content="">
    <meta itemprop="description" content="">
    <meta itemprop="image" content="">
    <!--  -->
    <title>Contrate Artistas, A Maior Agência Online de Artistas do Brasil</title>
    <link rel="icon" href="images/favicon.png" />
    <!-- Performance CSS loader / CRP Above the fold -->
    <link inline rel="stylesheet" href="styles/critical.css">
    <!-- Performance CSS Loader / CRP Below the fold -->
    <link rel="preload" href="styles/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <!-- Fallback for css loading on old browsers -->
    <noscript><link rel="stylesheet" href="styles/style.css"></noscript>
    <!-- CSS loader preload for old borwsers -->
    <link rel="stylesheet" href="styles/style.css">
    <!-- <script>
        (function (w) {
                "use strict";
                // rel=preload support test
                if (!w.loadCSS) {
                    w.loadCSS = function () { };
                }
                // define on the loadCSS obj
                var rp = loadCSS.relpreload = {};
                // rel=preload feature support test
                // runs once and returns a function for compat purposes
                rp.support = (function () {
                    var ret;
                    try {
                        ret = w.document.createElement("link").relList.supports("preload");
                    } catch (e) {
                        ret = false;
                    }
                    return function () {
                        return ret;
                    };
                })();

                // if preload isn't supported, get an asynchronous load by using a non-matching media attribute
                // then change that media back to its intended value on load
                rp.bindMediaToggle = function (link) {
                    // remember existing media attr for ultimate state, or default to 'all'
                    var finalMedia = link.media || "all";

                    function enableStylesheet() {
                        link.media = finalMedia;
                    }

                    // bind load handlers to enable media
                    if (link.addEventListener) {
                        link.addEventListener("load", enableStylesheet);
                    } else if (link.attachEvent) {
                        link.attachEvent("onload", enableStylesheet);
                    }

                    // Set rel and non-applicable media type to start an async request
                    // note: timeout allows this to happen async to let rendering continue in IE
                    setTimeout(function () {
                        link.rel = "stylesheet";
                        link.media = "only x";
                    });
                    // also enable media after 3 seconds,
                    // which will catch very old browsers (android 2.x, old firefox) that don't support onload on link
                    setTimeout(enableStylesheet, 1);
                };

                // loop through link elements in DOM
                rp.poly = function () {
                    // double check this to prevent external calls from running
                    if (rp.support()) {
                        return;
                    }
                    var links = w.document.getElementsByTagName("link");
                    for (var i = 0; i < links.length; i++) {
                        var link = links[i];
                        // qualify links to those with rel=preload and as=style attrs
                        if (link.rel === "preload" && link.getAttribute("as") === "style" && !link.getAttribute("data-loadcss")) {
                            // prevent rerunning on link
                            link.setAttribute("data-loadcss", true);
                            // bind listeners to toggle media back
                            rp.bindMediaToggle(link);
                        }
                    }
                };

                // if unsupported, run the polyfill
                if (!rp.support()) {
                    // run once at least
                    rp.poly();

                    // rerun poly on an interval until onload
                    var run = w.setInterval(rp.poly, 500);
                    if (w.addEventListener) {
                        w.addEventListener("load", function () {
                            rp.poly();
                            w.clearInterval(run);
                        });
                    } else if (w.attachEvent) {
                        w.attachEvent("onload", function () {
                            rp.poly();
                            w.clearInterval(run);
                        });
                    }
                }

                // commonjs
                if (typeof exports !== "undefined") {
                    exports.loadCSS = loadCSS;
                }
                else {
                    w.loadCSS = loadCSS;
                }
            }(typeof global !== "undefined" ? global : this));
    </script> -->
</head>
<body>
    <header class="header-wrap" data-js="navbar">
        <div class="header">
            <div class="container">
                <div class="row" data-js="info-parent">
                    <div class="col-xl-4 col-12 header-brand">
                        <button type="button" name="button" class="header-menu-btn" data-js="nav-btn">
                            <span class="header-menu-btn__bar"></span>
                        </button>
                        <a href="index.php">
                            <img src="images/logo.svg" alt="Logotipo da Contrate Artistas">
                        </a>
                    </div>
                    <div class="col-xl-4 header-search" data-js="header-search">
                        <form action="" class="header-search__form" data-js="header-search-form">
                            <input type="search" class="header-search__input" placeholder="Qual atração artística está buscando?">
                            <button class="btn-primary header-search__btn" data-js="header-search-btn"></button>
                        </form>
                    </div>
                    <div class="col-xl-4 col-12 header-info" data-js="header-info">
                        <p class="header-info__atendimento">Atendemos todo o Brasil, de 2ª a 6ª feira, das 8h às 17h.</p>
                        <p class="header-info__telefones">(21) 3049-4910 / (21) 98616-7897</p>
                    </div>
                </div>
            </div>
        </div>
        <nav class="nav-menu__wrap" data-js="nav-menu-wrap">
            <div class="container">
                <div class="nav-menu__menu" data-js="nav-menu">
                    <ul class="nav-menu__list">
                        <li><a href="quem_somos.php" class="nav-menu__links">Quem somos</a></li>
                        <li><a href="corporativo.php" class="nav-menu__links">Corporativo</a></li>
                        <li><a href="particular.php" class="nav-menu__links">Particular</a></li>
                        <li><a href="cases.php" class="nav-menu__links">Cases selecionados</a></li>
                        <li><a href="galeria.php" class="nav-menu__links">Galeria de fotos</a></li>
                        <li><a href="contato.php" class="nav-menu__links">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>