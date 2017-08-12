<?php
session_start();


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
$birth = "";
if (isset($_POST['birth'])) {
    $birth = trim(htmlspecialchars($_POST['birth']));
}
$placeOfBirth = "";
if (isset($_POST['placeOfBirth'])) {
    $placeOfBirth = trim(htmlspecialchars($_POST['placeOfBirth']));
}
$address = "";
if (isset($_POST['address'])) {
    $address = trim(htmlspecialchars($_POST['address']));
}
$nationality = "";
if (isset($_POST['nationality'])) {
    $nationality = trim(htmlspecialchars($_POST['nationality']));
}
$idCardId = "";
if (isset($_POST['idCardId'])) {
    $idCardId = trim(htmlspecialchars($_POST['idCardId']));
}
$eyeColor = "";
if (isset($_POST['eyeColor'])) {
    $eyeColor = trim(htmlspecialchars($_POST['eyeColor']));
}
$idCardExpiration = "";
if (isset($_POST['idCardExpiration'])) {
    $idCardExpiration = trim(htmlspecialchars($_POST['idCardExpiration']));
}

if ($passwort == $passwortBestaetigen) {

    $pwd = $passwort;

} else {
    $pwd = "";
}

//eintragen der Daten auf der Starteite erste Tabelle
if (!empty($_POST['email']) && !empty($_POST['passwort'])):

    //Insert password an email in ideasyUser table.
    $pwd = password_hash($_POST['passwort'], PASSWORD_BCRYPT);

    $sql = "INSERT INTO ideasyUser (email, password) VALUES (:email, :passwort)";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':email', $_POST['email']);
    $stmt->bindParam(':passwort', $pwd);

    if ($stmt->execute()):
        $message = 'Successfully created new user';
    else:
        $message = 'Sorry there must have been an issue creating your account';
        print_r($stmt->errorInfo());
    endif;
	
	$records = $conn->prepare('SELECT id FROM ideasyUser WHERE email = :email');
	$records->bindParam(':email', $_POST['email']);
	$records->execute();
	$results = $records->fetch(PDO::FETCH_ASSOC);
	
	
	$_SESSION['user_id'] = $results['id'];


endif;



//eintragen der Daten auf der Starteite zweite Tabelle
if (!empty($_POST['name']) && !empty($_POST['vorname'])):

    $sql = "INSERT INTO ideasyUserData (firstName, lastName) VALUES (:vorname, :name)";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':vorname', $vorname);
    $stmt->bindParam(':name', $name);

    if ($stmt->execute()):
        header("Location: ident-1.php");
    else:
        $message = ' Sorry there must have been an issue saving your Data';
        print_r($stmt->errorInfo());
    endif;


endif;


//eintragen der Daten auf der 2. Registrierungsseite
if (!empty($_POST['birth']) && !empty($_POST['address'])):
	
	
    $sql = "UPDATE ideasyUserData SET idCardExpiration = :idCardExpiration, birth = :birth, placeOfBirth = :placeOfBirth, address = :address, nationality = :nationality, idCardId = :idCardId, eyeColor = :eyeColor WHERE id = :id";
    $stmt = $conn->prepare($sql);

	$stmt->bindParam(':id', $_SESSION['user_id']);
    $stmt->bindParam(':idCardExpiration', $idCardExpiration);
    $stmt->bindParam(':birth', $birth);
    $stmt->bindParam(':placeOfBirth', $placeOfBirth);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':nationality', $nationality);
    $stmt->bindParam(':idCardId', $idCardId);
    $stmt->bindParam(':eyeColor', $eyeColor);

    if ($stmt->execute()):
        header("Location: ident-2.php");
        
    else:
        $message = ' Sorry there must have been an issue saving your Data';
        print_r($stmt->errorInfo());
    endif;


endif;

?>