package com.ureca;

import java.util.*;
public class Main {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        String result;
        if(a == b) {
        	result = "==";
        }else {
        	result = (a>b) ? ">" : "<";
        }
        System.out.println(result);
    }
}