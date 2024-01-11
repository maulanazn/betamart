package com.weirdwire.betamart.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
public class Users {    
    @Id
    @Column(name = "username")
    @Size(max = 100)
    private String username;

    @Column(name = "password")
    @Size(max = 100)
    private String password;

    @OneToMany(mappedBy = "user_name")
    private List<Product> product;
}
