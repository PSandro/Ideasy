<?php
session_start();

require "db.php";

/*if(!isset($_SESSION['user_id'])){
    header("Location: index.php");
}*/


$records = $conn->prepare('SELECT lastName, firstName FROM ideasyUserData WHERE id = :id');
$records->bindParam(':id', $_SESSION['user_id']);
$records->execute();
$results = $records->fetch(PDO::FETCH_ASSOC);


$lastName = $results['lastName'];
$firstName = $results['firstName'];


?>
<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" type="image/png" href="icon--.png">
    <link rel="apple-touch-icon" sizes="76x76" href="icon--.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title>Ideasy Account Bestätigung</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport'/>
    <meta name="viewport" content="width=device-width"/>
    <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="assets/css/paper-kit.css" rel="stylesheet"/>
    <link href="assets/css/demo.css" rel="stylesheet"/>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,300,700' rel='stylesheet' type='text/css'>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/nucleo-icons.css" rel="stylesheet"/>
    <link rel="stylesheet" href="assets/css/ident.css">
    <style>
        h2 {
            color: white !important;
        }
        .rowwe {
            display: block;
            margin-right: auto;
            margin-left: auto;
            width:auto;
            min-width: 400px;
        }
    </style>
</head>
<body>
<div class="section section-dark darktranss">
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
                <h2>Deine digitale Identität ist jetzt schon ein Stück sicherer</h2><br/>
                <p class="description">Bitte ergänze noch die folgenden Daten. Diese werden gleich durch einen Mitarbeiter im Videochat verifizert.</p></div>
        </div>
    </div>
</div>
<div class="row">
    <div class="rowwe"><br/>
            <h3><?php echo $firstName; echo " "; echo $lastName; ?></h3><br/>
            <form class="form-horizontal" action="register.php" method="post">
            <div class="input-group form-group">
                <span class="input-group-addon"><i class="nc-icon nc-calendar-60"></i></span>
                <input type="date" id="birth" name="birth" class="form-control" required="" placeholder="Geburtsdatum">
            </div>

            <div class="input-group form-group">
                <span class="input-group-addon"><i class="nc-icon nc-pin-3"></i></span>
                <input type="text" id="placeOfBirth" name="placeOfBirth" class="form-control" required=""
                       placeholder="Geburtsort">

            </div>

            <div class="input-group form-group">
                <span class="input-group-addon"><i class="nc-icon nc-shop"></i></span>
                <input type="text" id="address" name="address" class="form-control" required="" placeholder="Adresse">
            </div>

            <div class="input-group form-group">
                <span class="input-group-addon"><i class="nc-icon nc-globe-2"></i></span>
                <input type="text" id="nationality" name="nationality" class="form-control" required=""
                       placeholder="Staatsangehörigkeit">
            </div>

            <div class="input-group form-group">
                <span class="input-group-addon"><i class="nc-icon nc-badge"></i></span>
                <input type="number" id="idCardId" name="idCardId" class="form-control" required=""
                       placeholder="Ausweis Nummer">
            </div>

            <div class="input-group form-group">
                <span class="input-group-addon"><i class="nc-icon nc-circle-10"></i></span>
                <input type="text" id="eyeColor" name="eyeColor" class="form-control" required=""
                       placeholder="Augenfarbe">
            </div>

            <div class="input-group form-group">
                <span class="input-group-addon"><i class="nc-icon nc-calendar-60"></i></span>
                <input type="date" id="idCardExpiration" name="idCardExpiration" class="form-control" required=""
                       placeholder="Gültigkeitsende Ausweis">
            </div>

            <button type="submit" class="btn btn-danger">Weiter</button>
			</form>

    </div>
</div>




</body>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script>
    $('#datetimepicker').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-remove'
        },
        debug: true

    });
</script>
<script src="assets/js/jquery-3.2.1.js" type="text/javascript"></script>
<script src="assets/js/jquery-ui-1.12.1.custom.min.js" type="text/javascript"></script>
<script src="assets/js/tether.min.js" type="text/javascript"></script>
<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
<script src="assets/js/bootstrap-switch.min.js"></script>
<script src="assets/js/nouislider.js"></script>
<script src="assets/js/moment.min.js"></script>
<script src="assets/js/bootstrap-datetimepicker.min.js"></script>
<script src="assets/js/paper-kit.js?v=2.0.0"></script>
</html>
