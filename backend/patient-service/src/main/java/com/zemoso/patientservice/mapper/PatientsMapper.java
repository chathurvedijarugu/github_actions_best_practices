package com.zemoso.labs.mapper;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import org.mapstruct.Mapper;
@Mapper(componentModel = "spring")
public interface PatientsMapper {
PatientDto patientToPatientDto(Patient patient);
Patient patientDtoToPatient(PatientDto patientDto);
}