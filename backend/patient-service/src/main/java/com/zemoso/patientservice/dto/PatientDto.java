package com.zemoso.patientservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class PatientDto {
    private int id;
    private String releation;
    private String age;
    private String name;
    private String gender;
    private int userID;

    public PatientDto() {
    }

    public PatientDto(int id, String releation, String age, String name, String gender, int userID) {
        this.id = id;
        this.releation = releation;
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.userID = userID;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReleation() {
        return releation;
    }

    public void setReleation(String releation) {
        this.releation = releation;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }
}
