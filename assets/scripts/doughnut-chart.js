function DrawTheChart(ChartData, ChartOptions, ChartId, ChartType) {eval('var myLine = new Chart(document.getElementById(ChartId).getContext("2d"),{type:"' + ChartType + '",data:ChartData,options:ChartOptions});document.getElementById(ChartId).getContext("2d").stroke();')}
const ChartData = {
    labels: ["X", "Y", "Z", "M"],
    datasets: [
        {
            data: [50, 25, 50, 10],
            backgroundColor: ['#5FC8A5', '#185ADB', 'white', '#FCA120'],
        },
    ]
};

ChartOptions = {
    responsive: true,
    layout: {padding: {top: 12, left: 12, bottom: 12,},},
    plugins: {legend: {display: false,}},
    title: {
        display: true,
        text: 'Chart Title',
        fontColor: '#3498db',
        fontSize: 32,
        fontStyle: ' bold',
    },
    elements: {
        arc: {
            borderWidth: 0.01,
        },
    },
};

DrawTheChart(ChartData, ChartOptions, "doughnut-chart", "doughnut");