package com.zemoso.patientservice.service;
import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import org.springframework.stereotype.Service;

import java.util.List;
public interface PatientService {
    List<PatientDto> findAll();
    PatientDto findById(int pId);
    String save(PatientDto patient);
    PatientDto update(int id, PatientDto patient);
}
