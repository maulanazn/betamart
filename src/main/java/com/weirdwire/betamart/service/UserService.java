package com.weirdwire.betamart.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.weirdwire.betamart.entity.Users;
import com.weirdwire.betamart.repository.UserRepository;
import com.weirdwire.betamart.security.BcryptHash;
import com.weirdwire.betamart.web.request.LoginRequest;
import com.weirdwire.betamart.web.request.RegisterRequest;

import jakarta.transaction.Transactional;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private Validator validator;

    @Transactional
    public void createUser(RegisterRequest registerRequest) {
        Set<ConstraintViolation<RegisterRequest>> constraintViolations = validator.validate(registerRequest);
        if (constraintViolations.size() != 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, constraintViolations.toString());
        }

        if (userRepository.existsById(registerRequest.getUsername())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already taking");
        }

        Users users = new Users();
        users.setUsername(registerRequest.getUsername());
        users.setPassword(BcryptHash.hashpw(registerRequest.getPassword(), BcryptHash.gensalt()));

        userRepository.save(users);
    };

    public void verifyUser(LoginRequest loginRequest) {
        
    };
}
