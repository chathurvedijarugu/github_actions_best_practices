package com.zemoso.patientservice.entity;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.Test;
public class PatientTest {
    @Test
    void patientConstructorTest(){
        Patient patient = new Patient();
        patient.setUserID(1);
        patient.setReleation("self");
        patient.setAge("12");
        patient.setName("sohail");
        patient.setId(1);
        patient.setGender("M");
        assertEquals(1,patient.getId());
        assertEquals(1,patient.getUserID());
        assertEquals("self",patient.getReleation());
        assertEquals("sohail",patient.getName());
        assertEquals("12",patient.getAge());
        assertEquals("M",patient.getGender());
        assertNotEquals("F",patient.getGender());
    }
}
