const body_selections = document.querySelectorAll('.body-section');
let temporizador;
document.addEventListener('DOMContentLoaded', (event) => {
  Array.from(body_selections).forEach((body_selection, index) => {
      let roundabout = Array.from(body_selection.parentNode.childNodes[1].children);
      let i = 0;
      let j;
      body_selection.addEventListener('mouseover', (event) => {
          if (body_selection.classList.contains("body-section_FadeOut")) {
            body_selection.classList.remove("body-section_FadeOut");
          }
          body_selection.classList.add("body-section_FadeIn");
          temporizador = setInterval((event) => {
            console.log("traemos i: " + i);
            roundabout[i].classList.remove('active_img');
            roundabout[i].classList.add('hidden_img');
            j = (i < 2) ? (i+1) : 0;
            roundabout[j].classList.add('active_img');
            console.log("traemos j: " + j);
            ( i >= 2 ) ? i = 0 : ++i;
          }, 1500);
      });
      body_selection.addEventListener('mouseout', (event) => {
          clearInterval(temporizador);
          roundabout.forEach((flying_horse) => {
              if (flying_horse.classList.contains('active_img')) {
                flying_horse.classList.remove('active_img');
                flying_horse.classList.add('hidden_img');
              }
          });
          roundabout[0].classList.add('active_img');
          if (body_selection.classList.contains("body-section_FadeIn")) {
            body_selection.classList.remove("body-section_FadeIn");
          }
          body_selection.classList.add("body-section_FadeOut");
      });
    });
});
