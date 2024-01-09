package com.weirdwire.betamart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.weirdwire.betamart.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAllByStockOrPrice(Integer stock, Integer price);
}
