window.onload = function () {

	var btns = document.getElementsByClassName('section-link');

	var blocks = document.getElementsByClassName('osnastki_content');

	for (var i = 0; i < btns.length; i++) {

		btns[i].onclick = function () {

			var elem = this;

		 	for (var i = 0; i < btns.length; i++) {

		 		btns[i].classList.remove('checked');

		 	}

		 	for (var i = 0; i < blocks.length; i++) {

		 		blocks[i].classList.remove('active');

		 	}

		 	elem.classList.add('checked');

		 	var elem_target = elem.getAttribute('data_target');

		 	var section = document.getElementById(elem.getAttribute('data_target'));

		 	section.classList.add('active');

		}

	}

//Выбор оснастки

	$('.inp-radio').on('change',function(){

        $('.checked_name').html('');

        var name = $(this).next().find('.name_of_shtamp').text();

        $('.checked_name').html(name);

});

//Загрузка оснасток
var flag = false;
$(document).ready(function(){
	$(".content").slice(0, 5).show();
	
		$("#loadMore").on("click", function(e){
		  e.preventDefault();
		  if(!flag){
			$(".content:hidden").slice(0, 5).slideDown();
			if($(".content:hidden").length == 0) {
			  $("#loadMore").text("Скрыть");
			  flag = true;
			  console.log(flag)
			}
		  }else{
			var ln = ($(".content").length-5)*-1
			$(".content").slice(ln).slideUp();
			$("#loadMore").text("Дополнительные оснастки");
			flag=false;
		  }
		});

	
  })



  //Загрузка оштампов
  var flag = false;
$(document).ready(function(){
	$(".contentshtamp").slice(0, 4).show();
	
		$("#loadMoreshtamp").on("click", function(e){
		  e.preventDefault();
		  if(!flag){
			$(".contentshtamp:hidden").slice(0, 4).slideDown();
			if($(".contentshtamp:hidden").length == 0) {
			  $("#loadMoreshtamp").text("Скрыть");
			  flag = true;
			  console.log(flag)
			}
		  }else{
			var ln = ($(".contentshtamp").length-4)*-1
			$(".contentshtamp").slice(ln).slideUp();
			$("#loadMoreshtamp").text("Дополнительные оснастки");
			flag=false;
		  }
		});

	
  })

//Табы
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

//Выбор оснастки

	$('.inprad').on('change',function(){

		$('.checkedshtamp').html('');

		var shtamp = $(this).next().find('.name_of_shtampmain').text();

		$('.checkedshtamp').html(shtamp);

});

//Выбор оснастки

	$("#ppcForm").on('submit', function(event) {

        event.preventDefault(); 

        var name = $('#name').val();

	    var email = $('#email').val();

	    var phone = $('#phone').val();

	    var ogrn = $('#ogrn').val();

	    var oname = $('#ogrn_name').val();

        if (name.length < 1) {

        	$('#success').text('Заполните все необходимые поля').style('color', 'red');

        }

        if (phone.length < 1) {

        	$('#success').text('Заполните все необходимые поля').style('color', 'red');

        }

        if (email.length < 1) {

        	$('#success').text('Заполните все необходимые поля').style('color', 'red');

        }

        if (ogrn.length < 1) {

        	$('#success').text('Заполните все необходимые поля').style('color', 'red');

        }

        if (oname.length < 1) {

        	$('#success').text('Заполните все необходимые поля').style('color', 'red');

        }  else {

	        var formData = $(this).serialize();

			$.ajax({

	            type: 'POST',

	            url: './mail.php',

	            data: formData,

	            success: function(response) { 

	                $('#success').text('Ваша заявка отправлена!');

	                $('#ppcForm')[0].reset();

	            },

	            error: function(xhr, status, error){

					$('#success').text('Ошибка при отправке заявки - попробуйте еще раз').style('color', 'red');

	            }

	        });



        }

    });



	



    $("#PpcForm2").on('submit', function(event) {

        event.preventDefault(); 

        var name = $('#name').val();

	    var email = $('#email').val();

	    var phone = $('#phone').val();

        if (name.length < 1) {

        	$('#success').text('Заполните все необходимые поля').style('color', 'red');

        }

        if (phone.length < 1) {

        	$('#success').text('Заполните все необходимые поля').style('color', 'red');

        }

        if (email.length < 1) {

        	$('#success').text('Заполните все необходимые поля').style('color', 'red');

        } else {

	        var formData = $(this).serialize();

			$.ajax({

	            type: 'POST',

	            url: './mail.php',

	            data: formData,

	            success: function(response) { 

	                $('#success').text('Ваша заявка отправлена!');

	                $('#PpcForm2')[0].reset();

	            },

	            error: function(xhr, status, error){

					$('#success').text('Ошибка при отправке заявки - попробуйте еще раз').style('color', 'red');

	            }

	        });



        }

    });

}

//dadata

$(document).ready(function () {

	var token = 'dff485c8154897ebc975fca747316e58918839f8';

	$(".adress").suggestions({

        token: token,

        type: "ADDRESS",

        /* Вызывается, когда пользователь выбирает одну из подсказок */

        onSelect: function(suggestion) {

            console.log(suggestion);

        }

    });

	$(".fio").suggestions({

        token: token,

        type: "NAME",

        /* Вызывается, когда пользователь выбирает одну из подсказок */

        onSelect: function(suggestion) {

            console.log(suggestion);

        }

    });

	$(".mail").suggestions({

        token: token,

        type: "EMAIL",

        /* Вызывается, когда пользователь выбирает одну из подсказок */

        onSelect: function(suggestion) {

            console.log(suggestion);

        }

    });

	$(".party").suggestions({

        token: token,

        type: "PARTY",

        /* Вызывается, когда пользователь выбирает одну из подсказок */

        onSelect: function(suggestion) {

            console.log(suggestion);

        }

    });

});

//dadata



//Прикрепляем файл

$(document).ready( function() {

    $("#fl_inp").change(function(){

         var filename = $(this).val().replace(/.*\\/, "");

         $("#fl_nm").html(filename);

    });

});

//Прикрепляем файл



