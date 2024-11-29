package a1129;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
// 알트 쉬프트 o로 임포트
public class ArrayList1 {
  public static void main(String[] args) {
    ArrayList<Integer> arrList=new ArrayList<>();
    arrList.add(40);
    arrList.add(30);
    arrList.add(20);
    arrList.add(10);
    System.out.println("리스트출력1:"+arrList);

    // for문과 get 메소드를 이용한 요소의 출력
    for(int i=0; i<arrList.size();i++){
      System.out.println(arrList.get(i)+"");
    }

// Enhanced for문 foreach문과 겟메소드를 이용한 요소 출력
for(int e: arrList){
  System.out.println(e+"");
}
// 컬렉션즈 솔트 메소드를 이용한 요소의 정렬
Collections.sort(arrList);
System.out.println(arrList);

// 다양한 요소에 접근 리스트 맵 셋
Iterator<Integer> iter=arrList.iterator();
while(iter.hasNext()){
  // 다음 요소가 있을때까지 순회
  System.out.println(iter.next()+"");
  // next 현재요소반환
}

arrList.set(0,20);
System.out.println(arrList+"");


// 1번 인덱스배열에 50추가
arrList.add(1,50);
for(int e: arrList){
  System.out.println(e+"");
}

System.out.println("리스트의크기:"+arrList.size());

arrList.remove(3);

  }
  
}
