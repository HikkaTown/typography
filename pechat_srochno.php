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
					<li><span>Срочная печать</span></li>
				</ul>
				<section class="s-content"><!-- основной контент -->
					<header>
						<h1 class="uk-heading-divider">Срочная печать <br><span>Цветной бульвар, Кузнецкий мост, Новокузнецкая,  Третьяковская, Чистые пруды</span></h1>
						<div class="img-container">
							<img src="img/glavnie/pechat_srochno.jpg">
							<div class="img-text">
								<h4>Срочная печать за 1 час <br> от 800 руб</h4>
								<p>Автоматические оснастки <br>
								Гарантия 3 года <br>
								Доставка по Москве</p>
							</div>
						</div>
						<p class="uk-text-meta uk-text-small">Мы делаем печать в течении часа, оборудование позволяет изготовить срочную печать при вас. Если нет времени придти к нам, отправьте по почте оттиск печати или скан свидетельства, готовую печать доставит курьер куда скажите. </p>
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
						<h2>Как заказать срочную печать</h2>
						<div class="divider-header">
							<h3>Выберете оснастку для вашей срочой печати</h3>
							<span class="step-number">1</span>
						</div>
						<br>
						<form action="pechat_srochno.php" enctype="multipart/form-data" method="post">
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
								<br>
								<h3 class="divider-header red">Cрочно за 1 час</h3>
								<div class="input-group">
									<label for="name">Ваше имя</label>
									<input type="text" class="fio" id="name" placeholder="Андрей" name="name" required>
								</div>
								<div class="input-group">
									<label for="name">Телефон для связи</label>
									<input type="text" id="name" placeholder="+7 906 733 39 17" name="phone" required>
								</div>
								<input type="submit" class="submit" value="Заказать" name="submit">
							</div>
							<br>
							<div class="vivodshtamp vivod">
									<div class="vibor">
										<p>Вы выбрали оснастку:</p>
									</div>
									<div class="checkedshtamp"></div>
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