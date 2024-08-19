package com.ureca;
import java.util.Queue;

import java.util.LinkedList;

public class Que {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Queue<String> que = new LinkedList<>();
		que.add("af");
		que.add("Bf");
		que.add("cf");
		que.add("df");
		que.add("ef");
		que.add("ff");
		que.add("gf");
		que.add(" ");
		que.add("hf");
		System.out.println(que.isEmpty());
	}

}
