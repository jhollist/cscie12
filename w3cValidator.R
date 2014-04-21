#'  Validate html file from R
#'
#'  This function takes a local html file and sends it to the W3C validator
#'  
#'  @param htmlFile the local file to POST to the W3C validator
#'  
#'  @return returns a list.  First item indicates if the file is valid, second item is the
#'  returned XML from the validator
#'  
w3cValidator<-function(htmlFile){
  require(httr)
  POST("http://validator.w3.org/check", 
       body = list(myFile = upload_file(system.file(htmlFile))))
  
} 

POST("http://validator.w3.org/check", 
     body = list(myFile = upload_file("aboutme-html5.html")))
