package com.weirdwire.betamart.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.weirdwire.betamart.entity.Users;

public interface UserRepository extends JpaRepository<Users, String> {
    Optional<Users> findByUsername(String username);
}
