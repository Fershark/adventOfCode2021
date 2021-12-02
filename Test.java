/*
javac Test.java; Get-Content .\input1.txt | java Test Out-String
*/
import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
    int max = 0, current, last = Integer.parseInt(input.nextLine());

    while (input.hasNextLine()) {
      current = Integer.parseInt(input.nextLine());
      if (current > last) {
        max++;
      }
      last = current;
    }

    System.out.println(max);
    input.close();
	}
}
