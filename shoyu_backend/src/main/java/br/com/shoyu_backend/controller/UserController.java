package br.com.shoyu_backend.controller;

import br.com.shoyu_backend.model.entities.User;
import br.com.shoyu_backend.model.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> listUsers(){
        return userService.listUsers();
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<User> userPorId(@PathVariable long id){
        User user = userService.userPorId(id);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }
}
