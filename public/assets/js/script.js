let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let toggle_sidebar = document.querySelector("#sidebar-toggle");


// toggle_sidebar.addEventListener("click", () => {

// let sidebarWidth = window.getComputedStyle(sidebar).width;
// if (sidebarWidth == "250px") {
//     sidebar.style.width = "0";

//     content.style.marginRight = "0";
// } else {
//     sidebar.style.width = "250px" 
//     content.style.marginRight = "250px"
// }


// });



toggle_sidebar.addEventListener("click", () => {
    let sidebarRight = window.getComputedStyle(sidebar).right;

    if  (window.innerWidth> 767) {

        if(sidebarRight == "0px") {
        sidebar.style.right = "-250px";
        content.style.marginRight = "0";}
        else {
            sidebar.style.right = "0";
            content.style.marginRight = "250px"; }

        }

        else {

            if (sidebarRight == "0px") {
                sidebar.style.right = "-250px";

            }
            else {
                sidebar.style.right = "0";
            }
        }
    }
);


///// 


const cards = document.querySelectorAll('.stat1, .stat2, .stat3, .stat4, .stat5');
const firstChart = document.querySelector('.firstchart');

cards.forEach(card => {
    card.addEventListener('click', function() {
        // إعادة ضبط جميع البطاقات أولاً
        cards.forEach(c => {
            c.style.transform = '';
            c.style.opacity = '1';
        });

        // تطبيق التأثير على البطاقة المنقولة
        this.style.transform = 'scale(1.1)';
        this.style.marginTop = '35px';
        this.style.marginRight = '30px';

        // تطبيق الشفافية على البطاقات الأخرى
        cards.forEach(c => {
            if (c !== this) {
                c.style.opacity = '70%';
            }
        });

          // إظهار/إخفاء firstchart عند النقر على stat1
        if (this.classList.contains('stat1')) {
            firstChart.style.display = firstChart.style.display === 'none' ? 'flex' : 'none';
        } else {
            firstChart.style.display = 'none'; // إخفاء عند النقر على أي بطاقة أخرى
        }
    });
});



// second_block_charts


const cards2 = document.querySelectorAll('.stat1, .stat2, .stat3, .stat4, .stat5');
const secondchart = document.querySelector('.secondchart');

cards.forEach(card => {
    card.addEventListener('click', function() {
        // إعادة ضبط جميع البطاقات أولاً
        cards.forEach(c => {
            c.style.transform = '';
            c.style.opacity = '1';
        });

        // تطبيق التأثير على البطاقة المنقولة
        this.style.transform = 'scale(1.1)';
        this.style.marginTop = '35px';
        this.style.marginRight = '30px';

        // تطبيق الشفافية على البطاقات الأخرى
        cards.forEach(c => {
            if (c !== this) {
                c.style.opacity = '70%';
            }
        });

          // إظهار/إخفاء firstchart عند النقر على stat2
        if (this.classList.contains('stat2')) {
            secondchart.style.display = secondchart.style.display === 'none' ? 'flex' : 'none';
        } else {
            secondchart.style.display = 'none'; // إخفاء عند النقر على أي بطاقة أخرى
        }
    });
});


// Third Chart 


const cards3 = document.querySelectorAll('.stat1, .stat2, .stat3, .stat4, .stat5');
const Thirdchart = document.querySelector('.Thirdchart');

cards.forEach(card => {
    card.addEventListener('click', function() {
        // إعادة ضبط جميع البطاقات أولاً
        cards.forEach(c => {
            c.style.transform = '';
            c.style.opacity = '1';
        });

        // تطبيق التأثير على البطاقة المنقولة
        this.style.transform = 'scale(1.1)';
        this.style.marginTop = '35px';
        this.style.marginRight = '30px';

        // تطبيق الشفافية على البطاقات الأخرى
        cards.forEach(c => {
            if (c !== this) {
                c.style.opacity = '70%';
            }
        });

          // إظهار/إخفاء firstchart عند النقر على stat2
        if (this.classList.contains('stat3')) {
            Thirdchart.style.display = Thirdchart.style.display === 'none' ? 'flex' : 'none';
        } else {
            Thirdchart.style.display = 'none'; // إخفاء عند النقر على أي بطاقة أخرى
        }
    });
});


// four chart block


const cards4 = document.querySelectorAll('.stat1, .stat2, .stat3, .stat4, .stat5');
const fourchart = document.querySelector('.fourchart');

cards.forEach(card => {
    card.addEventListener('click', function() {
        // إعادة ضبط جميع البطاقات أولاً
        cards.forEach(c => {
            c.style.transform = '';
            c.style.opacity = '1';
        });

        // تطبيق التأثير على البطاقة المنقولة
        this.style.transform = 'scale(1.1)';
        this.style.marginTop = '35px';
        this.style.marginRight = '30px';

        // تطبيق الشفافية على البطاقات الأخرى
        cards.forEach(c => {
            if (c !== this) {
                c.style.opacity = '70%';
            }
        });

          // إظهار/إخفاء firstchart عند النقر على stat2
        if (this.classList.contains('stat4')) {
            fourchart.style.display = fourchart.style.display === 'none' ? 'flex' : 'none';
        } else {
            fourchart.style.display = 'none'; // إخفاء عند النقر على أي بطاقة أخرى
        }
    });
});




// Five chart


const cards5 = document.querySelectorAll('.stat1, .stat2, .stat3, .stat4, .stat5');
const fivechart = document.querySelector('.fivechart');

