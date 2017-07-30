// let hideShow = (toHide = [], toShow = []) => {
//   toHide.forEach(function(item, indx) {
//     $(item).hide()
//   });
//   toShow.forEach(function(item, indx) {
//     $(item).show()
//   });
// };

let createEventListeners = () => {
  $('[data-toggle="tooltip"]').tooltip();

  $('.online-dropdown li > a').on('click', (event) => {
    console.log('event:', event);
    console.log('event.currentTarget:', event.currentTarget.innerHTML);
    $('#online-immersive-opt').text(event.currentTarget.innerHTML);
    if ($('#online-immersive-opt').text() === 'ONLINE') {
      $('img').addClass('filterImg');
      $('img.onlineProg').removeClass('filterImg');
    } else if (($('#online-immersive-opt').text() === 'IMMERSIVE')) {
      $('img').addClass('filterImg');
      $('img.immersiveProg').removeClass('filterImg');
    }

  });

  $('.guarantees-dropdown li > a').on('click', (event) => {
    console.log('event:', event);
    console.log('event.currentTarget:', event.currentTarget.innerHTML);
    $('#guarantees-job-opt').text(event.currentTarget.innerHTML);
  });

  $('.assistance-dropdown li > a').on('click', (event) => {
    console.log('event:', event);
    console.log('event.currentTarget:', event.currentTarget.innerHTML);
    $('#job-assistance-opt').text(event.currentTarget.innerHTML);
  });

  $('.search-btn').on('click', (event) => {
    $('img').removeClass('filterImg');
  });

};

const renderApp = () => {
  createEventListeners();
};

$(document).ready(renderApp);
