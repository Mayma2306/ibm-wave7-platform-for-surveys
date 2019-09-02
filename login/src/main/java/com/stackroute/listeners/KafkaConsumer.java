package com.stackroute.listeners;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.dao.UserDao;
import com.stackroute.model.DAOUser;
import com.stackroute.model.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class KafkaConsumer {

    @Autowired
    UserDao userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;



    @KafkaListener(topics = "KafkaExample", groupId = "group_json", containerFactory = "userKafkaListenerFactory")
    public void consumeJson(UserDTO user)
    {
        System.out.println("Consumed JSON Message: " + user);
    }

    @KafkaListener(topics = "UserRegistration", groupId = "group_id")
    public void consume(String daoUser) throws IOException {
        DAOUser obj = new ObjectMapper().readValue(daoUser, DAOUser.class);
        obj.setPassword(bcryptEncoder.encode(obj.getPassword()));
        userDao.save(obj);
    }

}
