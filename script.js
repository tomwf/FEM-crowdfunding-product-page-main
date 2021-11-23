/********** Mobile Menu **********/
$('#hamburger-btn').click(function() {
  $('.menu__wrapper').toggleClass('menu__wrapper--hidden');
});
// Close mobile menu on click outside
$('.menu__wrapper').click(function() {
  $(this).toggleClass('menu__wrapper--hidden');
});

/********** Modal window popup **********/
$('#back-project').click(function() {
  $('.back-project').toggleClass('back-project--hidden');
  $('input[name="radio"]').prop('checked', false);   // Uncheck all radio buttons
});

$('#close-btn').click(function() {
  $('.back-project').toggleClass('back-project--hidden');
});
// Selected card's outline behaviour
let selectedReward;
$('input[name=radio]').change(function() {
  const card = this.parentNode.parentNode;

  if (selectedReward) {
    selectedReward.classList.toggle('card--highlighted'); // Remove previously selected card's outline
  }

  card.classList.toggle('card--highlighted'); // Add outline
  selectedReward = card;
});
