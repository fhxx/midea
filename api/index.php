<?php
  
  function showBug($info){
    	echo "<pre>";
    	var_dump($info);//输出
    	echo "</pre>";
  }
  
  define("APP_DEBUG", TRUE);
  
  //define("SITE_URL", "http://rue.localhost.com:8080/index");
 // define("MANAGE", SITE_URL."/Manage/public/");
 // define("PLANCLASS", SITE_URL."/PlanClass/public/");  
  define('APP_PATH','./index/');   // 定义应用目录
  require "./ThinkPHP/ThinkPHP.php";//引入框架的目录

?> 