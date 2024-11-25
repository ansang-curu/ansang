package a1125.person1;

public class Person {
  private static int count;
  //전체 사람 수를 저장하는 정적변수

  private String name;
  private int age;
  public String getName() {
    return name;
  }
  public int getAge() {
    return age;
  }
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
    count++;
  }
public static int getTotalCount(){
  return count;
}
}


//static 정적변수
//정적변수는 클래스에 속하고 객체를 생성하지 않고도 클래스 이름으로 직접접근 할 수 있는 변수 즉, 클래스의 모든 객체가 공유하는 하나의 값을 가진다
//정적매서드
//정적 매서드는 클래스에 속하며, 객체를 생성하지않고도 클래스 이름으로 직접접근 할 수 있는 메소드는 인스턴스변수에 접근할 수 없으며, 오직 정적변수나 다른 정적 메서드만 호출할 수 있다