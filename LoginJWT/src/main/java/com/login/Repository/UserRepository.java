package com.login.Repository;


import com.login.Model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/***
 * interface de  repositorio do usuario
 * */

public interface UserRepository extends CrudRepository<User, String> {
    Optional<User> findByUsername(String username);
}