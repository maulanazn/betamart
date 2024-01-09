package com.weirdwire.betamart.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;
import com.weirdwire.betamart.web.request.LoginRequest;
import com.weirdwire.betamart.web.request.RegisterRequest;

@Service
public class UserService {
    public String createUser(@ModelAttribute RegisterRequest registerRequest) {
        return new StringBuffer().append("Success create user")
            .append(registerRequest.getUsername())
            .append(registerRequest.getPassword())
            .toString();
    };

    public String verifyUser(@ModelAttribute LoginRequest loginRequest) {
        return new StringBuffer().append("Success verify user")
            .append(loginRequest.getUsername())
            .append(loginRequest.getPassword())
            .toString();
    };
}
