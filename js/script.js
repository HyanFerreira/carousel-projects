document.addEventListener('DOMContentLoaded', function () {
  // Quando o DOM estiver completamente carregado, execute a função

  var carouselSlide = document.querySelector('.carousel-slide');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  // Obtém as referências para o carrossel, botões "Anterior" e "Próxima"

  function updateBannerSlides() {
    return document.querySelectorAll('.banner-slide');
  }
  // Função que atualiza a lista de slides de banner

  prevBtn.addEventListener('click', function () {
    carouselSlide.insertBefore(
      bannerSlides[bannerSlides.length - 1],
      bannerSlides[0],
    );
    bannerSlides = updateBannerSlides();
  });
  // Manipula o clique no botão "Anterior" e atualiza os slides

  nextBtn.addEventListener('click', function () {
    carouselSlide.appendChild(bannerSlides[0]);
    bannerSlides = updateBannerSlides();
  });
  // Manipula o clique no botão "Próxima" e atualiza os slides

  var bannerSlides = updateBannerSlides();
  // Inicializa a lista de slides de banner

  // Função para avançar o slide automaticamente a cada 5 segundos
  function autoAdvanceSlide() {
    nextBtn.click(); // Simula um clique no botão "Próxima" automaticamente
  }

  // Inicia o intervalo de 5 segundos
  var intervalId = setInterval(autoAdvanceSlide, 5000);

  // A cada 5 segundos, chama a função autoAdvanceSlide para avançar automaticamente

  // Pare o intervalo quando o mouse estiver sobre o carrossel (para evitar interferência do usuário)
  carouselSlide.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });
  // Quando o mouse entra no carrossel, para o intervalo, impedindo a troca automática

  // Continue o intervalo quando o mouse sair do carrossel
  carouselSlide.addEventListener('mouseleave', function () {
    intervalId = setInterval(autoAdvanceSlide, 5000);
  });
  // Quando o mouse sai do carrossel, reinicia o intervalo para continuar a troca automática

  prevBtn.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });

  prevBtn.addEventListener('mouseleave', function () {
    intervalId = setInterval(autoAdvanceSlide, 5000);
  });

  nextBtn.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });

  nextBtn.addEventListener('mouseleave', function () {
    intervalId = setInterval(autoAdvanceSlide, 5000);
  });
});

// script sem comentário:
// document.addEventListener('DOMContentLoaded', function () {
//   var carouselSlide = document.querySelector('.carousel-slide');
//   var prevBtn = document.getElementById('prevBtn');
//   var nextBtn = document.getElementById('nextBtn');

//   function updateBannerSlides() {
//     return document.querySelectorAll('.banner-slide');
//   }

//   prevBtn.addEventListener('click', function () {
//     carouselSlide.insertBefore(
//       bannerSlides[bannerSlides.length - 1],
//       bannerSlides[0],
//     );
//     bannerSlides = updateBannerSlides();
//   });

//   nextBtn.addEventListener('click', function () {
//     carouselSlide.appendChild(bannerSlides[0]);
//     bannerSlides = updateBannerSlides();
//   });

//   var bannerSlides = updateBannerSlides();

//   function autoAdvanceSlide() {
//     nextBtn.click();
//   }

//   var intervalId = setInterval(autoAdvanceSlide, 3000);

//   carouselSlide.addEventListener('mouseenter', function () {
//     clearInterval(intervalId);
//   });

//   carouselSlide.addEventListener('mouseleave', function () {
//     intervalId = setInterval(autoAdvanceSlide, 3000);
//   });
// });
