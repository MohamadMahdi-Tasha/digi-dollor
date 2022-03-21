const ctx_2 = document.getElementById('line-chart').getContext('2d');
const line_chart = new Chart(ctx_2, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: '# of Votes',
            data: [0, 20, 10, 15, 25, 30],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
        }
    },
});
