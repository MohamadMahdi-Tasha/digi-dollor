// Doughnut Chart
const doughnut_chart_ctx = document.getElementById('doughnut-chart').getContext('2d');
const doughnut_chart = new Chart(doughnut_chart_ctx, {
    type: 'doughnut',
    data: {
        labels: ['1', '2', '3', '4'],
        datasets: [{
            label: 'My First Dataset',
            data: [15, 5, 25, 5],
            backgroundColor: [
                '#FCA120',
                '#185ADB',
                'white',
                '#5FC8A5'
            ],
            hoverOffset: 4
        }],
    },
    options: {
        responsive: false,
        plugins: {legend: {display: false}}
    },
});

// Line Chart
const line_chart_ctx = document.getElementById('line-chart').getContext('2d');
const line_chart = new Chart(line_chart_ctx, {
    type: 'line',
    data: {
        labels: ['دی ۱۳۹۹', 'بمهن ۱۳۹۹', 'بمهن ۱۳۹۹', 'فروردین  ۱۴۰۰', 'اردیبهشت  ۱۴۰۰'],
        datasets: [{
            data: [0, 15, 30, 15, 92],
            backgroundColor: ['white',],
            borderColor: ['#0A1931',],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {display: false,},
            title: {display: false,},
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
    },
});