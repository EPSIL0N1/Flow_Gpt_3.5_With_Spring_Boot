package com.example.fgpt_backend.mapper;

import com.example.fgpt_backend.dto.PatientDto;
import com.example.fgpt_backend.entity.Patient;

public class PatientMapper {

    public static PatientDto mapToPatientDto(Patient patient)
    {
        return new PatientDto(
                patient.getId(),
                patient.getDisease(),
                patient.getRange(),
                patient.getAddinfo()
        );
    }

    public static Patient mapToPatient(PatientDto patientDto)
    {
        return new Patient(
                patientDto.getId(),
                patientDto.getDisease(),
                patientDto.getRange(),
                patientDto.getAddinfo()
        );
    }

}
