package day0624;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main_Bj_2839 {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int oh = 5;
		int sam = 3;
		int N = Integer.parseInt(br.readLine());
		int count=0;

		
		while(true) {
			if(N%oh == 0) {
				System.out.println(N/oh+count);
				break;
			}
			else if(N<0) {
				System.out.println(-1);
				break;
			}
			N -= sam;
			count++;
		}
	}

}
