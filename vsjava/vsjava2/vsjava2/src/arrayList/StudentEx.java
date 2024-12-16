package arrayList;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class StudentEx {
    public static void main(String[] args) {
//어레이 리스트 만들기
        ArrayList<Student> students = new ArrayList<>();

        students.add(new Student("an", 20, "S999"));
//
        Student s1 = new Student("a", 20, "S001");
        Student s2 = new Student("b", 25, "S002");
        Student s3 = new Student("c", 27, "S003");
//
        students.add(s1);
        students.add(s2);
        students.add(s3);

        students.add(new Student("바로집어넣는법", 20, "S900"));

        Student s4 = new Student();

        s4.setName("tom");
        s4.setAge(22);
        s4.setStudentId("S004");
        students.add(s4);

        boolean run = true;
        while (run) {
        Scanner sc = new Scanner(System.in);
            System.out.println("--------메뉴선택---------");
            System.out.println("1. 학생 추가하기");
            System.out.println("2. 학생 리스트 보기");
            System.out.println("3.학생 수정");
            System.out.println("4.학생 삭제");
            System.out.println("5. 나가기");
            System.out.println("너의 선택은?");


            int choice = -1;
//            sc.nextInt();
            choice = sc.nextInt();
            sc.nextLine();
            switch (choice) {
                case 1:
                    System.out.println("========학생 등록===========");
                    System.out.print("이름:");
                    String n = sc.nextLine();

                    System.out.print("나이: ");
                    int a = sc.nextInt();
                    sc.nextLine();

                    System.out.print("아이디: ");
                    String id = sc.nextLine();

                    students.add(new Student(n, a, id));

                    System.out.println("성공적으로 입력했다.");
                    System.out.println(n + a + id);
//                    /////////////////////////////////////
//                    Student s5=new Student();
//                    System.out.println("이름입력");
//
//                    s5.setName(sc.nextLine());
//                    System.out.println("나이입력");
//                    s5.setAge(sc.nextInt());
//                    System.out.println("아이디입력");
//                    s5.setStudentId(sc.nextLine());
//                    students.add(s5);
//                    System.out.println("성공적 셋팅");
                    break;
                case 2:
//                    학생 리스트 보여주기
                    if (students.isEmpty()) {
                        System.out.println("등록학생 없음");
                    } else {
                        for (Student student : students) {
                            System.out.println(student);
                        }
                    }
                    break;   //현재 반복문만 빠져나감
                case 3:
                    System.out.println("업데이트할 id입력");
                    String updateId =sc.nextLine();
                    boolean found=false;
                    for(Student student:students){
                        if(student.getStudentId().equalsIgnoreCase(updateId)){
                            System.out.println("새로운이름:");
                            student.setName(sc.nextLine());
                            System.out.println("새로운 나이");
                        student.setAge(sc.nextInt());
                        sc.nextLine();
                            System.out.println("학생 수정 성공");
                            found =true;
                            break;
                        }

                    }
                    if(!found){
                        System.out.println("찾는 학생 없습니다.");
                    }
                    break;
                case 4:
                    System.out.println("삭제할 학생 id입력");
                    String deleteId=sc.nextLine();
                    found=false;
                    for(Student student:students){
                        if(student.getStudentId().equalsIgnoreCase(deleteId)) {
                            students.remove(student);
                            System.out.println("삭제완료");
                            found = true;
                            break;
                        }
                    }
                    if(!found){
                        System.out.println("찾는 학생 없음");
                    }
                    break;
                case 5:
//                    끝내기
                    System.out.println("프로그램 종료");
                    sc.close();
//                    System.exit(0);
//                    return; //현재 메서드 (메인) 전체종료, 호출된 곳으로 반환
                    run = false;
                    break;
                default:
                    System.out.println("다시 입력하세요");
            }


        }

    }}
