package com.lti.loanapp.service;

import java.util.Map;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.lti.loanapp.entity.User;
import com.lti.loanapp.repository.UserRepository;

@Service
public class AuthService 
{
    // method for registering a new user
    @Autowired 
    private UserRepository userRepository;

    public ResponseEntity<Map<String, Object>> registerUser(User user)
    {
        // Logic for registering a user
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(Map.of("user", savedUser, "message", "User registered successfully"));
    }

    public ResponseEntity<Map<String, Object>> loginUser(String username, String password)
    {
        // Logic for user login
        User user = userRepository.findByUsernameAndPassword(username, password);
        if (user != null) {
            return ResponseEntity.ok(Map.of("user", user, "message", "Login successful"));
        } 
        else 
        {
            return ResponseEntity.status(Response.SC_UNAUTHORIZED).body(Map.of("message", "Invalid credentials"));
        }
    }

}

// other imports
