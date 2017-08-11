<?php
	session_start();

	require "db.php";
	
	//Prüfen und setzten der Werte aus dem Formular
    $email = "";
    if (isset($_POST['email'])) {
        $email = trim(htmlspecialchars($_POST['email']));
    }
    
    $password = "";
    if (isset($_POST['password'])) {
        $password = trim(htmlspecialchars($_POST['password']));
    }


									if(!empty($_POST['email']) && !empty($_POST['password'])):

									$records = $conn->prepare('SELECT id,email,password FROM ideasyUser WHERE email = :email');
									$records->bindParam(':email', $_POST['email']);
									$records->execute();
									$results = $records->fetch(PDO::FETCH_ASSOC);

									$message = '';

									if(count($results) > 0 && password_verify($_POST['password'], $results['password']) ){

									$_SESSION['user_id'] = $results['id'];
									
									//Umleitung auf Mainpage
									header("Location: index.php");
									//die();
									//echo $_SESSION['user_id'];

									} else {
									echo '<span class="label label-danger" .>' . '<span class="glyphicon glyphicon-alert">' . '</span>' . ' Sorry, Passwort oder Benutzername falsch/nicht vorhanden!'. '</span>';
									}

									endif;
    
?>