package com.example.fgpt_backend.service.impl;

import com.example.fgpt_backend.dto.PatientDto;
import com.example.fgpt_backend.entity.Patient;
import com.example.fgpt_backend.exception.ResourceNotFoundException;
import com.example.fgpt_backend.mapper.PatientMapper;
import com.example.fgpt_backend.repository.PatientRepository;
import com.example.fgpt_backend.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PatientServiceImpl implements PatientService {

    private PatientRepository patientRepository;

    @Override
    public PatientDto createPatient(PatientDto patientDto) {

        Patient patient = PatientMapper.mapToPatient(patientDto);
        Patient savedPatient = patientRepository.save(patient);

        return PatientMapper.mapToPatientDto(savedPatient);
    }

    @Override
    public PatientDto getPatientById(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));
        return PatientMapper.mapToPatientDto(patient);
    }

    @Override
    public List<PatientDto> getAllPatients() {

        List<Patient> patients = patientRepository.findAll();
        return patients.stream().map((patient) -> PatientMapper.mapToPatientDto(patient))
                .collect(Collectors.toList());
    }

    @Override
    public PatientDto updatePatient(Long patientId, PatientDto updatedPatient) {
        Patient patient = patientRepository.findById(patientId).orElseThrow(
                () -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));

        patient.setDisease(updatedPatient.getDisease());
        patient.setRange(updatedPatient.getRange());
        patient.setAddinfo(updatedPatient.getAddinfo());

        Patient updatedPatientObj = patientRepository.save(patient);
        return PatientMapper.mapToPatientDto(updatedPatientObj);
    }

    @Override
    public void deletePatient(Long patientId) {
//        Patient patient = patientRepository.findById(patientId).orElseThrow(
//                () -> new ResourceNotFoundException("Patient does not exists with given Id: " + patientId));
        patientRepository.deleteById(patientId);
    }
}
