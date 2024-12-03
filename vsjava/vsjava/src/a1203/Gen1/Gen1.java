package a1203.Gen1;

import java.util.ArrayList;

public class Gen1 {
  public static void main(String[] args) {
    ArrayList piches = new ArrayList();
    piches.add("123");
    piches.add("129");
    //제네릭스를 사용하지 않으면 어레이리스트에 추가하는 객체는 오브젝트자료
    // 오브젝트 자료- 모든 객체가 상속하고 있는 가장 기본 자료형
    //자료를 넣을때 문제가 없지만 값을 가져올때는 
    // 오브젝트 자료형에서 string 자료형으로 형변환 해야한다


    String one =(String) piches.get(0);
    String two =(String) piches.get(1);

  }
  
}
