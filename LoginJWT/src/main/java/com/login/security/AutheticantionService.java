package com.login.security;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;


/**
 * classe configuraçao do Token
 */

@Service
public class AutheticantionService {

    private JwtServices jwtService;

    public AutheticantionService(JwtServices jwtService) {
        this.jwtService = jwtService;
    }

    public String authenticate(Authentication authentication) {
        return jwtService.generateToken(authentication);
    }
}
