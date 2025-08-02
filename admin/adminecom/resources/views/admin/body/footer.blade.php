<!-- Dependencies -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
<script src="./js/scripts.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
      <script>
         flatpickr("#datepicker", {
           dateFormat: "d M Y", 
           allowInput: true,
           altInput: true,
           altFormat: "F j, Y", 
         });
      </script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('incomeChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Monthly Avg. Income (%)',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        backgroundColor: [
          '#8e9be7', '#8e9be7', '#8e9be7', '#2ecc71', '#8e9be7', '#8e9be7',
          '#8e9be7', '#8e9be7', '#8e9be7', '#8e9be7', '#8e9be7', '#8e9be7'
        ],
        borderRadius: 6,
        barThickness: 30,
        categoryPercentage: 0.6,
        barPercentage: 0.8
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'end',
          align: 'end',
          formatter: (value) => value + '%',
          font: { weight: 'bold' }
        },
        tooltip: {
          callbacks: {
            label: (context) => context.raw + '%'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 12,
          ticks: {
            stepSize: 2,
            callback: (value) => `₹${value}k`
          },
          grid: { color: '#eaeaea' }
        },
        x: {
          grid: { display: false }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
});
</script>

<!-- CUSTOMER DOUGHNUT CHART -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('customerChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Current', 'New', 'Retargeted'],
      datasets: [{
        data: [50, 30, 20],
        backgroundColor: ['#10b981', '#3b82f6', '#facc15'],
        borderWidth: 4,
        cutout: '70%'
      }]
    },
    options: {
      plugins: {
        legend: { display: false }
      }
    }
  });
});
</script>

<!-- CATEGORY CHART -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('categoryChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mobile', 'Men Fashion', 'Women Fashion', 'Beauty', 'Health', 'Sports', 'Kids', 'Music'],
      datasets: [{
        label: 'Sales',
        data: [100, 90, 80, 70, 60, 50, 40, 30],
        backgroundColor: '#70e3a5',
        borderRadius: 8,
        barThickness: 24
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          ticks: {
            color: '#333',
            font: { size: 12 }
          },
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          ticks: { color: '#999' },
          grid: { color: '#eee' }
        }
      }
    }
  });
});
</script>

