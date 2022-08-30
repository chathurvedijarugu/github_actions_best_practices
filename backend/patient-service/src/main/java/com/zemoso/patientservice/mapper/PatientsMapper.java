package com.zemoso.patientservice.mapper;
import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
//@Component
public interface PatientsMapper {
    PatientDto PateintToPatientDto(Patient patient);
    Patient PatientDtoPatient(PatientDto patientDto);
}
