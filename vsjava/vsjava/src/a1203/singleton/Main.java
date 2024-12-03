package a1203.singleton;

public class Main {
  public static void main(String[] args) {
    SingletonLogger logger=SingletonLogger.getInstance();
  logger.log("This is a message");

  SingletonLogger anothLogger=SingletonLogger.getInstance();
  }
}