<!-- AUDIENCE LINE CHART -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('audienceChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
  gradientFill.addColorStop(0, 'rgba(41, 198, 118, 0.15)');
  gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Income',
          data: [34, 40, 38, 60, 45, 50, 28, 60, 55, 52, 48, 66],
          borderColor: '#29c676',
          backgroundColor: gradientFill,
          fill: '-1',
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 5,
          datalabels: {
            display: ctx => ctx.dataIndex === 5,
            align: 'top',
            anchor: 'end',
            backgroundColor: '#29c676',
            borderRadius: 4,
            color: '#fff',
            font: { weight: 'bold', size: 12 },
            padding: 6,
            formatter: () => '50k'
          }
        },
        {
          label: 'Expenses',
          data: [20, 28, 30, 38, 35, 50, 50, 45, 40, 42, 38, 44],
          borderColor: '#d3d3d3',
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 5,
          datalabels: { display: false }
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ₹${ctx.raw}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => `₹${value}`
          },
          grid: { color: '#eee' }
        },
        x: {
          grid: { display: false }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
});
</script>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('weekReportChart');
    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Visitors',
          data: [120, 90, 140, 110, 180, 130, 160],
          backgroundColor: '#29c676',
          borderRadius: 8,
          barThickness: 30
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.raw}`;
              }
            }
          },
          legend: {
            display: false
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            ticks: {
              color: '#333',
              font: { size: 13 }
            },
            grid: { display: false }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#666',
              stepSize: 50
            },
            grid: { color: '#eee' }
          }
        }
      }
    });
  });
</script>
 <script>
         // Optional: Animate or dynamically set the progress
         const percentage = 76;
         const fullArcLength = 283; // length of semicircle path
         const offset = fullArcLength * (1 - percentage / 100);
         document.getElementById("progressArc").setAttribute("stroke-dashoffset", offset);
      </script>
      <script>
         document.addEventListener("DOMContentLoaded", function () {
           const canvas = document.getElementById('customersGrowth');
           if (!canvas) return;
         
           const ctx = canvas.getContext('2d');
           const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
           gradientFill.addColorStop(0, 'rgba(34, 197, 94, 0.15)');
           gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0)');
         
           new Chart(ctx, {
             type: 'line',
             data: {
               labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
               datasets: [
                 {
                   label: 'New Customers',
                   data: [220, 260, 280, 300, 340, 420, 380, 400, 390, 410, 370],
                   borderColor: '#22c55e',
                   backgroundColor: gradientFill,
                   fill: '-1',
                   tension: 0.4,
                   pointRadius: 0,
                   pointHoverRadius: 5,
                   datalabels: {
                     display: ctx => ctx.dataIndex === 5,
                     align: 'top',
                     anchor: 'end',
                     backgroundColor: '#22c55e',
                     borderRadius: 4,
                     color: '#fff',
                     font: { weight: 'bold', size: 12 },
                     padding: 6,
                     formatter: () => '420'
                   }
                 },
                 {
                   label: 'Returning Customers',
                   data: [160, 190, 210, 220, 260, 310, 280, 290, 300, 320, 310],
                   borderColor: '#d1d5db',
                   backgroundColor: 'transparent',
                   fill: false,
                   tension: 0.4,
                   pointRadius: 0,
                   pointHoverRadius: 5,
                   datalabels: { display: false }
                 }
               ]
             },
             options: {
               responsive: true,
               interaction: {
                 mode: 'index',
                 intersect: false
               },
               plugins: {
                 legend: { display: false },
                 tooltip: {
                   mode: 'index',
                   intersect: false,
                   callbacks: {
                     label: ctx => `${ctx.dataset.label}: ${ctx.raw} users`
                   }
                 }
               },
               scales: {
                 y: {
                   beginAtZero: true,
                   ticks: {
                     callback: value => `${value}`
                   },
                   grid: { color: '#eee' }
                 },
                 x: {
                   grid: { display: false }
                 }
               }
             },
             plugins: [ChartDataLabels]
           });
         });
      </script>
        <script>
         const percentage = 76;
         const fullArcLength = 283; // length of semicircle path
         const offset = fullArcLength * (1 - percentage / 100);
         document.getElementById("progressArc").setAttribute("stroke-dashoffset", offset);
      </script>
  
       <script>
         document.addEventListener("DOMContentLoaded", function () {
           const ctx = document.getElementById('completionChart');
           if (!ctx) return;
         
           new Chart(ctx, {
             type: 'doughnut',
             data: {
               datasets: [{
                 data: [67, 33], // 67% completion
                 backgroundColor: ['#29c676', '#e5e9ed'],
                 borderWidth: 0
               }]
             },
             options: {
               cutout: '75%', // Thickness of the ring
               responsive: true,
               maintainAspectRatio: false,
               plugins: {
                 legend: { display: false },
                 tooltip: { enabled: false }
               }
             }
           });
         });
      </script>
        <script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
      <script>
         const lightbox = GLightbox({
           selector: '.glightbox'
         });
      </script>

      <script>
  // Bar Chart
  const barCtx = document.getElementById('metricsChart').getContext('2d');

  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Positive',
          data: [2.5, 2.3, 1.5, 2.8, 0.9, 2.6, 1.1, 1.4, 2.9, 1.0, 3.2, 2.1],
          backgroundColor: '#29c676',
          borderRadius: 6
        },
        {
          label: 'Negative',
          data: [-2.4, -2.2, -1.0, -2.7, -1.3, -2.5, -1.6, -2.0, -2.8, -1.2, -2.9, -2.2],
          backgroundColor: '#98a9c3',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: -4,
          max: 4,
          ticks: {
            stepSize: 2,
            color: '#999',
            font: { size: 12 }
          },
          grid: {
            color: '#eee',
            drawBorder: false
          }
        },
        x: {
          grid: { display: false },
          ticks: {
            color: '#666',
            font: { size: 12 }
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => `${context.dataset.label}: ${context.raw}`
          }
        }
      },
      barPercentage: 0.5,
      categoryPercentage: 0.6
    }
  });
</script>

<script>
  // Doughnut Chart
  const doughnutCtx = document.getElementById('taskChart').getContext('2d');
  const hoverLabel = document.getElementById('hover-label');

  const doughnutData = {
    labels: ['Active', 'Completed', 'Assigned'],
    datasets: [{
      label: 'Tasks',
      data: [50, 30, 20],
      backgroundColor: ['#03c988', '#4a90e2', '#f5c145'],
      hoverOffset: 0,
      borderWidth: 0
    }]
  };

  new Chart(doughnutCtx, {
    type: 'doughnut',
    data: doughnutData,
    options: {
      cutout: '70%',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      onHover: (event, chartElement) => {
        if (chartElement.length > 0) {
          const index = chartElement[0].index;
          const value = doughnutData.datasets[0].data[index];
          const total = doughnutData.datasets[0].data.reduce((a, b) => a + b, 0);
          const percent = ((value / total) * 100).toFixed(1);
          hoverLabel.innerText = `${label}: ${percent}%`;
        } else {
          hoverLabel.innerText = '';
        }
      }
    }
  });
</script>
 <script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
      <script>
         const quill = new Quill('#editor', {
           theme: 'snow',
           placeholder: 'Compose your content here...',
           modules: {
             toolbar: {
               container: '#toolbar',
               handlers: {
                 undo: function () {
                   this.quill.history.undo();
                 },
                 redo: function () {
                   this.quill.history.redo();
                 }
               }
             },
             history: {
               delay: 1000,
               maxStack: 100,
               userOnly: true
             }
           }
         });
         document.querySelector('.ql-undo')?.addEventListener('click', () => quill.history.undo());
         document.querySelector('.ql-redo')?.addEventListener('click', () => quill.history.redo());
         document.querySelector('form').addEventListener('submit', function (e) {
           const html = quill.root.innerHTML;
           document.getElementById('hidden-editor-content').value = html;
         });

