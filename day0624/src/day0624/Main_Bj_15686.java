package day0624;

import java.util.*;

public class Main_Bj_15686 {
	static int m,n;
	static int chicken[];
	static int range[];
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		m = sc.nextInt();
		n = sc.nextInt();
		
		range = new int[m];
		chicken = new int[2];
		
		for(int i=1; i<=m; i++) {
			range[i-1] = i;
		}
		
		distance(0);
		sc.close();
	}
	
	static void distance(int cnt) {
		if(cnt == 2) {
//			System.out.println(Arrays.toString(chicken));
			return;
		}
		
		for(int i=0; i<5; i++) {
			chicken[cnt] = range[i];
			System.out.println("cnt : " + cnt + "");
			distance(cnt+1);
		}
	}
}

