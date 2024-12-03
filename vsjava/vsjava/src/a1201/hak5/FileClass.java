package a1201.hak5;

import java.io.File;

public class FileClass {
  private File file;
  private String dir; //디렉토리
  private String fileName; //파일명
  
  public FileClass(){
  file=new File("c:\\");
  //기본생성자로 기본디렉토리 c:\ 로 설정
  
}
}
