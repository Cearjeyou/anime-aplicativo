package com.anime.backend.service.user.impl;

import com.anime.backend.model.User;
import com.anime.backend.repository.UserRepository;
import com.anime.backend.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    @Override
    public User create(User user) {
        return userRepository.save(user);
    }

    @Override
    public User login(User user) {
        Optional<User> userSearch = userRepository.findByName(user.getName());
        if (userSearch.isEmpty()) {
            return null;
        } else if (userSearch.get().getPassword().equals(user.getPassword())){
            return userSearch.get();
        }
        return null;
    }
}
