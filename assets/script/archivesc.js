//JS function set -- 참조하는 곳 : archive.html
function ClosePreview(){
    document.getElementById('archive_preview').style.display = 'none';
  }

function catBlogIntro(){
    document.getElementById("archive_preview").innerHTML = 
    "<h3>Hello, World!</h3>잡담, etc.<p></p>";
  }
function catUpdateIntro(){
    document.getElementById("archive_preview").innerHTML = 
    "<h3>Refresh.</h3>업데이트, 관리, 메인터넌스 관련<p></p>";
  }
//매개변수로 처리
//pagetype에 따라서 각각 처리
function catIntro(pageType){
  if (pageType == "Update")
    document.getElementById("archive_preview").innerHTML = 
    "<h3>Refresh.</h3>업데이트, 관리, 메인터넌스 관련<p></p>";
  else if (pageType == "Blog")
    document.getElementById("archive_preview").innerHTML = 
    "<h3>Hello, World!</h3>잡담, etc.<p></p>";
  // else if (pageType == "Tags")
  //   document.getElementById("archive_preview").innerHTML = 
  //   "<h3></h3>태그 모아보기.<p></p>";  
  
    
  }
