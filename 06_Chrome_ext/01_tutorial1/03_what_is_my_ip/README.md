URL	|说明|	是否允许请求
----|-----|---------------
http://a.example.com/<br> http://a.example.com/a.txt	|同域下	|允许
http://a.example.com/<br> http://a.example.com/b/a.txt	|同域下不同目录	|允许
http://a.example.com/<br> http://a.example.com:8080/a.txt	|同域下不同端口|	不允许
http://a.example.com/<br> https://a.example.com/a.txt	|同域下不同协议	|不允许
http://a.example.com/<br> http://b.example.com/a.txt	|不同域下	|不允许
http://a.example.com/<br>  http://a.foo.com/a.txt	|不同域下	|不允许