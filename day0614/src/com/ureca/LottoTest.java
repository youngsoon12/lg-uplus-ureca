package com.ureca;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.random.*;

public class LottoTest {

	public static void main(String[] args) throws IOException {
		// ArrayList로 구현
//		System.out.print("몇회차 까지 진행하시겠습니까?");
//		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
//		String repeat = bf.readLine();
//		System.out.println(repeat);
//		System.out.println("★★ 금주 행운의 로또번호 ★★");
//		for(int i=1; i<=Integer.parseInt(repeat); i++ ) {
//		int check = 0;
//		System.out.print("\n"+i+"회: " );
//		ArrayList<Integer> lotto = new ArrayList<>();
//		while(check<6) {
//			int random = (int) (Math.random()*45)+1;
//			if(!lotto.contains(random)) {
//				if(check>4) {
//					lotto.add(random);
//					System.out.print(lotto.get(check));
//					check++;
//				}else {
//				lotto.add(random);
//				System.out.print(lotto.get(check)+", ");	
//				check++;
//				}
//			}
//		}	
//		}
		
		// LinkedList로 구현
		System.out.print("몇회차 까지 진행하시겠습니까?");
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		String repeat = bf.readLine();
		System.out.println(repeat);
		System.out.println("★★ 금주 행운의 로또번호 ★★");
		for(int i=1; i<=Integer.parseInt(repeat); i++ ) {
		int check = 0;
		System.out.print("\n"+i+"회: " );
		LinkedList<Integer> lotto = new LinkedList<>();
		while(check<6) {
			int random = (int) (Math.random()*45)+1;
			if(!lotto.contains(random)) {
				if(check>4) {
					lotto.add(random);
					System.out.print(lotto.get(check));
					check++;
				}else {
				lotto.add(random);
				System.out.print(lotto.get(check)+", ");	
				check++;
				}
			}
		}	
		}
	} // main
}
