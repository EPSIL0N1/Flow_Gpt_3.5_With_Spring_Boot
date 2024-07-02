package com.example.fgpt_backend.repository;

import com.example.fgpt_backend.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}
