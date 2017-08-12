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
    .load-more {
        background-color: #e1e1e1;
        color: #444;
        display: block;
        font-family: sans-serif;
        height: 3em;
        line-height: 3em;
        margin-left: 25px;
        overflow: hidden;
        padding: 0 3em;
        text-align: center;
        text-decoration: none;
        -webkit-transition: all .2s ease, background-color .01s ease, color .01s ease;
        transition: all .2s ease, background-color .01s ease, color .01s ease;
        width: 10em;
    }
    .load-more.load-more--loading {
        -webkit-animation: rotate 1.5s linear infinite;
        animation: rotate 1.5s linear infinite;
        -webkit-animation-delay: .2s;
        animation-delay: .2s;
        background-color: transparent;
        border: .3em solid #e1e1e1;
        border-radius: 1.5em;
        border-top-color: #444;
        box-sizing: border-box;
        height: 3em;
        color: transparent;
        padding: 0;
        pointer-events: none;
        width: 3em;
    }

    @-webkit-keyframes rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

</style>

<script>

    function send() {

        $("#send").css("display", "none");
        $("#send").css("visibility", "hidden");
        $('.load-more').addClass('load-more--loading');


        var pw = $("#passwort").val();
        var mail = $("#email").val();


        $.get("hash.php", { password: pw, email: mail, id:"<?php echo htmlentities($_GET['id']); ?>"}, function(data, status) {
            var rs = JSON.parse(data);
            if (rs.success == "true") {

            }else {

                $('.load-more--loading').removeClass('load-more--loading');

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
<script>
    $('.load-more').click(function(e){
        $(this).addClass('load-more--loading');
        setTimeout(function(e){
            $('.load-more--loading').removeClass('load-more--loading')
        }, 3000);
    })
</script>
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

    <a href="#" onclick="send()" class="load-more">Load more</a>
    <br/><br/>

    <div class="help">
        <a href="" data-toggle="tooltip" data-placement="bottom" title="Pech gehabt! 😂">Passwort vergessen</a> | Noch kein Account? <a href="http://localhost/Ideasy/frontend/">Registrieren</a>
    </div>

</div>

</body>


</html>
