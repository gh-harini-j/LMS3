package com.lti.loanapp.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "emi_payment")
public class EMIPayment {

    public enum EMIStatus {
        PENDING,
        PAID,
        LATE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "loan_id")
    private Loan loan;

    private LocalDate dueDate;

    private LocalDate paidDate;

    private double emiAmount;

    @Enumerated(EnumType.STRING)
    private EMIStatus emiStatus;
}
