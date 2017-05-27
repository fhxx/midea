var api = "/media/api/index.php";
var $data={
	 Login:function(username,password,callback){	 	
	 	 $.post(api,{
	 	 	 "com":"login",
	 	 	 "par": "{\"username\":\""+username+"\",\"password\":\""+password+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },	 
	 Wx_Ty_Add:function(field,type,callback){
	 	 $.post(api,{
	 	 	 "com":"Wx_Ty_Add",
	 	 	 "par": "{\"name\":\""+field+"\",\"type\":\""+type+"\"}"
	 	 },function(out){	 	 	 
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 Wx_Range_Add:function(field,type,callback){
	 	 $.post(api,{
	 	 	 "com":"Wx_Range_Add",
	 	 	"par": "{\"name\":\""+field+"\",\"type\":\""+type+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 GetWxType:function(par,callback){
	 	 $.post(api,{
	 	 	 "com":"Wx_Read_Ty",
	 	 	 "par": "{\"type\":\""+par+"\"}"
	 	 },function(out){	

	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 MediaType:function(callback){
	 	 $.post(api,{
	 	 	 "com":"MediaType",
	 	 	 "par": "{}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },

	 Ordertake:function(type,callback){
         $.post(api,{
	 	 	 "com":"Ordertake",
	 	 	 "par": "{\"type\":\""+type+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 AddWx:function(par,callback){
	 	  $.post(api,{
	 	 	 "com":"AddWx",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 AddWb:function(par,callback){
	 	  $.post(api,{
	 	 	 "com":"AddWb",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 Addapp:function(par,callback){
	 	  $.post(api,{
	 	 	 "com":"Addapp",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 AddNews:function(par,callback){
	 	   $.post(api,{
	 	 	 "com":"AddNews",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 HomePageRecommend:function(par,callback){ //查询该媒体分类下已经存在6个推荐的公众号	 	
         $.post(api,{
	 	 	 "com":"HomePageRecommend",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 WbHomePageRecommend:function(par,callback){ //查询该媒体分类下已经存在6个推荐的公众号	 	
         $.post(api,{
	 	 	 "com":"WbHomePageRecommend",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 RemovedHome:function(par,callback){
         $.post(api,{
	 	 	 "com":"RemovedHome",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 WbRemovedHome:function(par,callback){
         $.post(api,{
	 	 	 "com":"WbRemovedHome",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 wxList:function(par,p,callback){
	 	  $.post(api,{
	 	 	 "com":"wxList",
	 	 	 "par": "{"+par+",\"p\":\""+p+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 wbList:function(par,p,callback){
	 	  $.post(api,{
	 	 	 "com":"wbList",
	 	 	 "par": "{"+par+",\"p\":\""+p+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 appList:function(par,p,callback){
	 	 $.post(api,{
	 	 	 "com":"appList",
	 	 	 "par": "{"+par+",\"p\":\""+p+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 newsList:function(par,p,callback){
	 	   $.post(api,{
	 	 	 "com":"newsList",
	 	 	 "par": "{"+par+",\"p\":\""+p+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 delWxData:function(par,callback){
	 	  $.post(api,{
	 	 	 "com":"delWxData",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 delWbData:function(par,callback){
	 	  $.post(api,{
	 	 	 "com":"delWbData",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 delAppData:function(par,callback){
	 	  $.post(api,{
	 	 	 "com":"delAppData",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 delNewsData:function(par,callback){
	 	   $.post(api,{
	 	 	 "com":"delNewsData",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 UpdateFans:function(id,amount,callback){
        $.post(api,{
	 	 	 "com":"UpdateFans",
	 	 	 "par": "{\"id\":\""+id+"\",\"amount\":\""+amount+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 UpdateFansWb:function(id,amount,callback){
        $.post(api,{
	 	 	 "com":"UpdateFansWb",
	 	 	 "par": "{\"id\":\""+id+"\",\"amount\":\""+amount+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 EditAppMemo:function(id,memo,callback){
	 	$.post(api,{
	 	 	 "com":"EditAppMemo",
	 	 	 "par": "{\"id\":\""+id+"\",\"memo\":\""+memo+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 UpdateRead:function(id,amount,callback){
        $.post(api,{
	 	 	 "com":"UpdateRead",
	 	 	 "par": "{\"id\":\""+id+"\",\"amount\":\""+amount+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 PriceEdit:function(par,callback){
	 	 $.post(api,{
	 	 	 "com":"PriceEdit",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 PriceEditWb:function(par,callback){
	 	 $.post(api,{
	 	 	 "com":"PriceEditWb",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 PriceEditApp:function(par,callback){
	 	 $.post(api,{
	 	 	 "com":"PriceEditApp",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 PriceEditNews:function(par,callback){
	 	$.post(api,{
	 	 	 "com":"PriceEditNews",
	 	 	 "par": par
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json");
	 },
	 EditNewsMemo:function(id,memo,callback){
	 	$.post(api,{
	 	 	 "com":"EditNewsMemo",
	 	 	 "par": "{\"id\":\""+id+"\",\"memo\":\""+memo+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 },
	 distinctCity:function(par,callback){
	 	  $.post(api,{
	 	 	 "com":"distinctCity",
	 	 	 "par": "{\"type\":\""+par+"\"}"
	 	 },function(out){
	 	 	 if(typeof callback==="function")
	 	 	 {
	 	 	 	callback(out);
	 	 	 }
	 	 },"json"); 
	 }
}
