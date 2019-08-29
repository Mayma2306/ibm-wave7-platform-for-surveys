package com.stackroute.surveyservice.service;

import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyorAlreadyExistException;
import com.stackroute.surveyservice.exceptions.SurveyorDoesNotExistsException;

import java.util.List;

public interface SurveyorService {
    Surveyor addSurveyor(Surveyor question) throws SurveyorAlreadyExistException;
    Surveyor editSurveyor(Surveyor question) throws SurveyorDoesNotExistsException;
    Surveyor removeSurveyor(String surveyorId) throws SurveyorDoesNotExistsException;
    List<Surveyor> getAllSurveyors() ;
    Surveyor getSurveyorById(Integer surveyorId) throws SurveyorDoesNotExistsException;

}