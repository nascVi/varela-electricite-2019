import React from 'react'
import ReactParticles from '../../data/particles'

const Particles = ({ children }) => {
    return (
      <div style={{ position: 'relative' }}>
        <ReactParticles
          params={{
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
                const Particles = () => {
                    return (
                        <div>
                            
                        </div>
                    )
                }          }
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
      }}
          style={{
            position: 'absolute',
            zIndex: 0,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
        />
        {children && <div style={{ position: 'relative' }}>{children}</div>}
      </div>
    );
  }

export default Particles
