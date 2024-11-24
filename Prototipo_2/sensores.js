(function () {
    'use strict';
  
    // Configuración base de un gráfico tipo gauge
    function createGauge(ctx, value, max, label, colors) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [value, max - value], // Datos: valor actual y espacio restante
            backgroundColor: [colors[0], colors[1]], // Colores: activo e inactivo
            borderWidth: 0
          }]
        },
        options: {
          rotation: -Math.PI, // Rotación para que comience en la base
          circumference: Math.PI, // Muestra solo la mitad del círculo
          cutoutPercentage: 75, // Grosor del anillo
          plugins: {
            doughnutlabel: {
              labels: [
                {
                  text: `${value}°C`, // Valor principal
                  font: {
                    size: '20'
                  }
                },
                {
                  text: label, // Etiqueta del sensor
                  font: {
                    size: '20'
                  }
                }
              
              ]
            }
          },
          tooltips: { enabled: false }, // Desactiva tooltips
        }
      });
    }
  
    // Configura gráficos para dos sensores
    const max = 100; // Máximo del medidor
    createGauge(document.getElementById('gaugeSensor1'), 27, max, 'Temperatura', ['#ff5731', '#e2e0e0']);
    createGauge(document.getElementById('gaugeSensor2'), 50, max, 'Humedad', ['#43c3ff', '#ee0e0']);
    createGauge(document.getElementById('gaugeSensor3'), 5, max, 'Temperatura', ['#ff5733', '#e0e0e0']);
    createGauge(document.getElementById('gaugeSensor4'), 70, max, 'Humedad', ['#33c3ff', '#e0e0e0']);
    createGauge(document.getElementById('gaugeSensor5'), 21, max, 'Temperatura', ['#ff5733', '#e0e0e0']);
    createGauge(document.getElementById('gaugeSensor6'), 40, max, 'Humedad', ['#33c3ff', '#e0e0e0']);
    createGauge(document.getElementById('gaugeSensor7'), 33, max, 'Temperatura', ['#ff5733', '#e0e0e0']);
    createGauge(document.getElementById('gaugeSensor8'), 80, max, 'Humedad', ['#33c3ff', '#e0e0e0']);
  })();