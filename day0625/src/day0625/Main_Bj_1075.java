package day0625;
import java.util.*;
public class Main_Bj_1075 {

	public static void main(String[] args) {
		Scanner sc =new Scanner(System.in);
		
		int N = sc.nextInt();
		int F = sc.nextInt();
		boolean boo = true;
		int result = 0;
		int i = 0;
		while(boo) {
			int result1=0;
			int result2=0;
			
			if(F*i+1>N) {
				
			}
			if(F*i > N) {
				result = F*i - N;
				boo = false;
			}
			i++;
		}
		System.out.println(result);

	}

}
