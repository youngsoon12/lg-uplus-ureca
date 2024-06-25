package day0625;

import java.util.Arrays;

public class BinarySearchTest {
	
	private static int[] values= {3,11,15,20,21,29,45,59,65,72};
	
	public static void main(String[] args) {
		
		System.out.println(Arrays.binarySearch(values, 20));
		
	}//main
	
	//반복문
	private static int binarySearch1(int key) { // key: 찾고자 하는 값
		int start = 0, end = values.length-1, mid=0;
		// ==> 시작인덱스, 끝인덱스, 중앙인덱스
		
		while(start<=end) { //검색할수 있는 조건
			mid=(start+end)/2;
			
			if(values[mid]==key) { //key값을 찾았다면 종료
				return mid; //찾은 인덱스 return
			}
			else if(values[mid]< key) // start 증가 (찾고자 하는 값이 mid보다 컸을때)
				start = mid+1;
			else end = mid-1;
	}
		return -1;
}
	
	//재귀호출
	private static int binarySearch2(int key, int start, int end) {
		if(start <= end) {
			int mid = (start+end)/2;
			if(values[mid] == key)return mid;
			else if(values[mid]<key) return binarySearch2(key,mid+1,end);// start증가 (찾고자 하는 값이 mid보다 컸을 때)
			else 
			 return binarySearch2(key,start,mid-1);
		}
		
		return -1;
	}
}
