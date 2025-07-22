package com.lti.loanapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "penalty")
public class Penalty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // This is the "owner" side of the OneToOne relationship.
    // The foreign key 'emi_id' will be in this table.
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "emi_id", nullable = false, unique = true)
    private EMIPayment emiPayment; // Name must match 'mappedBy' in EMIPayment

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal penaltyAmount;
}