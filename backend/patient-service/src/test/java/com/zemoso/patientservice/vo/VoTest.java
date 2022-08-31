package com.zemoso.patientservice.vo;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class VoTest {
    @Test
    void testVoUser(){
        User user = new User();
        user.setId("1");
        user.setUserName("sohail");
        user.setEmailId("sks@gmail.com");
        assertEquals("1",user.getId());
        assertEquals("sohail",user.getUserName());
        assertEquals("sks@gmail.com",user.getEmailId());

    }
}
