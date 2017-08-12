<?php
	session_start();
	
	require "db.php";
	
	if(!isset($_SESSION['user_id'])){
		header("Location: index.php");
	}
	
	echo $_SESSION['user_id'];
	
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
    <meta charset="utf-8" />
    <link rel="icon" type="image/png" href="icon--.png">
    <link rel="apple-touch-icon" sizes="76x76" href="icon--.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Ideasy Account Bestätigung</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/paper-kit.css" rel="stylesheet"/>
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,300,700' rel='stylesheet' type='text/css'>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/nucleo-icons.css" rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/ident.css">
    <style>
        body {
            margin-left: 40px;
            }
        
        .header {
                margin-left: 60px !important;
                margin-top: 20px !important;
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
        
        .good {
            color: green;
        }
        
        .videocall {
            width: 900px;
            height: 500px;
            background: black;
            margin-left: auto;
            margin-right: auto;
            margin-top:100px;
            position: relative;
        }
        
        .videocall-good {
            width: 900px;
            height: 500px;
            background: green;
            margin-left: auto;
            margin-right: auto;
            margin-top:100px;
            position: relative;
        }
        
        .button {
            margin: 90px auto;
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
</head>
    <body>
        
        <h2>Bitte überprüfe nochmal Deine Daten</h2><br/>
        <div class="col-md-3">
<h3><?php echo $firstName; echo $lastName; ?></h3><br/>
                                                    <div class="input-group form-group">
                                                        <span class="input-group-addon"><i class="nc-icon nc-email-85"></i></span>
                                                        <input type="email" id="email" name="email" class="form-control" required="" placeholder="Email" onkeyup="myFunction()">
                                                    </div>
                                                    <div class="input-group form-group">
                                                        <span class="input-group-addon"><i class="nc-icon nc-email-85"></i></span>
                                                        <input type="email" id="emailBestaetigen" name="emailBestaetigen" class="form-control" required="" placeholder="Email bestätigen" onkeyup="myFunction()">

                                                    </div>
                                                    <div class="input-group form-group">
                                                        <span class="input-group-addon"><i class="nc-icon nc-key-25"></i></span>
                                                        <input type="password" id="passwort" name="passwort" class="form-control" required="" placeholder="Passwort" onkeyup="myFunction()">
                                                    </div>
                                                    <div class="input-group form-group">
                                                        <span class="input-group-addon"><i class="nc-icon nc-key-25"></i></span>
                                                        <input type="password" id="passwortBestaetigen" name="passwortBestaetigen" class="form-control" required="" placeholder="Passwort wiederholen" onkeyup="myFunction()">
                                                    </div>
            
            <button type="button" class="btn btn-danger">Weiter</button>


        
        </div>
        
    </body>
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
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