package com.weirdwire.betamart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.weirdwire.betamart.service.UserService;
import com.weirdwire.betamart.web.request.LoginRequest;
import com.weirdwire.betamart.web.request.RegisterRequest;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String register(RegisterRequest registerRequest) {
        return userService.createUser(registerRequest);
    }

    @PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String login(LoginRequest loginRequest) {
        return userService.verifyUser(loginRequest);
    }
}
