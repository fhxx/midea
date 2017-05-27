<?php
namespace Home\Controller;
use Think\Controller;
class UpimgController extends Controller {

	   public function index(){	   	    
            if(!empty($_FILES)){
            	 $config = array('rootPath' => './index/', 'savePath' => 'upload/hrad/');
            	 $upload = new \Think\Upload($config);
            	 $z = $upload -> uploadOne($_FILES['file_0']);
            	 if($z){
            	 	 echo $z['savepath'].$z["savename"];
            	 }
            	 else echo "失败";
             }

	   }

	   public function ExcelImportWx(){
	   	   //var_dump($_FILES);
           if(!empty($_FILES)){
           	    $config = array('rootPath' => './index/', 
           	    	             'savePath' => 'upload/excel/',
           	    	             'allowExts'=>array('xlsx','xls'),
           	    	             'saveRule'=>'time');
           	    $upload = new \Think\Upload($config);
           	    $z = $upload -> uploadOne($_FILES['file_0']);
           	    if($z){
            	 	 $file =  $z['savepath'].$z["savename"];
            	 	 $type = pathinfo($file); 
            	 	 $type = strtolower($type["extension"]);
            	 	 var_dump($type);
            	 	// $info = $upload -> getUploadFileInfo();
                    // var_dump( $z['savepath'].$z["savename"]);
            	 	 Vendor('PHPExcel.PHPExcel');
                     $objReader = PHPExcel_IOFactory::createReader($type);
                     $objPHPExcel = $objReader->load($file);
                     $sheet = $objPHPExcel->getSheet(0);
                     $highestRow = $sheet->getHighestRow();   
                     var_dump($highestRow);
            	 	 //$objReader = PHPExcel_IOFactory::createReader('Excel5');

            	}
            	else echo "error";

           }
	   }

	  public function Log($str){
	      $path = date("Ymd").".log";
	      if (!file_exists($path)){
	          fopen($path, "w");   
	      }
	      file_put_contents($path, $str."\r\n",FILE_APPEND);
     
     }

}