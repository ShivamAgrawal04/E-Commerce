import java.util.Random;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        int arr1[] = new int[5];
        int a = 0;

        while (a < arr1.length) {
            int temp = getRandomNumber();
            boolean isDuplicate = false;

            for (int i = 0; i < a; i++) {
                if (arr1[i] == temp) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) {
                arr1[a] = temp;
                a++;
            }
        }

        for (int i = 0; i < 5; i++) {
            System.out.println(arr1[i]);
        }
        // testR();
        System.out.println("testR() returned: " + testR());
    }

    public static int getRandomNumber() {
        Random ran = new Random();
        return ran.nextInt(6) + 1;
    }

    public static int testR() {
        Scanner sc = new Scanner(System.in);
        String b = sc.nextLine();
        sc.close();
        if (b.length() == 1) {
            return 0;
        }
        return 1;
    }
}