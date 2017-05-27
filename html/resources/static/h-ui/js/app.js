$(function(){
	 $mc.autoHeight();
	 $(".user").unbind().bind("click",function(){
	 	 $mc.showUserOption();
	 });
	 $("#allch").unbind().bind("click",function(){	 	  
	 	  $mc.AllCheckBox($(this).is(":checked"));
	 });

	 
})
var $d={
	 login:function(){	 	 	 
	 	  var username = $("#username").val();
	 	  var password = $("#userpwd").val();
	 	  if(username.trim()=="您的用户名") username="";
	 	  if(password.trim()=="******") password="";
	 	  if(username=="") $layer.msg("请填入您的用户名");
	 	  else if(password=="") $layer.msg("请填入您的密码");
	 	  else{
	 	  	  var isreme = $("#save_me").is(":checked");
	 	  	  $data.Login(username,password,function(out){
	 	  	      console.log(out);	 	  	  
	 	  	  	  if(out.code==200){
	 	  	  	  	 $.cookie("username",username);
	 	  	  	  	 $mc.goURL("index.html");
	 	  	  	  }
	 	  	  	  else $layer.msg(out.msg);
	 	  	  })
	 	  }
	 },
	 GetCity:function(par){
	 	 $data.distinctCity(par,function(out){
	 	 	  console.log(out);
	 	 	  if(out.code==200){
	 	  	 	 var html = template('citylist', out);
	 	  	 	 $("#city").html(html);	 	  	 	
	 	  	 }
	 	 })
	 },
	 GetWxType:function(par){ 
	 	  $data.GetWxType(par,function(out){	 	  	
	 	  	 if(out.code==200){
	 	  	 	 var html = template('typelist', out);
	 	  	 	 $("#wx_type_list").html(html);	 	  	 	
	 	  	 }
	 	  })
	 },
	 MediaType:function(){	 	
	 	 $data.MediaType(function(out){
             if(out.code==200){	 	  	 	
	 	  	 	 var html = template('radiolist', out);
	 	  	 	 $("#radio-box").html(html);
	 	  	 };
	 	 })
	 },
	 Ordertake:function(type){
	 	 $data.Ordertake(type,function(out){	 	 	
	 	 	if(out.code==200){
               var html = template('ordertakelist', out);
               $("#ordertake_range_id").html(html);
	 	 	}
	 	 }) 
	 },
	 HomePage:function(obj){
	 	  var is_home = obj.val();
	 	  if(is_home==1){
		 	  var media_type_id = $('input[name="media_type_id"]:checked ').val();
		 	  if(media_type_id==null){
		 	  	  $layer.msg("请先选择媒体分类");
	              $(obj).val("0");
		 	  	  return false;
		 	  }
		 	  else{	 	  	   
		 	  	  $data.HomePageRecommend("{\"media_type_id\":\""+media_type_id+"\"}",function(out){	 
		 	  	     console.log(out);	  	  	 
		 	  	  	 if(out.code==200){
		 	  	  	 	  var count = parseInt(out.msg);
		 	  	  	 	  if(count>=6){
	                         $datalayer.Number6(out.data);
		 	  	  	 	  }
		 	  	  	 }
		 	  	  })
		 	  }
	 	}
	 },
	 WbHomePage:function(obj){
	 	  var is_home = obj.val();
	 	  if(is_home==1){
		 	  var media_type_id = $('input[name="media_type_id"]:checked ').val();
		 	  if(media_type_id==null){
		 	  	  $layer.msg("请先选择媒体分类");
	              $(obj).val("0");
		 	  	  return false;
		 	  }
		 	  else{	 	  	   
		 	  	  $data.WbHomePageRecommend("{\"media_type_id\":\""+media_type_id+"\"}",function(out){	 
		 	  	     console.log(out);	  	  	 
		 	  	  	 if(out.code==200){
		 	  	  	 	  var count = parseInt(out.msg);
		 	  	  	 	  if(count>=6){
	                         $datalayer.WbNumber6(out.data);
		 	  	  	 	  }
		 	  	  	 }
		 	  	  })
		 	  }
	 	}
	 },
	 wxAdd:function(){
	 	 var weixin_type_id = $("#wx_type_list").val();
	 	 var media_type_id = $('input[name="media_type_id"]:checked ').val();
	 	 var wx_name = $('#wx_name').val();
	 	 var wx_id = $('#wx_id').val();
	 	 var media_intro = $("#media_intro").val();
	 	 var fans_amount = $("#fans_amount").val();
         var read_avg_amount = $("#read_avg_amount").val();
         var is_qualification = $("#is_qualification").val();
         var qualification_body = $("#qualification_body").val();
         var tags = $("#tags").val();
         var hard_1_price = $("#hard_1_price").val();
         var hard_1_add = $("#hard_1_add").val();
         var hard_2_price = $("#hard_2_price").val();
         var hard_2_add = $("#hard_2_add").val();
         var soft_1_price = $("#soft_1_price").val();
         var soft_1_add = $("#soft_1_add").val();
         var soft_2_price = $("#soft_2_price").val();
         var soft_2_add = $("#soft_2_add").val();
         var is_homepage_recommend = $("#is_homepage_recommend").val();
         var ordertake_range_id = $("#ordertake_range_id").val();
         var province = $("#province").val();
         var city = $("#city").val();
         var county = $("#county").val();
         var headimg = $("#head-img").attr("data-src");
	 	 if(media_type_id==null) $layer.msg("请选择媒体分类");
	 	 else if(wx_name=="") $layer.msg("请填写公众号名称");
	 	 else if(wx_id=="") $layer.msg("请填写微信号");
	 	 else if (tags=="") $layer.msg("请填写标签");
	 	 else if(is_qualification==1&&qualification_body=="")  $layer.msg("请填写认证主题");
	 	 else
	 	 {
	 	 	   layer.load({
		        type: 2
		        ,content: '信息提交中...'
		       });
	 	 	  var par = "{\"weixin_type_id\":\""+weixin_type_id+"\","+
	 	 	             "\"media_type_id\":\""+media_type_id+"\","+
	 	 	             "\"wx_name\":\""+wx_name+"\","+
	 	 	             "\"wx_id\":\""+wx_id+"\","+
	 	 	             "\"media_intro\":\""+media_intro+"\","+
	 	 	             "\"fans_amount\":\""+fans_amount+"\","+
	 	 	             "\"read_avg_amount\":\""+read_avg_amount+"\","+	 	 	           
	 	 	             "\"is_qualification\":\""+is_qualification+"\","+
	 	 	             "\"tags\":\""+tags+"\","+
	 	 	             "\"hard_1_price\":\""+hard_1_price+"\","+
	 	 	             "\"hard_1_add\":\""+hard_1_add+"\","+
	 	 	             "\"hard_2_price\":\""+hard_2_price+"\","+
	 	 	             "\"hard_2_add\":\""+hard_2_add+"\","+
	 	 	             "\"soft_1_price\":\""+soft_1_price+"\","+
	 	 	             "\"soft_1_add\":\""+soft_1_add+"\","+
	 	 	             "\"soft_2_price\":\""+soft_2_price+"\","+
	 	 	             "\"soft_2_add\":\""+soft_2_add+"\","+
	 	 	             "\"is_homepage_recommend\":\""+is_homepage_recommend+"\","+
	 	 	             "\"ordertake_range_id\":\""+ordertake_range_id+"\","+
	 	 	             "\"province\":\""+province+"\","+
	 	 	             "\"city\":\""+city+"\","+
	 	 	             "\"county\":\""+county+"\","+
	 	 	             "\"head_img\":\""+headimg+"\","+
                         "\"username\":\""+$.cookie("username")+"\""+
	 	 	             "}";
	 	 	    $data.AddWx(par,function(out){
	 	 	    	layer.closeAll('loading');
	 	 	    	if(out.code==200){
	 	 	    		 $layer.msgFC("信息提交成功",function(){
	 	 	    		 	 $mc.f5();
	 	 	    		 }) 	 	    		 
	 	 	    	}
	 	 	    })
	 	 }
	 },
	 wbAdd:function(){
	 	 var weixin_type_id = $("#wx_type_list").val();
	 	 var media_type_id = $('input[name="media_type_id"]:checked').val();
	 	 var wx_name = $('#wb_name').val();
	 	 var media_intro = $("#media_intro").val();
	 	 var fans_amount = $("#fans_amount").val();
         var is_qualification = $("#is_qualification").val();
         var tags = $("#tags").val();
         var hard_1_price = $("#hard_1_price").val();
         var hard_1_add = $("#hard_1_add").val();
         var hard_2_price = $("#hard_2_price").val();
         var hard_2_add = $("#hard_2_add").val();
         var soft_1_price = $("#soft_1_price").val();
         var soft_1_add = $("#soft_1_add").val();
         var soft_2_price = $("#soft_2_price").val();
         var soft_2_add = $("#soft_2_add").val();
         var is_homepage_recommend = $("#is_homepage_recommend").val();
         var ordertake_range_id = $("#ordertake_range_id").val();
         var province = $("#province").val();
         var city = $("#city").val();
         var county = $("#county").val();
         var headimg = $("#head-img").attr("data-src");
         if(media_type_id==null) $layer.msg("请选择媒体分类");
	 	 else if(wx_name=="") $layer.msg("请填写微博名称");
	 	 else if (tags=="") $layer.msg("请填写标签");	 	
	 	 else
	 	 {
               layer.load({
		        type: 2
		        ,content: '信息提交中...'
		       });
	 	 	  var par = "{\"weixin_type_id\":\""+weixin_type_id+"\","+
	 	 	             "\"media_type_id\":\""+media_type_id+"\","+
	 	 	             "\"wb_name\":\""+wx_name+"\","+	 	 	           
	 	 	             "\"media_intro\":\""+media_intro+"\","+
	 	 	             "\"fans_amount\":\""+fans_amount+"\","+	 	 	            	 	           
	 	 	             "\"is_qualification\":\""+is_qualification+"\","+
	 	 	             "\"tags\":\""+tags+"\","+
	 	 	             "\"hard_1_price\":\""+hard_1_price+"\","+
	 	 	             "\"hard_1_add\":\""+hard_1_add+"\","+
	 	 	             "\"hard_2_price\":\""+hard_2_price+"\","+
	 	 	             "\"hard_2_add\":\""+hard_2_add+"\","+
	 	 	             "\"soft_1_price\":\""+soft_1_price+"\","+
	 	 	             "\"soft_1_add\":\""+soft_1_add+"\","+
	 	 	             "\"soft_2_price\":\""+soft_2_price+"\","+
	 	 	             "\"soft_2_add\":\""+soft_2_add+"\","+
	 	 	             "\"is_homepage_recommend\":\""+is_homepage_recommend+"\","+
	 	 	             "\"ordertake_range_id\":\""+ordertake_range_id+"\","+
	 	 	             "\"province\":\""+province+"\","+
	 	 	             "\"city\":\""+city+"\","+
	 	 	             "\"county\":\""+county+"\","+
	 	 	             "\"head_img\":\""+headimg+"\","+
                         "\"username\":\""+$.cookie("username")+"\""+
	 	 	             "}";
	 	 	    $data.AddWb(par,function(out){
	 	 	    	layer.closeAll('loading');
	 	 	    	if(out.code==200){
	 	 	    		 $layer.msgFC("信息提交成功",function(){
	 	 	    		 	 $mc.f5();
	 	 	    		 }) 	 	    		 
	 	 	    	}
	 	 	    })
	 	 }
	 },
	 Addapp:function(){
	 	 var martname         = $("#martname").val();
	 	 var appname          = $("#appname").val();
	 	 var comment_price    = $("#comment_price").val();
	 	 var comment_add      = $("#comment_add").val();
	 	 var download_price   = $("#download_price").val();
	 	 var download_add     = $("#download_add").val();
	 	 var memo             = $("#memo").val();
	 	 if(appname==="") $layer.msg("APP名称不能为空");
	 	 else if (appname.length>15) $layer.msg("APP名称太长");
	 	 else{
	 	 	 layer.load({type: 2,content: '信息提交中...'});
	 	 	 var par = "{\"martname\":\""+martname+"\","+
	 	 	             "\"appname\":\""+appname+"\","+
	 	 	             "\"comment_price\":\""+comment_price+"\","+
	 	 	             "\"comment_add\":\""+comment_add+"\","+
	 	 	             "\"download_price\":\""+download_price+"\","+
	 	 	             "\"download_add\":\""+download_add+"\","+
	 	 	             "\"memo\":\""+memo+"\","+
	 	 	             "\"username\":\""+$.cookie("username")+"\""+
	 	 	            "}";
	 	 	 $data.Addapp(par,function(out){
	 	 	 	layer.closeAll('loading');
 	 	    	if(out.code==200){
 	 	    		 $layer.msgFC("信息提交成功",function(){
 	 	    		 	 $mc.f5();
 	 	    		 }) 	 	    		 
 	 	    	}
	 	 	 })
	 	 }

	 },
	 AddNews:function(){
	 	  var media_name     =   $("#media_name").val();
	 	  var media_type_id  =    $('input[name="media_type_id"]:checked').val();
	 	  var media_intro    =   $("#media_intro").val();
	 	  var sl_type        =   $("#sl_type").val();
	 	  var media_channel  =   $("#media_channel").val();
	 	  var web_url        =   $("#web_url").val();
	 	  var mh_type        =   $("#mh_type").val();
	 	  var province       =   $("#province").val();
	 	  var city           =   $("#city").val();
	 	  var county         =   $("#county").val();
	 	  var price          =   $("#price").val();
	 	  var price_add      =   $("#price_add").val();
	 	  var headimg = $("#head-img").attr("data-src");
	 	  if(media_name=="") $layer.msg("媒体名称不可为空");
	 	  else if(media_type_id==null) $layer.msg("请选择媒体分类");
	 	  else if(media_channel == "") $layer.msg("媒体频道不可以为空");
	 	  else if (web_url=="")  $layer.msg("网址不可以为空");
	 	  else {
	 	  	  layer.load({type: 2,content: '信息提交中...'});
              var par = "{\"media_name\":\""+media_name+"\","+
                         "\"media_type_id\":\""+media_type_id+"\","+
                         "\"media_intro\":\""+media_intro+"\","+
                         "\"media_channel\":\""+media_channel+"\","+
                         "\"sl_type\":\""+sl_type+"\","+
                         "\"web_url\":\""+web_url+"\","+
                         "\"mh_type\":\""+mh_type+"\","+
                         "\"province\":\""+province+"\","+
                         "\"city\":\""+city+"\","+
                         "\"county\":\""+county+"\","+
                         "\"price\":\""+price+"\","+
                         "\"price_add\":\""+price_add+"\","+
                         "\"head_img\":\""+headimg+"\","+
                         "\"username\":\""+$.cookie("username")+"\""+
                         "}";
              $data.AddNews(par,function(out){
              	 layer.closeAll('loading');
 	 	    	 if(out.code==200){
 	 	    		  $layer.msgFC("信息提交成功",function(){
 	 	    		 	 $mc.f5();
 	 	    		  }) 	 	    		 
 	 	    	  }
              })
	 	  }
	 },
	 wxList:function(par,p){
           layer.load({
		        type: 2
		        ,content: '数据更新中'
		    });
           $data.wxList(par,p,function(out){                        	   
           	   if(out.code==200){           	   	   
           	   	   $("#c-data").html(out.count);
           	   	   $("#c-page").html(out.page);
           	   	   var html = template('datalist', out);
                   $("#datalist-body").html(html);
                    //分页
                   // $(function(){
                    if(p==1){
						$("#pagelist").Page({
				          totalPages: parseInt(out.page),//分页总数
				          liNums: 5,//分页的数字按钮数(建议取奇数)
				          activeClass: 'activP', //active 类样式定义
				          callBack : function(page){
				          	 $d.wxList(par,page);
				          }
				       });
                   }


                   layer.closeAll('loading'); //关闭加载层
                   $(".editfans").unbind().bind("click",function(){ //编辑粉丝数量
                        var obj = $(this);
                        var id = obj.attr("data-id");
                        var amount = obj.attr("data-amount");
                        $datalayer.EditFansAmount(id,amount,obj);
                   })
                   $(".editread").unbind().bind("click",function(){ //更新平均阅读量
                        var obj = $(this);
                        var id = obj.attr("data-id");
                        var amount = obj.attr("data-read");
                        $datalayer.EditReadAmount(id,amount,obj);
                   });

                   $(".softedit").unbind().bind("click",function(){
                   	   var obj = $(this);
                   	   $datalayer.PriceEdit("软广价格","soft",obj);
                   })
                   $(".hardedit").unbind().bind("click",function(){
                   	   var obj = $(this);
                   	   $datalayer.PriceEdit("硬广价格","hard",obj);
                   })

                   $(".delete").unbind().bind("click",function(){//删除一条信息
                   	   var obj = $(this);
                   	   var id = obj.data("id"); 
                   	  $layer.confirm("是否要删除数据？",function(){ //删除数据
                           $data.delWxData("{\"id\":\""+id+"\"}",function(out){
                           	   if(out.code==200){
                           	   	  $layer.msgFC("数据删除成功",function(){
                           	   	  	 obj.parents("tr").remove();//清除节点
                           	   	  })                           	   	   
                           	   }
                           	   else $layer.msg("网络错误，信息删除失败");
                           })
                   	   });
                   })

                   $("#alldel").unbind().bind("click",function(){ //删除选中的数据
                        var idlist ="";
                        $("input[name='cb']").each(function(){
                        	 if($(this).is(":checked")) idlist += $(this).val()+",";
                        })
                        if(idlist=="") $layer.msg("请选择要删除的信息");
                        else{
                        	 $layer.confirm("确定要删除选中数据吗？",function(){
                        	 	 idlist = idlist.substring(0,idlist.length-1);
	                             $data.delWxData("{\"id\":\""+idlist+"\"}",function(out){
	                           	   if(out.code==200){
	                           	   	   $layer.msgFC("数据删除成功",function(){
	                           	   	   	   var arr = idlist.split(",");
		                           	   	   for(var i=0; i<arr.length; i++){
		                           	   	   	   $("#datalist-body>tr[data-id='"+arr[i]+"']").remove();
		                           	   	   }  
	                           	   	   })
	                           	   	                          	   	   
	                           	   }
	                           	   else $layer.msg("网络错误，信息删除失败");
	                           }) 
                        	})
                        	 
                        }
                        console.log(idlist);
                   }) 

                   //查询按钮绑定事件
                   $("#whereInquiry").unbind().bind("click",function(){
                   	   $d.whereStr();
                   })
           	   }
           })
	 },
	 wbList:function(par,p){
	 	  layer.load({
		        type: 2
		        ,content: '数据更新中'
		   });
	 	   $data.wbList(par,p,function(out){ 
	 	   	   
               if(out.code==200){
               	  $("#c-data").html(out.count);
           	   	   $("#c-page").html(out.page);
           	   	   var html = template('datalist', out);
                   $("#datalist-body").html(html);
                    //分页
                   // $(function(){
                    if(p==1){
						$("#pagelist").Page({
				          totalPages: parseInt(out.page),//分页总数
				          liNums: 5,//分页的数字按钮数(建议取奇数)
				          activeClass: 'activP', //active 类样式定义
				          callBack : function(page){
				          	 $d.wbList(par,page);
				          }
				       });
                   }

                   layer.closeAll('loading'); //关闭加载层

                   $(".editfans").unbind().bind("click",function(){ //编辑粉丝数量
                        var obj = $(this);
                        var id = obj.attr("data-id");
                        var amount = obj.attr("data-amount");
                        $datalayer.EditFansAmountWb(id,amount,obj);
                   })

                   $(".softedit").unbind().bind("click",function(){
                   	   var obj = $(this);
                   	   $datalayer.PriceEditWb("软广价格","soft",obj);
                   })
                   $(".hardedit").unbind().bind("click",function(){
                   	   var obj = $(this);
                   	   $datalayer.PriceEditWb("硬广价格","hard",obj);
                   })

                   $(".delete").unbind().bind("click",function(){//删除一条信息
                   	   var obj = $(this);
                   	   var id = obj.data("id"); 
                   	  $layer.confirm("是否要删除数据？",function(){ //删除数据
                           $data.delWbData("{\"id\":\""+id+"\"}",function(out){
                           	   if(out.code==200){
                           	   	  $layer.msgFC("数据删除成功",function(){
                           	   	  	 obj.parents("tr").remove();//清除节点
                           	   	  })                           	   	   
                           	   }
                           	   else $layer.msg("网络错误，信息删除失败");
                           })
                   	   });
                   })

                   $("#alldel").unbind().bind("click",function(){ //删除选中的数据
                        var idlist ="";
                        $("input[name='cb']").each(function(){
                        	 if($(this).is(":checked")) idlist += $(this).val()+",";
                        })
                        if(idlist=="") $layer.msg("请选择要删除的信息");
                        else{
                           $layer.confirm("确定要删除选中数据吗？",function(){
                                idlist = idlist.substring(0,idlist.length-1);
	                             $data.delWbData("{\"id\":\""+idlist+"\"}",function(out){
	                           	   if(out.code==200){
	                           	   	   $layer.msgFC("数据删除成功",function(){
	                           	   	   	   var arr = idlist.split(",");
		                           	   	   for(var i=0; i<arr.length; i++){
		                           	   	   	   $("#datalist-body>tr[data-id='"+arr[i]+"']").remove();
		                           	   	   }  
	                           	   	   })
	                           	   	                          	   	   
	                           	   }
	                           	   else $layer.msg("网络错误，信息删除失败");
	                           })
                           })
                        }
                        console.log(idlist);
                   })

                   $("#whereInquiry").unbind().bind("click",function(){
                   	   $d.whereStrWb();
                   })
               }
	 	   })
	 },
	 appList:function(par,p){
           layer.load({
		        type: 2
		        ,content: '数据更新中'
		   });
		   $data.appList(par,p,function(out){ 
		   	    
                if(out.code==200){
               	   $("#c-data").html(out.count);
           	   	   $("#c-page").html(out.page);
           	   	   var html = template('datalist', out);
                   $("#datalist-body").html(html);
                    //分页
                   // $(function(){
                    if(p==1){
						$("#pagelist").Page({
				          totalPages: parseInt(out.page),//分页总数
				          liNums: 5,//分页的数字按钮数(建议取奇数)
				          activeClass: 'activP', //active 类样式定义
				          callBack : function(page){
				          	 $d.appList(par,page);
				          }
				       });
                   }

                   layer.closeAll('loading'); //关闭加载层

                   $("#whereInquiry").unbind().bind("click",function(){
                   	   $d.whereStrapp();
                   })
                   $(".editcomment").unbind().bind("click",function(){
                   	   var obj = $(this);
                   	   $datalayer.PriceEditApp("评论价格","comment",obj);
                   })
                   $(".editdownload").unbind().bind("click",function(){
                   	   var obj = $(this);
                   	   $datalayer.PriceEditApp("下载价格","download",obj);
                   })
                   $(".editmemo").unbind().bind("click",function(){
                   	    var obj = $(this);
                        var id = obj.attr("data-id");
                        var memo = obj.attr("data-memo");
                        $datalayer.EditAppMemo(id,memo,obj);
                   })



                   $(".delete").unbind().bind("click",function(){//删除一条信息
                   	   var obj = $(this);
                   	   var id = obj.data("id"); 
                   	  $layer.confirm("是否要删除数据？",function(){ //删除数据
                           $data.delAppData("{\"id\":\""+id+"\"}",function(out){
                           	   if(out.code==200){
                           	   	  $layer.msgFC("数据删除成功",function(){
                           	   	  	 obj.parents("tr").remove();//清除节点
                           	   	  })                           	   	   
                           	   }
                           	   else $layer.msg("网络错误，信息删除失败");
                           })
                   	   });
                   })

                   $("#alldel").unbind().bind("click",function(){ //删除选中的数据
                        var idlist ="";
                        $("input[name='cb']").each(function(){
                        	 if($(this).is(":checked")) idlist += $(this).val()+",";
                        })
                        if(idlist=="") $layer.msg("请选择要删除的信息");
                        else{
                        	  $layer.confirm("是否要删除选中数据？",function(){ //删除数据
	                        	 idlist = idlist.substring(0,idlist.length-1);
	                             $data.delAppData("{\"id\":\""+idlist+"\"}",function(out){
	                           	   if(out.code==200){
	                           	   	   $layer.msgFC("数据删除成功",function(){
	                           	   	   	   var arr = idlist.split(",");
		                           	   	   for(var i=0; i<arr.length; i++){
		                           	   	   	   $("#datalist-body>tr[data-id='"+arr[i]+"']").remove();
		                           	   	   }  
	                           	   	   })
	                           	   	                          	   	   
	                           	   }
	                           	   else $layer.msg("网络错误，信息删除失败");
	                           })
                          })
                        }                        
                   })
               }
		   })
	 },
     newsList:function(par,p){
     	   layer.load({
		         type: 2
		        ,content: '数据更新中'
		   });
		   $data.newsList(par,p,function(out){
		   	   console.log(out);
		   	   if(out.code==200){
                   $("#c-data").html(out.count);
           	   	   $("#c-page").html(out.page);
           	   	   var html = template('datalist', out);
                   $("#datalist-body").html(html);
                    //分页
                   // $(function(){
                    if(p==1){
						$("#pagelist").Page({
				          totalPages: parseInt(out.page),//分页总数
				          liNums: 5,//分页的数字按钮数(建议取奇数)
				          activeClass: 'activP', //active 类样式定义
				          callBack : function(page){
				          	 $d.newsList(par,page);
				          }
				       });
                   }

                   layer.closeAll('loading'); //关闭加载层

                   $("#whereInquiry").unbind().bind("click",function(){
                   	   $d.whereStrNews();
                   })

                   $(".editmemo").unbind().bind("click",function(){
                   	    var obj = $(this);
                        var id = obj.attr("data-id");
                        var memo = obj.attr("data-memo");
                        $datalayer.EditNewsMemo(id,memo,obj);
                   })


                   $(".editprice").unbind().bind("click",function(){
                   	   var obj = $(this);
                   	   $datalayer.PriceEditNews("价格","download",obj);
                   })

                   $(".delete").unbind().bind("click",function(){//删除一条信息
                   	   var obj = $(this);
                   	   var id = obj.data("id"); 
                   	  $layer.confirm("是否要删除数据？",function(){ //删除数据
                           $data.delNewsData("{\"id\":\""+id+"\"}",function(out){
                           	   if(out.code==200){
                           	   	  $layer.msgFC("数据删除成功",function(){
                           	   	  	 obj.parents("tr").remove();//清除节点
                           	   	  })                           	   	   
                           	   }
                           	   else $layer.msg("网络错误，信息删除失败");
                           })
                   	   });
                   })
                   $("#alldel").unbind().bind("click",function(){ //删除选中的数据
                        var idlist ="";
                        $("input[name='cb']").each(function(){
                        	 if($(this).is(":checked")) idlist += $(this).val()+",";
                        })
                        if(idlist=="") $layer.msg("请选择要删除的信息");
                        else{
                        	  $layer.confirm("是否要删除选中数据？",function(){ //删除数据
	                        	 idlist = idlist.substring(0,idlist.length-1);
	                             $data.delNewsData("{\"id\":\""+idlist+"\"}",function(out){
	                           	   if(out.code==200){
	                           	   	   $layer.msgFC("数据删除成功",function(){
	                           	   	   	   var arr = idlist.split(",");
		                           	   	   for(var i=0; i<arr.length; i++){
		                           	   	   	   $("#datalist-body>tr[data-id='"+arr[i]+"']").remove();
		                           	   	   }  
	                           	   	   })
	                           	   	                          	   	   
	                           	   }
	                           	   else $layer.msg("网络错误，信息删除失败");
	                           })
                          })
                        }                        
                   })
		   	   }
		   })

     },

	 whereStr:function(){
	 	  //整理表单
	 	  var  wxtyp        =    $("#wx_type_list").val();//公众号类型
	 	  var  medietype    =    $("#radio-box").val();//媒体类型
	 	  var  wx_name      =    $("#wx_name").val();//公众号名称
	 	  var  is_home      =    $("#is_homepage_recommend").val();//是否首页推荐
	 	  var  id           =    $("#id").val();//id
	 	  var  fans_amount  =    $("#fans_amount").val();//粉丝数量
	 	  var  read_avg     =    $("#read_avg_amount").val();//平均阅读数量
	 	  var  city         =    $("#city").val();//城市
	 	  var  is_qual      =    $("#is_qualification").val();//是否认证
	 	  var  ordertake    =    $("#ordertake_range_id").val();//接单范围
	 	  var  hard_1_price =    $("#hard_1_price").val();//硬广头条价格
	 	  var  hard_2_price =    $("#hard_2_price").val();//硬广二条价格
	 	  var  soft_1_price =    $("#soft_1_price").val();//软广头条价格
	 	  var  soft_2_price =    $("#soft_2_price").val();//软广二条价格
          
          var par ="\"count\"                 :    \"1\","+
                   "\"weixin_type_id\"        :    \""+wxtyp+"\","+
                   "\"media_type_id\"         :    \""+medietype+"\","+
                   "\"wx_name\"               :    \""+wx_name+"\","+
                   "\"is_homepage_recommend\" :    \""+is_home+"\","+
                   "\"id\"                    :    \""+id+"\","+
                   "\"fans_amount\"           :    \""+fans_amount+"\","+
                   "\"read_avg_amount\"       :    \""+read_avg+"\","+
                   "\"city\"                  :    \""+city+"\","+
                   "\"is_qualification\"      :    \""+is_qual+"\","+
                   "\"ordertake_range_id\"    :    \""+ordertake+"\","+ 
                   "\"hard_1_price\"          :    \""+hard_1_price+"\","+ 
                   "\"hard_2_price\"          :    \""+hard_2_price+"\","+ 
                   "\"soft_1_price\"          :    \""+soft_1_price+"\","+ 
                   "\"soft_2_price\"          :    \""+soft_2_price+"\"";
       
        $d.wxList(par,1);
	 },
	 whereStrWb:function(){
	 	  //整理表单
	 	  var  wxtyp        =    $("#wx_type_list").val();//公众号类型
	 	  var  medietype    =    $("#radio-box").val();//媒体类型
	 	  var  wb_name      =    $("#wb_name").val();//公众号名称
	 	  var  is_home      =    $("#is_homepage_recommend").val();//是否首页推荐
	 	  var  id           =    $("#id").val();//id
	 	  var  fans_amount  =    $("#fans_amount").val();//粉丝数量	 	
	 	  var  city         =    $("#city").val();//城市
	 	  var  is_qual      =    $("#is_qualification").val();//是否认证
	 	  var  ordertake    =    $("#ordertake_range_id").val();//接单范围
	 	  var  hard_1_price =    $("#hard_1_price").val();//硬广头条价格
	 	  var  hard_2_price =    $("#hard_2_price").val();//硬广二条价格
	 	  var  soft_1_price =    $("#soft_1_price").val();//软广头条价格
	 	  var  soft_2_price =    $("#soft_2_price").val();//软广二条价格
          
          var par ="\"count\"                 :    \"1\","+
                   "\"weixin_type_id\"        :    \""+wxtyp+"\","+
                   "\"media_type_id\"         :    \""+medietype+"\","+
                   "\"wb_name\"               :    \""+wb_name+"\","+
                   "\"is_homepage_recommend\" :    \""+is_home+"\","+
                   "\"id\"                    :    \""+id+"\","+
                   "\"fans_amount\"           :    \""+fans_amount+"\","+                  
                   "\"city\"                  :    \""+city+"\","+
                   "\"is_qualification\"      :    \""+is_qual+"\","+
                   "\"ordertake_range_id\"    :    \""+ordertake+"\","+ 
                   "\"hard_1_price\"          :    \""+hard_1_price+"\","+ 
                   "\"hard_2_price\"          :    \""+hard_2_price+"\","+ 
                   "\"soft_1_price\"          :    \""+soft_1_price+"\","+ 
                   "\"soft_2_price\"          :    \""+soft_2_price+"\"";
       
        $d.wbList(par,1);
	 },
	 whereStrapp:function(){
	 	  var martname       = $("#martname").val();
	 	  var appname        = $("#appname").val();
	 	  var id             = $("#id").val();
	 	  var comment_price  = $("#comment_price").val();
	 	  var download_price = $("#download_price").val();
	 	  var par ="\"count\"              :    \"1\","+
	 	           "\"martname\"           :    \""+martname+"\","+
	 	           "\"appname\"            :    \""+appname+"\","+
	 	           "\"id\"                 :    \""+id+"\","+
	 	           "\"comment_price\"      :    \""+comment_price+"\","+
	 	           "\"download_price\"     :    \""+download_price+"\"";

	 	  $d.appList(par,1);
	 },
	 whereStrNews:function(){
	 	  var media_name    =  $("#media_name").val();
	 	  var media_type    =  $("#radio-box").val();
	 	  var sl_type       =  $("#sl-type").val();
	 	  var id            =  $("#id").val();
	 	  var channel       =  $("#media_channel").val();
	 	  var mh_type       =  $("#mh_type").val();
	 	  var city          =  $("#city").val();
	 	  var price         =  $("#price").val();
	 	  var par ="\"count\"             :    \"1\","+
	 	           "\"media_name\"        :    \""+media_name+"\","+
	 	           "\"media_type_id\"     :    \""+media_type+"\","+
	 	           "\"sl_type\"           :    \""+sl_type+"\","+
	 	           "\"id\"                :    \""+id+"\","+
	 	           "\"media_channel\"     :    \""+channel+"\","+
	 	           "\"city\"              :    \""+city+"\","+
	 	           "\"price\"             :    \""+price+"\","+
	 	           "\"mh_type\"           :    \""+mh_type+"\"";
	 	  $d.newsList(par,1);
	 }
}
var $datalayer ={
	WxTypeAdd:function(type){
		  layer.open({
		  type: 1,
		  title: '维护类型', //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['300px', '180px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="c-box f-l ml-10 mt-20">'+
		             '<div class="left f-l">类型名称：</div>'+
		             '<div class="right f-l"><input type="text" id="field" value="" class="input-text radius size-M"/></div>'+
		             '<div class="c-botton mt-15 f-l">'+
		               '<a class="btn btn-primary radius" id="add">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 }); 
		  $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 })
		  $("#add").unbind().bind("click",function(){
		  	   var field = $("#field").val();
		  	   if(field.trim()==""){
		  	   	   $layer.msg("不能添加空类型");
		  	   }
		  	   else{

		  	   	   $data.Wx_Ty_Add(field,type,function(out){
		  	   	   	   layer.close($(".layui-layer").attr("times")); //关闭层
		  	   	   	   if(out.code==200){
		  	   	   	   	   $d.GetWxType(type);
		  	   	   	   	   $layer.msg("类型添加成功");
		  	   	   	   }
		  	   	   	   else $layer.msg(out.msg);
		  	   	   })
		  	   }
		  })
	},
	ordertakeAdd:function(type){
		 layer.open({
		  type: 1,
		  title: '接单范围维护', //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['300px', '180px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="c-box f-l ml-10 mt-20">'+
		             '<div class="left f-l">范围维护：</div>'+
		             '<div class="right f-l"><input type="text" id="field" value="" class="input-text radius size-M"/></div>'+
		             '<div class="c-botton mt-15 f-l">'+
		               '<a class="btn btn-primary radius" id="add">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 }); 
		  $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 })
		  $("#add").unbind().bind("click",function(){
		  	   var field = $("#field").val();
		  	   if(field.trim()==""){
		  	   	   $layer.msg("不能添加空类型");
		  	   }
		  	   else{
		  	   	   $data.Wx_Range_Add(field,type,function(out){
		  	   	   	   layer.close($(".layui-layer").attr("times")); //关闭层
		  	   	   	   if(out.code==200){
		  	   	   	   	   $d.Ordertake(type);
		  	   	   	   	   $layer.msg("接单范围添加成功");
		  	   	   	   }
		  	   	   	   else $layer.msg(out.msg);
		  	   	   })
		  	   }
		  })
	},
	EditFansAmount:function(id,amount,obj){
		layer.open({
		  type: 1,
		  title: '粉丝数量', //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['300px', '180px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="c-box f-l ml-10 mt-20">'+
		             '<div class="left f-l">粉丝数量：</div>'+
		             '<div class="right f-l"><input type="text" id="field" value="'+amount+'" class="input-text radius size-M"/></div>'+
		             '<div class="c-botton mt-15 f-l">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 }); 
		  $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 })
		 $("#save_me").unbind().bind("click",function(){
		 	  var amount_n = $("#field").val();
		 	  if(amount==amount_n) $layer.msg("数据没有更新");
		 	  else{
		 	  	 $data.UpdateFans(id,amount_n,function(out){
		 	  	 	if(out.code==200){
		 	  	 		layer.close($(".layui-layer").attr("times")); //关闭层
                        obj.attr("data-amount",amount_n);
                        obj.parent("td").find("font").html(amount_n);
		 	  	 	}
		 	  	 })
		 	  }
		 }) 
	},
	EditFansAmountWb:function(id,amount,obj){
		layer.open({
		  type: 1,
		  title: '粉丝数量', //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['300px', '180px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="c-box f-l ml-10 mt-20">'+
		             '<div class="left f-l">粉丝数量：</div>'+
		             '<div class="right f-l"><input type="text" id="field" value="'+amount+'" class="input-text radius size-M"/></div>'+
		             '<div class="c-botton mt-15 f-l">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 }); 
		  $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 })
		 $("#save_me").unbind().bind("click",function(){
		 	  var amount_n = $("#field").val();
		 	  if(amount==amount_n) $layer.msg("数据没有更新");
		 	  else{
		 	  	 $data.UpdateFansWb(id,amount_n,function(out){
		 	  	 	if(out.code==200){
		 	  	 		layer.close($(".layui-layer").attr("times")); //关闭层
                        obj.attr("data-amount",amount_n);
                        obj.parent("td").find("font").html(amount_n);
		 	  	 	}
		 	  	 })
		 	  }
		 }) 
	},
	EditReadAmount:function(id,amount,obj){
		layer.open({
		  type: 1,
		  title: '平均阅读量', //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['300px', '180px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="c-box f-l ml-10 mt-20">'+
		             '<div class="left f-l">平均阅读量：</div>'+
		             '<div class="right f-l"><input type="text" id="field" value="'+amount+'" class="input-text radius size-M"/></div>'+
		             '<div class="c-botton mt-15 f-l">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 }); 
		  $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 })
		 $("#save_me").unbind().bind("click",function(){
		 	  var amount_n = $("#field").val();
		 	  if(amount==amount_n) $layer.msg("数据没有更新");
		 	  else{
		 	  	 $data.UpdateRead(id,amount_n,function(out){
		 	  	 	if(out.code==200){
		 	  	 		layer.close($(".layui-layer").attr("times")); //关闭层
                        obj.attr("data-read",amount_n);
                        obj.parent("td").find("font").html(amount_n);
		 	  	 	}
		 	  	 })
		 	  }
		 })  
	},
	PriceEdit:function(title,type,obj){
		 var id=obj.data("id");
		 var p_1 = obj.attr("data-"+type+"-p-1");
		 var a_1 = obj.attr("data-"+type+"-a-1");
		 var p_2 = obj.attr("data-"+type+"-p-2");
		 var a_2 = obj.attr("data-"+type+"-a-2");
		 layer.open({
		  type: 1,
		  title: title, //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['400px', '200px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="cp-box f-l ml-10 mt-20">'+
                     '<div click="cp-h-box f-l">'+
                         '头条报价：<input type="text" id="p_1" value="'+p_1+'" class="input-text radius size-M" style="width:100px"/>&nbsp;&nbsp;&nbsp;&nbsp;'+
                         '增加指数：<input type="text" id="a_1" value="'+a_1+'" class="input-text radius size-M" style="width:100px"/>'+
                     '</div>'+
		             '<div click="cp-h-box mt-15 f-l" style="margin-top:15px">'+
                         '二条报价：<input type="text" id="p_2" value="'+p_2+'"  class="input-text radius size-M" style="width:100px"/>&nbsp;&nbsp;&nbsp;&nbsp;'+
                         '增加指数：<input type="text" id="a_2" value="'+a_2+'" class="input-text radius size-M" style="width:100px"/>'+
                     '</div>'+
		             '<div class="c-botton mt-10 f-l" style="width:380px">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 });
		 $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 });
		 $("#save_me").unbind().bind("click",function(){
		 	   var p_1_n = $("#p_1").val();
			   var a_1_n = $("#a_1").val();
			   var p_2_n = $("#p_2").val();
			   var a_2_n = $("#a_2").val();
			   if(p_1==p_1_n&&a_1==a_1_n&&p_2==p_2_n&&a_2==a_2_n){
			   	   $layer.msg("没有任何修改");
			   }
			   else{
			   	   var par = "{\"type\":\""+type+"\",\"id\":\""+id+"\",\"p1\":\""+p_1_n+"\",\"a1\":\""+a_1_n+"\",\"p2\":\""+p_2_n+"\",\"a2\":\""+a_2_n+"\"}";
			   	   $data.PriceEdit(par,function(out){
			   	   	   if(out.code==200){
			   	   	   	   layer.close($(".layui-layer").attr("times")); //关闭层
                           obj.attr("data-"+type+"-p-1",p_1_n);
						   obj.attr("data-"+type+"-a-1",a_1_n);
						   obj.attr("data-"+type+"-p-2",p_2_n);
						   obj.attr("data-"+type+"-a-2",a_2_n);
                           obj.parent("td").find(".one").html(p_1_n);
                           obj.parent("td").find(".two").html(p_2_n);
			   	   	   }
			   	   })
			   }
		 })
	},
	PriceEditWb:function(title,type,obj){
		 var id=obj.data("id");
		 var p_1 = obj.attr("data-"+type+"-p-1");
		 var a_1 = obj.attr("data-"+type+"-a-1");
		 var p_2 = obj.attr("data-"+type+"-p-2");
		 var a_2 = obj.attr("data-"+type+"-a-2");
		 layer.open({
		  type: 1,
		  title: title, //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['400px', '200px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="cp-box f-l ml-10 mt-20">'+
                     '<div click="cp-h-box f-l">'+
                         '直发报价：<input type="text" id="p_1" value="'+p_1+'" class="input-text radius size-M" style="width:100px"/>&nbsp;&nbsp;&nbsp;&nbsp;'+
                         '增加指数：<input type="text" id="a_1" value="'+a_1+'" class="input-text radius size-M" style="width:100px"/>'+
                     '</div>'+
		             '<div click="cp-h-box mt-15 f-l" style="margin-top:15px">'+
                         '转发报价：<input type="text" id="p_2" value="'+p_2+'"  class="input-text radius size-M" style="width:100px"/>&nbsp;&nbsp;&nbsp;&nbsp;'+
                         '增加指数：<input type="text" id="a_2" value="'+a_2+'" class="input-text radius size-M" style="width:100px"/>'+
                     '</div>'+
		             '<div class="c-botton mt-10 f-l" style="width:380px">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 });
		 $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 });
		 $("#save_me").unbind().bind("click",function(){
		 	   var p_1_n = $("#p_1").val();
			   var a_1_n = $("#a_1").val();
			   var p_2_n = $("#p_2").val();
			   var a_2_n = $("#a_2").val();
			   if(p_1==p_1_n&&a_1==a_1_n&&p_2==p_2_n&&a_2==a_2_n){
			   	   $layer.msg("没有任何修改");
			   }
			   else{
			   	   var par = "{\"type\":\""+type+"\",\"id\":\""+id+"\",\"p1\":\""+p_1_n+"\",\"a1\":\""+a_1_n+"\",\"p2\":\""+p_2_n+"\",\"a2\":\""+a_2_n+"\"}";
			   	   $data.PriceEditApp(par,function(out){
			   	   	   if(out.code==200){
			   	   	   	   layer.close($(".layui-layer").attr("times")); //关闭层
                           obj.attr("data-"+type+"-p-1",p_1_n);
						   obj.attr("data-"+type+"-a-1",a_1_n);
						   obj.attr("data-"+type+"-p-2",p_2_n);
						   obj.attr("data-"+type+"-a-2",a_2_n);
                           obj.parent("td").find(".one").html(p_1_n);
                           obj.parent("td").find(".two").html(p_2_n);
			   	   	   }
			   	   })
			   }
		 })
	},
	PriceEditApp:function(title,type,obj){
		 var id=obj.data("id");
		 var p_1 = obj.attr("data-"+type+"-p");
		 var a_1 = obj.attr("data-"+type+"-a");
		 layer.open({
		  type: 1,
		  title: title, //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['400px', '150px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="cp-box f-l ml-10 mt-20">'+
                     '<div click="cp-h-box f-l">'+
                         '报价：<input type="text" id="p_1" value="'+p_1+'" class="input-text radius size-M" style="width:100px"/>&nbsp;&nbsp;&nbsp;&nbsp;'+
                         '增加指数：<input type="text" id="a_1" value="'+a_1+'" class="input-text radius size-M" style="width:100px"/>'+
                     '</div>'+		             
		             '<div class="c-botton mt-10 f-l" style="width:380px">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 });
		 $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 });
		 $("#save_me").unbind().bind("click",function(){
		 	   var p_1_n = $("#p_1").val();
			   var a_1_n = $("#a_1").val();			 
			   if(p_1==p_1_n&&a_1==a_1_n){
			   	   $layer.msg("没有任何修改");
			   }
			   else{
			   	   var par = "{\"type\":\""+type+"\",\"id\":\""+id+"\",\"p1\":\""+p_1_n+"\",\"a1\":\""+a_1_n+"\"}";
			   	   $data.PriceEditApp(par,function(out){
			   	   	   if(out.code==200){
			   	   	   	   layer.close($(".layui-layer").attr("times")); //关闭层
                           obj.attr("data-"+type+"-p",p_1_n);
						   obj.attr("data-"+type+"-a",a_1_n);
                           obj.parent("td").find("font").html(p_1_n);
			   	   	   }
			   	   })
			   }
		 })
	},
	PriceEditNews:function(title,type,obj){
		 var id=obj.data("id");
		 var p_1 = obj.attr("data-price");
		 var a_1 = obj.attr("data-price-a");
		 layer.open({
		  type: 1,
		  title: title, //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['400px', '150px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="cp-box f-l ml-10 mt-20">'+
                     '<div click="cp-h-box f-l">'+
                         '报价：<input type="text" id="p_1" value="'+p_1+'" class="input-text radius size-M" style="width:100px"/>&nbsp;&nbsp;&nbsp;&nbsp;'+
                         '增加指数：<input type="text" id="a_1" value="'+a_1+'" class="input-text radius size-M" style="width:100px"/>'+
                     '</div>'+		             
		             '<div class="c-botton mt-10 f-l" style="width:380px">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 });
		 $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 });
		 $("#save_me").unbind().bind("click",function(){
		 	   var p_1_n = $("#p_1").val();
			   var a_1_n = $("#a_1").val();			 
			   if(p_1==p_1_n&&a_1==a_1_n){
			   	   $layer.msg("没有任何修改");
			   }
			   else{
			   	   var par = "{\"type\":\""+type+"\",\"id\":\""+id+"\",\"p1\":\""+p_1_n+"\",\"a1\":\""+a_1_n+"\"}";
			   	   $data.PriceEditNews(par,function(out){
			   	   	   if(out.code==200){
			   	   	   	   layer.close($(".layui-layer").attr("times")); //关闭层
                           obj.attr("data-price",p_1_n);
						   obj.attr("data-price-a",a_1_n);
                           obj.parent("td").find("font").html(p_1_n);
			   	   	   }
			   	   })
			   }
		 })
	},
	EditAppMemo:function(id,memo,obj){
		layer.open({
		  type: 1,
		  title: '备注', //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['300px', '180px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="c-box f-l ml-10 mt-20">'+
		             '<div class="left f-l">备注：</div>'+
		             '<div class="right f-l"><input type="text" id="field" value="'+memo+'" class="input-text radius size-M"/></div>'+
		             '<div class="c-botton mt-15 f-l">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 }); 
		  $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 })
		 $("#save_me").unbind().bind("click",function(){
		 	  var memo_n = $("#field").val();
		 	  if(memo==memo_n) $layer.msg("数据没有更新");
		 	  else{
		 	  	 $data.EditAppMemo(id,memo_n,function(out){
		 	  	 	if(out.code==200){
		 	  	 		layer.close($(".layui-layer").attr("times")); //关闭层
                        obj.attr("data-memo",memo_n);
                        obj.parent("td").find("font").html(memo_n);
		 	  	 	}
		 	  	 })
		 	  }
		 }) 
	},
	EditNewsMemo:function(id,memo,obj){
		layer.open({
		  type: 1,
		  title: '媒体介绍', //样式类名
		  closeBtn: 1, //不显示关闭按钮
		  area: ['300px', '180px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="c-box f-l ml-10 mt-20">'+
		             '<div class="left f-l">媒体介绍：</div>'+
		             '<div class="right f-l"><input type="text" id="field" value="'+memo+'" class="input-text radius size-M"/></div>'+
		             '<div class="c-botton mt-15 f-l">'+
		               '<a class="btn btn-primary radius" id="save_me">确定</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 }); 
		  $(".btn-default").off().on("click",function(){
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 })
		 $("#save_me").unbind().bind("click",function(){
		 	  var memo_n = $("#field").val();
		 	  if(memo==memo_n) $layer.msg("数据没有更新");
		 	  else{
		 	  	 $data.EditNewsMemo(id,memo_n,function(out){
		 	  	 	if(out.code==200){
		 	  	 		layer.close($(".layui-layer").attr("times")); //关闭层
                        obj.attr("data-memo",memo_n);
                        obj.parent("td").find("font").html(memo_n);
		 	  	 	}
		 	  	 })
		 	  }
		 }) 
	},
	Number6:function(arr){
	    var str="";
	    $.each(arr,function(i,sub){
            str +='<div class="f-l ml-5" style="width:180px; height:40px;line-height:40px"><input name="c-cb" type="checkbox" value="'+sub.id+'"/>'+sub.name+'</div>';
	    })
        layer.open({
		  type: 1,
		  title: "媒体类型推荐", //样式类名
		  closeBtn: 0, //不显示关闭按钮
		  area: ['400px', '230px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="cp-box f-l ml-10 mt-10">'+
                     '<div click="cp-h-box f-l">'+
                         str+
                     '</div>'+
		             '<div class="c-botton mt-10 f-l" style="width:380px">'+
		               '<a class="btn btn-primary radius" id="save_me">移除选择</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 });
        $(".btn-default").off().on("click",function(){
        	  $("#is_homepage_recommend").val("0");
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 });
        $("#save_me").unbind().bind("click",function(){
        	 var id = "";
        	 $("input[name='c-cb']").each(function(){
        	 	   if($(this).is(":checked")) id+= $(this).val()+",";
        	 })
             if(id==""){
             	 $layer.msg("至少选择一个进行移除"); return false;
             }
             else{
             	 id = id.substring(0,id.length-1);
             	 $data.RemovedHome("{\"id\":\""+id+"\"}",function(out){
             	 	if(out.code==200){
                        layer.close($(".layui-layer").attr("times")); //关闭层
             	 	}
             	 })
             }
        	
        })
	},
	WbNumber6:function(arr){
        var str="";
	    $.each(arr,function(i,sub){
            str +='<div class="f-l ml-5" style="width:180px; height:40px;line-height:40px"><input name="c-cb" type="checkbox" value="'+sub.id+'"/>'+sub.name+'</div>';
	    })
        layer.open({
		  type: 1,
		  title: "媒体类型推荐", //样式类名
		  closeBtn: 0, //不显示关闭按钮
		  area: ['400px', '230px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<div class="cp-box f-l ml-10 mt-10">'+
                     '<div click="cp-h-box f-l">'+
                         str+
                     '</div>'+
		             '<div class="c-botton mt-10 f-l" style="width:380px">'+
		               '<a class="btn btn-primary radius" id="save_me">移除选择</a>&nbsp;&nbsp;'+
		               '<a class="btn btn-default radius">取消</a>'+
		             '</div>'+
		           '</div>'
		 });
        $(".btn-default").off().on("click",function(){
        	  $("#is_homepage_recommend").val("0");
		 	 layer.close($(".layui-layer").attr("times")); //关闭层
		 });
        $("#save_me").unbind().bind("click",function(){
        	 var id = "";
        	 $("input[name='c-cb']").each(function(){
        	 	   if($(this).is(":checked")) id+= $(this).val()+",";
        	 })
             if(id==""){
             	 $layer.msg("至少选择一个进行移除"); return false;
             }
             else{
             	 id = id.substring(0,id.length-1);
             	 $data.wbRemovedHome("{\"id\":\""+id+"\"}",function(out){
             	 	if(out.code==200){
                        layer.close($(".layui-layer").attr("times")); //关闭层
             	 	}
             	 })
             }
        	 console.log(id);
        })
	},
	BulkImportWx:function(){
         layer.open({
		  type: 1,
		  title: "选择文件", //样式类名
		  closeBtn: 0, //不显示关闭按钮
		  area: ['300px', '200px'], //宽高
		  shadeClose: true, //开启遮罩关闭
		  content: '<form id="from2" name="from1" method="post"><div class="cp-box f-l ml-10 mt-10" style="width:280px;overflow:hidden">'+
                     '<div click="cp-h-box f-16 f-l" style="font-size:14px; line-height:25px">'+
                         '批量导入新闻媒体之前需要先下载EXCEL模板，按照模板内容填写，即可批量上传'+
                     '</div>'+
		             '<div class="c-botton mt-10 f-l" style="width:280px">'+
		               '<a class="btn btn-primary radius" id="save_me"><i class="Hui-iconfont">&#xe640;</i>下载模版</a>&nbsp;&nbsp;'+
		               '<span class="btn-upload mt-5" style="height:40px">'+
						  '<a href="javascript:void();" class="btn btn-primary radius" style="margin-top:-8px;"><i class="Hui-iconfont">&#xe642;</i> 选择文件</a>'+
						  '<input type="file" multiple name="file_0" class="input-file" name="file1" id="file1">'+
						'</span>'+
		             '</div>'+
		              '<div class="c-botton f-l" id="text-msg" style="width:280px">'+
		                 '----&nbsp;<img src="resources/static/h-ui/images/loading/loading-s.gif" />&nbsp;选择文件系统后自动上传----'+
		             '</div>'+
		           '</div></form>'
		 });
         
        $("#file1").change(function(){
        	$("#from2").ajaxSubmit({
               type: "post",
               url:'/api/index.php/Home/Upimg/ExcelImportWx',
               dataType: "text",
               success: function (str) {
               	   console.log(str);
               	   // $("#head-img").prop("src","/api/index/"+str).attr("data-src",str);
               }
          }) 
        }) 

	}
}
var $mc = {
	 autoHeight:function(){
	 	 var h = $(document).height();
	 	 $(".art-body>.left").css({"height":(h-50)+"px"});
	 	 
	 },
	 f5:function(){
	 	  $mc.goURL(window.location.href);
	 },
	 goURL:function(url){
	 	window.location.href = url;
	 },
	 showUserOption:function(){
	 	var obj = $(".option-box");
	 	var h = obj.height();
	 	if(h==0){
	 	   obj.animate({
	 	   	  height:"80px"
	 	   })
	 	   $("#outlogin").unbind().bind("click",function(){
	 	   	   $.cookie("username",null);
	 	   	   $mc.goURL("login.html");
	 	   });
	 	}
	 	else{
	 		 obj.animate({
	 	   	  height:"0px"
	 	   })

	 	   $("#outlogin").unbind();
	 	}
	 },
	 AllCheckBox:function(iscb){
	 	 $("input[name='cb']").each(function(){	 	 
	 	 	 $(this).prop("checked",iscb)
	 	 })
	 },
	 isLogin:function(backcall){
	 	 if($.cookie("username")=="null"){
			$mc.goURL("login.html");
		 }	 	 
	 },
	 GetUser:function(){
	 	 if($.cookie("username")=="null"){
	 	 	$mc.goURL("login.html");
	 	 }
	 	 else $("#uname").html($.cookie("username"));
	 }
}
var $layer ={
	  msg:function(str){
	  	 layer.msg(str);
	  },	
	  msgFC:function(str,callback){
		layer.msg(str,function(){
			if (typeof callback==="function") {
				callback();
			}
		 })
	   }, 
	  confirm:function(str,callback){	 	
	 	 layer.confirm(str, {
			  btn: ['确定','取消'] //按钮
			}, function(){
			  	if (typeof callback==="function") {
					callback();
				}
			}, function(index){
			    layer.close(index)
		  });
	 },
	 msgConform:function(str,callback){
	 	 layer.msg(str, {
	 	     time: 50000, //20s后自动关闭		    
		    btn: ['确定','取消'] 
		  }, function(){
			  	if (typeof callback==="function") {
					callback();
				}
			}, function(index){
			    layer.close(index)
		  });
	 }
}
