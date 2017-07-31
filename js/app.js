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

  console.log($('#online-immersive-opt').text());
  console.log($('#job-guarantee-opt').text());
  console.log($('#job-assistance-opt').text());
  $('.online-dropdown li > a').on('click', (event) => {
    console.log('event:', event);
    console.log('event.currentTarget:', event.currentTarget.getAttribute('data-opt-value'));
    careerTrack = event.currentTarget.getAttribute('data-opt-value');
    $('#online-immersive-opt').text(event.currentTarget.innerHTML);

  });

  $('.guarantee-dropdown li > a').on('click', (event) => {
    console.log('event:', $('#job-guarantee-opt'));
    console.log('event.currentTarget:', event.currentTarget.getAttribute('data-opt-value'));
    jobGuarantee = event.currentTarget.getAttribute('data-opt-value');
    $('#job-guarantee-opt').text(event.currentTarget.innerHTML);

  });

  $('.assistance-dropdown li > a').on('click', (event) => {
    console.log('event:', event);
    console.log('event.currentTarget:', event.currentTarget.getAttribute('data-opt-value'));
    jobAssistance = event.currentTarget.getAttribute('data-opt-value');
    $('#job-assistance-opt').text(event.currentTarget.innerHTML);
  });

  $('.search-btn').on('click', (event) => {

    let careerTrackSelector = '';
    if (careerTrack !== 'ONLINE / IMMERSIVE') {
      careerTrackSelector = `.${careerTrack}`;
    }
    console.log('careerTrack, careerTrackSelector:', careerTrack, careerTrackSelector);


    let jobGuaranteeSelector = '';
    if (jobGuarantee !== 'JOB GUARANTEE') {
      jobGuaranteeSelector = `.${jobGuarantee}`;
    }
    console.log('jobGuarantee, jobGuaranteeSelector:', jobGuarantee, jobGuaranteeSelector);


    let jobAssistanceSelector = '';
    if (jobAssistance !== 'JOB ASSISTANCE') {
      jobAssistanceSelector = `.${jobAssistance}`;
    }
    console.log('jobAssistance, jobGuaranteeSelector:', jobAssistance, jobGuaranteeSelector);

    let combinedSelector = careerTrackSelector + jobGuaranteeSelector + jobAssistanceSelector;
    console.log('combinedSelector:', combinedSelector);

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
