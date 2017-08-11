<?php
	
	
	require "db.php";
	
	//Prüfen und setzten der Werte aus dem Formular
	$name = "";
    if (isset($_POST['name'])) {
        $name = trim(htmlspecialchars($_POST['name']));
    }
    $vorname = "";
    if (isset($_POST['vorname'])) {
        $vorname = trim(htmlspecialchars($_POST['vorname']));
    }
    $email = "";
    if (isset($_POST['email'])) {
        $email = trim(htmlspecialchars($_POST['email']));
    }
    $emailBestaetigen = "";
    if (isset($_POST['emailBestaetigen'])) {
        $emailBestaetigen = trim(htmlspecialchars($_POST['emailBestaetigen']));
    }
    $passwort = "";
    if (isset($_POST['passwort'])) {
        $passwort = trim(htmlspecialchars($_POST['passwort']));
    }
    $passwortBestaetigen = "";
    if (isset($_POST['passwortBestaetigen'])) {
        $passwortBestaetigen = trim(htmlspecialchars($_POST['passwortBestaetigen']));
    }
    
    if($passwort == $passwortBestaetigen){
    	
    	$pwd = $passwort;
    	
    }else{
    	$pwd = "";
    }
    
	if(!empty($_POST['email']) && !empty($_POST['passwort'])):
			    	
					$pwd = password_hash($_POST['passwort'], PASSWORD_BCRYPT);
				
				    $sql = "INSERT INTO ideasyUser (email, password) VALUES (:email, :passwort)";
				    $stmt = $conn->prepare($sql);
			
				    $stmt->bindParam(':email', $_POST['email']);
				    $stmt->bindParam(':passwort', $pwd);
			
				    if( $stmt->execute() ):
					$message = 'Successfully created new user';
				    else:
					$message = 'Sorry there must have been an issue creating your account';
			    	endif;
			
			    endif;

	echo $message;

?>