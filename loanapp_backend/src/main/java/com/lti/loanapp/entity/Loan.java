package com.lti.loanapp.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "loans")
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // customer

    private String loanType;

    private double amount;

    private int tenure;

    private String status; // PENDING, APPROVED, REJECTED

    @ManyToOne
    @JoinColumn(name = "assigned_officer_id")
    private User assignedOfficer;

    @OneToMany(mappedBy = "loan", cascade = CascadeType.ALL)
    private List<EMIPayment> emiPayments;
}
