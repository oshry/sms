<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once './env.php';
require DOCROOT . './vendor/autoload.php';
$config = include 'config/db.php';


//singleton db
$db = Repository\DataRepository::instance($config, 'default');

$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['REQUEST_URI'];
$paths = explode("/", $path);

$sub_path = explode("?", $paths[3]);
try {
    if ($sub_path[0] == "filter") {
        switch ($method) {
            case 'POST':
            case 'GET':
                if ( isset($_REQUEST['from']) && isset($_REQUEST['from']) ) {
                    $cnt = $uid = 0;

                    if (isset($_REQUEST['cnt']) && $_REQUEST['cnt'] !=="")
                        $cnt = $_REQUEST['cnt'];
                    if (isset($_REQUEST['uid']) && $_REQUEST['uid'] !==""){
                        $uid = $_REQUEST['uid'];
                    }
                    $filter = new \Usecase\Filter($db);

                    $from = str_replace( '"','',$_REQUEST['from'] );
                    $to = str_replace( '"','',$_REQUEST['to'] );

                    $output = $filter->from_to($from, $to, $cnt, $uid);
//                    $output = $db->from_to("2011-01-01", "2020-01-01", $cnt, $uid);
                } else {
                    throw new \Exception('api error');
                }
                break;

        }
    }

} catch (Exception $e) {
    $message = $e->getMessage();
}
//output
echo json_encode($output);
die;
