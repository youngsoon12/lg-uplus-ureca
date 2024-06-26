package day0626;
import java.util.*;

public class Main_Bj_1032 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
		String arr[]=new String[n];
		for(int i = 0; i<n; i++) {
			String str = sc.next();
			arr[i]=str;
			}
		String answer=arr[0];
		for(int i =1; i<n; i++) {
			for(int j=0; j<answer.length(); j++) {
				if(!(arr[i].charAt(j) == answer.charAt(j))) {
					String[] a = answer.split("");
					a[j] = "?";
					answer = String.join("", a);
					
				}
			}
		}
		System.out.println(answer);

	}

}
