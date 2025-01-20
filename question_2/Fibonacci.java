package question_2;

public class Fibonacci {
    public static boolean pertenceFibonacci(int num) {
        int a = 0, b = 1, c = 0;

        while (c < num) {
            c = a + b;
            a = b;
            b = c;
        }

        return (c == num || num == 0);
    }
}
