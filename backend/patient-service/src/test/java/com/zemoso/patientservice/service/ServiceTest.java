package com.zemoso.patientservice.service;

import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.repository.PatientRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Arrays;
import java.util.Optional;

import static org.mockito.Mockito.when;

@SpringBootTest
public class ServiceTest {
    @Autowired
    private PatientService patientService;
    @MockBean
    private PatientRepository patientRepository;

    @Test
    void getAllPatients(){

        Patient patient = new Patient();
        patient.setUserID(1);
        patient.setReleation("self");
        patient.setAge("12");
        patient.setName("sohail");
        patient.setId(1);
        patient.setGender("M");
        when(patientRepository.findAll()).thenReturn(Arrays.asList(patient));
        assertEquals(1,patientService.findAll().size());
    }

    @Test
    void getPatientById(){
        Patient patient1 = new Patient(1,"self","12","sohail","M",1);
        when(patientRepository.findById(1)).thenReturn(Optional.of(patient1));
        assertEquals(1,patientService.findById(1).getId());

    }
}
