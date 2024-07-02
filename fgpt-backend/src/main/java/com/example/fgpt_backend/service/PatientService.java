package com.example.fgpt_backend.service;

import com.example.fgpt_backend.dto.PatientDto;

import java.util.List;

public interface PatientService {
    PatientDto createPatient(PatientDto patientDto);

    PatientDto getPatientById(Long patientId);

    List<PatientDto> getAllPatients();

    PatientDto updatePatient(Long patientId, PatientDto updatedPatient);

    void deletePatient(Long patientId);
}
