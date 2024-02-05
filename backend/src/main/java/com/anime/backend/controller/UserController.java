package com.anime.backend.controller;

import com.anime.backend.model.User;
import com.anime.backend.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
@CrossOrigin(origins = {"*"})
public class UserController {
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> create(@RequestBody User user) {
        return ResponseEntity.ok(userService.create(user));
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        User userSearch = userService.login(user);
        if (userSearch != null) {
            return ResponseEntity.ok(userSearch);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
