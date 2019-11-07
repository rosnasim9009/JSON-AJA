var xhr=new XMLHttpRequest();
xhr.open('GET','data.html', true);
xhr.send(null);

xhr.onload=function(){
  if(xhr.status === 200) //if server status is ok
  {
    document.getElementById('content').innerHTML=xhr.responseText;
  }
};
