package a1125.bank;

import java.util.Scanner;

public class BankApplication {
  Scanner scanner=new Scanner(System.in);
  private static Account[] accountArray=new Account[100];
//모든 계좌 정보 저장 - 하나의 배열에 저장하므로 새로운 배열을 만들 필요가 없음

  public static void main(String[] args) {
    Scanner scanner=new Scanner(System.in);
boolean run=true;
while(run){
  System.out.println("-----------------");
  System.out.println("1계좌생성 2목록3예금4출금5종료");
  System.out.println("-----------------");
  System.out.println("선택>");
int selectNo=Integer.parseInt(scanner.nextLine());
if(selectNo==1){
  createAccount();
  }else if(selectNo==2){
    accountList();
      }else if(selectNo==3){
        deposit();
              }else if(selectNo==4){
                withdraw();
                              }else if(selectNo==5){
                                System.out.println("종료");
                              }else{System.out.println("잘못입력햇다");}
                              
                              }
                              
                              
                                }
                              
                            
                              
                    // 계좌생성
    private static void createAccount() {
      Scanner scanner=new Scanner(System.in);
      System.out.println("-----------");
      System.out.println("계좌생성");
      System.out.println("-----------");
      System.out.print("계좌번호:");
      String ano=scanner.nextLine();

      System.out.print("계좌주:");
      String owner=scanner.nextLine();

      System.out.print("초기입금액:");
      int balance =Integer.parseInt(scanner.nextLine());

      Account newAccount=new Account(ano,owner,balance);
      for(int i =0; i<accountArray.length; i++){
        if(accountArray[i]==null){ //비어있는 방이면
          accountArray[i]=newAccount;
          System.out.println("결과: 계좌생성완료");
          break;

        } 
      }
      //0번방에 뉴어카운트
    }
  
    private static void accountList() {
     System.out.println("-----------------"); 
     System.out.println("계좌생성목록"); 
     System.out.println("-----------------"); 
     for(int i =0; i<accountArray.length; i++){
      Account account=accountArray[i];
      if(account !=null){
        System.out.print(account.getAno());
        System.out.print("   ");
        System.out.print(account.getOwner());
        System.out.print("   ");
        System.out.print(account.getBalance());
        System.out.println();
      }
     }
    }
    private static void deposit() {
      Scanner scanner=new Scanner(System.in);
      System.out.println("-----------------");
      System.out.println("예금");
      System.out.println("-----------------");
      System.out.print("계좌번호:");
      String ano=scanner.nextLine();
      System.out.print("예금액:");
      int money = Integer.parseInt(scanner.nextLine());
      Account account=findAccount(ano);
      if(account!=null){
        account.setBalance(account.getBalance()+money);
      }else{
        System.out.println("잘못입력햇다");
      }
      
          }
      
      
      
      
      
      
      
      
      
      
      
          private static Account findAccount(String ano) {
          Account account=null;
          for(int i=0; i<accountArray.length; i++){
            if(accountArray[i] !=null){
              String dbAno=accountArray[i].getAno();
              if(dbAno.equals(ano)){

                account=accountArray[i];
                break;
              }
            }
          }
          return account;
          
          }
          private static void withdraw() {
            Scanner scanner=new Scanner(System.in);
            System.out.println("-----------------");
            System.out.println("출금");
            System.out.println("-----------------");
            System.out.print("계좌번호:");
            String ano=scanner.nextLine();
            System.out.print("출금액:");
            int money = Integer.parseInt(scanner.nextLine());
            Account account=findAccount(ano);
            if(account!=null){
              account.setBalance(account.getBalance()-money);
            }else{
              System.out.println("잘못입력햇다");
            }
            


          }
        
}
