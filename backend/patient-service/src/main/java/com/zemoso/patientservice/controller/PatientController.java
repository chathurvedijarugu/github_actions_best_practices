package com.zemoso.patientservice.controller;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.exception.PatientNotFoundException;
import com.zemoso.patientservice.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping("/")
    public List<PatientDto> findAll(){
        return patientService.findAll();
    }

    @GetMapping("/{patientId}")
    @ResponseBody
    public PatientDto findById(@PathVariable int patientId) {
        PatientDto patient = patientService.findById(patientId);
        if(patient==null){
            throw new PatientNotFoundException("No Patient with id: "+patientId);
        }
        return patient;
    }

    @PostMapping("/")
    @ResponseBody
    public PatientDto savePatient(@RequestBody PatientDto patient){
         return patientService.save(patient);
    }

    @PutMapping("/{patientId}")
    @ResponseBody
    public PatientDto updatePatient(@PathVariable int patientId,@RequestBody PatientDto patient){

        return patientService.update(patientId,patient);
    }

}
