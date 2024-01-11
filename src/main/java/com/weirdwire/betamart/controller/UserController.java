package com.weirdwire.betamart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.weirdwire.betamart.service.UserService;
import com.weirdwire.betamart.web.request.LoginRequest;
import com.weirdwire.betamart.web.request.RegisterRequest;
import com.weirdwire.betamart.web.response.WebResponse;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/api/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public WebResponse<String> register(@RequestBody RegisterRequest registerRequest) {
        userService.createUser(registerRequest);

        return WebResponse.<String>builder().data("Register Success").build();
    }

    @PostMapping(path = "/api/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void login(@RequestBody LoginRequest loginRequest) {
        userService.verifyUser(loginRequest);
    }
}
