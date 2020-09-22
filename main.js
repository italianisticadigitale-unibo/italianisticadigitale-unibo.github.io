jQuery(document).ready(function() {
    navScroll();
    activeMove();
    navItems();
    scopriDiPiu();
    seeDayProgram();
    //privacy();
    modals();
});

/* Hide del logo mentre si scrolla la pagina e show quando si torna all'inizio della pagina */
function navScroll() {
    $(window).scroll(function() {
        $(".navbar-brand > img").hide();
        if ($(window).scrollTop() < 50) {
            $(".navbar-brand > img").show();
        }
    })
}

/* Spostamento dell'active in navbar in base allo scroll della pagina */
function activeMove() {
    var heightHome = $("#home").offset().top;
    var heightAbout = $("#about").offset().top;
    var heightProgramma = $("#programma").offset().top;
    var heightRelatori = $("#relatori").offset().top;
    var heightCollegati = $("#collegati").offset().top;
    var heightContatti = $("#contatti").offset().top;
    var heightStrumenti = $("#strumenti").offset().top;
    $(window).scroll(function() {
        var windowPos = window.pageYOffset;
        if (windowPos > heightHome) {
            $(".home-li").addClass("active");
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
            $(".strumenti-li").removeClass("active");
        } 
        if (windowPos > heightAbout) {
            $(".home-li").removeClass("active");
            $(".about-li").addClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
            $(".strumenti-li").removeClass("active");
        } 
        if (windowPos > heightProgramma) {
            $(".about-li").removeClass("active");
            $(".programma-li").addClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
            $(".strumenti-li").removeClass("active");
        }
        if (windowPos > heightRelatori) {
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").addClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
            $(".strumenti-li").removeClass("active");
        }
        if (windowPos > heightCollegati) {
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").addClass("active");
            $(".contatti-li").removeClass("active");
            $(".strumenti-li").removeClass("active");
        }
        if (windowPos > heightContatti) {
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").addClass("active");
            $(".strumenti-li").removeClass("active");
        }
        if (windowPos > heightStrumenti) {
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
            $(".strumenti-li").addClass("active");
        }
    })
}

/* Nav items scroll fino al corrispondente id */
function navItems() {
    $(".nav-item").click(function() {
        var divItem = $(this).attr("value");
        //$("a[value!='" + divItem + "']").parent().removeClass("active");  // non cancellare, potrebbe servire in altri progetti
        //$("a[value='" + divItem + "']").parent().addClass("active");
        $("html, body").animate({
            scrollTop: $("#" + divItem).offset().top + 1
          }, 800
        )
    })
}

/* Scopri di più */
function scopriDiPiu() {
    $("#find-more").click(function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top + 1
          }, 800
        )
    })
}

/* Buttoni per mostrare il giorno 1 e il giorno 2 di programma */
function seeDayProgram() {
    $("#1st-program").click(function() {
        $(".1st-day-program").show();
        $(".2nd-day-program").hide();
        $("#1st-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
        $("#2nd-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
    })
    $("#2nd-program").click(function() {
        $(".1st-day-program").hide();
        $(".2nd-day-program").show();
        $("#1st-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
        $("#2nd-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
    })
}

/* Privacy */ // non cancellare, potrebbe servire in altri progetti
/*function privacy() {
    $("#privacy-button").click(function(){
        $("#privacy-info").toggle("slow");
    })
}*/

/* Comando copy */
function copyURL() {
    var copyText = document.getElementById("copyURL");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("copiedAlert").style.display = "block";
}

/* Avviso che l'URL è stato copiato */
function outFunc() {
    document.getElementById("copiedAlert").style.display = "none";
}

/* Modali per gli abstract */
function modals() {
    $(".abstract").click(function() {
        var target = ($(this).attr("target"));
        var file;
        file = ("abstract/" + target + ".html");
        $("#modal-div").load(file);
        modal.show();
    })
}