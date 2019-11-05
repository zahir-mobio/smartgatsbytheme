import $ from "jquery"
import "bootstrap"
export function onInitialClientRender() {
  $(".nav-custom ul li.dropdown").hover(
    function() {
      $(this)
        .find(".dropdown-menu")
        .stop(true, true)
        .delay(200)
        .fadeIn(500)
    },
    function() {
      $(this)
        .find(".dropdown-menu")
        .stop(true, true)
        .delay(200)
        .fadeOut(500)
    }
  )
  $(document).ready(function() {
    $("[data-toggle=search-form]").click(function() {
      $(".search-form-wrapper").toggleClass("open")
      $(".search-form-wrapper .search").focus()
      $("html").toggleClass("search-form-open")
    })
    $("[data-toggle=search-form-close]").click(function() {
      $(".search-form-wrapper").removeClass("open")
      $("html").removeClass("search-form-open")
    })
    $(".search-form-wrapper .search").keypress(function(event) {
      if ($(this).val() === "Search") $(this).val("")
    })

    $(".search-close").click(function(event) {
      $(".search-form-wrapper").removeClass("open")
      $("html").removeClass("search-form-open")
    })
  })
}
