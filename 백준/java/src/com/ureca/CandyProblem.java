package com.ureca;

import java.util.LinkedList;
import java.util.Queue;

public class CandyProblem {

	public static void main(String[] args) {
		Queue<Integer> q = new LinkedList<>();
//		for(int i=1; i<=20; i++) {
//			if(i > 1) {
//			q.offer(q.poll());
//			}
//			q.offer(i);
//		}
		
		int now=1;
		for(int i=1; i<=5; i++) {
			if(i>1) {
				now = q.remove();
				}
			if(i>1) {
				q.offer(now);
			}
			q.offer(i);
			System.out.println("i : "+i+" => "+q);
		}
		
		
	}

}

// [2,1,3]
