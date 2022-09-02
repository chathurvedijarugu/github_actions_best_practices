package com.zemoso.appointments.testcontroller;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
//import com.zemoso.appointments.vo.Lab;
//import com.zemoso.appointments.vo.Patient;
//import com.zemoso.appointments.vo.User;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import com.zemoso.appointments.dto.AppointmentDto;
import com.zemoso.appointments.entity.Appointment;
import com.zemoso.appointments.service.AppointmentService;
import com.zemoso.appointments.vo.Lab;
import com.zemoso.appointments.vo.Patient;
import com.zemoso.appointments.vo.User;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
class TestingControllers {
        @Autowired
        private MockMvc mvc;

        @MockBean
        AppointmentService appointmentService;

        @Autowired
        ModelMapper modelMapper;
    protected String mapToJson(Object obj) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(obj);
    }
        protected <T> T mapFromJson(String json, Class<T> clazz)
                throws JsonParseException, JsonMappingException, IOException {

            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(json, clazz);
        }

        @Test
        void testFindAll() throws Exception{
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient = new Patient(1,"self","12","sohail","M",user);
        Lab lab = new Lab(1, "Los Altos Center Lab", "Lab icon", null, "$1200", "4.3", 4);
        Appointment appointment = new Appointment(1,"January","24","06:00am - 07:00am",user,lab,patient);
        List<AppointmentDto> appointmentDtoList = new ArrayList<>();
        appointmentDtoList.add(modelMapper.map(appointment,AppointmentDto.class));
        when(appointmentService.findAll()).thenReturn(appointmentDtoList);
        String url = "/appointements/";
        MvcResult mvcResult =  mvc.perform(get(url)).andReturn();
        String content = mvcResult.getResponse().getContentAsString();
        AppointmentDto[] appointmentDtos =mapFromJson(content, AppointmentDto[].class);
        assertTrue(appointmentDtos.length>0);
        }

        @Test
    void testPostAppointment() throws Exception{
            User user = new User("1","Sohail","sks@gmail.com");
            Patient patient = new Patient(1,"self","12","sohail","M",user);
            Lab lab = new Lab(1, "Los Altos Center Lab", "Lab icon", null, "$1200", "4.3", 4);
            Appointment appointment = new Appointment(1,"January","24","06:00am - 07:00am",user,lab,patient);
            AppointmentDto appointmentDto = modelMapper.map(appointment,AppointmentDto.class);
            String inputJson = mapToJson(patient);
            Mockito.when(appointmentService.saveAppointment(appointmentDto)).thenReturn(appointmentDto);
            String uri = "/appointements/";
            MvcResult mvcResult = mvc.perform(post(uri).contentType(MediaType.APPLICATION_JSON_VALUE)
                    .content(inputJson)).andReturn();
            assertEquals(200,mvcResult.getResponse().getStatus());
        }



    }
