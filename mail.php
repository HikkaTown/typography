<?php     
    if(isset($_POST['name']) && isset($_POST['phone'])) {
        if($_POST['dostavka'] === "need_delivery" ) {
            $delivery = 'Нужна доставка по адресу: ' . $_POST['dostavka_address'];
            $to_email = '5175914@1ppc.ru';
            $to_email = '5175914@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                ОГРН: '.$_POST['ogrn'].'                      
                Название (как в уставе) для ООО или укажите ФИО для ИП (важно соблюдать регистр букв в названии): '.$_POST['ogrn_name'].'                      
                Оснастка: '.$_POST['osnastka'].'                      
                Макет: '.$_POST['maket'].'
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';    
            mail($to_email,$subject,$message,$headers);
        } else if ($_POST['dostavka'] === "ofis1") {
            $delivery = 'Самовывоз из офиса 1';
            $to_email = '5175914@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                ОГРН: '.$_POST['ogrn'].'                      
                Название (как в уставе) для ООО или укажите ФИО для ИП (важно соблюдать регистр букв в названии): '.$_POST['ogrn_name'].'                      
                Оснастка: '.$_POST['osnastka'].'                      
                Макет: '.$_POST['maket'].'
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis2") {
            $delivery = 'Самовывоз из офиса 2';
            $to_email = '7781119@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                ОГРН: '.$_POST['ogrn'].'                      
                Название (как в уставе) для ООО или укажите ФИО для ИП (важно соблюдать регистр букв в названии): '.$_POST['ogrn_name'].'                      
                Оснастка: '.$_POST['osnastka'].'                      
                Макет: '.$_POST['maket'].'
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail('7781119@1ppc.ru',$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis3") {
            $delivery = 'Самовывоз из офиса 3 ';
            $to_email = '1421082@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                ОГРН: '.$_POST['ogrn'].'                      
                Название (как в уставе) для ООО или укажите ФИО для ИП (важно соблюдать регистр букв в названии): '.$_POST['ogrn_name'].'                      
                Оснастка: '.$_POST['osnastka'].'                      
                Макет: '.$_POST['maket'].'
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis4") {
            $delivery = 'Самовывоз из офиса 4 ';
            $to_email = '1421082@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                ОГРН: '.$_POST['ogrn'].'                      
                Название (как в уставе) для ООО или укажите ФИО для ИП (важно соблюдать регистр букв в названии): '.$_POST['ogrn_name'].'                      
                Оснастка: '.$_POST['osnastka'].'                      
                Макет: '.$_POST['maket'].'
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        }
    }

    if (isset($_POST['submit'])) {
        $delivery = 'Нужна доставка по адресу: ' . $_POST['dostavka_address'];
        $to_email = '5175914@1ppc.ru';
        $to_email = '5175914@1ppc.ru';
        $subject = 'Заявка с 1ppc';
        $file_name = $_FILES['file']['name'];
        $tmp_name = $_FILES['file']['tmp_name'];
        $folder = 'uploads/';
        move_uploaded_file($tmp_name, $folder . $file_name);
        $message = '
            Заявка с Срочная Печать
            Имя: '.$_POST['name'].'
            Телефон: '.$_POST['phone'].'                    
            Файл: http://1ppc.ru/uploads/'.$file_name.'                    
            Оснастка: '.$_POST['osnastka'];
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';    
        if(mail($to_email,$subject,$message,$headers)) {
            echo "<script>alert('Ваша заявка удачно отправлена!')</script>";
        } else {
            echo "<script>alert('Заполните все поля и попробуйте снова!')</script>";
        }
    }


    if(isset($_POST['name_shtamp']) && isset($_POST['phone'])) {
        if($_POST['dostavka'] === "need_delivery" ) {
            $delivery = 'Нужна доставка по адресу: ' . $_POST['dostavka_address'];
            $to_email = '5175914@1ppc.ru';
            $to_email = '5175914@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $stroka = $_POST['stroka1'].",".$_POST['stroka2'].",".$_POST['stroka3'].",".$_POST['stroka4'].",".$_POST['stroka5'].",".$_POST['stroka6'].",".$_POST['stroka7'].",".$_POST['stroka8'].",".$_POST['stroka9'].",".$_POST['stroka10'];
            $message = '
                Имя: '.$_POST['name_shtamp'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                Оснастку: '.$_POST['ostanka'].'                      
                Дизайн-макет нового штампа: '.$_POST['design'].'                      
                Строка: '.$stroka.'                      
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';    
            mail($to_email,$subject,$message,$headers);
        } else if ($_POST['dostavka'] === "ofis1") {
            $delivery = 'Самовывоз из офиса 1';
            $to_email = '5175914@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $stroka = $_POST['stroka1'].",".$_POST['stroka2'].",".$_POST['stroka3'].",".$_POST['stroka4'].",".$_POST['stroka5'].",".$_POST['stroka6'].",".$_POST['stroka7'].",".$_POST['stroka8'].",".$_POST['stroka9'].",".$_POST['stroka10'];
            $message = '
                Имя: '.$_POST['name_shtamp'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                Оснастку: '.$_POST['ostanka'].'                      
                Дизайн-макет нового штампа: '.$_POST['design'].'                      
                Строка: '.$stroka.'                      
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz'; 
            mail($to_email,$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis2") {
            $delivery = 'Самовывоз из офиса 2';
            $to_email = '7781119@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $stroka = $_POST['stroka1'].",".$_POST['stroka2'].",".$_POST['stroka3'].",".$_POST['stroka4'].",".$_POST['stroka5'].",".$_POST['stroka6'].",".$_POST['stroka7'].",".$_POST['stroka8'].",".$_POST['stroka9'].",".$_POST['stroka10'];
            $message = '
                Имя: '.$_POST['name_shtamp'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                Оснастку: '.$_POST['ostanka'].'                      
                Дизайн-макет нового штампа: '.$_POST['design'].'                      
                Строка: '.$stroka.'                      
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz'; 
            mail('7781119@1ppc.ru',$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis3") {
            $delivery = 'Самовывоз из офиса 3 ';
            $to_email = '1421082@1ppc.ru';
            $stroka = $_POST['stroka1'].",".$_POST['stroka2'].",".$_POST['stroka3'].",".$_POST['stroka4'].",".$_POST['stroka5'].",".$_POST['stroka6'].",".$_POST['stroka7'].",".$_POST['stroka8'].",".$_POST['stroka9'].",".$_POST['stroka10'];
            $message = '
                Имя: '.$_POST['name_shtamp'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                Оснастку: '.$_POST['ostanka'].'                      
                Дизайн-макет нового штампа: '.$_POST['design'].'                      
                Строка: '.$stroka.'                      
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz'; 
            mail($to_email,$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis3") {
            $delivery = 'Самовывоз из офиса 4 ';
            $to_email = '7411049@1ppc.ru';
            $stroka = $_POST['stroka1'].",".$_POST['stroka2'].",".$_POST['stroka3'].",".$_POST['stroka4'].",".$_POST['stroka5'].",".$_POST['stroka6'].",".$_POST['stroka7'].",".$_POST['stroka8'].",".$_POST['stroka9'].",".$_POST['stroka10'];
            $message = '
                Имя: '.$_POST['name_shtamp'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'  
                Оснастку: '.$_POST['ostanka'].'                      
                Дизайн-макет нового штампа: '.$_POST['design'].'                      
                Строка: '.$stroka.'                      
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz'; 
            mail($to_email,$subject,$message,$headers);
        }
    }

    if (isset($_POST['name_ottisku'])) {
        $file_name = $_FILES['file']['name'];
        $tmp_name = $_FILES['file']['tmp_name'];
        $folder = 'uploads/';
        move_uploaded_file($tmp_name, $folder . $file_name);
        if($_POST['dostavka'] === "need_delivery" ) {
            $delivery = 'Нужна доставка по адресу: ' . $_POST['dostavka_address'];
            $to_email = '5175914@1ppc.ru';
            $to_email = '5175914@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_ottisku'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';    
            mail($to_email,$subject,$message,$headers);
        } else if ($_POST['dostavka'] === "ofis1") {
            $delivery = 'Самовывоз из офиса 1';
            $to_email = '5175914@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_ottisku'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis2") {
            $delivery = 'Самовывоз из офиса 2';
            $to_email = '7781119@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_ottisku'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail('7781119@1ppc.ru',$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis3") {
            $delivery = 'Самовывоз из офиса 3 ';
            $to_email = '1421082@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_ottisku'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis3") {
            $delivery = 'Самовывоз из офиса 4 ';
            $to_email = '7411049@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_ottisku'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        }
    }


    if (isset($_POST['name_faksi'])) {
        $file_name = $_FILES['file']['name'];
        $tmp_name = $_FILES['file']['tmp_name'];
        $folder = 'uploads/';
        move_uploaded_file($tmp_name, $folder . $file_name);

        if($_POST['dostavka'] === "need_delivery" ) {
            $delivery = 'Нужна доставка по адресу: ' . $_POST['dostavka_address'];
            $to_email = '5175914@1ppc.ru';
            $to_email = '5175914@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_faksi'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';    
            mail($to_email,$subject,$message,$headers);
        } else if ($_POST['dostavka'] === "ofis1") {
            $delivery = 'Самовывоз из офиса 1';
            $to_email = '5175914@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_faksi'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis2") {
            $delivery = 'Самовывоз из офиса 2';
            $to_email = '7781119@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_faksi'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail('7781119@1ppc.ru',$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis3") {
            $delivery = 'Самовывоз из офиса 3 ';
            $to_email = '1421082@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_faksi'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        } else if($_POST['dostavka'] === "ofis4") {
            $delivery = 'Самовывоз из офиса 4 ';
            $to_email = '7411049@1ppc.ru';
            $subject = 'Заявка с 1ppc';
            $message = '
                Имя: '.$_POST['name_faksi'].'
                Телефон: '.$_POST['phone'].'
                Email: '.$_POST['email'].'                        
                Оснастка: '.$_POST['osnastka'].'                      
                Файл: http://1ppc.ru/uploads/'.$file_name.' 
                Доставка:'.$delivery;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers = 'From: Заявка Первый Печатный'.'k.chinaliev@student.inha.uz';  
            mail($to_email,$subject,$message,$headers);
        }
    }
?>