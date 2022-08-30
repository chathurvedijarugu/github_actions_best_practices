package com.zemoso.patientservice.service;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.exception.PatientNotFoundException;
import com.zemoso.patientservice.mapper.PatientsMapper;
import com.zemoso.patientservice.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {
    @Autowired
     PatientRepository patientRepository;
    @Autowired
     PatientsMapper patientsMapper;

//    public PatientServiceImpl(PatientRepository patientRepository, PatientsMapper patientsMapper) {
//        this.patientRepository = patientRepository;
//        this.patientsMapper = patientsMapper;
//    }


    @Override
    public List<PatientDto> findAll() {

        return getPatientsDtoList(patientRepository.findAll());
    }



    @Override
    public PatientDto findById(int pId) {
        Optional<Patient> result = patientRepository.findById((pId));
        if(!result.isPresent()){
            throw new PatientNotFoundException("Not Patient Found");
        }
            return patientsMapper.PateintToPatientDto(result.get());
    }

    @Override
    public void save(Patient patient) {
        patientRepository.save(patient);
    }

    @Override
    public PatientDto update(int id, Patient patient) {
        Optional<Patient> updatedPatient = patientRepository.findById(id);
        Patient newPatient = null;
        if (updatedPatient.isPresent()) {
            newPatient = updatedPatient.get();
            newPatient.setReleation(patient.getReleation());
            newPatient.setName(patient.getName());
            newPatient.setGender(patient.getGender());
            newPatient.setUserID(patient.getUserID());

            patientRepository.save(newPatient);
        } else {
            throw new PatientNotFoundException("Did not find patient id - " + id);
        }
        return patientsMapper.PateintToPatientDto(newPatient);
    }
    private List<PatientDto> getPatientsDtoList(List<Patient> all) {
        List<PatientDto> patientsList = new ArrayList<>();
        for(Patient patient : all){
            patientsList.add(patientsMapper.PateintToPatientDto(patient));
        }
        return patientsList;
    }

}
