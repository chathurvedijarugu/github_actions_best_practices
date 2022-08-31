package com.zemoso.patientservice.service;

import com.zemoso.patientservice.VO.User;
import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.exception.PatientNotFoundException;
import com.zemoso.patientservice.exception.ResourceNotFound;
import com.zemoso.patientservice.repository.PatientRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@SpringBootTest
public class ServiceTest {
    @Autowired
    private PatientService patientService;
    @MockBean
    private PatientRepository patientRepository;

    private ModelMapper modelMapper;
    @Test
    void getAllPatients(){

        Patient patient = new Patient();
        User user = new User("1","Sohail","sks@gmail.com");
        patient.setUserID(user);
        patient.setRelation("self");
        patient.setAge("12");
        patient.setName("sohail");
        patient.setId(1);
        patient.setGender("M");

        Mockito.when(patientRepository.findAll()).thenReturn(Arrays.asList(patient));
        System.out.println(patientRepository.findAll());
        assertEquals(1,patientService.findAll().size());
    }

    @Test
    void getPatientById(){
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient1 = new Patient(1,"self","12","sohail","M",user);
        when(patientRepository.findById(1)).thenReturn(Optional.of(patient1));
        System.out.println(patientRepository.findById(1).get().getId());
        assertEquals(1,patientRepository.findById(1).get().getId());
    }
    @Test
    void patientException(){
        Exception exception =assertThrows(PatientNotFoundException.class,()->{
            patientService.findById(5);
        });
        String expectedMsg="No Patient Found";
        String actualMsg = exception.getMessage();
        assertEquals(expectedMsg,actualMsg);
    }

}
