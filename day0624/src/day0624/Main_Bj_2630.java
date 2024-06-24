package day0624;

import java.util.*;

public class Main_Bj_2630 {
	static int blueCnt =0,whiteCnt=0;
	static int whole [][];
	static int blue=0,white=0;
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		whole =new int[N][N];
		
		for(int i=0; i<N; i++) {
			for(int j=0; j<N; j++) {
				whole[i][j]=sc.nextInt();
			}
		}
		
		division(0,0,N);
		
		
	}
	
	static void division(int x,int y,int size) {
		calculate(x,y,size);
		if(blue == size*size)blueCnt++;
		else if(white == size*size)whiteCnt++;
		else {
			division(0,0,size/2); // 왼쪽위
			division(0,0,size/2); 
		}
	}
	
	static void calculate(int x,int y,int size) {
		for(int i=x; i<size; i++) {
			for(int j=y; j<size; j++) {
				if(whole[i][j] == 1) {
					blue++;
				}
				else if(whole[i][j] == 0) {
					white++;
				}
			}
		}
		System.out.println("blue 개수 : " + blue);
		System.out.println("white 개수 : " + white);
	}
}
