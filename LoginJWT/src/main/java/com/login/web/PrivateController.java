package com.login.web;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("private")
public class PrivateController {
    @GetMapping
    @Operation(summary = "endpoint para rota privada da api")
    public String getMessage() {
        return "Bem vindo a API Privada!!!";
    }

}
