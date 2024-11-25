package a1120;

import java.util.Calendar;

public class WeekEx {

  
} WeekEx {
  public static void main(String[] args) {

    Week today=null;

    Calendar cal=Calendar.getInstance();

    int week = cal.get(Calendar.DAY_OF_WEEK);
    System.out.println(week);


switch (week) {
  case 1:today=Week.일요일; break;
  case 2:today=Week.MONDAY; break;
  case 3:today=Week.TUESDAY; break;
  case 4:today=Week.WENDESDAY; break;
  case 5:today=Week.목요일; break;
  case 6:today=Week.금요일; break;
  case 7:today=Week.토요일; break;
    
}
  }
  


}
