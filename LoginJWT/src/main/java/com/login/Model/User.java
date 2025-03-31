package com.login.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

/***
 *classe para tabela no banco de dados H2
 */


@Table("USERS")
public class User {
    @Id
    private String username;
    private String password;
    private String cpf;
    private String email;


    //get and setter
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
