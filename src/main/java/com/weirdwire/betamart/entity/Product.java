package com.weirdwire.betamart.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product {    
    @Id
    @Column(name = "name")
    @Size(max = 100)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "stock")
    private Integer stock;

    @Column(name = "category")
    @Size(max = 100)
    private String category;

    @Column(name = "price")
    private Integer price;

    @ManyToOne
    @JoinColumn(name = "user_name", referencedColumnName = "username")
    private Users user_name;
}
