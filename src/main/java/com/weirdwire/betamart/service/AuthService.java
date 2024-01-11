package com.weirdwire.betamart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weirdwire.betamart.repository.UserRepository;
import com.weirdwire.betamart.web.request.LoginRequest;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public TokenResponse login(LoginRequest loginRequest) {
        
    }
}
