        // مقداردهی اولیه AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        
        // شبیه سازی لاگین
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // انیمیشن خروج صفحه لاگین
            document.querySelector('.login-card').classList.add('animate__fadeOut');
            
            setTimeout(function() {
                document.getElementById('loginPage').classList.add('d-none');
                document.getElementById('adminPanel').classList.remove('d-none');
                
                // انیمیشن ورود پنل مدیریت
                document.getElementById('adminPanel').classList.add('animate__animated', 'animate__fadeIn');
                
                // ایجاد چارت فروش
                createSalesChart();
            }, 500);
        });
        
        // مدیریت منوی کناری
        document.getElementById('toggleSidebar').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('active');
            document.getElementById('mainContent').classList.toggle('active');
        });
        
        // مدیریت زیرمنوها
        document.querySelectorAll('.has-submenu > a').forEach(item => {
            item.addEventListener('click', function(e) {
                if (window.innerWidth > 992) {
                    e.preventDefault();
                    const submenu = this.parentElement.querySelector('.submenu');
                    this.parentElement.classList.toggle('active');
                    submenu.classList.toggle('show');
                }
            });
        });
        
        // ایجاد چارت فروش
        function createSalesChart() {
            const ctx = document.getElementById('salesChart').getContext('2d');
            const salesChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
                    datasets: [{
                        label: 'فروش هفتگی (میلیون تومان)',
                        data: [12, 19, 8, 15, 22, 18, 25],
                        backgroundColor: 'rgba(52, 152, 219, 0.2)',
                        borderColor: 'rgba(52, 152, 219, 1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: 'white',
                        pointBorderColor: 'rgba(52, 152, 219, 1)',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            rtl: true,
                            labels: {
                                font: {
                                    family: 'Segoe UI',
                                    size: 14
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            rtl: true,
                            bodyFont: {
                                family: 'Segoe UI',
                                size: 14
                            },
                            titleFont: {
                                family: 'Segoe UI',
                                size: 16
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                font: {
                                    family: 'Segoe UI',
                                    size: 12
                                },
                                callback: function(value) {
                                    return value + 'M';
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            ticks: {
                                font: {
                                    family: 'Segoe UI',
                                    size: 12
                                }
                            },
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        }
        
        // انیمیشن کارت ها هنگام اسکرول
        window.addEventListener('scroll', function() {
            document.querySelectorAll('.card-gradient').forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        });
        
        // انیمیشن پالس برای دکمه های مهم
        setInterval(function() {
            document.querySelectorAll('.btn-admin-primary').forEach(btn => {
                btn.classList.toggle('pulse-animation');
            });
        }, 5000);