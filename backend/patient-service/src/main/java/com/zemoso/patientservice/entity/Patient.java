package com.zemoso.patientservice.entity;
import lombok.*;
import javax.persistence.*;

@Entity

@Table(name = "patients", schema = "public")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="relation")
    private String releation;

    @Column(name = "age")
    private String age;

    @Column(name = "name")
    private String name;

    @Column(name = "gender")
    private String gender;

    @Column(name="users_id")
    private int userID;

    public Patient() {
    }

    public Patient(int id, String releation, String age, String name, String gender, int userID) {
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
