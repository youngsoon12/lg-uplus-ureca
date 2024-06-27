package day0627;

import java.util.Arrays;

public class Practice {
	static int[] su = {1,2,3};
	static int[] answer = new int[3];
	static int total=0;
	static boolean a[] = new boolean[3];
	public static void main(String[] args) {
		
	
		
		perm(0);
		System.out.println(total);
	}
	static void perm(int depth) {
		if(depth==3) {
			total++;
			for(int i=0; i<3; i++) {
				if(answer[i] == 1) {
					System.out.print(su[i]);
				}
			}
			System.out.println();
			return;
		}
		
			answer[depth] =1;
			perm(depth+1);
			answer[depth] = 0;
			perm(depth+1);
			
		}
	}

