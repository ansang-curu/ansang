package a1203.Gen1;

import java.util.ArrayList;

public class Gen2 {
  public static void main(String[] args) {
    ArrayList<String> piches = new ArrayList<>();
    piches.add("123");
    piches.add("129");
    //제네릭스로 자료형을 선언하면 그 이후로는 자료형을 형변환하는 과정X


    String one =piches.get(0);
    String two =piches.get(1);

  }
  
}
