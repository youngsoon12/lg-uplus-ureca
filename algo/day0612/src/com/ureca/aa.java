package com.ureca;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class aa {

	public static void main(String args[]) {
		  String[] strArray = { "10", "20", "30", "40", "50", "60", "70" };

		  System.out.println("2번째 인덱스의 요소 삭제 전: " + Arrays.toString(strArray));

		  List<String> strList = new ArrayList<>(Arrays.asList(strArray));
		  strList.remove(2);
		  strList.remove(2);
		  strArray = strList.toArray(new String[0]);

		  System.out.println("2번째 인덱스의 요소 삭제 후: " + Arrays.toString(strArray));
	}

}
