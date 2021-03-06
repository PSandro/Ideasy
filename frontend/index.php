<?php
session_start();

?>
<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/png" href="icon--.png">
    <link rel="apple-touch-icon" sizes="76x76" href="icon--.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Ideasy</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/paper-kit.css" rel="stylesheet" />
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,300,700' rel='stylesheet' type='text/css'>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/nucleo-icons.css" rel="stylesheet" />


    <style>
        body {
            background: url(assets/img/bg2.jpg) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
        h1 {
            font-size: 5em !important;
        }
        .img-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .android {
            height: 50%;
            width: auto;
        }
        .centaa {
            position: relative;
        }
        .footer {
            background-color: rgb(37, 36, 34) !important;
        }
        .darktranss {
            background-color: rgba(0, 0, 0, 0.5) !important;
        }
        .section-darker {
            background-color: transparent !important;
        }
        .sendtextbtn {
            margin: 30px auto;
        }
        #alert {
            display: none;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-toggleable-md fixed-top navbar-transparent" color-on-scroll="300">
        <div class="container">
            <div class="navbar-translate">
                <button class="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar"></span>
                    <span class="navbar-toggler-bar"></span>
                    <span class="navbar-toggler-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html"><img id="logo" src="ideasy-logo-white.png" width="200" height="40" alt="Ideasy">
                </a>
            </div>
            
            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav ml-auto">
                	<?php if(!isset($_SESSION['user_id'])){ ?>
                    <li class="nav-item">
                        <a href="#about" class="nav-link"><i class="nc-icon"></i>Was ist IDEasy</a>
                    </li>
                    <li class="nav-item">
                        <a href="#loginreg" class="nav-link"><i class="nc-icon"></i>Registrieren</a>
                    </li>
                    <?php }else{ ?>
                    <li class="nav-item">
                        <a href="logout.php" class="nav-link"><i class="nc-icon"></i>Logout</a>
                    </li>
                    <?php } ?>
                    <li class="nav-item">
                        <a href="#loginreg" class="btn btn-info btn-sm btn-round"><?php if(isset($_SESSION['user_id'])){echo "Mein Konto";}else{echo"Login";} ?><i class="fa fa-sign-in" aria-hidden="true"></i></a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <div class="wrapper">
        <div class="page-header section-dark section-darker">
            <div class="filter"></div>
            <div class="content-center">
                <div class="container">
                    <div class="title-brand">
                        <h1>IDEasy</h1>
                    </div>

                    <h2 class="presentation-subtitle text-center">Einfach und schnell online verifizieren</h2>
                </div>
            </div>

        </div>
        <div id="about" class="section text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <h2 class="title">Was ist IDEasy</h2>
                        <h5 class="description">IDEasy bietet für Nutzer eine Alternative zu den klassischen Verifizierungsmethoden, wie PostIdent und VideoIdent. Für Online Händler ermöglicht IDEasy einen sichereren Bestellvorgang, der Altersprüfungen deutlich schneller ablaufen lässt und Adress- und Identitätsüberprüfungen übernimmt.</h5>
                        <br>
                    </div>
                </div>
                <br>
                <br>
                <div class="row">
                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-danger">
                                <i class="nc-icon nc-badge"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Altersüberprüfung</h4>
                                <br/>
                                <p class="description">Bisher war die Eingabe der Ausweisnummer erforderlich, mit einem bestätigten IDEasy Account erfolgt die Überprüfung innerhalb weniger Sekunden.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-danger">
                                <i class="nc-icon nc-shop"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Adressüberprüfung</h4>
                                <br/>
                                <p>Online Händler können mit IDEasy die von den Kunden angegebene Adresse schnell überprüfen und so Fake Bestellungen vorbeugen.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-danger">
                                <i class="nc-icon nc-touch-id"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Identitätsüberprüfung</h4>
                                <br/>
                                <p>Die für Viele Bank Transaktionen verwendeten Methoden PostIdent und VideoIdent dauern zwischen 10 Minuten und mehreren Tagen. Mit IDEasy kann eine Identitätsprüfung schnell und einfach mittels dem bestätigten IDEasy Account erfolgen.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>


        <div class="section section-dark darktranss">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2 text-center">
                        <h2 class="title">Wie kann ich einen Account erstellen?</h2>
                        <p class="description">Wenn Du von den Vorteilen eines kostenlosen IDEasy Accounts profitieren willst, fülle die nachfolgenden Felder aus. Vorerst benötigen wir nur Deinen Namen, Deine E-Mail Adresse und ein Passwort. Danach wirst Du zur Bestätigung Deines Accounts auf eine Seite weitergeleitet, wo Du mit einem Mitarbeiter ein Video Telefonat zur Bestätigung deiner Identität durchführst. Bitte halte Deinen Personalausweis bereit und nutze einen Computer mit WebCam. Nach dem Video Telefonat ist Dein Account bestätigt und kann verwendet werden.</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="loginreg" class="main">
            <div class="section section-nucleo-icons">
                <div class="container">
                    <div class="row">
                    	<?php if(!isset($_SESSION['user_id'])){ ?>
                        <div class="col-md-8 offset-md-2">

                            <div class="nav-tabs-navigation">
                                <div class="nav-tabs-wrapper">
                                    <ul id="tabs" class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#register" role="tab">Registrieren</a>

                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#login" role="tab">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="my-tab-content" class="tab-content text-center">
                                <div class="tab-pane active" id="register" role="tabpanel">
                                    <h2>Account erstellen</h2>
                                
                                    <div class="col-md-8 offset-md-2">
                                        <hr>
                                    </div>
                                    <br>
                                    <div class="col-md-12 offset-md-3">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <form class="form-horizontal" action="register.php" method="post">
                                                    <div class="form-group input-group">
                                                        <span class="input-group-addon"><i class="nc-icon nc-single-02"></i></span>
                                                        <input type="text" id="name" name="name" class="form-control form-group-no-border" aria-describedby="basic-addon1" required="" placeholder="Name">

                                                    </div>
                                                    <div class="input-group form-group">
                                                        <span class="input-group-addon"><i class="nc-icon nc-single-02"></i></span>
                                                        <input type="text" id="vorname" name="vorname" class="form-control" required="" placeholder="Vorname">
                                                    </div>

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


                                                    <div id="alert" class="alert alert-danger alert-with-icon" data-notify="container">
                                                        <div class="container">
                                                            <div class="alert-wrapper">
                                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                    <i class="nc-icon nc-simple-remove"></i>
                                                                </button>
                                                                <div class="message"><i class="nc-icon nc-bell-55"></i>Bitte überprüfe, ob beide E-Mail Adressen und Passwörter übereinstimmen.</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button type="submit" class="btn btn-info btn-round <?php if(isset($_SESSION['user_id'])){echo "disabled";} ?>">Register</button>

                                                </form>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="login" role="tabpanel">
                                    <h2>Login</h2>
                                    <div class="col-md-8 offset-md-2">
                                        <hr>
                                    </div>
                                    <br>
                                    <div class="col-md-12 offset-md-3">
                                        <div class="row">
                                            <div class="col-sm-6">

											<form class="form-horizontal" action="login.php" method="post">
                                                <div class="form-group">
                                                    <input type="email" id="email" name="email" class="form-control" placeholder="Email">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" id="password" name="password" class="form-control" placeholder="Passwort">
                                                </div>
                                
												<input type="hidden" name="aktion" value="login">
                                                <button type="submit" class="btn btn-info btn-round <?php if(isset($_SESSION['user_id'])){echo "disabled";} ?>">Login</button>
                                               
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <?php } ?>


            <div class="section landing-section">

                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <h2 class="text-center">Hast Du noch Fragen?</h2>
                            <br/>
                            <br/>
                            <form class="contact-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name</label>
                                        <div class="input-group">
                                            <span class="input-group-addon">
	                                            <i class="nc-icon nc-single-02"></i>
	                                        </span>
                                            <input type="text" class="form-control" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label>E-mail</label>
                                        <div class="input-group">
                                            <span class="input-group-addon">
												<i class="nc-icon nc-email-85"></i>
											</span>
                                            <input type="text" class="form-control" placeholder="E-mail">
                                        </div>
                                    </div>
                                </div>
                                <label>Nachricht</label>
                                <textarea class="form-control" rows="4" placeholder="Was möchtest Du wissen"></textarea>
                                <div class="row">
                                    <button class="btn btn-info btn-lg btn-fill sendtextbtn">Senden</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <nav class="footer-nav">
                            <ul>
                                <li><a href="">Impressum</a>
                                </li>

                            </ul>
                        </nav>
                        <div class="credits ml-auto">
                            <span class="copyright">
                        © <script>document.write(new Date().getFullYear())</script>, made with <i class="fa fa-heart heart"></i> at Code+Design Camp

                    </span>
                        </div>
                    </div>
                </div>
            </footer>

</body>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>

<script>
    
    
    
    function myFunction() {
        
        var firstpw = document.getElementById("passwort").value;
        var secondpw = document.getElementById("passwortBestaetigen").value;
        var firstmail = document.getElementById('email').value;
        var secondmail = document.getElementById('emailBestaetigen').value;
        

    
    if (firstmail === secondmail) {
        if (firstpw === secondpw) {
            document.getElementById("btn").disabled = false; 
        document.getElementById('alert').style.display = 'none'
        } else {
            document.getElementById("btn").disabled = true; 
    document.getElementById('alert').style.display = 'block'
        }
    } else {
        document.getElementById("btn").disabled = true; 
    document.getElementById('alert').style.display = 'block'
    }}
    
</script>

<script src="assets/js/scroll.js" type="text/javascript"></script>
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