package a1115;

import java.util.Scanner;

import javax.sound.sampled.SourceDataLine;

public class For1 {

  public static void main(String[] args){

    for(int i =50; i<=100; i++){
      System.out.println(i+"");
    }

    for(int a=11; a<=100; a+=2)
    {System.out.println(a);}
System.out.println("구구단");
    Scanner sc = new Scanner(System.in);
    System.out.print("입력");
  int input =sc.nextInt();

  for(int i=1;i<=9;i++){
    int result =input*i;
    System.out.println(input+"*"+i+"="+result);
  }
  sc.close();
  }
  }

