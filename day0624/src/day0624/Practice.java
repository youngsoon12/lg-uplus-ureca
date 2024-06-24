package day0624;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Practice {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String str = br.readLine();
		StringTokenizer stk = new StringTokenizer(str);
		int coin= 0;

		int N = Integer.parseInt(stk.nextToken());
		int K = Integer.parseInt(stk.nextToken());
		int coins []= new int[N];
		int current = K;
		int ans [] = new int[N];
		int min;
		for(int i=0; i<N; i++) {
			coins[i] = Integer.parseInt(br.readLine());
		}
		Arrays.sort(coins);
		if(K == coins[N-1]) {coin=1; }
		else {
		for(int i=0; i<N; i++) {
			current = K;
			coin = 0;
			if(!(current%coins[i] == 0)) {
				for(int j=i; j>=0; j--) {
					if(current%coins[j] < current) {
						coin += current/coins[j];
						current = current%coins[j];
//						System.out.println("current : "+ current);
					}	
				}
				if(!(current % coins[0] == 0)) {
					coin = -1;
				}
			}
			else {
				coin = current/coins[i];
			}
			ans[i] = coin;
		} //for
		}
		
		Arrays.sort(ans);
		min = ans[ans.length-1];
		for(int i=0; i<ans.length; i++) {
			min = ((ans[i] > 0) && min>ans[i]) ? ans[i] : min; 
		}
		
		System.out.println(Arrays.toString(ans));
		System.out.println(min);

	}

}






