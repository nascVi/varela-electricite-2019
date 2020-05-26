// Generate a config at https://vincentgarreau.com/particles.js/

export default {
    particles: {
      number: {
        value: 80
      },
      size: {
        value: 3
      },
      color: {
        value: "#4CD9E4"
      },
      move: {
        random: true,
        speed: 2,
        direction: "top",
        out_mode: "out"
      }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    },
    retina_detect: true
  };
  