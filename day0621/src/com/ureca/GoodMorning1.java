package com.ureca;

import java.util.Arrays;

public class GoodMorning1 {

   static int[] num = {1, 2, 3, 4};
   static int R = 3;
   static int perm[] = new int[num.length];
   static boolean permBoo[] = new boolean[num.length];
   static int comb[] = new int[num.length];
   static boolean combBoo[] = new boolean[num.length];
   static int subs[] = new int[num.length];
   static boolean subsBoo[] = new boolean[num.length];
   
   
   public static void main(String[] args) {
      
//      1. num에서 R개를 뽑아서 만들 수 있는 순열을 모두 출력하시오.
      System.out.println("----- 순열 -----"); // 중복 빼고
//      makePermutation(0);
      
//      2. num에서 R개를 뽑아서 만들 수 있는 조합을 모두 출력하시오.
      System.out.println("----- 조합 -----"); // 
      makeCombination(0);
      
      
//      3. num으로 구성할 수 있는 모든 부분집합을 출력하시오.
      System.out.println("----- 부분집합 -----");
//      makeSubset(0);
      
   } // main
   
   static void makePermutation(int cnt) {
		if(cnt == R) {
			for(int i=0; i<R; i++) {
				System.out.print(perm[i]+" ");
			}
			System.out.println("");
			return;
		}
		
		for(int i=0; i<num.length; i++) {
			if(!permBoo[i]) {
			permBoo[i] = true;
			perm[cnt] = num[i];
			makePermutation(cnt+1);
			permBoo[i] = false;
			}
		}
	}
     
   static void makeCombination(int cnt) {
	// TODO Auto-generated method stub
	   if(cnt == R) {
				for(int i=0; i<R; i++) {
					System.out.print(comb[i]+" ");
				}
				System.out.println("");
				return;
			}
		
			for(int i=0; i<num.length; i++) {
				comb[cnt] = num[i];
				System.out.println("comb["+cnt+"] : "+comb[cnt]+", num["+i+"] : "+num[i]);
				makeCombination(cnt+1);
			}
		
   }
 
   static void makeSubset(int cnt) {
	  if(cnt == num.length) {
		  for(int i=0; i<num.length; i++) {
			  if(subsBoo[i]) {
				  System.out.print(num[i]+" ");
			  } 
		  }
		  System.out.println();
		  return;
	  }
	  
	  subsBoo[cnt] = true;
	  makeSubset(cnt+1);
	  subsBoo[cnt] = false;
	  makeSubset(cnt+1);
   }

   /**
    * cnt 0 -> t t t 
    * 
    */

   
   



}