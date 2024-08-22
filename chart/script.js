const monthlyData = [72, 29, 88, 99, 55];

const months = ["jan", "feb", "mar", "apr", "may"]

const getChart = document.getElementById('myChart').getContext('2d');
const mychart = new Chart(getChart, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'Monthly Sales',
            data: monthlyData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
                ],
            borderWidth: 1,
            hoverBorderWidth: 3,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true;
            }
        },
        animation :{
            duration: 1000,
            easing: 'easeInQuart'
        },
        hover:{
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title:{
                display: true,
                text: 'Monthly Sales',
                fontSize: 20,
                fontColor: '#333'
            }
        }
    }
})