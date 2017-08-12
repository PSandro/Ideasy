<?php 

if (!isset($_GET['id'])) {
    exit();
}

?>

<!DOCTYPE html>
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
        <!--<script>$('[data-toggle="tooltip"]').tooltip();</script>-->
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



    </head>

    <style>
        body {
            
        }
        .left {
            width: 50%;
            height: 100vh;
            background: #FF8800;
            position: relative;
            float: left;
        }
        .right {
            width: 50%;
            height: 100vh;
            float: right;
        }
        .logo {
            position: absolute;
            width: 50%;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        h2 {
            color: black;
            margin: 150px 25px 0 25px;
        }
        p {
            margin: 0 25px 0 25px;
        }
        #box {
            margin-left: 10px;
        }
        .btn {
            margin-left: 25px;
        }
        .help {
            margin-left: 25px;
        }
        a {
            text-decoration: underline;
        }
    </style>

    <script>

        function send() {

        $("#send").css("display", "none");
        $("#send").css("visibility", "hidden");

        $("#load").css("display", "block");
        $("#load").css("visibility", "visible");

        var pw = $("#passwort").val();
        var mail = $("#email").val();


            $.get("hash.php", { password: pw, email: mail, id:"<?php echo htmlentities($_GET['id']); ?>"}, function(data, status) {
                var rs = JSON.parse(data);
                if (rs.success == "true") {

                }else {
                    $("#load").css("display", "none");
                    $("#load").css("visibility", "hidden");

                    $("#send").css("display", "block");
                    $("#send").css("visibility", "visible");

                    alert("Dein Passwort oder Email ist falsch!");
                }
            });
                
            
                
        }


        
        

          $( document ).ready(function() {
            $( "#send" ).click(function() {
                send();
            });
           });

    </script>

    <body>
        
        <div class="left">
            <img class="logo" src="lieferando-logo.png">
        </div>
        <div class="right">
            <h2><i>Lieferando</i> fordert eine Bestätigung Deiner Adresse an</h2><br/>
            <p>Bitte melde Dich dazu an. Mit Deiner Anmeldung stimmst Du einer Überprüfung Deiner Daten durch <b>IDEasy</b> für <i>Lieferando</i> zu.</p>
            <br/><br/><br/>
            


                <div id="box" class="col-md-6">
                    <div class="input-group form-group">
                        <span class="input-group-addon"><i class="nc-icon nc-email-85"></i></span>
                        <input type="email" id="email" name="email" class="form-control" required="" placeholder="Email">
                    </div>
                </div>

                <div id="box" class="col-md-6">
                    <div class="input-group form-group">
                        <span class="input-group-addon"><i class="nc-icon nc-key-25"></i></span>
                        <input type="password" id="passwort" name="password" class="form-control" required="" placeholder="Passwort">
                    </div>
                </div>
            
                <button type="button" class="btn btn-info" value="Anmelden" id="send">Anmelden</button>
                <img src="assets/img/load.gif" style="display: none; visibility: hidden;" id="load" width="40px" height="40px">
                <br/><br/>

            <div class="help">
                <a href="" data-toggle="tooltip" data-placement="bottom" title="Pech gehabt! 😂">Passwort vergessen</a> | Noch kein Account? <a href="http://localhost/Ideasy/frontend/">Registrieren</a>
            </div>

        </div>
        
    </body>

    
</html>