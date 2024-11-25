package a1125.object;

public class MonsterTest {
  public static void main(String[] args) {
    Monster orc=new Monster("오크");
    Monster skeleton=new Monster("해골");
    Monster.battle(orc,skeleton);//배틀이란 함수를 만든듯?
    
      }
      
    }
    
    class Monster{
      private String name;
      private int hp;
      // private Math 
      private static int maxHp=30;
      public Monster(String name) {
        //  여기서 몬스터는 함수일까?
        this.name = name;
        // this.hp = 30;
    this.hp=maxHp;
      }
      public static void battle(Monster a, Monster b) {
      while (a.hp>0 && b.hp>0) {
        Monster attacker=(Math.random()<0.5)? a:b;
        Monster defender=(attacker==a)?b:a;
        attacker.attack(defender);
                
              }
              }
              private void attack(Monster enemy) {
                System.out.printf("[%s]의 공격",name); //프린트f로 뽑을때 퍼센트s는 객체주인공의 네임을 받는다 근데 공격자다. 매개변수로 들어간 에넞미는 밑에꺼 s로 들어간다
                enemy.hp=enemy.hp-10;
                System.out.printf("%s 체력:%d/(%d)\n",enemy.name,enemy.hp,Monster.maxHp);
              

              }
}