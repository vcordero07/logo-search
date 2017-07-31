//LABELS
//JG JOB GUARANTEE
//JA JOB ASSISTANCE
//OP ONLINE PROGRAM
//IP IMMERSIVE PROGRAM
let careerTrack = 'ONLINE / IMMERSIVE';
let jobGuarantee = 'JOB GUARANTEE';
let jobAssistance = 'JOB ASSISTANCE';

let createEventListeners = () => {
  $('[data-toggle="tooltip"]').tooltip();

  $('.online-dropdown li > a').on('click', (event) => {
    careerTrack = event.currentTarget.getAttribute('data-opt-value');
    $('#online-immersive-opt').text(event.currentTarget.innerHTML);

  });

  $('.guarantee-dropdown li > a').on('click', (event) => {
    jobGuarantee = event.currentTarget.getAttribute('data-opt-value');
    $('#job-guarantee-opt').text(event.currentTarget.innerHTML);

  });

  $('.assistance-dropdown li > a').on('click', (event) => {
    jobAssistance = event.currentTarget.getAttribute('data-opt-value');
    $('#job-assistance-opt').text(event.currentTarget.innerHTML);
  });

  $('.search-btn').on('click', (event) => {
    let careerTrackSelector = '';
    if (careerTrack !== 'ONLINE / IMMERSIVE') {
      careerTrackSelector = `.${careerTrack}`;
    }

    let jobGuaranteeSelector = '';
    if (jobGuarantee !== 'JOB GUARANTEE') {
      jobGuaranteeSelector = `.${jobGuarantee}`;
    }

    let jobAssistanceSelector = '';
    if (jobAssistance !== 'JOB ASSISTANCE') {
      jobAssistanceSelector = `.${jobAssistance}`;
    }

    let combinedSelector = careerTrackSelector + jobGuaranteeSelector + jobAssistanceSelector;

    if (combinedSelector === "") {
      $('.logo-container img').addClass('active');
    } else {
      $('.logo-container img').removeClass('active');
      $(combinedSelector).addClass('active');
    }
  });

};

const renderApp = () => {
  createEventListeners();
};

$(document).ready(renderApp);
