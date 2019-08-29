package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyorAlreadyExistException;
import com.stackroute.surveyservice.exceptions.SurveyorDoesNotExistsException;
import com.stackroute.surveyservice.repository.SurveyorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyorServiceImpl implements SurveyorService {

    private SurveyorRepository surveyorRepository;

    @Autowired
    public SurveyorServiceImpl(SurveyorRepository surveyorRepository) {
        this.surveyorRepository = surveyorRepository;
    }

    @Override
    public Surveyor addSurveyor(Surveyor surveyor) throws SurveyorAlreadyExistException {
        Surveyor savedSurveyor=null;
        if(!surveyorRepository.findById(surveyor.getId()).isPresent()) {
            savedSurveyor = surveyorRepository.save(surveyor);

        }
        return savedSurveyor;
    }

    @Override
    public Surveyor editSurveyor(Surveyor surveyor)  throws SurveyorDoesNotExistsException {
        Optional<Surveyor> existingQuestion = surveyorRepository.findById(surveyor.getId());

        Surveyor updatedSurveyor = null;

        if (existingQuestion.isPresent()) {

            updatedSurveyor = surveyorRepository.save(surveyor);
        }

        return updatedSurveyor;
    }

    @Override
    public Surveyor removeSurveyor(String surveyorId) throws SurveyorDoesNotExistsException {
        surveyorRepository.deleteById(surveyorId);
        return null;
    }

    @Override
    public List<Surveyor> getAllSurveyors() {

        return (List<Surveyor>) surveyorRepository.findAll();
    }

    @Override
    public Surveyor getSurveyorById(Integer surveyorId) throws SurveyorDoesNotExistsException {
        return null;
    }
}