package com.zemoso.patientservice;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;

@SpringBootTest
class PatientServiceApplicationTests {
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}
	@Test
	void contextLoads() {
	}

}
