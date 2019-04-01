// https://www.hackerrank.com/challenges/bon-appetit/problem

public class Solution {
    static void bonAppetit(List<Integer> bill, int k, int b) {
        int totalAnaBill = 0;
        for (int i=0; i<bill.size(); i++) {
            if(bill.get(i) != bill.get(k)) {
                totalAnaBill += bill.get(i);
            }
        }

        totalAnaBill = totalAnaBill / 2;
        
        if (totalAnaBill == b) {
            System.out.print("Bon Appetit");  
        } else {
            System.out.print(b - totalAnaBill);
        }
    }
}
