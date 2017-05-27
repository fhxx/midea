<?php

return array(

    'SHOW_PAGE_TRACE' => true,	 //让页面显示追踪日志信息
	'URL_CASE_INSENSITIVE'  =>  TRUE,   //URL不区分大小写
	 
	 
	 //开启日志
	'LOG_TYPE'              =>  'File',
	'LOG_RECORD'            =>  true,  // 进行日志记录
    'LOG_EXCEPTION_RECORD'  =>  true,    // 是否记录异常信息日志
    'LOG_LEVEL'             =>  'EMERG,ALERT,CRIT,ERR,WARN,NOTIC,INFO,DEBUG,SQL',  // 允许记录的日志级别
	 
	
	'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  '101.200.215.232', // 服务器地址
    'DB_NAME'               =>  'media_resorce',          // 数据库名
    'DB_USER'               =>  'sousou',      // 用户名
    'DB_PWD'                =>  'jutongda2016',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    'DB_PREFIX'             =>  'wx_',    // 数据库表前缀
    
   /* 'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  'hktd09t.99aiji.net', // 服务器地址
    'DB_NAME'               =>  'fuhengmysql',          // 数据库名
    'DB_USER'               =>  'fuhengmysql',      // 用户名
    'DB_PWD'                =>  '6A47762',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    'DB_PREFIX'             =>  'blog_',  */  // 数据库表前缀
);