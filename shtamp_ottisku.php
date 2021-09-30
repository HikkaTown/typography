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
					<li><span>Штамп по оттиску</span></li>
				</ul>
				<section class="s-content"><!-- основной контент -->
					<header>
						<h1 class="uk-heading-divider">Штамп по оттиску <br><span>Цветной бульвар, Кузнецкий мост, Новокузнецкая,  Третьяковская, Чистые пруды</span></h1>
						<div class="img-container">
							<img src="img/glavnie/faksimile2.jpg">
							<div class="img-text">
								<h4>Штамп по оттиску от 600 руб</h4>
								<p>Автоматические оснастки <br>
								Гарантия 3 года <br>
								Cрочное изготовление за 1 час <br>
								Доставка по Москве</p>
							</div>
						</div>
						<p class="uk-text-meta uk-text-small">Оттиск это отпечаток штампа на листе. Мы делаем штампы по оттиску любой сложности и любом языке. Можем сделать штамп по оттиску срочно за 1 час. Если нет времени придти к нам можно оформить заказ по почте, а курьер доствит штамп куда скажите. Простая оснастка входит в стоимость штампа. Автоматическая оснастка оплачивается отдельно.</p>
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
						<h2>Как заказать штамп по оттиску в 2 простых шага</h2>
						<div class="divider-header">
							<h3>Выберете оснастку для вашего штампа по оттиску</h3>
							<span class="step-number">1</span>
						</div>
						<div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid-small my-grid" uk-grid uk-lightbox="animation: scale">
							<div class="box">
								<span class="section-link checked" href="#" data_target="simple_osnactki">
									<img src="img/pechati/ostanka.png">
									<p>Простая оснаска</p>
								</span>
							</div>
							<div class="box">
								<span class="section-link" href="javascript:void(0)" data_target="avtomat_ostanka">
									<img src="img/pechati/avtomat_ostanka.png">
									<p>Автоматическая оснастка</p>
								</span>
							</div>
						</div><br>
						<form action="shtamp_ottisku.php" enctype="multipart/form-data" method="post">
							<div id="avtomat_ostanka" class="osnastki_content">
								<h5 class="divider-header type-header">1. Автоматические оснастки</h5>
								<div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid-small very-small" uk-grid uk-lightbox="animation: scale">
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4910" id="type1">
										<label for="type1">
											<div>
												<img src="img/pechati/osnastki/Trodat_4910.jpg" >
												<p class="name_of_shtamp">Trodat 4910</p>
												<p class="gray">500 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4910_reg.png" >
												<p class="gray">10 мм / 7 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4911" id="type2">
										<label for="type2">
											<div>
												<img src="img/pechati/osnastki/Trodat_4911.jpg" >
												<p class="name_of_shtamp">Trodat 4911</p>
												<p class="gray">530 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4911_reg.png" >
												<br>
												<p class="gray">36 мм / 12 мм  </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4912" id="type3">
										<label for="type3">
											<div>
												<img src="img/pechati/osnastki/Trodat_4912.jpg" >
												<p class="name_of_shtamp">Trodat 4912</p>
												<p class="gray">670 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4912_reg.png" >
												<p class="gray">45 мм / 16 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4913" id="type4">
										<label for="type4">
											<div>
												<img src="img/pechati/osnastki/Trodat_4913.jpg" >
												<p class="name_of_shtamp">Trodat 4913</p>
												<p class="gray">830 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4913_reg.png" >
												<br>
												<p class="gray">56 мм / 20 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4914" id="type5">
										<label for="type5">
											<div>
												<img src="img/pechati/osnastki/Trodat_4914.jpg" >
												<p class="name_of_shtamp">Trodat 4914</p>
												<p class="gray">980 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4914_reg.png" >
												<p class="gray">62 мм / 24 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4915" id="type6">
										<label for="type6">
											<div>
												<img src="img/pechati/osnastki/Trodat_4915.jpg" >
												<p class="name_of_shtamp">Trodat 4915</p>
												<p class="gray">1050 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4915_reg.png" >
												<br>
												<p class="gray">68 мм / 23 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4925" id="type7">
										<label for="type7">
											<div>
												<img src="img/pechati/osnastki/Trodat_4925.jpg" >
												<p class="name_of_shtamp">Trodat 4925</p>
												<p class="gray">1060 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4925_reg.png" >
												<p class="gray">80 мм / 23 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4926" id="type8">
										<label for="type8">
											<div>
												<img src="img/pechati/osnastki/Trodat_4926.jpg" >
												<p class="name_of_shtamp">Trodat 4926</p>
												<p class="gray">920 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4926_reg.png" >
												<br>
												<p class="gray">73 мм / 36 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4927" id="type9">
										<label for="type9">
											<div>
												<img src="img/pechati/osnastki/Trodat_4927.jpg" >
												<p class="name_of_shtamp">Trodat 4927</p>
												<p class="gray">890 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4927_reg.png" >
												<p class="gray">58 мм / 38 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4928" id="type10">
										<label for="type10">
											<div>
												<img src="img/pechati/osnastki/Trodat_4928.jpg" >
												<p class="name_of_shtamp">Trodat 4928</p>
												<p class="gray">850 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4928_reg.png" >
												<br>
												<p class="gray">58 мм / 31 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4929" id="type11">
										<label for="type11">
											<div>
												<img src="img/pechati/osnastki/Trodat_4929.jpg" >
												<p class="name_of_shtamp">Trodat 4929</p>
												<p class="gray">870 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4929_reg.png" >
												<p class="gray">48 мм / 28 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Trodat 4931" id="type12">
										<label for="type12">
											<div>
												<img src="img/pechati/osnastki/Trodat_4931.jpg" >
												<p class="name_of_shtamp">Trodat 4931</p>
												<p class="gray">750 руб</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/Trodat_4931_reg.png" >
												<br>
												<p class="gray">68 мм / 28 мм</p>
											</div>
										</label>
									</div>
								</div>
							</div>
							<div id="simple_osnactki" class="osnastki_content active">
								<h5 class="divider-header type-header">2. Простые оснастки</h5>
								<div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid-small very-small" uk-grid uk-lightbox="animation: scale">
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №1" id="simple1">
										<label for="simple1">
											<div>
												<img src="img/pechati/osnastki/manual_1.jpg" >
												<p class="name_of_shtamp">Оснастка №1</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_1_reg.png" >
												<p class="gray">72 мм / 52 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №2" id="simple2">
										<label for="simple2">
											<div>
												<img src="img/pechati/osnastki/manual_2.jpg" >
												<p class="name_of_shtamp">Оснастка №2</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_2_reg.png" >
												<br>
												<p class="gray">68 мм / 23 мм  </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №3" id="simple3">
										<label for="simple3">
											<div>
												<img src="img/pechati/osnastki/manual_3.jpg" >
												<p class="name_of_shtamp">Оснастка №3</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_3_reg.png" >
												<p class="gray">58 мм / 38 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №4" id="simple4">
										<label for="simple4">
											<div>
												<img src="img/pechati/osnastki/manual_4.jpg" >
												<p class="name_of_shtamp">Оснастка №4</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_4_reg.png" >
												<br>
												<p class="gray">55 мм / 30 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №5" id="simple5">
										<label for="simple5">
											<div>
												<img src="img/pechati/osnastki/manual_5.jpg" >
												<p class="name_of_shtamp">Оснастка №5</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_5_reg.png" >
												<p class="gray">55 мм / 25 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №6" id="simple6">
										<label for="simple6">
											<div>
												<img src="img/pechati/osnastki/manual_6.jpg" >
												<p class="name_of_shtamp">Оснастка №6</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_6_reg.png" >
												<br>
												<p class="gray">68 мм / 10 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №7" id="simple7">
										<label for="simple7">
											<div>
												<img src="img/pechati/osnastki/manual_7.jpg" >
												<p class="name_of_shtamp">Оснастка №7</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_7_reg.png" >
												<p class="gray">55 мм / 15 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №8" id="simple8">
										<label for="simple8">
											<div>
												<img src="img/pechati/osnastki/manual_8.jpg" >
												<p class="name_of_shtamp">Оснастка №8</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_8_reg.png" >
												<br>
												<p class="gray">50 мм / 20 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №9" id="simple9">
										<label for="simple9">
											<div>
												<img src="img/pechati/osnastki/manual_9.jpg" >
												<p class="name_of_shtamp">Оснастка №9</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_9_reg.png" >
												<p class="gray">55 мм / 10 мм</p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №10" id="simple10">
										<label for="simple10">
											<div>
												<img src="img/pechati/osnastki/manual_10.jpg" >
												<p class="name_of_shtamp">Оснастка №10</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_10_reg.png" >
												<br>
												<p class="gray">45 мм / 16 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №11" id="simple11">
										<label for="simple11">
											<div>
												<img src="img/pechati/osnastki/manual_11.jpg" >
												<p class="name_of_shtamp">Оснастка №11</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_11_reg.png" >
												<p class="gray">36 мм / 12 мм </p>
											</div>
										</label>
									</div>
									<div class="radio-group" id="radio-group1">
										<input type="radio" class="inp-radio" name="ostanka" value="Оснастка №12" id="simple12">
										<label for="simple12">
											<div>
												<img src="img/pechati/osnastki/manual_11.jpg" >
												<p class="name_of_shtamp">Оснастка №12</p>
											</div>
											<div>
												<img src="img/pechati/osnastki/manual_11_reg.png" >
												<br>
												<p class="gray">44 / 44 / 44 мм</p>
											</div>
										</label>
									</div>
								</div>
							</div>
							<br><br>
							<div class="step2">
								<div class="divider-header">
									<h3>Прикрепите скан штампа</h3>
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
									<input type="text" class="fio" id="name" name="name_faksi" required>
								</div>
								<div class="input-group">
									<label for="phone">Телефон для связи</label>
									<input type="text" id="phone" placeholder="+7 906 733 39 17" name="phone" required>
								</div>
								<div class="input-group">
									<label for="email">Почта что бы мы отправили вам макет печати перед изготовлением</label>
									<input type="email" id="email" class="mail" placeholder="1ppc@mail.ru" name="email" required>
								</div><br>
								<div class="vivod">
									<div class="vibor">
										<p>Вы выбрали:</p>
									</div>
									<div class="checked_name"></div>
								</div>
								<input type="submit" class="submit" value="Заказать">
								<div id="success"></div>
							</div>
						</form>
						
					</div><!-- Шелкография -->
				</section><!-- основной контент -->
			</div>

			
		</div>
	</div>
	<!-- ///////// INCLUDE ///////// -->
	<? include "footer.php"; ?>

	<script src="js/scripts.min.js"></script>
	<script src="js/script.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.3.0/dist/js/jquery.suggestions.min.js"></script>
	<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(14088406, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/14088406" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
</body>
</html>