cards.forEach(card => {
    card.addEventListener('click', function() {
        // إعادة ضبط جميع البطاقات أولاً
        cards.forEach(c => {
            c.style.transform = '';
            c.style.opacity = '1';
        });

        // تطبيق التأثير على البطاقة المنقولة
        this.style.transform = 'scale(1.1)';
        this.style.marginTop = '35px';
        this.style.marginRight = '30px';

        // تطبيق الشفافية على البطاقات الأخرى
        cards.forEach(c => {
            if (c !== this) {
                c.style.opacity = '70%';
            }
        });

          // إظهار/إخفاء firstchart عند النقر على stat2
        if (this.classList.contains('stat5')) {
            fivechart.style.display = fivechart.style.display === 'none' ? 'flex' : 'none';
        } else {
            fivechart.style.display = 'none'; // إخفاء عند النقر على أي بطاقة أخرى
        }
    });
});


// التقويم في المنتجات
$(document).ready(function(){
    // تهيئة Datepicker
    $('.datepicker-input, .datepicker-from, .datepicker-to').datepicker({
        language: 'ar',
        format: 'yyyy-mm-dd',
        todayHighlight: true,
        autoclose: true
    });
    
    // التقويم المضمن
    $('#inline-calendar').datepicker({
        language: 'ar',
        todayHighlight: true,
        inline: true
    }).on('changeDate', function(e) {
        // عند اختيار تاريخ من التقويم المضمن
        if($('.date-method-btn.active').data('method') === 'single') {
            $('.datepicker-input').datepicker('update', e.format());
        } else {
            if(!$('.datepicker-from').val()) {
                $('.datepicker-from').datepicker('update', e.format());
            } else {
                $('.datepicker-to').datepicker('update', e.format());
            }
        }
    });
    
    // تبديل بين وضع التاريخ الواحد والنطاق الزمني
    $('.date-method-btn').click(function(){
        $('.date-method-btn').removeClass('active');
        $(this).addClass('active');
        
        if($(this).data('method') === 'single') {
            $('.single-date').removeClass('d-none');
            $('.range-date').addClass('d-none');
        } else {
            $('.single-date').addClass('d-none');
            $('.range-date').removeClass('d-none');
        }
    });
});

new DataTable('#example') ,{
    responsive: true,
};



// new DataTable('#example', {
//     layout: {
//         topStart: {
//             buttons: [
//                 'copy', 'excel', 'pdf'
//             ]
//         }
//     }
// });


// البحث في قسم المنتجات

$(document).ready(function() {
    $('#searchInput').on('input', function() {
        const searchText = $(this).val().toLowerCase();
        
        $('.product-item').each(function() {
            const productText = $(this).text().toLowerCase();
            if (productText.includes(searchText)) {
                $(this).show();
                $(this).closest('.product-group').show(); // إظهار المجموعة إذا وجد نتائج
            } else {
                $(this).hide();
            }
        });

        // إخفاء المجموعات الفارغة بالكامل
        $('.product-group').each(function() {
            if ($(this).find('.product-item:visible').length === 0) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

    // زر البحث (إذا أردت البحث عند الضغط بدلاً من الكتابة)
    $('.search-btn').click(function() {
        $('#searchInput').trigger('input');
    });
});


/* تكبير عرض الشاشة */

document.addEventListener('DOMContentLoaded', function() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const exitFullscreenBtn = document.getElementById('exit-fullscreen-btn');
    const tableContainer = document.getElementById('table-container');
    const cardBody = document.querySelector('.database-low');
    const btnDatabase = document.querySelector('.btn-database');
    
    fullscreenBtn.addEventListener('click', function() {
        // إضافة وضع التكبير
        cardBody.classList.add('fullscreen-mode');
        fullscreenBtn.style.display = 'none';
        exitFullscreenBtn.style.display = 'inline-block';
        
        // إظهار أزرار الإضافة والتعديل والحذف في وضع التكبير
        const actionButtons = document.querySelectorAll('.btn-action');
        actionButtons.forEach(btn => {
            btn.style.display = 'inline-block';
        });
    });
    
    exitFullscreenBtn.addEventListener('click', function() {
        // إزالة وضع التكبير
        cardBody.classList.remove('fullscreen-mode');
        fullscreenBtn.style.display = 'inline-block';
        exitFullscreenBtn.style.display = 'none';
    });
});



toggle_sidebar.addEventListener("click", () => {
    let sidebarRight = window.getComputedStyle(sidebar).right;

    if  (window.innerWidth> 767) {

        if(sidebarRight ==="0px") {
        sidebar.style.right = "-250px";
        content.style.marginRight = "0";}
        else {
            sidebar.style.right = "0";
            content.style.marginRight = "250px"; }

        }

        else {

            if (sidebarRight === "0px") {
                sidebar.style.right = "-250px";

            }
            else {
                sidebar.style.right = "0";
            }
        }
    }
);



// window.onload = function() { 
//     setTimeout(function(){
//         document.getElementById("loader").style.display = "none";
       
//     }, 2000);

// };


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0"; // إخفاء تدريجي
            setTimeout(function() {
                loader.style.display = "none";
            }, 500); // تأخير للإخفاء النهائي بعد التلاشي
        }
    }, 1000);
});


// window.onload = function() { 
//     setTimeout(function(){
//         var loader = document.getElementById("loader");
//         if (loader) { // التحقق من وجود العنصر أولاً
//             loader.style.display = "none";
//         } else {
//             console.error("Element with id 'loader' not found!");
//         }
//     }, 2000);
// };

// window.addEventListener("load", function() {
//     document.getElementById("loader").style.display = "none";
//     document.body.classList.add("loaded");
//   });