package com.zemoso.patientservice.dto;

import com.zemoso.patientservice.vo.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TestPatientDto {

    @Test
    void testALlArgsConstructor(){
        User user = new User("1","Sohail","sks@gmail.com");

        PatientDto patientDto =new PatientDto(1,"self","15","sohail","M",user);
        assertEquals(patientDto.getUserID(),user);
    }
}
