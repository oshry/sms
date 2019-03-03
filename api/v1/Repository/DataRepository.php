<?php
namespace Repository;
use PDO;

class DataRepository {
    public static $instances = [];

    public static $default = 'default';

    public function __construct(array $config, $name){
        $this->instance = $name;
        $this->config = $config;
//        print_r($config);die();
        try {
            $this->db = new PDO(
                $config['connection']['dsn'],
                $config['connection']['username'],
                $config['connection']['password'],
                $config['connection']['options']
            );
            $this->db->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
        }
        catch(PDOException $e){
            $this->error = $e->getMessage();
        }
    }

    public static function instance(array $config, $name = NULL)
    {
        if ($name === NULL)
        {
            $name = static::$default;
        }

        if ( ! isset(static::$instances[$name]))
        {
            static::$instances[$name] = new static($config[$name], $name);
        }
        return static::$instances[$name];
    }
//    public function quote($value)
//    {
////        print_r($this->db->quote);
////        die('ererr');
//        return $this->db->quote($value);
//    }

    /**
     * Quote a value for an SQL query
     *
     * @param   mixed   $value  any value to quote
     * @return  string
     */
//    public function quote($value)
//    {
//        if ($value === NULL)
//        {
//            return 'NULL';
//        }
//        elseif ($value === TRUE)
//        {
//            return "'1'";
//        }
//        elseif ($value === FALSE)
//        {
//            return "'0'";
//        }
//        elseif (is_array($value))
//        {
//            return '('.implode(', ', array_map(array($this, __FUNCTION__), $value)).')';
//        }
//        elseif (is_int($value))
//        {
//            return (int) $value;
//        }
//        elseif (is_float($value))
//        {
//            // Convert to non-locale aware float to prevent possible commas
//            return sprintf('%F', $value);
//        }
//
//        return $this->escape($value);
//    }
    public function query($sql){
        $query = $this->db->query($sql);
        $query->setFetchMode(PDO::FETCH_ASSOC);
        return $query->fetchAll();
    }
}