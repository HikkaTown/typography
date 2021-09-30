<?php  
	include "mail.php";
?>
<!DOCTYPE html>
<html lang="ru">

<head>
<title>Изготовить печать или штамп | цветной бульвар, трубная, сухаревская, новокузнецкая, третьяковская, лубянка, кузнецкий мост.</title>
	<meta name="description" content="Срочное изготовление печатей и штампов возле метро цветной бульвар, трубная, сухаревская, новокузнецкая, третьяковская.">
<? include "head.php"; ?>
</head>
<body>
	
	<!-- ///////// INCLUDE ///////// -->
	<? include "header.php"; ?>
	<div class="uk-container">
		<div class="uk-grid uk-grid-divider" uk-grid>

			<div class="uk-width-1-1 uk-width-auto@s">
				<!-- ///////// INCLUDE ///////// -->
				<? include "aside.php"; ?>
			</div>

			<div class="uk-width-1-1 uk-width-expand@s">
				<ul class="uk-breadcrumb">
					<li><a href="..">Главная</a></li>
					<li><a href="pechati.php">Печати и Штампы</a></li>
					<li><span>Печать по оттиску</span></li>
				</ul>
				<section class="s-content"><!-- основной контент -->
					<header>
						<h1 class="uk-heading-divider">Печать по оттиску <br><span>Цветной бульвар, Кузнецкий мост, Новокузнецкая,  Третьяковская, Чистые пруды</span></h1>
						<div class="img-container">
							<img src="img/glavnie/pechat_srochno.jpg">
							<div class="img-text">
								<h4>Печать по оттиску от 600 руб</h4>
								<p>Автоматические оснастки <br>
								Гарантия 3 года <br>
								Cрочное изготовление за 1 час <br>
								Доставка по Москве</p>
							</div>
						</div>
						<p class="uk-text-meta uk-text-small">Оттиск это отпечаток печати на листе. Мы делаем печати по оттиску любой сложности и любом языке. Можем сделать печать по оттиску срочно за 1 час. Если нет времени придти к нам можно оформить заказ по почте, а курьер доствит печать куда скажите. </p>
						<div class="uk-overflow-auto">
							<table class="uk-table uk-table-hover uk-table-divider uk-table-small">
								<thead>
									<tr>
										<td></td>
										<td>Не срочно 1 день </td>
										<td>Срочно 1 час</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Новая печать</td>
										<td>500</td>
										<td>800</td>
									</tr>
									<tr>
										<td>Печать по оттиску</td>
										<td>600</td>
										<td>1000</td>
									</tr>
									<tr>
										<td>Штамп новый</td>
										<td>400</td>
										<td>700</td>
									</tr>	
									<tr>
										<td>Штамп по оттиску</td>
										<td>600</td>
										<td>1000</td>
									</tr>	
									<tr>
										<td>Факсимиле</td>
										<td>500</td>
										<td>1000</td>
									</tr>	
								</tbody>
							</table>
						</div>
					</header>
					<div class="uk-section-small"><!-- Цифровая печать -->
						<a name="visitki_1"></a>
						<h2>Как заказать печать по оттиску</h2>
						<div class="divider-header">
							<h3>Выберете оснастку для вашей печати по оттиску</h3>
							<span class="step-number">1</span>
						</div>
						<br>
						<form action="pechat_ottisku.php" enctype="multipart/form-data" method="post">
							<div>
								<div class="uk-child-width-1-4@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid-small very-small novoya-pechat" uk-grid uk-lightbox="animation: scale">
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inprad" name="osnastka" value="ручная 0" id="ruchnaya">
										<label for="ruchnaya">
											<div>
												<img src="img/pechati/osnastki/01.jpg" >
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="osnastka" value="colorMause 500" id="colorMause">
										<label for="colorMause">
											<div>
												<img src="img/pechati/osnastki/02.jpg" >
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="osnastka" value="disko 2000" id="disko">
										<label for="disko">
											<div>
												<img src="img/pechati/osnastki/03.jpg" >
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="osnastka" value="disko-v-chehle 2400" id="disko-v-chehle">
										<label for="disko-v-chehle">
											<div>
												<img src="img/pechati/osnastki/04.jpg" >
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="osnastka" value="colorPocket 550" id="colorPocket">
										<label for="colorPocket">
											<div>
												<img src="img/pechati/osnastki/05.jpg" >
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="osnastka" value="trodat-4642 450" id="trodat-4642">
										<label for="trodat-4642">
											<div>
												<img src="img/pechati/osnastki/06.jpg" >
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="osnastka" value="color-r40 400 " id="color-r40">
										<label for="color-r40">
											<div>
												<img src="img/pechati/osnastki/07.jpg" >
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="osnastka" value="trodat-prof 2000" id="trodat-prof">
										<label for="trodat-prof">
											<div>
												<img src="img/pechati/osnastki/09.jpg" >
											</div>
										</label>
									</div>
								</div>
							</div>
							<br><br>
							<div class="step2">
								<div class="divider-header">
									<h3>Приекрепите оттиск срочной печати</h3>
									<span class="step-number">2</span>
								</div>
								<div class="file-group">
									<label for="fl_inp"><input type="file" id="fl_inp" name="file" required>
									<div id="fl_nm" >Прикрепить файл</div>
									</label>
								</div>
							</div>
							<br><br>
							<div class="step4">
								<div class="divider-header">
									<h3>Выберете способ получания штампа в нашем офисе или курьером</h3>
								</div>
								<div class="checkbox-group">
									<input type="radio" id="checkbox1" name="dostavka" value="need_delivery">
									<label for="checkbox1" class="checkbox"></label>
									<label for="checkbox1">Доставка +300 руб</label>
								</div>
								<input type="text" placeholder="Введите адрес доставки" class="address_input adress" name="dostavka_address">
								<div class="checkbox-group">
									<input type="radio" id="checkbox2" name="dostavka" value="ofis1">
									<label for="checkbox2" class="checkbox"></label>
									<label for="checkbox2">Самовывоз Офис #1, Малый Сухаревский пер., д. 9с1, оф. 24</label>
								</div>
								<div class="checkbox-group">
									<input type="radio" id="checkbox3" name="dostavka" value="ofis2">
									<label for="checkbox3" class="checkbox"></label>
									<label for="checkbox3">Самовывоз Офис #2, Садовая-Сухаревская пл., д. 2/34</label>
								</div>
								<div class="checkbox-group">
									<input type="radio" id="checkbox4" name="dostavka" value="ofis3">
									<label for="checkbox4" class="checkbox"></label>
									<label for="checkbox4">Самовывоз Офис #3, ул. Пятницкая, д. 30с1</label>
								</div>
								<div class="checkbox-group">
									<input type="radio" id="checkbox5" name="dostavka" value="ofis4">
									<label for="checkbox5" class="checkbox"></label>
									<label for="checkbox5">Самовывоз Офис #4, ул. Рождественка, д. 5/7с1</label>
								</div><br><br>
								<div class="divider-header">
									<h3></h3>
								</div>
								<div class="input-group">
									<label for="name">Ваше имя</label>
									<input type="text" class="fio" id="name" name="name_ottisku" required>
								</div>
								<div class="input-group">
									<label for="phone">Телефон для связи</label>
									<input type="text" id="phone" placeholder="+7 906 733 39 17" name="phone" required>
								</div>
								<div class="input-group">
									<label for="email">Почта что бы мы отправили вам макет печати перед изготовлением</label>
									<input type="email" class="mail" id="email" placeholder="1ppc@mail.ru" name="email" required>
								</div><br>
								<div class="vivodshtamp vivod">
									<div class="vibor">
										<p>Вы выбрали оснастку:</p>
									</div>
									<div class="checkedshtamp"></div>
								</div>
								<input type="submit" class="submit" value="Заказать">
								<div id="success"></div>
							</div>
						</form>
					</div>
				</section>
			</div>
		</div>
	</div>
	<? include "footer.php"; ?>
	<script src="js/scripts.min.js"></script>
	<script src="js/script.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.3.0/dist/js/jquery.suggestions.min.js"></script>
	<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(14088406, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/14088406" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
</body>
</html>