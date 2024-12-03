package a1203;

public class accountingApp {
  public static void main(String[] args) {

    double valueOfSupply = 10000.0;
    double vatRate = 0.1;
    double vat = valueOfSupply*vatRate;
    double expenseRate = 0.3;
    double total = valueOfSupply+vat;
    double expense = valueOfSupply*expenseRate;
    double income = valueOfSupply-expense;
    System.out.println("Value of supply: "+valueOfSupply);
    System.out.println("VAT: "+vat);
    System.out.println("Total: "+total);
    System.out.println("Expense: "+expense);
    System.out.println("Income: "+income);
    double devidend1 = income*0.5;
    System.out.println("Dividend1: "+devidend1);
    double devidend2 = income*0.3;
    System.out.println("Dividend2: "+devidend2);
    double devidend3 = income*0.2;
    System.out.println("Dividend3: "+devidend3);

  }
  
}
