const ctx = document.getElementById('line-chart').getContext('2d');
const myChart = new Chart(ctx, {
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