package a1125.this1;

public class MyClass1 {
  public static void main(String[] args) {
    MyClass obj1=new MyClass(10);
    obj1.myMethod();
    MyClass obj2=new MyClass();
    obj2.myMethod();
  }
  
}

class MyClass {
int myVariable;

public MyClass(int myVariable) {
  this.myVariable = myVariable;
}
public MyClass(){
  this(0);
}
  public void myMethod(){
    //여기서 this는 해당 객체
    System.out.println("My variable :"+this.myVariable);
  }
}

// 하나의 파일에 퍼블릭은 하나
