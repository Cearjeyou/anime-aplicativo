package com.anime.backend.service.user;

import com.anime.backend.model.User;

public interface UserService {
    User create(User user);
    User login(User user);
}
