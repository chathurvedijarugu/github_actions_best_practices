package com.zemoso.patientservice.entity;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.vo.User;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PatientTest {
    @Autowired
    private ModelMapper modelMapper;
    @Test
    void testMapperToDto(){
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient = new Patient(1,"self","19","sks","M",user);
        PatientDto patientDto =modelMapper.map(patient,PatientDto.class);
        assertEquals(patient.getUserID(),patientDto.getUserID());
        assertEquals(patient.getAge(),patientDto.getAge());
        assertEquals(patient.getId(),patientDto.getId());
        assertEquals(patient.getName(),patientDto.getName());
        assertEquals(patient.getRelation(),patientDto.getRelation());
        assertEquals(patient.getGender(),patientDto.getGender());
    }
    @Test
    void testMapperToEntity(){
        User user = new User("1","Sohail","sks@gmail.com");
        PatientDto patientDto = new PatientDto(1,"self","19","sks","M",user);
        Patient patient =modelMapper.map(patientDto,Patient.class);
        assertEquals(patientDto.getUserID(),patient.getUserID());
        assertEquals(patientDto.getAge(),patient.getAge());
        assertEquals(patientDto.getId(),patient.getId());
        assertEquals(patientDto.getName(),patient.getName());
        assertEquals(patientDto.getRelation(),patient.getRelation());
        assertEquals(patientDto.getGender(),patient.getGender());

    }
}
