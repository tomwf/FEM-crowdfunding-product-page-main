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
  const card = this.parentNode.parentNode.parentNode;

  if (selectedReward) {
    selectedReward.classList.toggle('card--highlighted'); // Remove previously selected card's outline
    selectedReward.querySelector('.pledge').classList.toggle('pledge--hidden');
  }

  card.classList.toggle('card--highlighted'); // Add outline
  card.querySelector('.pledge').classList.toggle('pledge--hidden');
  selectedReward = card;
});

$('.continue-btn').click(function() {
  const pledgeInput = this.previousElementSibling.querySelector('input');

  if (pledgeInput.value) {
    $('.back-project').toggleClass('back-project--hidden');
    $('.thank-you').toggleClass('thank-you--hidden');
  }
});

$('#gotit-btn').click(function() {
  $('.thank-you').toggleClass('thank-you--hidden');
});

/********** Bookmark button **********/
$('#bookmark-btn').click(function() {
  this.classList.toggle('bookmarked');
});
