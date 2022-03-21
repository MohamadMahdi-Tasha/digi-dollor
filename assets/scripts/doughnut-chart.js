const ctx = document.getElementById('doughnut-chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['orange', 'indigo', 'diamond', 'purple'],
        datasets: [{
            label: '# of Votes',
            data: [25, 25, 10, 40],
            backgroundColor: [
                '#FCA120',
                '#185ADB',
                '#5FC8A5',
                'purple'
            ],
        }]
    },
    options: {
        plugins: {legend: {display: false,}},
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});