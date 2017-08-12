<?php


function hashpw($value) {
    return password_hash($value, PASSWORD_BCRYPT);
}

if (isset($_GET['password']) && isset($_GET['id']) && isset($_GET['email'])) {
    

    $postdata = http_build_query(
        array(
            'id' => $_GET['id'],
            'password' => $_GET['password'],
            'email' => $_GET['email']
        )
    );
    
    $opts = array('http' =>
        array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata
        )
    );
    
    $context  = stream_context_create($opts);
    
    $result = file_get_contents('http://192.168.1.174:8000/login', false, $context);

    echo $result;
    //echo $homepage = file_get_contents('http://192.168.1.174:8000/login?password='.$_GET['password'].'&email='.$_GET['email'].'&id='.$_GET['id']);
}




?>