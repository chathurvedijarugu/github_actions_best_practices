package com.zemoso.appointments.controller;

import com.zemoso.appointments.dto.AppointmentDto;
import com.zemoso.appointments.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointements")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/")
    @ResponseBody
    public List<AppointmentDto> findAll(){
        return appointmentService.findAll();
    }
    @PostMapping("/")
    @ResponseBody
    public AppointmentDto saveAppointment(@RequestBody AppointmentDto appointmentDto){
        appointmentService.saveAppointment(appointmentDto);
        return appointmentDto;
    }
}

//hefjeifjjfbhwuedhdnwifk
//hudhuhfehf
