package com.example.fgpt_backend.controller;

import com.example.fgpt_backend.dto.PatientDto;
import com.example.fgpt_backend.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/patients")
public class PatientController {

    private PatientService patientService;

    // Create Patient
    @PostMapping
    public ResponseEntity<PatientDto> createPatient(@RequestBody PatientDto patientDto)
    {
        PatientDto savedPatient = patientService.createPatient(patientDto);
        return new ResponseEntity<>(savedPatient, HttpStatus.CREATED);
    }

    // Get Patient By Id
    @GetMapping("{id}")
    public ResponseEntity<PatientDto> getPatientById(@PathVariable("id") Long patientId)
    {
        PatientDto patientDto = patientService.getPatientById(patientId);
        return ResponseEntity.ok(patientDto);
    }

    // Get All Patients
    @GetMapping
    public ResponseEntity<?> getAllPatients()
    {
        List<PatientDto> patients = patientService.getAllPatients();
        return ResponseEntity.ok(patients);
    }

    // Edit By ID
    @PutMapping("{id}")
    public ResponseEntity<PatientDto> updatePatient(@PathVariable("id") Long patientId, @RequestBody PatientDto updatedPatient)
    {
        PatientDto patientDto = patientService.updatePatient(patientId, updatedPatient);
        return ResponseEntity.ok(patientDto);
    }

    // Delete By Id
    @DeleteMapping("{id}")
    public ResponseEntity<?> deletePatient(@PathVariable("id") Long patientId)
    {
        patientService.deletePatient(patientId);
        return ResponseEntity.ok("Employee Deleted Successfully");
    }
}
