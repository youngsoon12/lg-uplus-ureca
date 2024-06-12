package com.ureca;

public class NameMenuM {
	//데이터에 대한 CRUD
	
	//데이터 저장소
	String names[] = new String[5];
	
	void create(String name) {
		for(int i=0; i<names.length; i++) {
			if(names[i] == null) {//빈곳 찾기
				names[i]=name;
				break;
			}
		}//for
	}//create
		
	
	String[] read() {
		return names;
	}
	void update(String oldName, String newName) {
		for(int i=0; i<names.length; i++) {
			if(names[i].equals(oldName)) { //
				
				names[i] = newName;
				break;
			} //if
		} // for
	} // update
	void delete(String delName) {
		for(int i =0; i<names.length; i++) {
			if(names[i].equals(delName)) { //삭제할 이름을 찾았다면
				// ==> String(문자열) 내용비교
				names[i] = null;
				break;
			}
		}
	}

}
