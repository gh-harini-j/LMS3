package com.lti.loanapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.lti.loanapp.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> 
{

    User findByUsernameAndPassword(String username, String password);
    // Custom query methods can be defined here if needed
}
