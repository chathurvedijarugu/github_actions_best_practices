package com.zemoso.patientservice.entity;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import com.zemoso.patientservice.VO.User;
import org.junit.jupiter.api.Test;
public class PatientTest {
    @Test
    void patientConstructorTest(){
        Patient patient = new Patient();
        User user = new User("1","Sohail","sks@gmail.com");

        patient.setUserID(user);
        patient.setRelation("self");
        patient.setAge("12");
        patient.setName("sohail");
        patient.setId(1);
        patient.setGender("M");
        assertEquals(1,patient.getId());
        assertEquals("self",patient.getRelation());
        assertEquals("sohail",patient.getName());
        assertEquals("12",patient.getAge());
        assertEquals("M",patient.getGender());
        assertNotEquals("F",patient.getGender());
    }
}
