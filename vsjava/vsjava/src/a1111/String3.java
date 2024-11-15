package a1111;

import java.util.Scanner;

public class String3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in, "UTF-8");  // Scanner 인스턴스에서 UTF-8 인코딩 사용

        String str= """
                나는 자바를\
                학습합니다.
                나는 자바고수가 될 겁니다.
                """;
        System.out.println(str);
    }
}