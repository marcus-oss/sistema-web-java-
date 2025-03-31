package com.login.web;

import com.login.security.AutheticantionService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticantionController {
    @Autowired
    private final AutheticantionService autheticantionService;

    public AuthenticantionController(AutheticantionService autheticantionService) {
        this.autheticantionService = autheticantionService;
    }


    @PostMapping("authenticate")
    @Operation(summary = "endpoint para autenticação do usuario ")
    public String authenticate(Authentication authentication) {
        return autheticantionService.authenticate(authentication);
    }

}
