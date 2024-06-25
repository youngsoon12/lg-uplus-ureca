package day0625;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Practice2 {
	static int n;
	static int spaces[];
	static int total=0;
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		n = Integer.parseInt(br.readLine());
		spaces = new int[n];
		
		queen(0);
		System.out.println(total);
		
	} //main
	
	static void queen(int cnt) {
		if(cnt == n) {
			total++;
			return;
		}
		
		for(int i=0; i<n; i++) {
			spaces[cnt] = i;
			if(spaceCheck(cnt)) {
				queen(cnt+1);
			}
		}
		
	} //queen()
	
	static boolean spaceCheck(int cnt) {
		for(int i=0; i<cnt; i++) {
			if(spaces[cnt] == spaces[i]) {
				return false;
			}
			else if(Math.abs(cnt-i) == Math.abs(spaces[cnt]-spaces[i])) {
				return false;
			}
		}
		return true;
	}
}
