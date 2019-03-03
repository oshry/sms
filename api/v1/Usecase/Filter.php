<?php
namespace Usecase;
use PDO;

class Filter {
    public function __construct($repo){
        $this->repo  = $repo;
    }
    public function from_to($from, $to, $cnt, $uid){
//        die('$uid: '.$uid);
        $q = 'SELECT DATE_FORMAT(log_created, "%m-%d-%Y") AS showDate, 
                     SUM(if(log_success = 1, 1, 0)) AS success, 
                     SUM(if(log_success = 0, 1, 0)) AS failed 
              FROM send_log AS sl ';
        if( isset($cnt) && $cnt!==0 ){
            $q.='LEFT JOIN `numbers` AS n ON sl.num_id = n.num_id ';
            $q.='LEFT JOIN `countries` AS c ON n.cnt_id = c.cnt_id ';
        }
//            $q.='LEFT JOIN `numbers` AS n ON sl.num_id = n.num_id ';
        $q.='WHERE `log_created` > :fromDate AND `log_created` < :toDate ';
        if( isset($cnt) && $cnt!==0 )
            $q.='AND `c`.`cnt_title` = :cnt ';

        if( isset($uid) && $uid!==0 )
            $q.='AND `usr_id` = :uid ';

        $q .= 'GROUP BY year(log_created), month(log_created), day(log_created)';
//        die($q);
        $statement = $this->repo->db->prepare($q);
        $statement->bindValue(':fromDate', $from);
        $statement->bindValue(':toDate', $to);
        if( isset($cnt) && $cnt!==0 )
            $statement->bindValue(':cnt', $cnt);
        if( isset($uid) && $uid!==0 )
            $statement->bindValue(':uid', $uid);
        $statement->execute();
        $matches = $statement->fetchAll();

        return $matches;
    }
}