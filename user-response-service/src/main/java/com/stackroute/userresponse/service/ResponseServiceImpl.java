package com.stackroute.userresponse.service;

import com.stackroute.userresponse.domain.Response;
import com.stackroute.userresponse.repository.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseServiceImpl implements ResponseService {

    private ResponseRepository responseRepository;

    @Autowired
    public ResponseServiceImpl(ResponseRepository responseRepository){
        this.responseRepository=responseRepository;
    }


    @Override
    public Response saveResponse(Response response) {
        Response savedResponse=responseRepository.save(response);
        System.out.println(savedResponse);
        return savedResponse;
    }

    @Override
    public List<Response> getAllResponses() {
        return responseRepository.findAll();
    }

    @Override
    public Response getResponseById(String question_id) {
        return responseRepository.save(getResponseById(question_id));
    }
}
