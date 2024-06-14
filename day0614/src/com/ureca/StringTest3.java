package com.ureca;

import java.util.StringTokenizer;

public class StringTest3 {
  public static void main(String[] args) {
	  String tel="010-123-4567";
	  //          012345678901
	  
	  StringTokenizer st = new StringTokenizer(tel,"-");
	  String a;
	  while(st.hasMoreTokens()) {
		  System.out.println(st.nextToken());
	  }
	

	  
	  int idx = tel.indexOf('-');
	  
	  String tel1= tel.substring(0, idx);
	  String tel2= tel.substring(4, 7);
	  String tel3= tel.substring(8);
	  
	  System.out.println("tel1 = "+ tel1);
	  System.out.println("tel2 = "+ tel2);
	  System.out.println("tel3 = "+ tel3);
	  
  }
}
