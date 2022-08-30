package com.zemoso.patientservice.controller;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
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
    public PatientDto findById(@PathVariable int patientId) {
        PatientDto patient = patientService.findById(patientId);
        if(patient==null){
            throw new PatientNotFoundException("No Patient with id: "+patientId);
        }
        return patient;
    }

    @PostMapping("/")
    public Patient savePatient(@RequestBody Patient patient){
         patientService.save(patient);
         return patient;
    }

    @PutMapping("/{patientId}")
    public PatientDto updatePatient(@PathVariable int patientId,@RequestBody Patient patient){
        PatientDto updatedPatient = patientService.update(patientId,patient);
        return updatedPatient;
    }

}
