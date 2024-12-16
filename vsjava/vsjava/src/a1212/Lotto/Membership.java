package a1212.Lotto;

import java.util.Scanner;

public class Membership {
  
String name;
String personlYY;
String personlMM;
String personlDD;
String email;
String address;
String pw;

public void MembershipGuide(){
    Scanner sc = new Scanner();
        System.out.println(
				" \n\n ##        ####    ######   ######   ######   #####    ##  ##  \r\n"
				+ " ##       ##  ##     ##       ##     ##       ##  ##   ##  ##  \r\n"
				+ " ##       ##  ##     ##       ##     #####    #####    ###### \r\n"
				+ " ##       ##  ##     ##       ##     ##       ## ##      ##    \r\n"
				+ " ######    ####      ##       ##     ######   ##  ##     ##");
		
		System.out.println("\n[INFO] 안녕하세요. 동행로또입니다.\n"
				+ "로또 구입을 위해선 회원가입이 필요합니다.\n"
				+ "회원가입을 진행하시겠습니까?\n"
				+ "[1] 예\t[2] 아니요");
		
		String answer = ""; 
    for(;;){
      System.out.print('\n입력 :');
      answer=sc.next();
      if(answer.equals("1") || answer.equals("예")){
        personalData();
        break; //특정조건을 충족하면 반복문을 종료
    }else if(answer.equals("2") || answer.equals("아니오")){
        System.out.println("\n[ERROR] 회원이 아니면 로또를 구해할 수 없습니다.");
        System.exit(0);//현재 실행중인 자바 프로그램 종료
    }else{
        System.out.println("\n[ERROR] 잘못된 입력입니다. 다시 입력해주세요."); 
    }
    }
}  

}

