/* globals Chart:false, feather:false */


(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart2')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo'
      ],
      datasets: [{
        data: [
          15,
          21,
          18,
          24,
          23,
          24,
          12
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()


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
                  size: '14'
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
  createGauge(document.getElementById('gaugeSensor1'), 60, max, 'Temperatura', ['#ff5733', '#e0e0e0']);
  createGauge(document.getElementById('gaugeSensor2'), 40, max, 'Humedad', ['#33c3ff', '#e0e0e0']);
})();