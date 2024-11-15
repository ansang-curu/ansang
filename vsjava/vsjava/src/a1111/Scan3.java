package a1111;

import java.util.Scanner;

public class Scan3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in, "UTF-8");  // Scanner 인스턴스에서 UTF-8 인코딩 사용

        System.out.print("이름입력 : ");
        String name = scan.nextLine();  // 문자열 입력

        System.out.print("나이입력 : ");
        int age = scan.nextInt();  // 나이 입력

        System.out.println("Name : " + name);
        System.out.println("Age: " + age);

        scan.close();  // Scanner 리소스 닫기
    }
}