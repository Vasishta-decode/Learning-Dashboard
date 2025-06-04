const ctx = document.querySelector('.activity-chart');
const ctx2 = document.querySelector('.prog-chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Time',
            data: [8, 6, 7, 6, 10, 8, 4],
            backgroundColor: '#ffffff',
            borderWidth: 6,
            borderRadius: 9,
            hoverBackgroundColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                border: {
                    display: true
                },
                grid: {
                    display: true,
                    color: '#1e293b'
                },
                ticks: {
                    maxRotation: 45,
                    minRotation: 45
                }
            },
            y: {
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 10
            }
        }
    }
});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Class GPA',
            data: [6, 10, 8, 14, 6, 7, 4],
            borderColor: '#0891b2',
            tension: 0.4
        },
        {
            label: 'Aver GPA',
            data: [8, 6, 7, 6, 11, 8, 10],
            borderColor: '#ca8a04',
            tension: 0.4
        }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    maxRotation: 45,
                    minRotation: 45
                }
            },
            y: {
                ticks: {
                    display: false
                },
                border: {
                    display: false,
                    dash: [5, 5]
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 10
            }
        }
    }
});

function animateCounter(id, endValue, duration = 1500) {
    const el = document.getElementById(id);
    let start = 0;
    const increment = endValue / (duration / 16); // 60fps approx

    function update() {
        start += increment;
        if (start >= endValue) {
            el.textContent = endValue.toFixed(2);
        } else {
            el.textContent = start.toFixed(2);
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Function to animate progress bars
function animateProgressBar(selector, targetPercent, duration = 1500) {
    const progressBar = document.querySelector(selector + ' .progress .bar');
    const progressText = document.querySelector(selector + ' .progress');
    let start = 0;
    const increment = targetPercent / (duration / 16); // 60fps approx

    function updateProgress() {
        start += increment;
        if (start >= targetPercent) {
            progressBar.style.width = targetPercent + '%';
            progressText.setAttribute('data-progress', Math.round(targetPercent) + '%');
        } else {
            progressBar.style.width = start + '%';
            progressText.setAttribute('data-progress', Math.round(start) + '%');
            requestAnimationFrame(updateProgress);
        }
    }

    progressBar.style.width = '0%';
    requestAnimationFrame(updateProgress);
}

// Start animations when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate GPAs
    animateCounter('currentGPA', 3.45);
    animateCounter('classAvgGPA', 4.78);

    // Animate progress bars with a slight delay between each
    setTimeout(() => animateProgressBar('.items-list .item:nth-child(1)', 92), 200);
    setTimeout(() => animateProgressBar('.items-list .item:nth-child(2)', 65), 400);
    setTimeout(() => animateProgressBar('.items-list .item:nth-child(3)', 80), 600);
});
