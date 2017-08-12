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
        body {

        }

        h2 {
            color: #fff !important;
        }

        .imgadd {
            background: url(schnecke123.png) !important;
            background-repeat: no-repeat;
            display: block !important;
        }

        .text {
            color: white;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }

        .bfl {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .videocall {
            width: 900px;
            height: 500px;
            background: white;
            background-repeat: no-repeat;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            position: relative;
        }

        #lala {
            text-decoration: underline;
            color: #fff !important;
        }

        .loader,
        .loader:before,
        .loader:after {
            border-radius: 50%;
            width: 2.5em;
            height: 2.5em;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation: load7 1.8s infinite ease-in-out;
            animation: load7 1.8s infinite ease-in-out;
        }

        .loader {
            color: #ffffff;
            font-size: 10px;
            margin: 80px auto;
            position: relative;
            text-indent: -9999em;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        .loader:before,
        .loader:after {
            content: '';
            position: absolute;
            top: 0;
        }

        .loader:before {
            left: -3.5em;
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        .loader:after {
            left: 3.5em;
        }

        @-webkit-keyframes load7 {
            0%,
            80%,
            100% {
                box-shadow: 0 2.5em 0 -1.3em;
            }
            40% {
                box-shadow: 0 2.5em 0 0;
            }
        }

        @keyframes load7 {
            0%,
            80%,
            100% {
                box-shadow: 0 2.5em 0 -1.3em;
            }
            40% {
                box-shadow: 0 2.5em 0 0;
            }
        }

    </style>
    <script src="https://code.jquery.com/jquery-latest.js"></script>
    <script src="assets/js/jquery-3.2.1.js" type="text/javascript"></script>

    <script>
        $(document).ready(function () {

        });

        function myfuncc() {
            $('.videocall').css('background', 'black');
            setTimeout(function () {
                $(".videocall").addClass("imgadd");
                $('#lala').css('display', 'none');
                $(".bfl").css('display', 'none');
                $(".text").css('display', 'none');
            }, 5000);
        }


    </script>
</head>
<body>
<div class="section section-dark darktranss">
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
                <h2>Hallo <?php echo $firstName; echo " "; echo $lastName; ?></h2><br/>
                <p class="description">
                    Nur noch ein Schritt bis Dein Account bestätigt ist. Dazu kannst Du ein Video
                    Telefonat mit einem Mitarbeiter durchführen. Das dient zur Bestätigung Deiner Identität und Deiner
                    Daten. Alternativ steht auch der PostIdent Service der Deutschen Post zur Verfügung. Klicke dafür
                    <a href="#">hier</a><br/><br/><a id="lala" href="#lol" onclick="myfuncc()">Videotelefonat starten</a><br>
                     <a href="index.php">Hier kommst du zurück zur Hauptseite</a>
                </p>
            </div>

        </div>
    </div>
</div>

<div id="lol" class="videocall camera">
    <p class="text">Du wirst mit einem Mitarbeiter verbunden ... </p>
    <div class="bfl">
        <div class="loader">Loading...</div>
    </div>
</div>

</body>
<script src="assets/js/jquery-ui-1.12.1.custom.min.js" type="text/javascript"></script>
<script src="assets/js/paper-kit.js?v=2.0.0"></script>
</html>