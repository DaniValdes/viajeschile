/* SMOOTH SCROLL */

$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top 
            },
            3000
        )
    })

})

/* TOOLTIP A CARDS DE SECCION DESTACADOS */
$(function(){

    $('[data-bs-toggle="tooltip"]').tooltip()

})

/* POPOVER AL BOTON ENVIAR EN SECCION CONTACTO */
$(function () {
    $('[data-toggle="popover"]').popover()
  })

