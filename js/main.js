$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $(".home-image path");
  let modal = $(".modal");
  let modalCloseButton = $(".modal-close-button");
  let showFlatsButton = $(".show-flats");

  floorPath.on("click", toggleModal);
  showFlatsButton.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);

  // подсвечивание этажа при наведении мышки
  floorPath.on("mouseover", function () {
    // удаляем активный класс у всех этажей
    floorPath.removeClass("current-floor");
    // получаем значение текущего этажа
    currentFloor = $(this).attr("data-floor");
    // записываем значение этажа в счетчик
    $(".counter").text(currentFloor);
  });

  // подсвечивание этажа при клике мышкой
  $(".counter-up").on("click", function () {
    // увеличиваем текущий этаж на 1 если нужно
    currentFloor < 18 ? currentFloor++ : (currentFloor = 18);
    // форматируем значение текущего этажа к двум цифрам
    usCurrentFloor = currentFloor.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    // устанавливаем значение текущего этажа в счетчик
    $(".counter").text(usCurrentFloor);
    // удаляем активный класс у всех этажей
    floorPath.removeClass("current-floor");
    // устанавливаем активный класс у нужного этажа
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  });

  $(".counter-down").on("click", function () {
    currentFloor > 2 ? currentFloor-- : (currentFloor = 2);
    usCurrentFloor = currentFloor.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  });

  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
