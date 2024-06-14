package com.ureca;

import java.util.Arrays;
import java.util.Collections;


public class Practice {
	
	public static void main(String[] args)  {
		Integer [] arrays = {30,10,50,20,40};
		System.out.println("== 정렬 전 ==");
		for(int i :arrays) {
			System.out.print(i+", ");
		}  // 정렬전
		Arrays.sort(arrays,Collections.reverseOrder());
		
		System.out.println("\n");
		System.out.println("== 정렬 후 ==");
		for(int i :arrays) {
			System.out.print(i+", ");
		}  // 정렬후
	}

}
