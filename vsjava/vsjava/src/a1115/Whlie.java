package a1115;

import java.util.Scanner;

public class Whlie {
  public static void main(String[] args) {
    int a=1;
    System.out.println("1부터 100까지 합계");
    int result=0;
    while (a<=100) {
      
      result= result + a;
      // System.out.print(result);
      // int n= a
      a++;
    }
    System.out.println("합:"+result);
    System.out.println("------------");
    Scanner sc = new Scanner(System.in);
    int sum=0;
    for(int i=0;i<5;i++){
      System.out.println("정수입력:");
      int n= sc.nextInt();
      if(n<0){
        continue;
      }
      sum+=n;
    }
    System.out.println("양수의합:"+sum);
    sc.close();
  }
  
}
