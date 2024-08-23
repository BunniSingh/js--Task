const monthlyData = [72, 29, 88, 99, 55, 95 , 25, 66, 9, 50, 75, 100];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
                'rgba(25, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(25, 255, 25, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                ],
            borderWidth: 1,
            hoverBorderWidth: 3,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                
            }
        },
        animation :{
            duration: 2000,
            easing: 'ease'
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
                fontColor: '#fff'
            }
        }
    }
})